import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BackgroundGlow from "./components/BackgroundGlow";
import SectionTitle from "./components/SectionTitle";
import PortfolioCard from "./components/PortfolioCard";
import TrainingCard from "./components/TrainingCard";

import { portfolio } from "./data/portfolio";
import { trainings } from "./data/trainings";

export default function Home() {
  return (
    <>
      <BackgroundGlow />

      <Navbar />

      <main className="relative z-10">
        {/* HERO */}
        <Hero />

        {/* ABOUT */}
        <section className="container mx-auto px-6 py-24">
          <SectionTitle title="About Me" />

          <div className="glass rounded-3xl p-10 max-w-5xl mx-auto">
            <p className="text-lg text-gray-300 leading-8 text-center">
              I&apos;m Hamza Adouani, Creative Designer, Full Stack Developer
              and Instructor. I help students and companies build modern
              web applications using React, Next.js, Node.js and the MERN Stack.
            </p>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="container mx-auto px-6 py-24">
          <SectionTitle title="Featured Projects" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((project) => (
              <PortfolioCard
                key={project.title}
                title={project.title}
                image={project.image}
                description={project.description}
              />
            ))}
          </div>
        </section>

        {/* TRAININGS */}
        <section className="container mx-auto px-6 py-24">
          <SectionTitle title="Trainings" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainings.map((training) => (
              <TrainingCard
                key={training.title}
                title={training.title}
                students={training.students}
              />
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="container mx-auto px-6 py-24">
          <SectionTitle title="Statistics" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold">
                1200+
              </h3>

              <p className="mt-4 text-gray-400">
                Students
              </p>
            </div>

            <div className="glass rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold">
                50+
              </h3>

              <p className="mt-4 text-gray-400">
                Projects
              </p>
            </div>

            <div className="glass rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold">
                5+
              </h3>

              <p className="mt-4 text-gray-400">
                Years Experience
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="container mx-auto px-6 py-24">
          <div className="glass rounded-3xl p-12 text-center">
            <h2 className="text-5xl font-bold">
              Let&apos;s Work Together
            </h2>

            <p className="mt-6 text-gray-400">
              Ready to build your next project?
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="/contact"
                className="btn-glass"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}