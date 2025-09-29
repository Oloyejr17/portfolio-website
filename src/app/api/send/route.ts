// src/app/api/send/route.ts
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { EmailTemplate } from "@/app/components/EmailTemplate";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
const fromEmail = process.env.FROM_EMAIL as string;

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = (await req.json()) as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    const htmlContent = EmailTemplate({ name, email, subject, message });

    await sgMail.send({
      to: fromEmail,       // send to yourself
      from: fromEmail,     // verified sender
      replyTo: email,      // replies go to the visitor
      subject: `[Portfolio] ${subject}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Send route is working. Use POST to send email." });
}
