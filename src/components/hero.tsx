export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="bg-grid-dark absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--gold-soft), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-soft">
          Plantillas legales · El Salvador
        </p>

        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
          De la compraventa al habeas corpus, en un solo lugar.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-paper/75 sm:text-lg">
          La primera biblioteca de plantillas legales de El Salvador validada
          por abogados y notarios colegiados — no generada por IA, no un PDF
          suelto de hace cinco años.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#lista-de-espera"
            className="bg-gold px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-gold-soft"
          >
            Únete a la lista de espera
          </a>
          <a
            href="#categorias"
            className="font-mono text-xs uppercase tracking-widest text-paper/70 underline underline-offset-4 transition-colors hover:text-paper"
          >
            Ver categorías ↓
          </a>
        </div>
      </div>
    </section>
  );
}
