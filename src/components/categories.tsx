const CATEGORIES = [
  {
    name: "Notarial y Civil",
    detail: "Compraventas, poderes, testamentos, contratos de arrendamiento",
  },
  {
    name: "Familia",
    detail: "Divorcio, alimentos, cuidado personal, uniones no matrimoniales",
  },
  {
    name: "Mercantil y Societario",
    detail: "Pactos sociales, actas, poderes mercantiles, contratos comerciales",
  },
  {
    name: "Penal y Constitucional",
    detail: "Habeas corpus, amparo, recursos y medidas sustitutivas",
  },
  {
    name: "Laboral",
    detail: "Contratos de trabajo, finiquitos, demandas por despido injusto",
  },
  {
    name: "Bienes Raíces",
    detail: "Declaratorias de fábrica, particiones, servidumbres de paso",
  },
];

export function Categories() {
  return (
    <section id="categorias" className="bg-ink-soft py-24 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-soft">
          Catálogo
        </p>
        <h2 className="mt-4 max-w-lg font-serif text-3xl sm:text-4xl">
          Un documento para cada trámite
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <div key={category.name} className="border-t border-dotted border-line-dark pt-5">
              <h3 className="font-mono text-sm uppercase tracking-wide text-paper">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-paper/65">
                {category.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
