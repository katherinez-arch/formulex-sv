const PLANS = [
  {
    name: "Estudiante Básico",
    price: "Gratis",
    period: "correo institucional",
    features: [
      "Modo educativo con anotaciones",
      "Hasta 5 descargas al mes",
      "Marca de agua de uso educativo",
    ],
  },
  {
    name: "Estudiante Pro",
    price: "$60",
    period: "/año",
    features: [
      "Descargas ilimitadas",
      "Sin marca de agua",
      "Base legal y changelog de cada plantilla",
    ],
  },
  {
    name: "Profesional",
    price: "$120",
    period: "/año",
    features: [
      "Catálogo completo en modo profesional",
      "Variables autocompletables",
      "Alertas de vigencia legal",
      "Verificación contra registro CSJ",
    ],
    highlight: true,
  },
  {
    name: "Despacho",
    price: "$175",
    period: "/año · hasta 5 usuarios",
    features: [
      "Todo lo de Profesional",
      "Marca blanca en documentos generados",
      "Panel de administración",
      "Soporte prioritario",
    ],
  },
];

export function Pricing() {
  return (
    <section id="precios" className="bg-paper-dim py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          Precios
        </p>
        <h2 className="mt-4 max-w-lg font-serif text-3xl text-ink sm:text-4xl">
          Un plan para cada etapa
        </h2>
        <p className="mt-4 max-w-lg text-sm text-ink/70">
          Suscripción solo anual — sin plan mensual en ningún tier.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col border p-6 ${
                plan.highlight
                  ? "border-ink bg-ink text-paper"
                  : "border-line-light bg-paper text-ink"
              }`}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest opacity-70">
                {plan.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-3xl">{plan.price}</span>
                <span className="font-sans text-sm opacity-60">
                  {plan.period}
                </span>
              </p>

              <ul className="mt-6 flex-1 space-y-3 text-sm leading-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="opacity-50">—</span>
                    <span className="opacity-85">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#lista-de-espera"
                className={`mt-8 border px-4 py-2 text-center font-mono text-xs uppercase tracking-widest transition-colors ${
                  plan.highlight
                    ? "border-paper text-paper hover:bg-paper hover:text-ink"
                    : "border-ink text-ink hover:bg-ink hover:text-paper"
                }`}
              >
                Lista de espera
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
