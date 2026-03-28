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

const faqIntro =
  "Welcome to the t20leagueschedule.com FAQ page. Here, we answer common questions and provide guidance to help you navigate our site and stay updated with T20 cricket leagues.";

const faqClosing =
  "Thank you for visiting t20leagueschedule.com. We hope this FAQ page helps you navigate the site and stay fully informed about every T20 league around the world.";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedLeagues />
      <UpcomingMatches />
      <SchedulePreview />
      <PointsTableHighlights />
      <VenuesSection />
      <FAQSection faqs={globalFaqs} intro={faqIntro} closing={faqClosing} />
    </div>
  );
}
