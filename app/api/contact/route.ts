import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { nom, email, message } = body;

  // Validation (inchangée)
  if (!nom || !nom.trim()) {
    return NextResponse.json({ error: "Le nom est requis" }, { status: 400 });
  }
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }
  if (!message || message.trim().length < 10) {
    return NextResponse.json(
      { error: "Le message doit contenir au moins 10 caractères" },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "MYD Fashion <onboarding@resend.dev>", // à remplacer par ton domaine vérifié
      to: "yhjpzbzsyw@privaterelay.appleid.com", // l'adresse où TU veux recevoir les messages
      subject: `Nouveau message de ${nom}`,
      replyTo: email,
      text: `De : ${nom} (${email})\n\nMessage :\n${message}`,
    });

    return NextResponse.json(
      { success: true, message: "Message reçu avec succès !" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur envoi email :", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}