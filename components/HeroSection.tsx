"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Globe, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

import  stadiumHero from "@/public/images/stadium-hero.jpg"
import cricketBall from "@/public/images/cricket-ball.png"

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8"
        >
          <span className="live-dot" />
          <span className="text-sm font-medium text-primary">Schedules & Fixtures for All T20 Cricket Leagues</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[1.05] mb-6 tracking-tight"
        >
          All Cricket Leagues
          <br />
          <span className="gradient-text">in One Place</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Stay updated with all T20 cricket leagues worldwide.
          Check match schedules, points tables, team squads, and venues — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold px-8 h-12 text-base shadow-glow rounded-xl">
            <a href="#leagues">
              Explore Leagues
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-foreground/10 text-foreground hover:bg-foreground/5 font-display font-semibold px-8 h-12 text-base rounded-xl">
            <a href="#schedule">
              <Play className="mr-2 w-4 h-4" />
              View Schedule
            </a>
          </Button>
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
