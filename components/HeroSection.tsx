"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Globe, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import  stadiumHero from "@/public/images/stadium-hero.jpg"
import cricketBall from "@/public/images/cricket-ball.png"

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef(
    Autoplay(
      {
        delay: 5000,
        stopOnInteraction: false,
      },
    ),
  );

  const slides = [
    {
      id: "all",
      badge: "Schedules & Fixtures for All T20 Cricket Leagues",
      titleTop: "All Cricket Leagues",
      titleAccent: "in One Place",
      description:
        "Stay updated with all T20 cricket leagues worldwide. Check match schedules, points tables, team squads, and venues — all in one place.",
      primaryHref: "#leagues",
      primaryLabel: "Explore Leagues",
      secondaryHref: "#schedule",
      secondaryLabel: "View Schedule",
    },
    {
      id: "ipl",
      badge: "IPL 2026 Schedule, Points Table & Teams",
      titleTop: "IPL 2026",
      titleAccent: "Complete Coverage",
      description:
        "Follow the full IPL 2026 season with fixtures, points table updates, teams, and venues. Everything you need for the Indian Premier League.",
      primaryHref: "/ipl",
      primaryLabel: "Explore IPL",
      secondaryHref: "/ipl#schedule",
      secondaryLabel: "IPL Schedule",
    },
    {
      id: "psl",
      badge: "PSL 2026 Schedule, Points Table & Teams",
      titleTop: "PSL 2026",
      titleAccent: "Complete Coverage",
      description:
        "Track PSL 2026 with fixtures, standings, teams, and venues. Get the latest Pakistan Super League updates in one place.",
      primaryHref: "/psl",
      primaryLabel: "Explore PSL",
      secondaryHref: "/psl#schedule",
      secondaryLabel: "PSL Schedule",
    },
  ] as const;

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const bg = heroRef.current.querySelector(".hero-bg") as HTMLElement;
        if (bg) bg.style.transform = `scale(1.15) translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="hero-bg absolute inset-0 ken-burns">
        <img src={stadiumHero.src} alt="Cricket stadium" className="w-full h-full object-cover" />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-background/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_hsl(var(--background))_80%)]" />

      {/* Animated accent blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Floating cricket balls */}
      <motion.img
        src={cricketBall.src}
        alt=""
        className="absolute w-16 h-16 md:w-24 md:h-24 right-[12%] top-[32%] floating-element opacity-40"
        initial={{ opacity: 0, scale: 0, rotate: -30 }}
        animate={{ opacity: 0.4, scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
      />
      <motion.img
        src={cricketBall.src}
        alt=""
        className="absolute w-10 h-10 md:w-16 md:h-16 left-[6%] bottom-[28%] floating-element opacity-25"
        style={{ animationDelay: "3s" }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center  mx-auto px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <Carousel
            className="w-full"
            opts={{ loop: true, align: "center" }}
            plugins={[autoplayRef.current]}
          >
            <CarouselContent className="ml-0">
              {slides.map((s) => (
                <CarouselItem key={s.id} className="pl-0">
                  <div className="flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8">
                      <span className="text-sm font-medium text-primary">{s.badge}</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[1.05] mb-6 tracking-tight">
                      {s.titleTop}
                      <br />
                      <span className="gradient-text">{s.titleAccent}</span>
                    </h1>

                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                      {s.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold px-8 h-12 text-base shadow-glow rounded-xl"
                      >
                        <a href={s.primaryHref}>
                          {s.primaryLabel}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-foreground/10 text-foreground hover:bg-foreground/5 font-display font-semibold px-8 h-12 text-base rounded-xl"
                      >
                        <a href={s.secondaryHref}>
                          <Play className="mr-2 w-4 h-4" />
                          {s.secondaryLabel}
                        </a>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: "8+", label: "Leagues", icon: Globe },
            { value: "200+", label: "Matches", icon: Zap },
            { value: "50+", label: "Teams", icon: Trophy },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-2 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="text-2xl md:text-3xl font-display font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
