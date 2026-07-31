import { NextRequest, NextResponse } from "next/server";

// Stockage temporaire en mémoire (se réinitialise si le serveur redémarre)
let messages: { nom: string; email: string; message: string; date: string }[] = [];

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { nom, email, message } = body;

  // Validation
  if (!nom || !nom.trim()) {
    return NextResponse.json({ error: "Le nom est requis." }, { status: 400 });
  }
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  if (!message || message.trim().length < 10) {
    return NextResponse.json(
      { error: "Le message doit contenir au moins 10 caractères." },
      { status: 400 }
    );
  }

  const nouveauMessage = { nom, email, message, date: new Date().toISOString() };
  messages.push(nouveauMessage);

  return NextResponse.json(
    { success: true, message: "Message reçu avec succès !" },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json({ messages });
}