"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, ChevronDown, Clock, MapPin, Trophy, Users } from "lucide-react";
import { getLeagueById, getPointsTableYears, getPointsTableForYear } from "@/data/leagues";
import { venueImages } from "@/components/VenuesSection";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import stadiumHero from "@/public/images/stadium-hero.jpg"
import Image from "next/image";

// IPL team logos
import iplRcb from "@/public/images/IPL/ipl-rcb.png";
import iplSunrisers from "@/public/images/IPL/ipl-sunrisers.png";
import iplMumbai from "@/public/images/IPL/ipl-mumbai.png";
import iplKnight from "@/public/images/IPL/ipl-knight.png";
import iplRoyals from "@/public/images/IPL/ipl-royals.png";
import iplChennai from "@/public/images/IPL/ipl-chenai.png";
import iplKings from "@/public/images/IPL/ipl-kings.png";
import iplGujarat from "@/public/images/IPL/ipl-gujjar.png";
import iplLucknow from "@/public/images/IPL/ipl-lkhnow.png";
import iplDelhi from "@/public/images/IPL/ipl-delhi,.png";

const iplTeamLogos: Record<string, { src: string }> = {
  "Royal Challengers Bengaluru": { src: iplRcb.src },
  "Sunrisers Hyderabad": { src: iplSunrisers.src },
  "Mumbai Indians": { src: iplMumbai.src },
  "Kolkata Knight Riders": { src: iplKnight.src },
  "Rajasthan Royals": { src: iplRoyals.src },
  "Chennai Super Kings": { src: iplChennai.src },
  "Punjab Kings": { src: iplKings.src },
  "Gujarat Titans": { src: iplGujarat.src },
  "Lucknow Super Giants": { src: iplLucknow.src },
  "Delhi Capitals": { src: iplDelhi.src },
};

// PSL team logos
import pslIslamabadUnited from "@/public/images/PSL/psl-islamabad-united.png";
import pslKarachiKings from "@/public/images/PSL/psl-karachi-kings.png";
import pslLahoreQalandars from "@/public/images/PSL/psl-lahore-qalandars.png";
import pslMultanSultans from "@/public/images/PSL/psl-multan-sultan.png";
import pslPeshawarZalmi from "@/public/images/PSL/psl-peshawar-zalmi.png";
import pslQuettaGladiators from "@/public/images/PSL/psl-quetta-gladiators.png";
import pslHyderabadKingsmen from "@/public/images/PSL/Hyderabad-Kingsmen-logo-1.png";
import pslRawalpindiPindiz from "@/public/images/PSL/Rawalpindi-Pindiz-Logo.png";

const pslTeamLogos: Record<string, { src: string }> = {
  "Islamabad United": { src: pslIslamabadUnited.src },
  "Karachi Kings": { src: pslKarachiKings.src },
  "Lahore Qalandars": { src: pslLahoreQalandars.src },
  "Multan Sultans": { src: pslMultanSultans.src },
  "Peshawar Zalmi": { src: pslPeshawarZalmi.src },
  "Quetta Gladiators": { src: pslQuettaGladiators.src },
  "Hyderabad Kingsmen": { src: pslHyderabadKingsmen.src },
  "Rawalpindi Pindiz": { src: pslRawalpindiPindiz.src },
};

const tabs = ["Schedule", "Points Table", "Teams", "Venues", "FAQ"];

const leagueH1: Record<string, string> = {
  ipl: "IPL 2026 Schedule – Full Fixtures, Teams, Points Table & Venues",
  psl: "PSL 2026 Schedule – Full Fixtures, Teams, Points Table & Venues",
};

