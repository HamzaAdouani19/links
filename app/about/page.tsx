import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlow from "../components/BackgroundGlow";

export default function AboutPage() {
  return (
    <>
      <BackgroundGlow />
      <Navbar />

      <section className="container mx-auto py-40 px-6">
        <h1 className="text-6xl font-bold">
          About Me
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          Creative Designer, Developer and
          Instructor helping thousands of
          students learn modern web
          technologies.
        </p>
      </section>

      <Footer />
    </>
  );
}