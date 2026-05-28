import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Brak wymaganych pól" },
        { status: 400 }
      );
    }

    const subject = `Nowe zapytanie z mulagroup.eu od ${name}`;
    const html = `
      <h2>Nowe zapytanie ze strony MulaGroup</h2>
      <p><strong>Imię i nazwisko:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Firma:</strong> ${company || "-"}</p>
      <p><strong>Usługa:</strong> ${service || "-"}</p>
      <p><strong>Wiadomość:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    if (!resend) {
      console.log("[Resend] Brak klucza API. Symulacja wysyłki:");
      console.log({ name, email, company, service, message });
      return NextResponse.json({ success: true, simulated: true });
    }

    await resend.emails.send({
      from: "MulaGroup <onboarding@resend.dev>",
      to: ["info@mulagroup.eu"],
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Błąd wysyłki:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłania wiadomości" },
      { status: 500 }
    );
  }
}
