const links = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-14 sm:px-10 lg:px-14">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <a href="#home" className="font-display text-2xl">
            <span className="italic text-gold">frame</span>
            <span className="text-white">memora</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-white/50">
            Modern websites for modern brands.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div>
            <h4 className="text-sm font-medium tracking-wide text-white/40 uppercase">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[15px] text-white/70 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wide text-white/40 uppercase">
              Connect
            </h4>
            <ul className="mt-4 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[15px] text-white/70 transition-colors hover:text-gold"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col-reverse gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} framememora. All rights reserved.</p>
        <p>Designed &amp; built in-house.</p>
      </div>
    </footer>
  )
}