const LeaguePage = () => {
  const params = useParams();
  const leagueId = typeof params?.leagueId === "string" ? params.leagueId : "";
  const league = getLeagueById(leagueId || "");
  const [activeTab, setActiveTab] = useState("Schedule");
  const [selectedPointsYear, setSelectedPointsYear] = useState("2026");

  useEffect(() => {
    if (league) {
      const years = getPointsTableYears(league);
      const defaultYear = years.length > 0 ? years[0] : "2026";
      setSelectedPointsYear((prev) => (years.includes(prev) ? prev : defaultYear));
    }
  }, [league?.id]);

  if (!league) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">League Not Found</h1>
          <Link href="/" className="text-primary hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const pointsTableYears = getPointsTableYears(league);
  const displayYears = pointsTableYears.length > 0 ? pointsTableYears : ["2026"];
  const pointsTableData = getPointsTableForYear(league, selectedPointsYear);

  return (
    <div className="min-h-screen bg-background">


      {/* Hero */}
      <section className="relative pt-16 pb-8 min-h-[50vh] flex items-end overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className={`absolute top-[-200px] right-[-100px] w-[700px] h-[700px] rounded-full opacity-90 bg-gradient-to-br ${league.gradient}`}
            style={{ filter: `blur(120px)` }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-90 bg-gradient-to-tr ${league.gradient}`}
            style={{ filter: `blur(100px)` }}
          />
        </div>

        <div className="absolute inset-0">
          <Image src={stadiumHero.src} alt="Stadium" width={1000} height={1000} className="w-full h-full object-cover ken-burns opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />

        <div className="relative z-10 container-narrow px-4 md:px-8 pb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to All Leagues
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-medium text-primary tracking-wider uppercase">{league.season}</span>
            <div className="flex items-center gap-4 mt-2 mb-3">
              {league.logo && (
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden border border-glass-border">
                  <Image src={league.logo} alt="" width={72} height={72} className="w-full h-full object-contain" />
                </div>
              )}
              <h1 className="text-4xl md:text-6xl font-display font-extrabold text-foreground">
                {league.name}
              </h1>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Starts {league.startDate}
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                {league.teams.length} Teams
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-16 z-30 bg-transparant backdrop-blur-xl border-b border-glass-border">
        <div className="container-narrow px-4 md:px-8">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-4 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${activeTab === tab
                    ? "border-primary text-primary "
                    : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container-narrow px-4 md:px-8 py-12">
        {activeTab === "Schedule" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            {league.schedule.map((match, i) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card-hover p-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-6"
              >
                <div className="flex-1 font-medium text-foreground">
                  {match.team1} <span className="text-muted-foreground">vs</span> {match.team2}
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{match.date}</div>
                  <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{match.time}</div>
                  <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{match.venue}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "Points Table" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {displayYears.length > 1 && (
              <div className="flex items-center gap-2">
                <label htmlFor="points-year" className="text-sm font-medium text-muted-foreground">
                  Points table:
                </label>
                <div className="relative">
                  <select
                    id="points-year"
                    value={selectedPointsYear}
                    onChange={(e) => setSelectedPointsYear(e.target.value)}
                    className="appearance-none bg-card border border-glass-border rounded-xl pl-4 pr-9 py-2.5 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    {displayYears.map((y) => (
                      <option key={y} value={y}>
                        {y} Points Table
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            )}
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-0">
                  <thead>
                    <tr className="border-b border-glass-border">
                      <th className="text-left px-1 py-2 md:px-3 md:py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-8 md:w-auto">#</th>
                      <th className="text-left px-1 py-2 md:px-3 md:py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Team</th>
                      <th className="text-center px-1 py-2 md:px-3 md:py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">P</th>
                      <th className="text-center px-1 py-2 md:px-3 md:py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">W</th>
                      <th className="text-center px-1 py-2 md:px-3 md:py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">L</th>
                      <th className="text-center px-1 py-2 md:px-3 md:py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">NRR</th>
                      <th className="text-center px-1 py-2 md:px-3 md:py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pointsTableData.map((entry, i) => {
                      const pointsLogo =
                        league.id === "ipl"
                          ? iplTeamLogos[entry.team]
                          : league.id === "psl"
                            ? pslTeamLogos[entry.team]
                            : undefined;
                      return (
                        <motion.tr
                          key={entry.team}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.08 }}
                          className={`border-b border-glass-border/50 transition-colors hover:bg-glass ${i < 2 ? "bg-primary/5" : ""
                            }`}
                        >
                          <td className="px-1 py-2 md:px-3 md:py-4">
                            <span className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold ${i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                              }`}>
                              {i + 1}
                            </span>
                          </td>
                          <td className="px-1 py-2 md:px-3 md:py-4">
                            <div className="flex items-center gap-2 md:gap-3">
                              {pointsLogo ? (
                                <div className="w-7 h-7 md:w-9 md:h-9 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                                  <Image
                                    src={pointsLogo.src}
                                    alt={entry.team}
                                    width={36}
                                    height={36}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              ) : null}
                              <span className="hidden md:inline font-medium text-foreground">{entry.team}</span>
                            </div>
                          </td>
                          <td className="px-1 py-2 md:px-3 md:py-4 text-center text-muted-foreground text-xs md:text-sm">{entry.played}</td>
                          <td className="px-1 py-2 md:px-3 md:py-4 text-center text-foreground font-medium text-xs md:text-sm">{entry.won}</td>
                          <td className="px-1 py-2 md:px-3 md:py-4 text-center text-muted-foreground text-xs md:text-sm">{entry.lost}</td>
                          <td className="px-1 py-2 md:px-3 md:py-4 text-center text-muted-foreground text-xs md:text-sm">{entry.nrr}</td>
                          <td className="px-1 py-2 md:px-3 md:py-4 text-center font-bold text-primary text-xs md:text-sm">{entry.points}</td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "Teams" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {league.teams.map((team, i) => {
              const isPsl = league.id === "psl";
              const logo =
                league.id === "ipl"
                  ? iplTeamLogos[team.name]
                  : isPsl
                    ? pslTeamLogos[team.name]
                    : undefined;

              return (
                <motion.div
                  key={team.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card-hover p-6 flex items-center gap-4"
                >
                  {logo ? (
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden">
                      <Image
                        src={logo.src}
                        alt={team.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-lg"
                      style={{ backgroundColor: team.color + "22", color: team.color }}
                    >
                      {team.shortName}
                    </div>
                  )}
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{team.name}</h3>
                    <p className="text-sm text-muted-foreground">{league.shortName}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {activeTab === "Venues" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {league.venues.map((venue, i) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-hover group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={venueImages[venue.image] || venueImages.lahore}
                    alt={venue.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{venue.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{venue.city}</div>
                    <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" />{venue.capacity}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "FAQ" && (
          <FAQSection faqs={league.faqs} title={`${league.shortName} FAQ`} />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default LeaguePage;
