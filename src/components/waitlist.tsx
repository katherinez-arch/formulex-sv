import { Reveal } from "./reveal";
import { WaitlistForm } from "./waitlist-form";

export function Waitlist() {
  return (
    <section id="lista-de-espera" className="bg-ink-soft py-24 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-xl border border-slate/30 bg-slate p-10 text-ink transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl">
              Sé de los primeros en usarlo
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              Formulex SV está en construcción. Déjanos tu correo y te
              avisamos en cuanto abramos el acceso anticipado.
            </p>
            <div className="mt-6">
              <WaitlistForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
