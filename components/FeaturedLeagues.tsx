"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, TrendingUp } from "lucide-react";
import { leagues, womenLeagues, DomesticLeagues } from "@/data/leagues";
import gsap from "gsap";

const leagueEmojis: Record<string, string> = {
  psl: "🇵🇰",
  ipl: "🇮🇳",
  bbl: "🇦🇺",
  cpl: "🏝️",
  sa20: "🇿🇦",
  ilt20: "🇦🇪",
  bpl: "🇧🇩",
  "the-hundred": "🇬🇧",
  lpl: "🇱🇰",
  mlc: "🇺🇸",
  npl: "🇳🇵",
};

const womenLeagueEmojis: Record<string, string> = {
  wpl: "🇮🇳",
  wbbl: "🇦🇺",
  wcpl: "🏝️",
  "the-hundred-women": "🇬🇧",
};

const FeaturedLeagues = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const runAnimation = () => {
      if (!sectionRef.current) return;
      const cards = sectionRef.current.querySelectorAll(".league-card");
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" }
        );
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="leagues" ref={sectionRef} className="section-padding relative">
      {/* Section background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-5">
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Featured Leagues</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            World's Top Cricket Leagues
          </h2>
          <p className="text-muted-foreground max-w-full mx-auto text-base">
          Check out the <Link  href={'/'} className="text-amber-600">latest schedules</Link>, match dates, and team details for the biggest T20 cricket leagues worldwide. Stay updated with all fixtures, points tables, and venues for IPL,PSL ,BBL, CPL, & other top leagues.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {leagues.map((league) => (
            <Link
              key={league.id}
              href={`/${league.id}`}
              className="league-card group relative overflow-hidden rounded-2xl border border-glass-border bg-card/50 backdrop-blur-sm p-6 flex flex-col opacity-0 transition-all duration-500 hover:border-orange-400/60 hover:shadow-[0_22px_60px_-28px_rgba(34,197,94,0.55),0_0_45px_rgba(251,146,60,0.22)] hover:-translate-y-1"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-yellow-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
              <div className="flex items-start justify-between mb-5">
                {league.logo ? (
                <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden border border-glass-border">
                  <Image src={league.logo} alt="" width={48} height={48} className="w-full h-full object-contain" />
                </div>
                ) : (
                <span className="text-3xl">{leagueEmojis[league.id] || "🏏"}</span>
                )}
                <span className="text-[10px] font-semibold text-muted-foreground bg-foreground/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                {league.season}
                </span>
              </div>
              
              <h3 className={`text-lg bg-gradient-to-r ${league.gradient} bg-clip-text text-transparent mb-4 inline`}>
          {league.shortName}
          </h3>
              {/* <h3 className="font-display font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                
              </h3> */}
              <p className="text-sm text-muted-foreground mb-5">{league.name}</p>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                <span>{league.startDate}</span>
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                View  {league.shortName} Schedule <ArrowRight className="w-4 h-4" />
              </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Domestic T20 Leagues */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-foreground/5 border border-glass-border px-4 py-1.5 rounded-full mb-5">
            <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Domestic T20</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-display font-bold mb-3">
            Domestic T20 Leagues
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          Check out the key domestic T20 tournaments taking place in 2026. See the complete match Schedule & fixtures, including dates, team squads, venues, and points tables for all major domestic leagues worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {DomesticLeagues.map((league) => (
            <div
              key={league.id}
              className="league-card group relative overflow-hidden rounded-2xl border border-glass-border bg-card/50 backdrop-blur-sm p-6 flex flex-col opacity-0 transition-all duration-500 hover:border-orange-400/60 hover:shadow-[0_22px_60px_-28px_rgba(34,197,94,0.55),0_0_45px_rgba(251,146,60,0.22)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-yellow-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  {league.logo ? (
                    <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden border border-glass-border">
                      <Image src={league.logo} alt="" width={48} height={48} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <span className="text-3xl">{leagueEmojis[league.id] || "🏏"}</span>
                  )}
                  <span className="text-[10px] font-semibold text-muted-foreground bg-foreground/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {league.season}
                  </span>
                </div>
                </div>

                <h3 className="font-display font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {league.shortName}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{league.name}</p>
                <p className="text-xs text-muted-foreground mb-4">{league.country}</p>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    {league.startDate} – {league.endDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Women's Premier Leagues */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-5">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Women&apos;s Cricket</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-display font-bold mb-3">
            Women&apos;s Cricket Leagues
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          Intro- Check out the key women’s T20 tournaments taking place in 2026. See the complete match schedule & fixtures, including dates, team squads, venues, and points tables for all major women’s cricket leagues worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {womenLeagues.map((league) => (
            <div
              key={league.id}
              className="league-card group relative overflow-hidden rounded-2xl border border-glass-border bg-card/50 backdrop-blur-sm p-6 flex flex-col opacity-0 transition-all duration-500 hover:border-orange-400/60 hover:shadow-[0_22px_60px_-28px_rgba(34,197,94,0.55),0_0_45px_rgba(251,146,60,0.22)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-yellow-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-3xl">{womenLeagueEmojis[league.id] || "🏏"}</span>
                  <span className="text-[10px] font-semibold text-muted-foreground bg-foreground/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Season {league.seasonsTill2026}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                  {league.shortName}
                </h3>
                <p className="text-sm text-muted-foreground mb-5">{league.name}</p>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{league.window2026}</span>
                </div>

                <p className="mt-4 text-xs text-muted-foreground">{league.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLeagues;
