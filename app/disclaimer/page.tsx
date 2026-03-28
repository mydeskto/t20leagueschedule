import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-narrow px-4 md:px-8 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">Disclaimer</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed max-w-3xl">
          <p className="text-foreground/90">
            The information provided on t20leagueschedule.com is for general informational purposes only. While we strive
            to keep all content accurate and up-to-date, we make no guarantees regarding the completeness, reliability,
            or timeliness of any information presented on this website.
          </p>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Accuracy of Information</h2>
            <p className="mb-4">
              <span className="text-foreground font-medium">Fixtures, Schedules, and Results:</span> All match dates,
              times, venues, and scores are sourced from official announcements. However, schedules may change due to
              unforeseen circumstances. Users are advised to verify information through official league sources before
              making any plans.
            </p>
            <p>
              <span className="text-foreground font-medium">Team and Player Information:</span> Rosters, player stats,
              and related information are collected from publicly available sources. We do our best to ensure accuracy,
              but errors or omissions may occur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">No Professional Advice</h2>
            <p className="mb-4">
              The content on t20leagueschedule.com is not intended as professional, financial, or legal advice.
            </p>
            <p>
              Users should not rely solely on the website&apos;s information for decision-making, betting, or any official
              use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">External Links</h2>
            <p className="mb-4">
              Our website may include links to third-party websites. We are not responsible for the content, policies, or
              practices of these external sites.
            </p>
            <p>
              Linking to external content does not imply endorsement by t20leagueschedule.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              t20leagueschedule.com and its team will not be held liable for any direct, indirect, incidental, or
              consequential damages arising from the use of the website.
            </p>
            <p>
              Users agree to use the site at their own risk and acknowledge that schedules, results, and other
              information may change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All content, design elements, and materials on this site are the property of t20leagueschedule.com, unless
              otherwise stated.
            </p>
            <p>
              Reproduction, distribution, or use of content without written permission is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Updates to Disclaimer</h2>
            <p className="mb-4">
              We may update this disclaimer at any time without prior notice.
            </p>
            <p>
              Changes will be posted on this page, and continued use of the website constitutes acceptance of the updated
              disclaimer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Contact Us</h2>
            <p className="mb-2">If you have questions regarding this disclaimer, please contact us:</p>
            <p>
              Email:{" "}
              <a href="mailto:info@t20leagueschedule.com" className="text-primary hover:underline">
                info@t20leagueschedule.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
