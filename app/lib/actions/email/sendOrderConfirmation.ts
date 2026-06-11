import "server-only";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

type ConfirmationItem = {
  productName: string;
  colorway: string | null;
  size: string | null;
  image: string | null;
  quantity: number;
  unitAmount: number; // cents
};

type Args = {
  to: string;
  orderId: string; // stripe session id or your order id
  items: ConfirmationItem[];
  amountTotal: number; // cents
  currency: string;
};

export async function sendOrderConfirmation(
  args: Args,
): Promise<{ success: boolean; error?: string }> {
  const { to, orderId, items, amountTotal, currency } = args;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://sqysh.io";

  const fmt = (cents: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(cents / 100);

  const rows = items
    .map((i) => {
      const meta = [i.colorway, i.size].filter(Boolean).join(" · ") || "—";
      const lineTotal = fmt(i.unitAmount * i.quantity);
      const thumb = i.image
        ? `<img src="${i.image}" width="48" height="48" style="display:block;border:1px solid #23232e;border-radius:8px;background:#0f1115;" alt="${i.productName}" />`
        : `<div style="width:48px;height:48px;background:#0f1115;border:1px solid #23232e;border-radius:8px;"></div>`;
      return `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 10px;">
        <tr><td style="background:#16161e;border:1px solid #23232e;border-radius:12px;padding:14px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td width="48" style="width:48px;vertical-align:middle;">${thumb}</td>
              <td style="vertical-align:middle;text-align:left;padding-left:14px;">
                <div style="font-family:'Courier New',monospace;color:#e8e8ef;font-size:13px;">${i.productName}</div>
                <div style="font-family:'Courier New',monospace;color:#8a8a98;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;margin-top:3px;">${meta} · qty ${i.quantity}</div>
              </td>
              <td align="right" style="vertical-align:middle;text-align:right;font-family:'Courier New',monospace;color:#a6ff4d;font-size:14px;white-space:nowrap;padding-left:8px;">${lineTotal}</td>
            </tr>
          </table>
        </td></tr>
      </table>`;
    })
    .join("");

  const html = `
<div style="background:#0f1115;padding:40px 16px;">
  <!--[if mso]><table role="presentation" width="480" align="center"><tr><td><![endif]-->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:480px;margin:0 auto;">
    <tr><td align="center" style="text-align:center;font-family:Arial,Helvetica,sans-serif;">

      <!-- ✓ PAID -->
      <div style="font-family:'Courier New',monospace;color:#a6ff4d;font-size:13px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 16px;">
        ✓ paid
      </div>

      <!-- mascot -->
      <img src="https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fsqysh-mascot%20(2).gif?alt=media&token=6bc454f4-120f-4312-a066-e3db53b65f14" width="84" height="84"
           alt="Sqysh" style="display:block;margin:0 auto 16px;border:0;outline:none;" />

      <!-- order confirmed bubble (inline-block so it hugs the text, centered) -->
      <div style="display:inline-block;background:#16161e;border:1px solid #23232e;border-radius:14px;padding:10px 22px;margin:0 0 24px;">
        <span style="font-family:'Courier New',monospace;color:#a6ff4d;font-size:14px;white-space:nowrap;">order confirmed.</span>
      </div>

      <!-- intro -->
      <div style="color:#8a8a98;font-size:14px;line-height:1.5;margin:0 0 6px;">
        Your order's in. Here's what's coming your way —
      </div>
      <div style="font-family:'Courier New',monospace;color:#5a5a68;font-size:11px;margin:0 0 28px;">
        # ${orderId.slice(-10)}
      </div>

      <!-- items -->
      ${rows}

      <!-- total card -->
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 0;">
        <tr><td style="background:#16161e;border:1px solid #23232e;border-radius:12px;padding:16px 20px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
            <td align="left" style="font-family:'Courier New',monospace;color:#8a8a98;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;">total</td>
            <td align="right" style="font-family:'Courier New',monospace;color:#a6ff4d;font-size:18px;font-weight:bold;">${fmt(amountTotal)}</td>
          </tr></table>
        </td></tr>
      </table>

      <!-- what's next -->
      <div style="color:#8a8a98;font-size:13px;line-height:1.5;margin:28px 0 0;">
        You'll get tracking info by email once it ships.<br/>Questions? Just reply to this email.
      </div>

      <!-- footer -->
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
      from: "Sqysh <sqysh@sqysh.io>",
      to,
      subject: "Your Sqysh order is confirmed",
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
