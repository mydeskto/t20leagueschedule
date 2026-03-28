import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | t20leagueschedule.com",
  description:
    "Terms and Conditions for using t20leagueschedule.com. Read our rules for use of the website, content, liability, and contact information.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-narrow px-4 md:px-8 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">Terms &amp; Conditions</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed max-w-full">
          <p className="text-foreground/90">
            Welcome to t20leagueschedule.com. By accessing or using our website, you agree to comply with and be bound by
            the following Terms &amp; Conditions. Please read them carefully before using the site.
          </p>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">1. Use of the Website</h2>
            <p className="mb-4">You may access and use t20leagueschedule.com for personal, non-commercial purposes only.</p>
            <p className="mb-4">
              You agree not to use the site for any unlawful activity or to post content that is harmful, abusive, or
              infringing on others&apos; rights.
            </p>
            <p>
              Unauthorized use of the website, including attempts to disrupt or manipulate content, is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">2. Content Accuracy</h2>
            <p className="mb-4">
              All information on the site, including match schedules, fixtures, standings, and news, is provided for
              informational purposes only.
            </p>
            <p className="mb-4">
              While we strive to keep information accurate and up-to-date, t20leagueschedule.com does not guarantee the
              completeness or correctness of any content.
            </p>
            <p>
              We are not responsible for any loss or inconvenience caused by reliance on the information provided on this
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">3. Intellectual Property</h2>
            <p className="mb-4">
              All content on the website, including text, images, logos, and design elements, is the property of
              t20leagueschedule.com unless otherwise stated.
            </p>
            <p>
              You may not reproduce, distribute, or use any content from this site without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">4. External Links</h2>
            <p className="mb-4">Our website may include links to external websites. These links are provided for convenience only.</p>
            <p>
              t20leagueschedule.com is not responsible for the content, accuracy, or privacy practices of any
              third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">5. Advertisements and Third-Party Services</h2>
            <p className="mb-4">
              We may display ads, sponsored content, or use third-party analytics tools on our site.
            </p>
            <p>
              Clicking on ads or engaging with third-party services is at your own discretion, and we are not responsible
              for any issues arising from such interactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              t20leagueschedule.com and its team are not liable for any direct, indirect, incidental, or consequential
              damages resulting from your use of the website.
            </p>
            <p>
              Users agree to use the website at their own risk and acknowledge that schedules or information may change
              without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">7. Changes to Terms &amp; Conditions</h2>
            <p className="mb-4">We may update these Terms &amp; Conditions at any time.</p>
            <p>
              Changes will be posted on this page, and continued use of the website after updates constitutes acceptance of
              the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">8. Governing Law</h2>
            <p className="mb-4">
              These Terms &amp; Conditions are governed by the laws applicable to the location of the website operators.
            </p>
            <p>
              Any disputes arising from the use of this website will be handled according to applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">9. Contact Information</h2>
            <p className="mb-2">If you have questions or concerns regarding these Terms &amp; Conditions, please contact us:</p>
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
