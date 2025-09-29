export function EmailTemplate({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
    <div style="font-family: sans-serif; color: #333;">
      <h2 style="color: #1a73e8;">${subject}</h2>
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr />
      <p style="font-size: 0.9rem; color: #999;">
        This message was sent from your portfolio contact form.
      </p>
    </div>
  `;
}
