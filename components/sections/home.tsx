
import HeroSection from "../home/hero-section";
import ServiceCardsDemo from "../home/services";
import ProjectContributions from "../home/project-contributions";
import Recommendation from "../home/recommendation";

export const Home: React.FC = () => {
  

  return (
    <div className="">
      <section>
        <HeroSection />
      </section>
      <section>
        <ServiceCardsDemo />
      </section>
      <section>
        <ProjectContributions />
     </section>

      <section>
        <Recommendation />
    </section>
    </div>
  );
};
