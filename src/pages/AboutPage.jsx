import AboutSection from "../components/AboutSection";
import ValuesSection from "../components/ValuesSection";
import TeamSection from "../components/TeamSection";
import OurStorySection from "../components/OurStorySection";
import CallToActionSection from "../components/CallToActionSection";

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-text min-h-screen">
      <AboutSection />
      <CallToActionSection />
      <OurStorySection />
      <ValuesSection />
      {/* <TeamSection /> */}
    </div>
  );
};

export default AboutPage;
