import PortfolioCard from "./PortfolioCard";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section
      className="
      flex
      flex-col
      items-center
      justify-center
      min-h-screen
      text-center
      relative
      z-10
      px-4"
    >
<PortfolioCard
  title="Hamza"
  image="/ha.png"
  description="Creative Developer"
/>
      <h1
        className="
        mt-8
        text-6xl
        font-bold"
      >
        Hamza Adouani
      </h1>

      <p
        className="
        mt-3
        text-2xl
        text-gray-300"
      >
        Creative Designer • Developer
      </p>

      <p
        className="
        mt-3
        text-lg
        text-gray-400"
      >
        +1,200 Students 🇧🇷 🇪🇸 🇺🇸 🇵🇹 🇩🇪
      </p>

      <SocialLinks />

      <div className="big-name">
        ADOUANI
      </div>
    </section>
  );
}