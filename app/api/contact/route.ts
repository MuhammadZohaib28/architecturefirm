import nodemailer from "nodemailer";

const recipient = "hello@studiolissom.com";

function clean(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.replace(/[\r\n]+/g, " ").trim().slice(0, maxLength)
    : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const name = clean(payload.name, 120);
    const email = clean(payload.email, 254);
    const phone = clean(payload.phone, 80);
    const projectType = clean(payload.projectType, 120);
    const location = clean(payload.location, 160);
    const budget = clean(payload.budget, 80);
    const message = clean(payload.message, 4000);
    const honeypot = clean(payload.website, 120);

    if (honeypot) {
      return Response.json({ ok: true });
    }

    if (!name || !isEmail(email) || !projectType || !location || !message) {
      return Response.json(
        { error: "Please complete the required fields and try again." },
        { status: 400 },
      );
    }

    const smtpPassword = process.env.SMTP_PASSWORD;
    if (!smtpPassword) {
      console.error("Contact form email is not configured: SMTP_PASSWORD is missing.");
      return Response.json(
        { error: "The contact form is temporarily unavailable. Please email us directly." },
        { status: 503 },
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT ?? "465");
    const smtpUser = process.env.SMTP_USER ?? recipient;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.titan.email",
      port: smtpPort,
      secure: process.env.SMTP_SECURE
        ? process.env.SMTP_SECURE !== "false"
        : smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPassword },
    });

    await transporter.sendMail({
      from: (process.env.SMTP_FROM_NAME ?? "Studio Lissom") + " <" + smtpUser + ">",
      to: process.env.CONTACT_EMAIL ?? recipient,
      replyTo: email,
      subject: "New website enquiry from " + name,
      text: [
        "Name: " + name,
        "Email: " + email,
        "Phone: " + (phone || "Not provided"),
        "Project type: " + projectType,
        "Project location: " + location,
        "Budget range: " + (budget || "Not provided"),
        "",
        "Project details:",
        message,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error(
      "Contact form email failed:",
      error instanceof Error ? error.message : error,
    );
    return Response.json(
      { error: "We could not send your enquiry. Please try again or email us directly." },
      { status: 500 },
    );
  }
}