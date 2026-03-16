"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Filter } from "lucide-react";
import { leagues } from "@/data/leagues";

const SchedulePreview = () => {
  const [activeLeague, setActiveLeague] = useState("all");

  const allMatches = leagues
    .flatMap((l) => l.schedule.map((m) => ({ ...m, league: l.shortName, leagueId: l.id })))
    .filter((m) => activeLeague === "all" || m.leagueId === activeLeague);

  return (
    <section id="schedule" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-5">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Schedule</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Upcoming Schedule</h2>
          <p className="text-muted-foreground">Complete match schedule across all leagues</p>
        </motion.div>

        {/* Filter */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
          <button
            onClick={() => setActiveLeague("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              activeLeague === "all"
                ? "bg-primary text-primary-foreground shadow-glow"
                : "bg-foreground/5 border border-glass-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
            }`}
          >
            All Leagues
          </button>
          {leagues.map((l) => (
            <button
              key={l.id}
              onClick={() => setActiveLeague(l.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeLeague === l.id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-foreground/5 border border-glass-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {l.shortName}
            </button>
          ))}
        </div>

        {/* Schedule rows */}
        <div className="space-y-3">
          {allMatches.map((match, i) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group rounded-xl border border-glass-border bg-card/40 backdrop-blur-sm p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 transition-all duration-300 hover:border-primary/20 hover:bg-card/60"
            >
              <span className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full self-start md:self-auto shrink-0 uppercase tracking-wider">
                {match.league}
              </span>
              <div className="flex-1 font-medium text-foreground text-sm md:text-base">
                {match.team1} <span className="text-muted-foreground mx-1">vs</span> {match.team2}
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary/50" />
                  {match.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary/50" />
                  {match.time}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary/50" />
                  <span className="truncate max-w-[140px]">{match.venue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchedulePreview;
