import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-narrow px-4 md:px-8 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed max-w-3xl">
          <p className="text-foreground/90">
            At t20leagueschedule.com, protecting your privacy is important to us. This Privacy Policy explains how we
            collect, use, and safeguard the information you provide while using our website. By accessing or using our
            site, you agree to the practices described below.
          </p>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <span className="text-foreground font-medium">Personal Information:</span> Such as your email address if
                you contact us or subscribe to updates.
              </li>
              <li>
                <span className="text-foreground font-medium">Non-Personal Information:</span> Such as IP addresses,
                browser type, device information, and pages visited. This helps us understand user behavior and improve
                the website.
              </li>
              <li>
                <span className="text-foreground font-medium">Cookies and Tracking Technologies:</span> We may use
                cookies or similar tools to enhance your browsing experience, remember preferences, and analyze website
                traffic.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">How We Use Information</h2>
            <p className="mb-3">Information collected may be used for purposes including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responding to inquiries, questions, or feedback.</li>
              <li>Sending updates, newsletters, or notifications about T20 leagues.</li>
              <li>Improving website design, content, and functionality.</li>
              <li>Analyzing usage patterns to enhance the user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Sharing of Information</h2>
            <p className="mb-4">
              We respect your privacy and do not sell or share your personal information with third parties except in
              the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>When required by law or legal process.</li>
              <li>To protect our rights, property, or safety, or that of our users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your information. However, no
              method of online transmission or storage is completely secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Third-Party Services</h2>
            <p>
              Our website may include links to external websites or use third-party services such as analytics or
              advertising networks. These third parties have their own privacy practices. We encourage you to review their
              policies before interacting with them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Children&apos;s Privacy</h2>
            <p>
              t20leagueschedule.com is not intended for children under 13 years old. We do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Updates to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the
              updated policy will take effect immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Contact Us</h2>
            <p className="mb-2">If you have questions or concerns regarding this Privacy Policy, please contact us:</p>
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
