export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-6 py-28 text-center sm:px-10 lg:px-14 lg:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 100%, rgba(232,192,125,0.16), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl">
        <p className="rise text-sm font-medium tracking-[0.2em] text-gold uppercase">
          Get In Touch
        </p>
        <h2 className="rise font-display mt-4 text-[clamp(2rem,6vw,3.75rem)] leading-[1.08] tracking-[-0.01em] text-white">
          Let&rsquo;s Build Something
          <br />
          <em className="text-gold italic">Impeccable.</em>
        </h2>
        <p className="rise mt-6 text-lg font-light text-white/60">
          Tell us about your project — we usually reply within a day.
        </p>

        <form
          className="rise mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold sm:w-80"
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 font-medium text-ink transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_44px_-6px_var(--color-gold)]"
          >
            Start Your Project
            <svg
              width="20"
              height="13"
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
          </button>
        </form>
      </div>
    </section>
  )
}
