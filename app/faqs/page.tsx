import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { globalFaqs } from "@/data/leagues";

export const metadata = {
  title: "FAQ - CricLeagues",
  description: "Frequently asked questions about cricket leagues, schedules, and CricLeagues.",
};

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <FAQSection faqs={globalFaqs} title="Frequently Asked Questions" />
      </main>
      <Footer />
    </div>
  );
}
