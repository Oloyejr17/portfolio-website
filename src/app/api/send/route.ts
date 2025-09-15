import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY as string);
const fromEmail = process.env.FROM_EMAIL as string;

export async function POST(req: Request) {
  try {
    const { email, subject, message } = (await req.json()) as {
      email: string;
      subject: string;
      message: string;
    };

    console.log("Incoming email request:", email, subject, message);

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject,
      react: EmailTemplate({ subject, message }), // ✅ Render React template
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
