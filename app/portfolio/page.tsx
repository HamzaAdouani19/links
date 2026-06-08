import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlow from "../components/BackgroundGlow";
import PortfolioCard from "../components/PortfolioCard";
import SectionTitle from "../components/SectionTitle";
import { portfolio } from "../data/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <BackgroundGlow />
      <Navbar />

      <section className="container mx-auto py-40 px-6">
        <SectionTitle title="Portfolio" />

        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.map((item) => (
            <PortfolioCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}