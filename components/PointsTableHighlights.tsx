"use client";
import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";
import { leagues } from "@/data/leagues";

const PointsTableHighlights = () => {
  const topLeagues = leagues.slice(0, 4);

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-4 py-1.5 rounded-full mb-5">
            <Medal className="w-3.5 h-3.5 text-secondary" />
            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Standings</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Points Table Highlights</h2>
          <p className="text-muted-foreground">Top teams across major leagues</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {topLeagues.map((league, li) => (
            <motion.div
              key={league.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: li * 0.12 }}
              className="rounded-2xl border border-glass-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg">{league.shortName}</h3>
              </div>

              <div className="space-y-2">
                {league.pointsTable.slice(0, 4).map((entry, i) => (
                  <div
                    key={entry.team}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                      i === 0 ? "bg-primary/8 border border-primary/15" : "hover:bg-foreground/[0.03]"
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                      i === 0 ? "bg-primary text-primary-foreground" : "bg-foreground/5 text-muted-foreground"
                    }`}>
                      {i + 1}
                    </span>
                    <span className="flex-1 text-sm font-medium text-foreground truncate">{entry.team}</span>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>P{entry.played}</span>
                      <span>W{entry.won}</span>
                      <span className="font-bold text-primary">{entry.points}pts</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointsTableHighlights;
