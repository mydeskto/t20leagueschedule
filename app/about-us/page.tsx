import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-narrow px-4 md:px-8 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">About Us</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed max-w-3xl">
          <p className="text-foreground/90">
            Welcome to t20leagueschedule.com, your complete resource for T20 cricket leagues worldwide. Our mission is to
            provide cricket fans with accurate, detailed, and up-to-date information, making it easy for you to follow
            fixtures, results, team details, and standings.
          </p>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h2>
            <p>
              Cricket is a sport that unites fans across the globe. At t20leagueschedule.com, we aim to make following
              T20 cricket straightforward and enjoyable. We cover all T20 leagues, from domestic competitions to emerging
              tournaments, ensuring that fans of every level can access the information they need in one place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="text-foreground font-medium">Comprehensive Schedules:</span> Full match dates, times,
                and venues for all T20 leagues.
              </li>
              <li>
                <span className="text-foreground font-medium">Team and Player Information:</span> Detailed team rosters,
                captain details, and player statistics.
              </li>
              <li>
                <span className="text-foreground font-medium">Points Tables, and Standings:</span> Track rankings and
                results with up-to-date tables.
              </li>
              <li>
                <span className="text-foreground font-medium">Fixtures and Match Updates:</span> Complete match fixtures,
                results, and key highlights.
              </li>
              <li>
                <span className="text-foreground font-medium">News and Announcements:</span> Stay informed with official
                updates and tournament news.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Choose Us</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="text-foreground font-medium">Reliable Information:</span> All content is carefully
                sourced and regularly updated for accuracy.
              </li>
              <li>
                <span className="text-foreground font-medium">User-Friendly Design:</span> Easily navigate schedules,
                results, and team details.
              </li>
              <li>
                <span className="text-foreground font-medium">Inclusive Coverage:</span> From widely followed leagues to
                smaller competitions, we cover them all.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Commitment</h2>
            <p>
              We are dedicated to creating a trusted and informative platform for cricket fans. Whether you are a casual
              follower checking upcoming matches or a devoted enthusiast tracking standings, t20leagueschedule.com strives
              to provide accurate, clear, and valuable content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Contact Us</h2>
            <p>We welcome feedback and questions from our users. Please reach out to us at:</p>
            <p className="mt-2">
              Email:{" "}
              <a href="mailto:info@t20leagueschedule.com" className="text-primary hover:underline">
                info@t20leagueschedule.com
              </a>
            </p>
          </section>

          <p className="text-foreground/90 pt-4 border-t border-glass-border">
            Thank you for visiting t20leagueschedule.com. We are committed to helping you stay updated with every T20
            league around the world.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
