import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedLeagues from "@/components/FeaturedLeagues";
import UpcomingMatches from "@/components/UpcomingMatches";
import SchedulePreview from "@/components/SchedulePreview";
import PointsTableHighlights from "@/components/PointsTableHighlights";
import VenuesSection from "@/components/VenuesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { globalFaqs } from "@/data/leagues";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedLeagues />
      <UpcomingMatches />
      <SchedulePreview />
      <PointsTableHighlights />
      <VenuesSection />
      <FAQSection faqs={globalFaqs} />
      <Footer />
    </div>
  );
};

export default Index;
