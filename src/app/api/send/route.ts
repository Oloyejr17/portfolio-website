import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY as string);
const fromEmail = process.env.FROM_EMAIL as string;

export async function POST(req: Request) {
  try {
    console.log("Using API Key:", process.env.RESEND_API_KEY ? "✅ Loaded" : "❌ Missing");
    console.log("From Email:", fromEmail);

    const { email, subject, message } = (await req.json()) as {
      email: string;
      subject: string;
      message: string;
    };

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject,
      react: EmailTemplate({ subject, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Send route is working. Use POST to send email." });
}
