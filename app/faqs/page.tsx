import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { globalFaqs } from "@/data/leagues";

export const metadata = {
  title: "FAQ / Help | T20 League Schedule",
  description:
    "Common questions about t20leagueschedule.com: schedules, teams, points tables, contact, and how we keep T20 league information up to date.",
};

const faqIntro =
  "Welcome to the t20leagueschedule.com FAQ page. Here, we answer common questions and provide guidance to help you navigate our site and stay updated with T20 cricket leagues.";

const faqClosing =
  "Thank you for visiting t20leagueschedule.com. We hope this FAQ page helps you navigate the site and stay fully informed about every T20 league around the world.";

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <FAQSection
          faqs={globalFaqs}
          showKicker={false}
          title="FAQ / Help"
          intro={faqIntro}
          closing={faqClosing}
        />
      </main>
      <Footer />
    </div>
  );
}
