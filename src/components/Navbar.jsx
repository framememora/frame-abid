import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 px-6 pt-7 sm:px-10 lg:px-14">
      <nav className="flex items-center justify-between">
        <a
          href="#home"
          className="rise font-display text-2xl tracking-tight sm:text-[28px]"
          style={{ animationDelay: '0ms' }}
        >
          <span className="italic text-gold">frame</span>
          <span className="text-white">memora</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 lg:flex xl:gap-14">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rise text-[15px] text-white/85 transition-colors hover:text-gold"
                style={{ animationDelay: `${80 + i * 70}ms` }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rise inline-block rounded-full bg-gold px-7 py-3 text-[15px] font-medium text-ink transition-transform duration-300 hover:scale-[1.04] hover:bg-gold-soft"
              style={{ animationDelay: '360ms' }}
            >
              Let&rsquo;s Build
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <ul
        className={`overflow-hidden transition-all duration-400 lg:hidden ${
          open ? 'mt-6 max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {links.map((link) => (
          <li key={link.href} className="border-b border-white/10">
            <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-4 text-white/85 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li className="pt-6">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-block rounded-full bg-gold px-7 py-3 font-medium text-ink"
          >
            Let&rsquo;s Build
          </a>
        </li>
      </ul>
    </header>
  )
}
