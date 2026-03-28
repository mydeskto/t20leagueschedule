import Link from "next/link";
import { leagues } from "@/data/leagues";
import { ArrowRight } from "lucide-react";
import logo from "@/public/images/T20 League Schedule.png"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative border-t border-glass-border">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container-narrow px-4 md:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image src={logo.src} alt="Logo" width={100} height={100} className="w-30 h-20 object-contain" />

            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your ultimate destination for cricket league schedules, scores, and standings worldwide.
            </p>
          </div>

          {/* Leagues */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Leagues</h4>
            <div className="space-y-2.5">
              {leagues.slice(0, 6).map((l) => (
                <Link key={l.id} href={`/${l.id}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2.5">
              <Link href="/#leagues" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Featured Leagues</Link>
              <Link href="/#schedule" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Schedule</Link>
              <Link href="/venues" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Venues</Link>
              <Link href="/faqs" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300">FAQ</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">Get the latest match updates straight to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 bg-foreground/5 border border-glass-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors duration-300"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors duration-300 shrink-0 flex items-center gap-1">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {["Twitter", "YouTube", "Instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-foreground/5 border border-glass-border flex items-center justify-center text-xs font-bold text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} t20leagueschedule. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors duration-300">
              Terms
            </Link>
            <Link href="/about-us" className="hover:text-foreground transition-colors duration-300">
              About
            </Link>
            <Link href="/contact-us" className="hover:text-foreground transition-colors duration-300">
              Contact
            </Link>
            <Link href="/disclaimer" className="hover:text-foreground transition-colors duration-300">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
