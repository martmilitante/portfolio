import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxLengths = {
  name: 100,
  email: 254,
  company: 150,
  message: 5000,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const honeypot = typeof body.website === "string" ? body.website.trim() : "";

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (
      !name ||
      !emailPattern.test(email) ||
      !message ||
      name.length > maxLengths.name ||
      email.length > maxLengths.email ||
      company.length > maxLengths.company ||
      message.length > maxLengths.message
    ) {
      return NextResponse.json(
        { error: "Please provide valid contact details." },
        { status: 400 }
      );
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          from_name: name,
          from_email: email,
          company,
          message,
          to_email: "martmorbos@gmail.com",
        },
      }),
    });

    if (!emailResponse.ok) {
      const providerError = await emailResponse.text();
      console.error("EmailJS request failed", {
        status: emailResponse.status,
        response: providerError,
      });
      return NextResponse.json(
        { error: "Unable to send your message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your message." },
      { status: 400 }
    );
  }
}
