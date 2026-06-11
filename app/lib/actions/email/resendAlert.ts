import "server-only";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function resendAlert(a: {
  sessionId: string;
  email: string;
  amount: number;
  reason: string;
}) {
  await resend.emails.send({
    from: "Sqysh Alerts <alerts@sqysh.io>",
    to: "sqysh@sqysh.io", // ← you
    subject: "⚠️ Sqysh order paid but FULFILLMENT FAILED",
    html: `
      <div style="font-family:monospace;font-size:14px;color:#111;">
        <p><strong>A customer paid but the Printful order didn't go through.</strong></p>
        <p>Session: ${a.sessionId}<br/>
        Customer: ${a.email}<br/>
        Amount: $${(a.amount / 100).toFixed(2)}<br/>
        Reason: ${a.reason}</p>
        <p>Fix it manually in Printful, then mark the order SUBMITTED.</p>
      </div>`,
  });
}
