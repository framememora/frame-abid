const stats = [
  { value: '80+', label: 'Projects delivered' },
  { value: '12', label: 'Countries served' },
  { value: '6 yrs', label: 'In business' },
  { value: '98%', label: 'Client retention' },
]

export default function About() {
  return (
    <section className="px-6 py-28 sm:px-10 lg:px-14 lg:py-36">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="rise text-sm font-medium tracking-[0.2em] text-gold uppercase">
            About Us
          </p>
          <h2 className="rise font-display mt-4 text-[clamp(2rem,4.5vw,3rem)] leading-[1.15] tracking-[-0.01em] text-white">
            We design like the <em className="text-gold italic">details</em> are
            the whole point.
          </h2>
          <p className="rise mt-6 max-w-lg text-[17px] leading-relaxed text-white/60">
            framememora is a small studio for brands who want their digital
            presence to feel considered, not templated. We pair strategy with
            craft — every layout, transition, and pixel earns its place.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="rise border-l-2 border-gold/50 pl-5"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="font-display text-4xl text-white">{s.value}</div>
              <div className="mt-1 text-sm text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
