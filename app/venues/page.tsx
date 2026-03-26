import Navbar from "@/components/Navbar";
import VenuesSection from "@/components/VenuesSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Venues - CricLeagues",
  description: "Iconic cricket stadiums and venues from around the world.",
};

export default function VenuesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        <VenuesSection />
      </main>
    </div>
  );
}
