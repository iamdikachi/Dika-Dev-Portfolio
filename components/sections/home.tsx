
import HeroSection from "../home/hero-section";
import ServiceCardsDemo from "../home/services";
import ProjectContributions from "../home/project-contributions";
import Recommendation from "../home/recommendation";
import { ScrollReveal } from "../ui/scrollReveal";

interface HomeProps {
  onSectionChange?: (section: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onSectionChange }) => {
  
  return (
    <div className="">
      <section>
        <HeroSection onSectionChange={onSectionChange} />
      </section>
      <ScrollReveal>
        <section>
          <ServiceCardsDemo />
        </section>
        <section>
          <ProjectContributions />
        </section>
        <section>
          <Recommendation />
        </section>
      </ScrollReveal>
    </div>
  );
};
