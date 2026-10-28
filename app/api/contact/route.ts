import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const { name, email, service, budget, message } = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid business email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a brief description of your project (at least 10 characters)." },
        { status: 400 }
      );
    }

    // Sanitize values
    const inquiry = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 120),
      service: (service || "Custom Web Application").slice(0, 80),
      budget: (budget || "Not Specified").slice(0, 50),
      message: message.trim().slice(0, 2000),
      submittedAt: new Date().toISOString(),
    };

    // In production, integrate with Resend, Postmark, or CRM here.
    // For now, log safely and return success confirmation.
    console.log("[INQUIRY_RECEIVED]", inquiry.email, inquiry.service);

    return NextResponse.json({
      success: true,
      message: "Thank you! We have received your inquiry and will respond within 24 business hours.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload. Please try again." },
      { status: 400 }
    );
  }
}
