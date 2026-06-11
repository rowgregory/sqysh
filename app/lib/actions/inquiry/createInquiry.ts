"use server";

import prisma from "@/prisma/client";
import { Resend } from "resend";
import {
  inquiryConfirmationHtml,
  inquiryNotificationHtml,
} from "../../email-templates/inquiry";
import { EMAIL_RE } from "../../regex";

const resend = new Resend(process.env.RESEND_API_KEY);

type CreateInquiryInput = {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
};

type CreateInquiryResult =
  | { success: true; data: { id: string } }
  | { success: false; error: string };

export async function createInquiry(
  input: CreateInquiryInput,
): Promise<CreateInquiryResult> {
  try {
    // ── Validate ──
    const name = input.name?.trim().slice(0, 120) ?? "";
    const email = input.email?.trim().toLowerCase().slice(0, 254) ?? "";
    const message = input.message?.trim().slice(0, 10_000) ?? "";
    const company = input.company?.trim().slice(0, 160) || undefined;
    const phone = input.phone?.trim().slice(0, 30) || undefined;

    if (!name) return { success: false, error: "Name is required" };
    if (!EMAIL_RE.test(email)) {
      return { success: false, error: "That email looks off" };
    }
    if (!message) return { success: false, error: "Tell us about the project" };

    // ── Persist — this is the source of truth ──
    const inquiry = await prisma.inquiry.create({
      data: { name, email, message, company, phone },
    });

    try {
      await Promise.allSettled([
        resend.emails.send({
          from: "Sqysh <inquiries@sqysh.io>",
          to: "sqysh@sqysh.io",
          replyTo: email,
          subject: `New inquiry — ${name}${company ? ` (${company})` : ""}`,
          html: inquiryNotificationHtml({
            id: inquiry.id,
            name,
            email,
            message,
            company,
          }),
          text: `${name} (${company ?? "—"}) <${email}>\n\n${message}`,
        }),
        resend.emails.send({
          from: "Sqysh <inquiries@sqysh.io>",
          to: email,
          subject: "got it — sqysh received your inquiry",
          html: inquiryConfirmationHtml({ name }),
          text: `got it, ${name}! your inquiry is in the queue — expect a reply within one business day.`,
        }),
      ]);
    } catch (emailError) {
      console.error("[createInquiry] email send failed", emailError);
    }

    return { success: true, data: { id: inquiry.id } };
  } catch (error) {
    console.error("[createInquiry]", error);
    return { success: false, error: "Something went wrong — try again?" };
  }
}
