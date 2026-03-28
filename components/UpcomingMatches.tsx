"use client";
import { motion } from "framer-motion";
import { Clock, MapPin, Flame } from "lucide-react";
import { leagues } from "@/data/leagues";

const UpcomingMatches = () => {
  const allMatches = leagues
    .flatMap((l) => l.schedule.map((m) => ({ ...m, league: l.shortName, leagueColor: l.color })))
    .slice(0, 6);

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 px-4 py-1.5 rounded-full mb-5">
            <Flame className="w-3.5 h-3.5 text-destructive" />
            <span className="text-xs font-semibold text-destructive uppercase tracking-wider">Upcoming</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Next Matches
          </h2>
          <p className="text-muted-foreground">Don’t miss the action! See the upcoming matches for all ongoing T20 leagues in 2026. Get match dates, team details, venues, and live points tables for IPL, PSL, BBL, CPL, and other major domestic and women’s leagues.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {allMatches.map((match, i) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-glass-border bg-card/50 backdrop-blur-sm p-6 transition-all duration-500 hover:border-primary/20 hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{ backgroundColor: match.leagueColor + "18", color: match.leagueColor }}
                  >
                    {match.league}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">{match.date}</span>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-center flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-glass-border flex items-center justify-center mx-auto mb-2 group-hover:border-primary/20 transition-colors">
                      <span className="font-display font-bold text-sm text-foreground">
                        {match.team1.split(" ").map(w => w[0]).join("").slice(0, 3)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate max-w-[100px] mx-auto">{match.team1}</p>
                  </div>
                  <div className="px-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="text-xs font-display font-bold text-primary">VS</span>
                    </div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-glass-border flex items-center justify-center mx-auto mb-2 group-hover:border-primary/20 transition-colors">
                      <span className="font-display font-bold text-sm text-foreground">
                        {match.team2.split(" ").map(w => w[0]).join("").slice(0, 3)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate max-w-[100px] mx-auto">{match.team2}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-glass-border pt-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary/60" />
                    <span>{match.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary/60" />
                    <span className="truncate max-w-[120px]">{match.venue}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;
