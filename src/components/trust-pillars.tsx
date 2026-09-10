import { Reveal } from "./reveal";

const PILLARS = [
  {
    label: "Revisión profesional",
    title: "Firmado por un colegiado, no por un algoritmo",
    body:
      "Cada plantilla lleva el nombre y número de colegiatura del abogado o notario que la validó, con los artículos de ley que la respaldan visibles en la ficha del documento.",
  },
  {
    label: "Vigencia garantizada",
    title: "Se actualiza cuando la ley cambia",
    body:
      "Monitoreamos reformas al Código de Familia, Código de Comercio y demás leyes aplicables. Si algo cambia, el documento se marca en revisión hasta que un profesional lo confirme.",
  },
  {
    label: "Listo para usar",
    title: "Word editable, no un PDF para transcribir",
    body:
      "Cada plantilla trae variables autocompletables. Descargas, llenas los datos del caso y sigues trabajando — no partes de cero.",
  },
];

export function TrustPillars() {
  return (
    <section id="validacion" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Validación legal
          </p>
          <h2 className="mt-4 max-w-lg font-serif text-3xl text-ink sm:text-4xl">
            Por qué puedes confiar en un documento de Formulex
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.label} delay={index * 0.08}>
              <span className="font-mono text-xs uppercase tracking-widest text-gold">
                {pillar.label}
              </span>
              <h3 className="mt-4 font-serif text-xl text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink/70">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
