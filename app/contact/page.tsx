"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [erreur, setErreur] = useState("");
  const [succes, setSucces] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErreur("");
    setSucces(false);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setErreur(data.error);
      return;
    }

    setSucces(true);
    setForm({ nom: "", email: "", message: "" });
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-600 text-center mb-6">
        Nous contacter
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="nom"
          placeholder="Votre nom"
          value={form.nom}
          onChange={handleChange}
          className="border rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={form.email}
          onChange={handleChange}
          className="border rounded px-4 py-2"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="border rounded px-4 py-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition disabled:opacity-50"
        >
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>

        {erreur && <p className="text-red-500 text-center">{erreur}</p>}
        {succes && (
          <p className="text-green-600 text-center font-semibold">
            ✅ Votre message a bien été envoyé !
          </p>
        )}
      </form>
    </div>
  );
}