import {
  Code2,
  GraduationCap,
  Lightbulb,
  MapPin,
  Quote,
  Wrench,
} from 'lucide-react'

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[var(--content-width)]">
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="grid lg:grid-cols-[1.45fr_1fr_0.85fr]">
            {/* About Me */}
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                About Me
              </p>

              <h2
                id="about-heading"
                className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Always building, always learning.
              </h2>

              <p className="mt-6 leading-8 text-[var(--color-muted)]">
                I&apos;m an MSc Computer Science graduate from the University of
                Vienna with a background in software development, machine
                learning, and research. I enjoy understanding complex systems,
                building reliable software, and exploring how machine learning
                and data-driven methods can be applied to real-world problems.
              </p>

              <div className="mt-8 space-y-4 border-t border-[var(--color-border)] pt-7">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin
                    aria-hidden="true"
                    className="size-4 shrink-0 text-[var(--color-accent)]"
                  />
                  <span>Vienna, Austria</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <GraduationCap
                    aria-hidden="true"
                    className="size-4 shrink-0 text-[var(--color-accent)]"
                  />
                  <span>MSc Computer Science · University of Vienna</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Code2
                    aria-hidden="true"
                    className="size-4 shrink-0 text-[var(--color-accent)]"
                  />
                  <span>Open to opportunities</span>
                </div>
              </div>
            </div>

            {/* What Drives Me */}
            <div className="flex items-center p-8 sm:p-10 lg:p-12">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] p-6 sm:p-7">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  What Drives Me
                </p>

                <ul className="mt-7 space-y-6">
                  <li className="flex gap-4">
                    <Wrench
                      aria-hidden="true"
                      className="mt-1 size-5 shrink-0 text-[var(--color-accent)]"
                    />
                    <span className="text-sm leading-6">
                      Building reliable and maintainable software.
                    </span>
                  </li>

                  <li className="flex gap-4">
                    <Lightbulb
                      aria-hidden="true"
                      className="mt-1 size-5 shrink-0 text-[var(--color-accent)]"
                    />
                    <span className="text-sm leading-6">
                      Solving complex problems through analytical thinking.
                    </span>
                  </li>

                  <li className="flex gap-4">
                    <Code2
                      aria-hidden="true"
                      className="mt-1 size-5 shrink-0 text-[var(--color-accent)]"
                    />
                    <span className="text-sm leading-6">
                      Learning through hands-on engineering and research.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote */}
            <aside className="flex items-center p-8 sm:p-10 lg:p-12">
              <blockquote className="relative">
                <Quote
                  aria-hidden="true"
                  className="mb-3 size-8 text-[var(--color-accent)] opacity-60"
                />

                <p className="text-2xl font-medium italic leading-relaxed tracking-tight sm:text-3xl">
                  The best way to learn is to build.
                </p>
                <Quote
                  aria-hidden="true"
                  className="ml-auto mt-3 size-8 rotate-180 text-[var(--color-accent)] opacity-60"
                />
              </blockquote>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
