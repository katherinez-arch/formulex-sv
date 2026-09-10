const CARDS = [
  {
    name: "Plantillas gratuitas sueltas",
    quote:
      "“Sirven de referencia, pero son estáticas: sin variables, sin control de versiones, sin quién responde por ellas.”",
  },
  {
    name: "Plataformas de investigación con IA",
    quote:
      "“Muy buenas para investigar jurisprudencia. Ninguna firma el documento que generan.”",
  },
  {
    name: "Formulex SV",
    quote:
      "“Cada documento tiene nombre, colegiatura y fecha de revisión detrás.”",
    highlight: true,
  },
];

export function Comparison() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper">
      <div className="bg-grid-dark absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-soft">
          Por qué Formulex
        </p>
        <h2 className="mt-4 max-w-lg font-serif text-3xl sm:text-4xl">
          Lo que ya existe no alcanza
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.name}
              className={`p-6 ${
                card.highlight
                  ? "bg-gold text-ink"
                  : "bg-paper text-ink"
              }`}
            >
              <p className="font-serif text-lg leading-snug">{card.quote}</p>
              <p className="mt-5 font-mono text-xs uppercase tracking-widest opacity-70">
                {card.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
