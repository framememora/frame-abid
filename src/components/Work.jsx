import SectionHeading from './SectionHeading'

const projects = [
  {
    name: 'Orin Ventures',
    tag: 'Brand + Web',
    blurb: 'A capital firm rebuilt as a confident, editorial digital presence.',
    gradient: 'from-[#2a2420] to-[#0a0908]',
  },
  {
    name: 'Marrow Studio',
    tag: 'E-commerce',
    blurb: 'A quiet, tactile storefront for a slow-fashion atelier.',
    gradient: 'from-[#241f2e] to-[#0a090d]',
  },
  {
    name: 'Halcyon Labs',
    tag: 'Product + App',
    blurb: 'Dashboard design for a wellness platform used by 40k members.',
    gradient: 'from-[#1f2620] to-[#080a09]',
  },
]

export default function Work() {
  return (
    <section id="work" className="px-6 py-28 sm:px-10 lg:px-14 lg:py-36">
      <SectionHeading eyebrow="Selected Work" title="Recent" italic="Projects." />

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {projects.map((p, i) => (
          <a
            key={p.name}
            href="#contact"
            className="rise group block overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300 hover:border-gold/40"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div
              className={`relative flex aspect-[4/3] items-end bg-gradient-to-br ${p.gradient} p-6`}
            >
              <span className="text-sm font-medium tracking-wide text-white/60">
                {p.tag}
              </span>
              <svg
                className="absolute right-6 top-6 h-9 w-9 -rotate-45 text-gold opacity-0 transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100"
                viewBox="0 0 22 22"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 16L16 6M16 6H8M16 6v8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-white/[0.03] p-6">
              <h3 className="font-display text-2xl text-white">{p.name}</h3>
              <p className="mt-2 text-[15px] text-white/60">{p.blurb}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
