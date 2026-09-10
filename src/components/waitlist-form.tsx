"use client";

import { useState, type FormEvent } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="font-mono text-sm text-ink">
        Listo — te avisamos a {email} cuando abramos acceso anticipado.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="tu@correo.com"
        className="flex-1 border-b border-ink/40 bg-transparent px-1 py-2 font-mono text-sm text-ink outline-none placeholder:text-ink/40 focus:border-ink"
      />
      <button
        type="submit"
        className="bg-ink px-6 py-2 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:bg-ink/80"
      >
        Avisarme
      </button>
    </form>
  );
}
