import "server-only";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://sqysh.io";

type Args = {
  to: string;
  orderId: string;
  trackingNumber?: string | null;
  trackingUrl?: string | null;
  carrier?: string | null;
};

export async function sendShippingNotification(
  args: Args,
): Promise<{ success: boolean; error?: string }> {
  const { to, orderId, trackingNumber, trackingUrl, carrier } = args;

  const trackButton = trackingUrl
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0 0;">
         <tr><td align="center">
           <a href="${trackingUrl}" style="display:inline-block;background:#a6ff4d;color:#0f1115;font-family:'Courier New',monospace;font-size:14px;font-weight:bold;text-decoration:none;padding:14px 28px;border-radius:12px;">
             track your package →
           </a>
         </td></tr>
       </table>`
    : "";

  const trackingMeta = trackingNumber
    ? `<div style="font-family:'Courier New',monospace;color:#8a8a98;font-size:11px;letter-spacing:0.05em;margin:8px 0 0;">
         ${carrier ? carrier + " · " : ""}${trackingNumber}
       </div>`
    : "";

  const html = `
  <div style="background:#0f1115;padding:40px 16px;">
    <!--[if mso]><table role="presentation" width="480" align="center"><tr><td><![endif]-->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:480px;margin:0 auto;">
      <tr><td align="center" style="text-align:center;font-family:Arial,Helvetica,sans-serif;">

        <div style="font-family:'Courier New',monospace;color:#37e1c2;font-size:13px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 16px;">
          ✓ shipped
        </div>

        <img src="${baseUrl}/gif/sqysh-mascot.gif" width="84" height="84"
             alt="Sqysh" style="display:block;margin:0 auto 16px;border:0;outline:none;" />

        <div style="display:inline-block;background:#16161e;border:1px solid #23232e;border-radius:14px;padding:10px 22px;margin:0 0 24px;">
          <span style="font-family:'Courier New',monospace;color:#37e1c2;font-size:14px;white-space:nowrap;">on its way.</span>
        </div>

        <div style="color:#8a8a98;font-size:14px;line-height:1.5;margin:0 0 4px;">
          Your order just shipped — it's headed your way.
        </div>
        <div style="font-family:'Courier New',monospace;color:#5a5a68;font-size:11px;margin:0 0 0;">
          # ${orderId.slice(-10)}
        </div>

        ${trackingMeta}
        ${trackButton}

        <div style="color:#8a8a98;font-size:13px;line-height:1.5;margin:28px 0 0;">
          Questions? Just reply to this email.
        </div>

        <div style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#5a5a68;margin:28px 0 0;">
          Sqysh · Swampscott, MA<br/>
          <a href="${baseUrl}" style="color:#7b5cff;text-decoration:none;">sqysh.io</a>
        </div>

      </td></tr>
    </table>
    <!--[if mso]></td></tr></table><![endif]-->
  </div>`;

  try {
    const { error } = await resend.emails.send({
      from: "Sqysh <orders@sqysh.io>",
      to,
      subject: "Your Sqysh order is on its way",
      html,
    });
    if (error) return { success: false, error: String(error) };
    return { success: true };
  } catch (e) {
    return {
      success: false,
      error: e instanceof Error ? e.message : "unknown",
    };
  }
}
