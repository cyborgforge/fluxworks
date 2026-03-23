import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  product?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.RESEND_TO_EMAIL;

    if (!apiKey) {
      return Response.json(
        { error: "RESEND_API_KEY is not configured" },
        { status: 500 }
      );
    }

    if (!fromEmail || !toEmail) {
      return Response.json(
        { error: "RESEND_FROM_EMAIL or RESEND_TO_EMAIL is not configured" },
        { status: 500 }
      );
    }

    const body = (await req.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const business = body.business?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const product = body.product?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !business || !email) {
      return Response.json(
        { error: "Name, business, and email are required" },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeBusiness = escapeHtml(business);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "-");
    const safeProduct = escapeHtml(product || "-");
    const safeMessage = escapeHtml(message || "-");

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: "New Contact Form Submission",
      html: `
        <h2>New Lead</h2>
        <p><b>Name:</b> ${safeName}</p>
        <p><b>Email:</b> ${safeEmail}</p>
        <p><b>Phone:</b> ${safePhone}</p>
        <p><b>Business:</b> ${safeBusiness}</p>
        <p><b>Product:</b> ${safeProduct}</p>
        <p><b>Message:</b> ${safeMessage}</p>
      `,
    });

    await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Thanks for contacting FluxWorks",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>Hi ${safeName},</h2>
          <p>Thanks for reaching out to <b>FluxWorks</b>.</p>
          <p>We received your message and will get back to you within <b>1 business day</b>.</p>
          <hr />
          <p><b>Your message:</b></p>
          <p>${safeMessage}</p>
          <p style="margin-top: 20px;">Best regards,<br /><b>FluxWorks Team</b><br />fluxworks.in</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
