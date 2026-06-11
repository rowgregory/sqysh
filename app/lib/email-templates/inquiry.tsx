// ─────────────────────────────────────────────────────────────────────────────
// HTML email templates for Resend — terminal-themed, email-client-safe.
// Email HTML rules followed here:
//   - tables for layout (flexbox is unreliable in email clients)
//   - ALL styles inline (no <style> dependence for layout-critical rules)
//   - explicit colors everywhere (never inherit)
//   - web-safe mono stack; no custom fonts
//   - the mark is an <img> — email clients don't render inline SVG.
//     REQUIRED: export the mark as PNG (~160px) to /public/email/sqysh-mark.png
// ─────────────────────────────────────────────────────────────────────────────

const SITE = "https://sqysh.io";
const MARK = `${SITE}/gif/sqysh-animated.gif`;

const MONO = `'Courier New', Courier, monospace`;

// User content goes into HTML — always escape it.
const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br/>");

// Shared shell: black page, terminal card, footer
const shell = (
  titleBar: string,
  body: string,
  preheader: string,
) => `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background-color:#000000;">
  <div style="display:none;max-height:0;overflow:hidden;">${esc(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#000000;">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

        <tr><td align="center" style="padding-bottom:20px;">
          <img src="${MARK}" width="56" height="58" alt="Sqysh" style="display:block;border:0;" />
        </td></tr>

        <tr><td style="background-color:#0e0e12;border:1px solid #26262e;border-radius:12px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:12px 20px;border-bottom:1px solid #26262e;">
              <span style="font-family:${MONO};font-size:12px;color:#b0b0c4;">${titleBar}</span>
            </td></tr>
            <tr><td style="padding:24px 20px;">
              ${body}
            </td></tr>
          </table>
        </td></tr>

        <tr><td align="center" style="padding-top:24px;">
          <span style="font-family:${MONO};font-size:10px;letter-spacing:2px;color:#8888a0;">SQYSH</span><br/>
          <a href="${SITE}" style="font-family:${MONO};font-size:11px;color:#b0b0c4;text-decoration:none;">sqysh.io</a>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

const promptLine = (cmd: string) =>
  `<p style="margin:0 0 16px 0;font-family:${MONO};font-size:14px;color:#f4f4f8;"><span style="color:#a6ff4d;">$</span>&nbsp;${cmd}</p>`;

const fieldRow = (label: string, value: string) => `
  <tr>
    <td style="padding:4px 0;vertical-align:top;width:90px;">
      <span style="font-family:${MONO};font-size:11px;letter-spacing:2px;color:#b0b0c4;">${label.toUpperCase()}</span>
    </td>
    <td style="padding:4px 0;">
      <span style="font-family:${MONO};font-size:14px;color:#f4f4f8;">${value}</span>
    </td>
  </tr>`;

// ─── 1. Internal notification → you ─────────────────────────────────────────

export const inquiryNotificationHtml = (i: {
  id: string;
  name: string;
  email: string;
  message: string;
  company?: string;
}) =>
  shell(
    'new-inquiry.config &nbsp;&middot;&nbsp; <span style="color:#a6ff4d;">&#9679; NEW</span>',
    `
    ${promptLine("sqysh inbox --latest")}

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      ${fieldRow("name", esc(i.name))}
      ${fieldRow("company", i.company ? esc(i.company) : `<span style="color:#8888a0;">&mdash;</span>`)}
      ${fieldRow("email", `<a href="mailto:${esc(i.email)}" style="color:#37e1c2;text-decoration:none;">${esc(i.email)}</a>`)}
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="background-color:#141418;border:1px solid #26262e;border-radius:8px;padding:14px 16px;">
        <span style="font-family:${MONO};font-size:11px;letter-spacing:2px;color:#b0b0c4;">THE&nbsp;PROJECT</span><br/><br/>
        <span style="font-family:${MONO};font-size:14px;line-height:1.7;color:#f4f4f8;">${esc(i.message)}</span>
      </td></tr>
    </table>

    <p style="margin:20px 0 0 0;font-family:${MONO};font-size:12px;color:#b0b0c4;">
      reply to this email to respond directly.<br/>
      <span style="color:#8888a0;">inquiry ${esc(i.id)}</span>
    </p>
    `,
    `New inquiry from ${i.name}${i.company ? ` (${i.company})` : ""}`,
  );

// ─── 2. Confirmation → the person who reached out ───────────────────────────

export const inquiryConfirmationHtml = (i: { name: string }) =>
  shell(
    "inquiry-received.log",
    `
    ${promptLine("sqysh init --send")}

    <p style="margin:0 0 16px 0;font-family:${MONO};font-size:14px;line-height:1.8;color:#a6ff4d;">
      got it, ${esc(i.name)}!
    </p>

    <p style="margin:0 0 16px 0;font-family:${MONO};font-size:14px;line-height:1.8;color:#f4f4f8;">
      your project landed safely in the queue. a real human (greg)
      reads every inquiry &mdash; expect a reply within one business day.
    </p>

    <p style="margin:0 0 20px 0;font-family:${MONO};font-size:14px;line-height:1.8;color:#b0b0c4;">
      no action needed. this is just sqysh confirming the handshake.
    </p>

    <table role="presentation" cellpadding="0" cellspacing="0">
      <tr><td style="background-color:#141418;border:1px solid #26262e;border-radius:8px;">
        <a href="${SITE}/debug" style="display:inline-block;padding:12px 18px;font-family:${MONO};font-size:13px;color:#f4f4f8;text-decoration:none;">
          <span style="color:#a6ff4d;">$</span>&nbsp;sqysh debug&nbsp;&nbsp;<span style="color:#8888a0;font-size:11px;">squash bugs while you wait &#8629;</span>
        </a>
      </td></tr>
    </table>
    `,
    `Got it — your inquiry reached Sqysh. Reply within one business day.`,
  );
