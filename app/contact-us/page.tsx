"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    try {
      const result = await emailjs.send(
        "hellokashi",
        "template_ofl7tpn",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Szs8doA-A_rJ_Qngl",
      );

      if (result.status === 200) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-narrow px-4 md:px-8 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">Contact Us</h1>

        <div className="space-y-10 text-muted-foreground leading-relaxed max-w-3xl mb-16">
          <p className="text-foreground/90">
            At t20leagueschedule.com, we value our visitors and are committed to providing clear, helpful, and timely
            support. Whether you have questions, feedback, or suggestions, our team is here to assist you.
          </p>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">How to Contact Us</h2>
            <p className="mb-2">
              Email:{" "}
              <a href="mailto:info@t20leagueschedule.com" className="text-primary font-medium hover:underline">
                info@t20leagueschedule.com
              </a>
            </p>
            <p>
              You can reach us anytime via email. We aim to respond to all inquiries promptly and provide accurate
              information regarding T20 league schedules, fixtures, results, and other content on our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Contact Us</h2>
            <p className="mb-3">We encourage users to reach out for various reasons:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="text-foreground font-medium">Questions About Schedules:</span> If you need clarification
                on match dates, times, or venues.
              </li>
              <li>
                <span className="text-foreground font-medium">Feedback and Suggestions:</span> Help us improve the
                website by sharing your ideas.
              </li>
              <li>
                <span className="text-foreground font-medium">Corrections or Updates:</span> Notify us if you notice any
                errors, outdated information, or missing details.
              </li>
              <li>
                <span className="text-foreground font-medium">Technical Assistance:</span> Get help navigating the
                website, accessing content, or using features.
              </li>
              <li>
                <span className="text-foreground font-medium">Partnership Opportunities:</span> Reach out if you are
                interested in collaborations or working with us.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What to Expect</h2>
            <p className="mb-3">When you contact us, you can expect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A prompt, professional response from our team.</li>
              <li>Assistance that is clear, helpful, and user-focused.</li>
              <li>
                Respect for your privacy—any information you provide will only be used to respond to your inquiry.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Additional Information</h2>
            <p className="mb-3">
              While email is the primary method to contact us, we continually explore ways to improve communication,
              including possible future features like:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Online contact forms</li>
              <li>Social media support channels</li>
              <li>Community forums for cricket fans</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Privacy and Security</h2>
            <p>
              Your privacy matters. Any information you share when contacting us is used solely to respond to your
              inquiry and will never be sold or shared with third parties without your consent.
            </p>
          </section>

          <p className="text-foreground/90 pt-4 border-t border-glass-border">
            Thank you for visiting t20leagueschedule.com. We look forward to hearing from you and helping you get the
            most out of your T20 league experience.
          </p>
        </div>

        <section className="max-w-2xl rounded-2xl border border-glass-border bg-card/50 backdrop-blur-sm p-6 md:p-8">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Mail className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Send a message</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Prefer writing here? Fill out the form below and we&apos;ll reply by email.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                  Full name
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-background"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-background"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-subject" className="text-sm font-medium text-foreground">
                Subject
              </label>
              <Input
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className="bg-background"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                placeholder="How can we help?"
                required
              />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto gap-2">
              {isLoading ? "Sending…" : (
                <>
                  Send message <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </section>
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
