import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlow from "../components/BackgroundGlow";
import TrainingCard from "../components/TrainingCard";
import SectionTitle from "../components/SectionTitle";
import { trainings } from "../data/trainings";

export default function TrainingsPage() {
  return (
    <>
      <BackgroundGlow />
      <Navbar />

      <section className="container mx-auto py-40 px-6">
        <SectionTitle title="Trainings" />

        <div className="grid md:grid-cols-2 gap-8">
          {trainings.map((item) => (
            <TrainingCard
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