import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Testimonials from "../components/Testimonials";
import DownloadLinks from "../components/DownloadLinks";
import InfoSection from "../components/InfoSection";
import WhyChooseUs from "./WhyChooseUs";

const LandingPage = () => {
  return (
    <div className="bg-background text-text">
      <HeroSection />
      <InfoSection />
      <WhyChooseUs />
      <FeaturesSection />
      <Testimonials />
      <DownloadLinks />
    </div>
  );
};

export default LandingPage;
