import SectionHeading from './SectionHeading'

const quotes = [
  {
    text: 'They turned a vague brand brief into a site that actually feels like us. Our conversion rate doubled in the first month.',
    name: 'Amara Hollis',
    role: 'Founder, Orin Ventures',
  },
  {
    text: 'Fast, opinionated, and precise. framememora pushed back on ideas that would have hurt the product — that candor is rare.',
    name: 'Devon Ncube',
    role: 'CEO, Halcyon Labs',
  },
  {
    text: 'The motion design alone made our launch feel premium. Every reviewer noticed it before we even pointed it out.',
    name: 'Sasha Wren',
    role: 'Creative Director, Marrow Studio',
  },
]

export default function Testimonials() {
  return (
    <section className="border-t border-white/10 bg-white/[0.02] px-6 py-28 sm:px-10 lg:px-14 lg:py-36">
      <SectionHeading
        align="center"
        eyebrow="Client Words"
        title="What They"
        italic="Say."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {quotes.map((q, i) => (
          <figure
            key={q.name}
            className="rise rounded-2xl border border-white/10 p-8"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <svg
              className="h-8 w-8 text-gold/50"
              viewBox="0 0 32 32"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 8C5.6 8 2 11.6 2 16s3.6 8 8 8c.7 0 1.3-.1 2-.3-.9 3-3.4 5.3-6.5 5.9l.5 2.4c5.4-1 9.5-5.8 9.5-11.5V16c0-4.4-3.6-8-8-8zm14 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c.7 0 1.3-.1 2-.3-.9 3-3.4 5.3-6.5 5.9l.5 2.4c5.4-1 9.5-5.8 9.5-11.5V16c0-4.4-3.6-8-8-8z" />
            </svg>
            <blockquote className="mt-5 text-[15px] leading-relaxed text-white/75">
              {q.text}
            </blockquote>
            <figcaption className="mt-6">
              <div className="font-medium text-white">{q.name}</div>
              <div className="text-sm text-white/50">{q.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
