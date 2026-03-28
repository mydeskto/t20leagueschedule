"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Clock, Filter } from "lucide-react";
import { leagues } from "@/data/leagues";

function parseMatchStartIso(dateStr: string, timeStr: string): string | undefined {
  const combined = `${dateStr.trim()} ${timeStr.trim()}`;
  const d = new Date(combined);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString();
}

/** Start of local calendar day (ms) for “today” comparisons */
function startOfLocalDayMs(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

function getStartOfTodayMs(): number {
  return startOfLocalDayMs(new Date());
}

/** Match’s calendar day in local time (ms), or null if unparseable */
function parseMatchDayMs(dateStr: string): number | null {
  const d = new Date(dateStr.trim());
  if (Number.isNaN(d.getTime())) return null;
  return startOfLocalDayMs(d);
}

/** Sort key: full local date+time */
function parseMatchSortMs(dateStr: string, timeStr: string): number {
  const d = new Date(`${dateStr.trim()} ${timeStr.trim()}`);
  return Number.isNaN(d.getTime()) ? 0 : d.getTime();
}

function buildScheduleItemListJsonLd(
  matches: Array<{
    id: string;
    team1: string;
    team2: string;
    date: string;
    time: string;
    venue: string;
    league: string;
    leagueId: string;
  }>,
) {
  if (matches.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Upcoming T20 cricket matches",
    description: "Match schedule with teams, date, time, and venue across T20 leagues.",
    numberOfItems: matches.length,
    itemListElement: matches.map((m, index) => {
      const startDate = parseMatchStartIso(m.date, m.time);
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SportsEvent",
          "@id": `#match-${m.leagueId}-${m.id}`,
          name: `${m.team1} vs ${m.team2}`,
          sport: "Cricket",
          ...(startDate ? { startDate } : {}),
          location: {
            "@type": "Place",
            name: m.venue,
          },
          organizer: {
            "@type": "SportsOrganization",
            name: m.league,
          },
        },
      };
    }),
  };
}

const SchedulePreview = () => {
  const [activeLeague, setActiveLeague] = useState("all");
  const [visibleCount, setVisibleCount] = useState(5);

  const allMatches = useMemo(() => {
    const base = leagues
      .flatMap((l) => l.schedule.map((m) => ({ ...m, league: l.shortName, leagueId: l.id })))
      .filter((m) => activeLeague === "all" || m.leagueId === activeLeague);

    if (activeLeague === "all") {
      const todayMs = getStartOfTodayMs();
      return base
        .filter((m) => {
          const day = parseMatchDayMs(m.date);
          if (day === null) return false;
          return day >= todayMs;
        })
        .sort((a, b) => parseMatchSortMs(a.date, a.time) - parseMatchSortMs(b.date, b.time));
    }

    return [...base].sort((a, b) => parseMatchSortMs(a.date, a.time) - parseMatchSortMs(b.date, b.time));
  }, [activeLeague]);

  useEffect(() => {
    setVisibleCount(5);
  }, [activeLeague]);

  const visibleMatches = allMatches.slice(0, visibleCount);
  const canShowMore = allMatches.length > visibleCount;

  const scheduleJsonLd = useMemo(() => buildScheduleItemListJsonLd(allMatches), [allMatches]);

  return (
    <section id="schedule" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container-narrow relative">
        {scheduleJsonLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(scheduleJsonLd) }}
          />
        ) : null}
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
          <p className="text-muted-foreground">
            {activeLeague === "all"
              ? "Today and upcoming matches from every league, sorted by date"
              : "Full fixture list for this league, sorted by date"}
          </p>
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

        {/* Schedule rows (chronological; date headers when day changes) */}
        <div className="space-y-3">
          {visibleMatches.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              {activeLeague === "all"
                ? "No upcoming matches from today onward. Try a specific league or check back later."
                : "No fixtures to show."}
            </p>
          ) : null}
          {visibleMatches.map((match, i) => {
            const prev = i > 0 ? visibleMatches[i - 1] : null;
            const showDateHeader = !prev || prev.date !== match.date;
            return (
              <div key={`${match.leagueId}-${match.id}`} className="space-y-2">
                {showDateHeader ? (
                  <div className="sticky top-16 z-10 -mx-1 px-1 py-2 bg-background/95 backdrop-blur-sm border-b border-glass-border">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {match.date}
                    </p>
                  </div>
                ) : null}
                <motion.div
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
                      <Clock className="w-3.5 h-3.5 text-primary/50" />
                      {match.time}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary/50" />
                      <span className="truncate max-w-[140px]">{match.venue}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {canShowMore ? (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + 5)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              See more <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default SchedulePreview;
