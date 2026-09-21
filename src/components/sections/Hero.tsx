function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="flex min-h-[calc(100vh-4rem)] items-center px-6 py-20"
    >
      <div className="mx-auto w-full max-w-[var(--content-width)]">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
            MSc Computer Science · University of Vienna
          </p>

          <h1
            id="hero-heading"
            className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m Hind.
          </h1>

          <p className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl">
            Software Engineer
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            I build reliable software and explore data-driven research, with
            interests spanning software engineering, machine learning, and
            data-intensive systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-[var(--color-accent-foreground)] transition-opacity hover:opacity-90"
            >
              View my work
            </a>

            <a
              href="/cv/Hind_Boufeligha_CV.pdf"
              download
              className="rounded-[var(--radius-md)] border border-[var(--color-border)] px-5 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-accent-soft)]"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
