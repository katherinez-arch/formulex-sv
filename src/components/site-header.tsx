const NAV_LINKS = [
  { href: "#categorias", label: "Categorías" },
  { href: "#validacion", label: "Validación legal" },
  { href: "#precios", label: "Precios" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-light bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-baseline gap-1.5">
          <span className="font-serif text-xl font-semibold tracking-tight text-ink">
            Formulex
          </span>
          <span className="font-mono text-xs tracking-widest text-gold">
            SV
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-xs uppercase tracking-widest text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#lista-de-espera"
          className="border border-ink px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-paper active:translate-y-0"
        >
          Lista de espera
        </a>
      </div>
    </header>
  );
}
