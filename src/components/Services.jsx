import SectionHeading from './SectionHeading'

const services = [
  {
    n: '01',
    title: 'Brand Identity',
    desc: 'Logo systems, type pairing, color, and the visual voice that carries across every touchpoint.',
  },
  {
    n: '02',
    title: 'Web Design & Dev',
    desc: 'Fast, accessible, animated sites built on modern stacks — designed and shipped by the same team.',
  },
  {
    n: '03',
    title: 'Product UI/UX',
    desc: 'Interfaces for apps and dashboards that stay usable as the product grows.',
  },
  {
    n: '04',
    title: 'Motion & Interaction',
    desc: 'Micro-interactions and transitions that make a site feel alive, not just styled.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/10 bg-white/[0.02] px-6 py-28 sm:px-10 lg:px-14 lg:py-36"
    >
      <SectionHeading eyebrow="What We Do" title="Services Built for" italic="Growth." />

      <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2">
        {services.map((s, i) => (
          <div
            key={s.n}
            className="rise flex gap-6 border-b border-white/10 pb-10"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <span className="font-display text-3xl text-gold/70">{s.n}</span>
            <div>
              <h3 className="font-display text-2xl text-white">{s.title}</h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/60">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
