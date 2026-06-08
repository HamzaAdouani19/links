import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlow from "../components/BackgroundGlow";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <BackgroundGlow />
      <Navbar />

      <section className="container mx-auto py-40 px-6">
        <h1 className="text-6xl font-bold text-center mb-12">
          Contact
        </h1>

        <ContactForm />
      </section>

      <Footer />
    </>
  );
}