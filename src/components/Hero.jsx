import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[calc(115svh-96px)] items-center overflow-hidden bg-ink"
    >
      <HeroVisual />

      <div className="relative z-10 w-full px-6 pt-16 pb-24 sm:px-10 lg:px-14 lg:pt-0 lg:pb-0">
        <div className="max-w-[620px]">
          <h1
            className="rise font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.04] tracking-[-0.02em]"
            style={{ animationDelay: '160ms' }}
          >
            Turn Your Ideas
            <br />
            Into Powerful
            <br />
            <em className="text-gold italic">Digital Experiences.</em>
          </h1>

          <p
            className="rise mt-8 text-lg font-light text-white/70 sm:text-xl"
            style={{ animationDelay: '320ms' }}
          >
            Modern websites for modern brands.
          </p>

          <a
            href="#contact"
            className="rise group mt-10 inline-flex items-center gap-4 rounded-full bg-gold px-9 py-4 text-lg font-medium text-ink transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_44px_-6px_var(--color-gold)]"
            style={{ animationDelay: '440ms' }}
          >
            Start Your Project
            <svg
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            >
              <path
                d="M1 7h19M14.5 1L20.5 7l-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
