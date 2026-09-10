const COLUMNS = [
  {
    title: "Producto",
    links: [
      { label: "Categorías", href: "#categorias" },
      { label: "Validación legal", href: "#validacion" },
      { label: "Precios", href: "#precios" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos de servicio", href: "#" },
      { label: "Privacidad", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <span className="font-serif text-xl font-semibold">Formulex</span>
            <span className="ml-1.5 font-mono text-xs tracking-widest text-gold-soft">
              SV
            </span>
            <p className="mt-4 max-w-xs text-sm leading-6 text-paper/60">
              Plantillas legales validadas por profesionales colegiados. No
              sustituye asesoría legal para tu caso concreto.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-paper/50">
                {column.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-paper/75 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line-dark pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Formulex SV. Hecho en El Salvador.</span>
          <span className="font-mono">hola@formulex.sv</span>
        </div>
      </div>
    </footer>
  );
}
