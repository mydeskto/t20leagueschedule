import FAQSection from "@/components/FAQSection";
import FeaturedLeagues from "@/components/FeaturedLeagues";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PointsTableHighlights from "@/components/PointsTableHighlights";
import SchedulePreview from "@/components/SchedulePreview";
import UpcomingMatches from "@/components/UpcomingMatches";
import VenuesSection from "@/components/VenuesSection";
import { globalFaqs } from "@/data/leagues";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedLeagues />
      <UpcomingMatches />
      <SchedulePreview />
      <PointsTableHighlights />
      <VenuesSection />
      <FAQSection faqs={globalFaqs} />
    </div>
  );
}
