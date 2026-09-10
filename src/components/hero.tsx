"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="bg-grid-dark absolute inset-0 opacity-40" />
      <motion.div
        className="pointer-events-none absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--gold-soft), transparent 70%)",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : { scale: [1, 1.12, 1], opacity: [0.2, 0.28, 0.2] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36"
        initial={shouldReduceMotion ? undefined : "hidden"}
        animate={shouldReduceMotion ? undefined : "show"}
        variants={container}
      >
        <motion.p
          variants={item}
          className="font-mono text-xs uppercase tracking-[0.2em] text-gold-soft"
        >
          Plantillas legales · El Salvador
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl"
        >
          De la compraventa al habeas corpus, en un solo lugar.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-7 text-paper/75 sm:text-lg"
        >
          La primera biblioteca de plantillas legales de El Salvador validada
          por abogados y notarios colegiados — no generada por IA, no un PDF
          suelto de hace cinco años.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <a
            href="#lista-de-espera"
            className="inline-block bg-gold px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-soft active:translate-y-0"
          >
            Únete a la lista de espera
          </a>
          <a
            href="#categorias"
            className="font-mono text-xs uppercase tracking-widest text-paper/70 underline underline-offset-4 transition-colors hover:text-paper"
          >
            Ver categorías ↓
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
