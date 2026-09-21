import Header from './components/layout/Header'
import SiteLayout from './components/layout/SiteLayout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'

function App() {
  return (
    <SiteLayout>
      <div id="top">
        <Header />

        <main>
          <Hero />

          <About />

          <Projects />

          <section id="publications" className="min-h-screen px-6 py-24">
            <div className="mx-auto max-w-[var(--content-width)]">
              <h2 className="text-4xl font-semibold">Publications</h2>
            </div>
          </section>

          <section id="skills" className="min-h-screen px-6 py-24">
            <div className="mx-auto max-w-[var(--content-width)]">
              <h2 className="text-4xl font-semibold">Skills</h2>
            </div>
          </section>

          <section id="contact" className="min-h-screen px-6 py-24">
            <div className="mx-auto max-w-[var(--content-width)]">
              <h2 className="text-4xl font-semibold">Contact</h2>
            </div>
          </section>
        </main>
      </div>
    </SiteLayout>
  )
}

export default App
