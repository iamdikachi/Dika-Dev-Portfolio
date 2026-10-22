
import HeroSection from "../home/hero-section";
import ServiceCardsDemo from "../home/services";
import Recommendation from "../home/recommendation";

interface HomeProps {
  onSectionChange?: (section: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onSectionChange }) => {
  return (
    <div className="space-y-16 lg:space-y-24">
      <section>
        <HeroSection onSectionChange={onSectionChange} />
      </section>
      <section id="services" className="scroll-mt-20">
        <ServiceCardsDemo />
      </section>
      <section>
        <Recommendation />
      </section>
    </div>
  );
};
