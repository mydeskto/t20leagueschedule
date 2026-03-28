export type LeagueStatus = "Confirmed" | "Window based";

export interface League {
  id: string;
  name: string;
  shortName: string;
  country: string;
  season: string;
  seasonsTill2026: number;
  startDate: string;
  endDate: string;
  status: LeagueStatus;
  gradient?: string;
  color: string;
  teams: Team[];
  schedule: Match[];
  /** Current/default points table (used when pointsTableByYear is not set) */
  pointsTable: PointsEntry[];
  /** Points table by year; when set, year dropdown is shown and this data is used */
  pointsTableByYear?: Record<string, PointsEntry[]>;
  venues: Venue[];
  faqs: FAQ[];
  /** SEO title for the league page */
  seoTitle?: string;
  /** Meta description for the league page */
  seoDescription?: string;
  /** League logo path (e.g. /images/IPL-Logo.png) for nav, cards, etc. */
  logo?: string;
  /** Short on-page intro / SEO body copy. Include "t20leagueschedule.com" to auto-link to home (/) on league pages. */
  intro?: string;
  /** Official league site (label shown with link) */
  externalLink?: { label: string; href: string };
}

export interface WomenLeague {
  id: string;
  name: string;
  shortName: string;
  country: string;
  seasonsTill2026: number;
  window2026: string;
  seoTitle?: string;
  seoDescription?: string;
  /** Include "t20leagueschedule.com" to auto-link to home (/) when rendered on league-style pages. */
  intro?: string;
  externalLink?: { label: string; href: string };
}

export interface Team {
  name: string;
  shortName: string;
  color: string;
}

export interface Match {
  id: string;
  team1: string;
  team2: string;
  date: string;
  time: string;
  venue: string;
  status: "upcoming" | "live" | "completed";
  result?: string;
}

export interface PointsEntry {
  team: string;
  played: number;
  won: number;
  lost: number;
  nrr: string;
  points: number;
}

export interface Venue {
  name: string;
  city: string;
  capacity: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const leagues: League[] = [
  {
    id: "ipl-schedule",
    name: "Indian Premier League",
    shortName: "IPL",
    country: "India",
    season: "Season 19",
    seasonsTill2026: 19,
    startDate: "28 March 2026",
    endDate: "31 May 2026",
    status: "Confirmed",
    gradient: 'from-yellow-400 via-orange-500 to-purple-600',
    color: "#3b82f6",
    teams: [
      { name: "Royal Challengers Bengaluru", shortName: "RCB", color: "#e11d48" },
      { name: "Sunrisers Hyderabad", shortName: "SRH", color: "#f7a721" },
      { name: "Mumbai Indians", shortName: "MI", color: "#004ba0" },
      { name: "Kolkata Knight Riders", shortName: "KKR", color: "#3b225f" },
      { name: "Rajasthan Royals", shortName: "RR", color: "#ea1a85" },
      { name: "Chennai Super Kings", shortName: "CSK", color: "#f9cd05" },
      { name: "Punjab Kings", shortName: "PBKS", color: "#ed1b24" },
      { name: "Gujarat Titans", shortName: "GT", color: "#1c4f9c" },
      { name: "Lucknow Super Giants", shortName: "LSG", color: "#a72056" },
      { name: "Delhi Capitals", shortName: "DC", color: "#004c93" },
    ],
    schedule: [
      { id: "ipl1", team1: "Royal Challengers Bengaluru", team2: "Sunrisers Hyderabad", date: "Mar 28, 2026", time: "19:30", venue: "Bengaluru", status: "upcoming" },
      { id: "ipl2", team1: "Kolkata Knight Riders", team2: "Mumbai Indians", date: "Mar 29, 2026", time: "19:30", venue: "Kolkata", status: "upcoming" },
      { id: "ipl3", team1: "Chennai Super Kings", team2: "Rajasthan Royals", date: "Mar 30, 2026", time: "19:30", venue: "Chennai", status: "upcoming" },
      { id: "ipl4", team1: "Gujarat Titans", team2: "Punjab Kings", date: "Mar 31, 2026", time: "19:30", venue: "Ahmedabad", status: "upcoming" },
      { id: "ipl5", team1: "Delhi Capitals", team2: "Lucknow Super Giants", date: "Apr 1, 2026", time: "19:30", venue: "Delhi", status: "upcoming" },
      { id: "ipl6", team1: "Sunrisers Hyderabad", team2: "Kolkata Knight Riders", date: "Apr 2, 2026", time: "19:30", venue: "Hyderabad", status: "upcoming" },
      { id: "ipl7", team1: "Punjab Kings", team2: "Chennai Super Kings", date: "Apr 3, 2026", time: "19:30", venue: "Mullanpur", status: "upcoming" },
      { id: "ipl8", team1: "Mumbai Indians", team2: "Delhi Capitals", date: "Apr 4, 2026", time: "15:30", venue: "Mumbai", status: "upcoming" },
      { id: "ipl9", team1: "Rajasthan Royals", team2: "Gujarat Titans", date: "Apr 4, 2026", time: "19:30", venue: "Guwahati", status: "upcoming" },
      { id: "ipl10", team1: "Lucknow Super Giants", team2: "Sunrisers Hyderabad", date: "Apr 5, 2026", time: "15:30", venue: "Lucknow", status: "upcoming" },
      { id: "ipl11", team1: "Chennai Super Kings", team2: "Royal Challengers Bengaluru", date: "Apr 5, 2026", time: "19:30", venue: "Chennai", status: "upcoming" },
      { id: "ipl12", team1: "Punjab Kings", team2: "Kolkata Knight Riders", date: "Apr 6, 2026", time: "19:30", venue: "Mullanpur", status: "upcoming" },
      { id: "ipl13", team1: "Mumbai Indians", team2: "Rajasthan Royals", date: "Apr 7, 2026", time: "19:30", venue: "Mumbai", status: "upcoming" },
      { id: "ipl14", team1: "Gujarat Titans", team2: "Delhi Capitals", date: "Apr 8, 2026", time: "19:30", venue: "Ahmedabad", status: "upcoming" },
      { id: "ipl15", team1: "Lucknow Super Giants", team2: "Kolkata Knight Riders", date: "Apr 9, 2026", time: "19:30", venue: "Lucknow", status: "upcoming" },
      { id: "ipl16", team1: "Royal Challengers Bengaluru", team2: "Rajasthan Royals", date: "Apr 10, 2026", time: "19:30", venue: "Bengaluru", status: "upcoming" },
      { id: "ipl17", team1: "Sunrisers Hyderabad", team2: "Punjab Kings", date: "Apr 11, 2026", time: "15:30", venue: "Hyderabad", status: "upcoming" },
      { id: "ipl18", team1: "Delhi Capitals", team2: "Chennai Super Kings", date: "Apr 11, 2026", time: "19:30", venue: "Delhi", status: "upcoming" },
      { id: "ipl19", team1: "Gujarat Titans", team2: "Lucknow Super Giants", date: "Apr 12, 2026", time: "15:30", venue: "Ahmedabad", status: "upcoming" },
      { id: "ipl20", team1: "Royal Challengers Bengaluru", team2: "Mumbai Indians", date: "Apr 12, 2026", time: "19:30", venue: "Bengaluru", status: "upcoming" },
      { id: "ipl21", team1: "Rajasthan Royals", team2: "Sunrisers Hyderabad", date: "Apr 13, 2026", time: "19:30", venue: "Guwahati", status: "upcoming" },
      { id: "ipl22", team1: "Kolkata Knight Riders", team2: "Chennai Super Kings", date: "Apr 14, 2026", time: "19:30", venue: "Kolkata", status: "upcoming" },
      { id: "ipl23", team1: "Lucknow Super Giants", team2: "Royal Challengers Bengaluru", date: "Apr 15, 2026", time: "19:30", venue: "Lucknow", status: "upcoming" },
      { id: "ipl24", team1: "Punjab Kings", team2: "Mumbai Indians", date: "Apr 16, 2026", time: "19:30", venue: "Mullanpur", status: "upcoming" },
      { id: "ipl25", team1: "Kolkata Knight Riders", team2: "Gujarat Titans", date: "Apr 17, 2026", time: "19:30", venue: "Kolkata", status: "upcoming" },
      { id: "ipl26", team1: "Delhi Capitals", team2: "Royal Challengers Bengaluru", date: "Apr 18, 2026", time: "15:30", venue: "Delhi", status: "upcoming" },
      { id: "ipl27", team1: "Chennai Super Kings", team2: "Sunrisers Hyderabad", date: "Apr 18, 2026", time: "19:30", venue: "Chennai", status: "upcoming" },
      { id: "ipl28", team1: "Rajasthan Royals", team2: "Kolkata Knight Riders", date: "Apr 19, 2026", time: "15:30", venue: "Guwahati", status: "upcoming" },
      { id: "ipl29", team1: "Lucknow Super Giants", team2: "Punjab Kings", date: "Apr 19, 2026", time: "19:30", venue: "Lucknow", status: "upcoming" },
      { id: "ipl30", team1: "Mumbai Indians", team2: "Gujarat Titans", date: "Apr 20, 2026", time: "19:30", venue: "Mumbai", status: "upcoming" },
      { id: "ipl31", team1: "Delhi Capitals", team2: "Sunrisers Hyderabad", date: "Apr 21, 2026", time: "19:30", venue: "Delhi", status: "upcoming" },
      { id: "ipl32", team1: "Rajasthan Royals", team2: "Lucknow Super Giants", date: "Apr 22, 2026", time: "19:30", venue: "Guwahati", status: "upcoming" },
      { id: "ipl33", team1: "Chennai Super Kings", team2: "Mumbai Indians", date: "Apr 23, 2026", time: "19:30", venue: "Chennai", status: "upcoming" },
      { id: "ipl34", team1: "Gujarat Titans", team2: "Royal Challengers Bengaluru", date: "Apr 24, 2026", time: "19:30", venue: "Ahmedabad", status: "upcoming" },
      { id: "ipl35", team1: "Punjab Kings", team2: "Delhi Capitals", date: "Apr 25, 2026", time: "15:30", venue: "Mullanpur", status: "upcoming" },
      { id: "ipl36", team1: "Sunrisers Hyderabad", team2: "Rajasthan Royals", date: "Apr 25, 2026", time: "19:30", venue: "Hyderabad", status: "upcoming" },
      { id: "ipl37", team1: "Chennai Super Kings", team2: "Gujarat Titans", date: "Apr 26, 2026", time: "15:30", venue: "Chennai", status: "upcoming" },
      { id: "ipl38", team1: "Kolkata Knight Riders", team2: "Lucknow Super Giants", date: "Apr 26, 2026", time: "19:30", venue: "Kolkata", status: "upcoming" },
      { id: "ipl39", team1: "Royal Challengers Bengaluru", team2: "Delhi Capitals", date: "Apr 27, 2026", time: "19:30", venue: "Bengaluru", status: "upcoming" },
      { id: "ipl40", team1: "Rajasthan Royals", team2: "Punjab Kings", date: "Apr 28, 2026", time: "19:30", venue: "Guwahati", status: "upcoming" },
      { id: "ipl41", team1: "Sunrisers Hyderabad", team2: "Mumbai Indians", date: "Apr 29, 2026", time: "19:30", venue: "Hyderabad", status: "upcoming" },
      { id: "ipl42", team1: "Royal Challengers Bengaluru", team2: "Gujarat Titans", date: "Apr 30, 2026", time: "19:30", venue: "Bengaluru", status: "upcoming" },
      { id: "ipl43", team1: "Delhi Capitals", team2: "Rajasthan Royals", date: "May 1, 2026", time: "19:30", venue: "Delhi", status: "upcoming" },
      { id: "ipl44", team1: "Mumbai Indians", team2: "Chennai Super Kings", date: "May 2, 2026", time: "19:30", venue: "Mumbai", status: "upcoming" },
      { id: "ipl45", team1: "Kolkata Knight Riders", team2: "Sunrisers Hyderabad", date: "May 3, 2026", time: "15:30", venue: "Kolkata", status: "upcoming" },
      { id: "ipl46", team1: "Punjab Kings", team2: "Gujarat Titans", date: "May 3, 2026", time: "19:30", venue: "Mullanpur", status: "upcoming" },
      { id: "ipl47", team1: "Lucknow Super Giants", team2: "Mumbai Indians", date: "May 4, 2026", time: "19:30", venue: "Lucknow", status: "upcoming" },
      { id: "ipl48", team1: "Chennai Super Kings", team2: "Delhi Capitals", date: "May 5, 2026", time: "19:30", venue: "Chennai", status: "upcoming" },
      { id: "ipl49", team1: "Punjab Kings", team2: "Sunrisers Hyderabad", date: "May 6, 2026", time: "19:30", venue: "Mullanpur", status: "upcoming" },
      { id: "ipl50", team1: "Royal Challengers Bengaluru", team2: "Lucknow Super Giants", date: "May 7, 2026", time: "19:30", venue: "Bengaluru", status: "upcoming" },
      { id: "ipl51", team1: "Kolkata Knight Riders", team2: "Delhi Capitals", date: "May 8, 2026", time: "19:30", venue: "Kolkata", status: "upcoming" },
      { id: "ipl52", team1: "Gujarat Titans", team2: "Rajasthan Royals", date: "May 9, 2026", time: "19:30", venue: "Ahmedabad", status: "upcoming" },
      { id: "ipl53", team1: "Lucknow Super Giants", team2: "Chennai Super Kings", date: "May 10, 2026", time: "15:30", venue: "Lucknow", status: "upcoming" },
      { id: "ipl54", team1: "Mumbai Indians", team2: "Royal Challengers Bengaluru", date: "May 10, 2026", time: "19:30", venue: "Mumbai", status: "upcoming" },
      { id: "ipl55", team1: "Delhi Capitals", team2: "Punjab Kings", date: "May 11, 2026", time: "19:30", venue: "Delhi", status: "upcoming" },
      { id: "ipl56", team1: "Sunrisers Hyderabad", team2: "Gujarat Titans", date: "May 12, 2026", time: "19:30", venue: "Hyderabad", status: "upcoming" },
      { id: "ipl57", team1: "Kolkata Knight Riders", team2: "Royal Challengers Bengaluru", date: "May 13, 2026", time: "19:30", venue: "Kolkata", status: "upcoming" },
      { id: "ipl58", team1: "Mumbai Indians", team2: "Punjab Kings", date: "May 14, 2026", time: "19:30", venue: "Mumbai", status: "upcoming" },
      { id: "ipl59", team1: "Chennai Super Kings", team2: "Lucknow Super Giants", date: "May 15, 2026", time: "19:30", venue: "Chennai", status: "upcoming" },
      { id: "ipl60", team1: "Gujarat Titans", team2: "Kolkata Knight Riders", date: "May 16, 2026", time: "19:30", venue: "Ahmedabad", status: "upcoming" },
      { id: "ipl61", team1: "Royal Challengers Bengaluru", team2: "Punjab Kings", date: "May 17, 2026", time: "15:30", venue: "Bengaluru", status: "upcoming" },
      { id: "ipl62", team1: "Rajasthan Royals", team2: "Delhi Capitals", date: "May 17, 2026", time: "19:30", venue: "Guwahati", status: "upcoming" },
      { id: "ipl63", team1: "Sunrisers Hyderabad", team2: "Chennai Super Kings", date: "May 18, 2026", time: "19:30", venue: "Hyderabad", status: "upcoming" },
      { id: "ipl64", team1: "Lucknow Super Giants", team2: "Rajasthan Royals", date: "May 19, 2026", time: "19:30", venue: "Lucknow", status: "upcoming" },
      { id: "ipl65", team1: "Mumbai Indians", team2: "Kolkata Knight Riders", date: "May 20, 2026", time: "19:30", venue: "Mumbai", status: "upcoming" },
      { id: "ipl66", team1: "Gujarat Titans", team2: "Chennai Super Kings", date: "May 21, 2026", time: "19:30", venue: "Ahmedabad", status: "upcoming" },
      { id: "ipl67", team1: "Royal Challengers Bengaluru", team2: "Sunrisers Hyderabad", date: "May 22, 2026", time: "19:30", venue: "Bengaluru", status: "upcoming" },
      { id: "ipl68", team1: "Punjab Kings", team2: "Lucknow Super Giants", date: "May 23, 2026", time: "19:30", venue: "Mullanpur", status: "upcoming" },
      { id: "ipl69", team1: "Rajasthan Royals", team2: "Mumbai Indians", date: "May 24, 2026", time: "15:30", venue: "Guwahati", status: "upcoming" },
      { id: "ipl70", team1: "Delhi Capitals", team2: "Kolkata Knight Riders", date: "May 24, 2026", time: "19:30", venue: "Delhi", status: "upcoming" },
    ],
    pointsTable: [
      { team: "Royal Challengers Bengaluru", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Sunrisers Hyderabad", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Mumbai Indians", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Kolkata Knight Riders", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Rajasthan Royals", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Chennai Super Kings", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Punjab Kings", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Gujarat Titans", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Lucknow Super Giants", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Delhi Capitals", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
    ],
    pointsTableByYear: {
      "2026": [
        { team: "Royal Challengers Bengaluru", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Sunrisers Hyderabad", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Mumbai Indians", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Kolkata Knight Riders", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Rajasthan Royals", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Chennai Super Kings", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Punjab Kings", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Gujarat Titans", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Lucknow Super Giants", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Delhi Capitals", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      ],
      "2025": [
        { team: "Punjab Kings", played: 14, won: 9, lost: 4, nrr: "+0.372", points: 19 },
        { team: "Royal Challengers Bengaluru", played: 14, won: 9, lost: 4, nrr: "+0.301", points: 19 },
        { team: "Gujarat Titans", played: 14, won: 9, lost: 5, nrr: "+0.254", points: 18 },
        { team: "Mumbai Indians", played: 14, won: 8, lost: 6, nrr: "+1.142", points: 16 },
        { team: "Delhi Capitals", played: 14, won: 7, lost: 6, nrr: "+0.011", points: 15 },
        { team: "Sunrisers Hyderabad", played: 14, won: 6, lost: 7, nrr: "-0.241", points: 13 },
        { team: "Lucknow Super Giants", played: 14, won: 6, lost: 8, nrr: "-0.376", points: 12 },
        { team: "Kolkata Knight Riders", played: 14, won: 5, lost: 7, nrr: "-0.305", points: 12 },
        { team: "Rajasthan Royals", played: 14, won: 4, lost: 10, nrr: "-0.549", points: 8 },
        { team: "Chennai Super Kings", played: 14, won: 4, lost: 10, nrr: "-0.647", points: 8 },
      ],
    },
    venues: [
      { name: "M Chinnaswamy Stadium", city: "Bengaluru", capacity: "40,000", image: "wankhede" },
      { name: "Wankhede Stadium", city: "Mumbai", capacity: "33,108", image: "wankhede" },
      { name: "Barsapara Stadium", city: "Guwahati", capacity: "39,000", image: "wankhede" },
      { name: "Maharaja Yadavindra Singh Stadium", city: "Mullanpur", capacity: "33,000", image: "wankhede" },
      { name: "BRSABV Ekana Cricket Stadium", city: "Lucknow", capacity: "50,000", image: "wankhede" },
      { name: "Eden Gardens", city: "Kolkata", capacity: "66,000", image: "wankhede" },
      { name: "MA Chidambaram Stadium", city: "Chennai", capacity: "50,000", image: "wankhede" },
      { name: "Arun Jaitley Stadium", city: "Delhi", capacity: "41,820", image: "wankhede" },
      { name: "Narendra Modi Stadium", city: "Ahmedabad", capacity: "132,000", image: "wankhede" },
      { name: "Rajiv Gandhi International Stadium", city: "Hyderabad", capacity: "55,000", image: "wankhede" },
    ],
    faqs: [
      { question: "When does IPL 2026 start?", answer: "IPL 2026 begins on March 28, 2026 (RCB vs SRH at Bengaluru). The league stage lists 70 matches through late May; playoffs and the final follow the official IPL calendar (typically through May 31)." },
      { question: "How many teams are in IPL?", answer: "There are 10 teams: RCB, SRH, MI, KKR, RR, CSK, Punjab Kings, Gujarat Titans, Lucknow Super Giants, and Delhi Capitals." },
    ],
    seoTitle: "IPL 2026 Schedule | Fixtures, Points Table, Teams & Venues",
    seoDescription: "Check the complete IPL 2026 schedule with match fixtures, teams, venues, and updated points table. Stay updated with every match.",
    logo: "/images/IPL-Logo.png",
    intro:
      "Season 19 of the Indian Premier League 2026 kicks off on 28 March. Follow all 10 teams, full match schedules, venues, and points tables. Stay updated with IPL 2026 fixtures, team squads, and live results from every game, only on t20leagueschedule.com.",
    externalLink: { label: "Official IPL", href: "https://www.iplt20.com/" },
  },
  {
    id: "psl-schedule",
    name: "Pakistan Super League",
    shortName: "PSL",
    country: "Pakistan",
    season: "Season 11",
    seasonsTill2026: 11,
    startDate: "26 March 2026",
    endDate: "3 May 2026",
    status: "Confirmed",
    gradient: 'from-red-500 via-rose-600 to-purple-700',
    color: "#22c55e",
    teams: [
      { name: "Islamabad United", shortName: "ISU", color: "#e11d48" },
      { name: "Karachi Kings", shortName: "KRK", color: "#3b82f6" },
      { name: "Lahore Qalandars", shortName: "LHQ", color: "#22c55e" },
      { name: "Multan Sultans", shortName: "MLS", color: "#eab308" },
      { name: "Peshawar Zalmi", shortName: "PSZ", color: "#f59e0b" },
      { name: "Quetta Gladiators", shortName: "QTG", color: "#8b5cf6" },
      { name: "Hyderabad Kingsmen", shortName: "HYK", color: "#0ea5e9" },
      { name: "Rawalpindi Pindiz", shortName: "RWP", color: "#64748b" },
    ],
    schedule: [
      { id: "psl1", team1: "Lahore Qalandars", team2: "Hyderabad Kingsmen", date: "Mar 26, 2026", time: "19:00", venue: "Lahore", status: "upcoming" },
      { id: "psl2", team1: "Quetta Gladiators", team2: "Karachi Kings", date: "Mar 27, 2026", time: "19:00", venue: "Lahore", status: "upcoming" },
      { id: "psl3", team1: "Peshawar Zalmi", team2: "Rawalpindi Pindiz", date: "Mar 28, 2026", time: "15:00", venue: "Peshawar", status: "upcoming" },
      { id: "psl4", team1: "Multan Sultans", team2: "Islamabad United", date: "Mar 28, 2026", time: "19:00", venue: "Lahore", status: "upcoming" },
      { id: "psl5", team1: "Quetta Gladiators", team2: "Hyderabad Kingsmen", date: "Mar 29, 2026", time: "15:00", venue: "Lahore", status: "upcoming" },
      { id: "psl6", team1: "Lahore Qalandars", team2: "Karachi Kings", date: "Mar 29, 2026", time: "19:00", venue: "Lahore", status: "upcoming" },
      { id: "psl7", team1: "Islamabad United", team2: "Peshawar Zalmi", date: "Mar 31, 2026", time: "19:00", venue: "Rawalpindi", status: "upcoming" },
      { id: "psl8", team1: "Multan Sultans", team2: "Hyderabad Kingsmen", date: "Apr 1, 2026", time: "19:00", venue: "Multan", status: "upcoming" },
      { id: "psl9", team1: "Islamabad United", team2: "Quetta Gladiators", date: "Apr 2, 2026", time: "15:00", venue: "Rawalpindi", status: "upcoming" },
      { id: "psl10", team1: "Rawalpindi Pindiz", team2: "Karachi Kings", date: "Apr 2, 2026", time: "19:00", venue: "Rawalpindi", status: "upcoming" },
      { id: "psl11", team1: "Multan Sultans", team2: "Lahore Qalandars", date: "Apr 3, 2026", time: "19:00", venue: "Multan", status: "upcoming" },
      { id: "psl12", team1: "Rawalpindi Pindiz", team2: "Islamabad United", date: "Apr 4, 2026", time: "19:00", venue: "Rawalpindi", status: "upcoming" },
      { id: "psl13", team1: "Multan Sultans", team2: "Quetta Gladiators", date: "Apr 5, 2026", time: "19:00", venue: "Multan", status: "upcoming" },
      { id: "psl14", team1: "Multan Sultans", team2: "Rawalpindi Pindiz", date: "Apr 6, 2026", time: "19:00", venue: "Multan", status: "upcoming" },
      { id: "psl15", team1: "Hyderabad Kingsmen", team2: "Peshawar Zalmi", date: "Apr 8, 2026", time: "19:00", venue: "Karachi", status: "upcoming" },
      { id: "psl16", team1: "Lahore Qalandars", team2: "Islamabad United", date: "Apr 9, 2026", time: "15:00", venue: "Faisalabad", status: "upcoming" },
      { id: "psl17", team1: "Karachi Kings", team2: "Peshawar Zalmi", date: "Apr 9, 2026", time: "19:00", venue: "Karachi", status: "upcoming" },
      { id: "psl18", team1: "Quetta Gladiators", team2: "Rawalpindi Pindiz", date: "Apr 10, 2026", time: "19:00", venue: "Karachi", status: "upcoming" },
      { id: "psl19", team1: "Peshawar Zalmi", team2: "Lahore Qalandars", date: "Apr 11, 2026", time: "15:00", venue: "Faisalabad", status: "upcoming" },
      { id: "psl20", team1: "Karachi Kings", team2: "Hyderabad Kingsmen", date: "Apr 11, 2026", time: "19:00", venue: "Karachi", status: "upcoming" },
      { id: "psl21", team1: "Hyderabad Kingsmen", team2: "Islamabad United", date: "Apr 12, 2026", time: "19:00", venue: "Karachi", status: "upcoming" },
      { id: "psl22", team1: "Peshawar Zalmi", team2: "Multan Sultans", date: "Apr 13, 2026", time: "19:00", venue: "Faisalabad", status: "upcoming" },
      { id: "psl23", team1: "Peshawar Zalmi", team2: "Quetta Gladiators", date: "Apr 15, 2026", time: "19:00", venue: "Faisalabad", status: "upcoming" },
      { id: "psl24", team1: "Hyderabad Kingsmen", team2: "Rawalpindi Pindiz", date: "Apr 16, 2026", time: "15:00", venue: "Faisalabad", status: "upcoming" },
      { id: "psl25", team1: "Karachi Kings", team2: "Islamabad United", date: "Apr 16, 2026", time: "19:00", venue: "Karachi", status: "upcoming" },
      { id: "psl26", team1: "Lahore Qalandars", team2: "Quetta Gladiators", date: "Apr 17, 2026", time: "19:00", venue: "Faisalabad", status: "upcoming" },
      { id: "psl27", team1: "Lahore Qalandars", team2: "Rawalpindi Pindiz", date: "Apr 18, 2026", time: "19:00", venue: "Faisalabad", status: "upcoming" },
      { id: "psl28", team1: "Multan Sultans", team2: "Karachi Kings", date: "Apr 19, 2026", time: "15:00", venue: "Lahore", status: "upcoming" },
      { id: "psl29", team1: "Quetta Gladiators", team2: "Hyderabad Kingsmen", date: "Apr 19, 2026", time: "19:00", venue: "Faisalabad", status: "upcoming" },
      { id: "psl30", team1: "Lahore Qalandars", team2: "Quetta Gladiators", date: "Apr 21, 2026", time: "15:00", venue: "Lahore", status: "upcoming" },
      { id: "psl31", team1: "Rawalpindi Pindiz", team2: "Multan Sultans", date: "Apr 21, 2026", time: "19:00", venue: "Rawalpindi", status: "upcoming" },
      { id: "psl32", team1: "Karachi Kings", team2: "Hyderabad Kingsmen", date: "Apr 22, 2026", time: "19:00", venue: "Lahore", status: "upcoming" },
      { id: "psl33", team1: "Peshawar Zalmi", team2: "Multan Sultans", date: "Apr 22, 2026", time: "19:00", venue: "Rawalpindi", status: "upcoming" },
      { id: "psl34", team1: "Rawalpindi Pindiz", team2: "Islamabad United", date: "Apr 23, 2026", time: "15:00", venue: "Rawalpindi", status: "upcoming" },
      { id: "psl35", team1: "Lahore Qalandars", team2: "Karachi Kings", date: "Apr 23, 2026", time: "19:00", venue: "Lahore", status: "upcoming" },
      { id: "psl36", team1: "Islamabad United", team2: "Peshawar Zalmi", date: "Apr 24, 2026", time: "19:00", venue: "Rawalpindi", status: "upcoming" },
      { id: "psl37", team1: "Quetta Gladiators", team2: "Karachi Kings", date: "Apr 25, 2026", time: "15:00", venue: "Lahore", status: "upcoming" },
      { id: "psl38", team1: "Lahore Qalandars", team2: "Hyderabad Kingsmen", date: "Apr 25, 2026", time: "19:00", venue: "Lahore", status: "upcoming" },
      { id: "psl39", team1: "Rawalpindi Pindiz", team2: "Peshawar Zalmi", date: "Apr 26, 2026", time: "15:00", venue: "Rawalpindi", status: "upcoming" },
      { id: "psl40", team1: "Islamabad United", team2: "Multan Sultans", date: "Apr 26, 2026", time: "19:00", venue: "Rawalpindi", status: "upcoming" },
      { id: "psl41", team1: "TBD", team2: "TBD", date: "Apr 28, 2026", time: "19:00", venue: "Rawalpindi", status: "upcoming", result: "Qualifier" },
      { id: "psl42", team1: "TBD", team2: "TBD", date: "Apr 29, 2026", time: "19:00", venue: "Lahore", status: "upcoming", result: "Eliminator 1" },
      { id: "psl43", team1: "TBD", team2: "TBD", date: "May 1, 2026", time: "19:00", venue: "Lahore", status: "upcoming", result: "Eliminator 2" },
      { id: "psl44", team1: "TBD", team2: "TBD", date: "May 3, 2026", time: "19:00", venue: "Lahore", status: "upcoming", result: "Final" },
    ],
    pointsTable: [
      { team: "Lahore Qalandars", played: 1, won: 1, lost: 0, nrr: "+3.450", points: 2 },
      { team: "Karachi Kings", played: 1, won: 1, lost: 0, nrr: "+0.700", points: 2 },
      { team: "Peshawar Zalmi", played: 1, won: 1, lost: 0, nrr: "+0.674", points: 2 },
      { team: "Rawalpindi Pindiz", played: 1, won: 0, lost: 1, nrr: "-0.674", points: 0 },
      { team: "Quetta Gladiators", played: 1, won: 0, lost: 1, nrr: "-0.700", points: 0 },
      { team: "Hyderabad Kingsmen", played: 1, won: 0, lost: 1, nrr: "-3.450", points: 0 },
      { team: "Islamabad United", played: 0, won: 0, lost: 0, nrr: "+0.000", points: 0 },
      { team: "Multan Sultans", played: 0, won: 0, lost: 0, nrr: "+0.000", points: 0 },
    ],
    pointsTableByYear: {
      "2026": [
        { team: "Lahore Qalandars", played: 1, won: 1, lost: 0, nrr: "+3.450", points: 2 },
        { team: "Karachi Kings", played: 1, won: 1, lost: 0, nrr: "+0.700", points: 2 },
        { team: "Peshawar Zalmi", played: 1, won: 1, lost: 0, nrr: "+0.674", points: 2 },
        { team: "Rawalpindi Pindiz", played: 1, won: 0, lost: 1, nrr: "-0.674", points: 0 },
        { team: "Quetta Gladiators", played: 1, won: 0, lost: 1, nrr: "-0.700", points: 0 },
        { team: "Hyderabad Kingsmen", played: 1, won: 0, lost: 1, nrr: "-3.450", points: 0 },
        { team: "Islamabad United", played: 0, won: 0, lost: 0, nrr: "+0.000", points: 0 },
        { team: "Multan Sultans", played: 0, won: 0, lost: 0, nrr: "+0.000", points: 0 },
      ],
      "2025": [
        { team: "Quetta Gladiators", played: 10, won: 7, lost: 2, nrr: "+1.393", points: 15 },
        { team: "Islamabad United", played: 10, won: 6, lost: 4, nrr: "+0.372", points: 12 },
        { team: "Karachi Kings", played: 10, won: 6, lost: 4, nrr: "+0.049", points: 12 },
        { team: "Lahore Qalandars", played: 10, won: 5, lost: 4, nrr: "+1.036", points: 11 },
        { team: "Peshawar Zalmi", played: 10, won: 4, lost: 6, nrr: "-0.293", points: 8 },
        { team: "Multan Sultans", played: 10, won: 1, lost: 9, nrr: "-2.449", points: 2 },
        { team: "Hyderabad Kingsmen", played: 10, won: 2, lost: 8, nrr: "-0.512", points: 4 },
        { team: "Rawalpindi Pindiz", played: 10, won: 3, lost: 7, nrr: "-0.612", points: 6 },
      ],
    },
    venues: [
      { name: "Gaddafi Stadium", city: "Lahore", capacity: "34,000", image: "lahore" },
      { name: "National Bank Cricket Arena", city: "Karachi", capacity: "35,000", image: "wankhede" },
      { name: "Rawalpindi Cricket Stadium", city: "Rawalpindi", capacity: "17,000", image: "lahore" },
      { name: "Imran Khan Cricket Stadium", city: "Peshawar", capacity: "35,000", image: "lahore" },
      { name: "Multan Cricket Stadium", city: "Multan", capacity: "35,000", image: "lahore" },
      { name: "Iqbal Stadium", city: "Faisalabad", capacity: "18,000", image: "lahore" },
    ],
    faqs: [
      { question: "When does PSL 2026 start?", answer: "PSL 2026 (Season 11) runs from March 26 to May 3, 2026 — 44 matches over 39 days." },
      { question: "How many teams are in PSL 11?", answer: "There are 8 teams: Islamabad United, Karachi Kings, Lahore Qalandars, Multan Sultans, Peshawar Zalmi, Quetta Gladiators, Hyderabad Kingsmen, and Rawalpindi Pindiz." },
      { question: "Where can I watch PSL matches?", answer: "PSL matches are broadcast on various sports channels and streaming platforms worldwide." },
    ],
    seoTitle: "PSL 2026 Schedule | Fixtures, Points Table, Teams & Venues",
    seoDescription: "Check the complete PSL 2026 schedule with match fixtures, teams, venues, and updated points table. Stay updated with every match.",
    logo: "/images/PSL-Logo.png",
    intro:
      "PSL 2026 starts on 26 March with 6 top teams competing for glory. Get full match schedules, points table, teams, venues, and FAQs. Follow every fixture and live result at t20leagueschedule.com to never miss Pakistan's premier T20 action.",
    externalLink: { label: "Official PSL", href: "https://www.psl-t20.com/" },
  },
  { 
    id: "bbl-schedule",
    name: "Big Bash League",
    shortName: "BBL",
    country: "Australia",
    season: "Season 15",
    seasonsTill2026: 15,
    startDate: "Dec 2026 (expected)",
    endDate: "Jan 2027",
    seoTitle: "BBL 2026 Schedule | Fixtures, Points Table, Teams & Venues",
    seoDescription: "Check the complete BBL 2026 schedule with match fixtures, teams, venues, and updated points table. Stay updated with every match.",
    status: "Window based",
    gradient: 'from-orange-500 via-red-600 to-pink-600',
    color: "#f59e0b",
    teams: [
      { name: "Sydney Sixers", shortName: "SYS", color: "#e11d48" },
      { name: "Melbourne Stars", shortName: "MLS", color: "#22c55e" },
      { name: "Perth Scorchers", shortName: "PRS", color: "#f97316" },
      { name: "Brisbane Heat", shortName: "BRH", color: "#06b6d4" },
    ],
    schedule: [
      { id: "bbl1", team1: "Sydney Sixers", team2: "Melbourne Stars", date: "Dec 5, 2025", time: "18:40", venue: "SCG", status: "upcoming" },
    ],
    pointsTable: [
      { team: "Perth Scorchers", played: 14, won: 10, lost: 4, nrr: "+1.123", points: 20 },
      { team: "Sydney Sixers", played: 14, won: 9, lost: 5, nrr: "+0.765", points: 18 },
      { team: "Melbourne Stars", played: 14, won: 7, lost: 7, nrr: "+0.234", points: 14 },
      { team: "Brisbane Heat", played: 14, won: 5, lost: 9, nrr: "-0.654", points: 10 },
    ],
    venues: [{ name: "Melbourne Cricket Ground", city: "Melbourne", capacity: "100,024", image: "mcg" }],
    faqs: [{ question: "When is the BBL season?", answer: "The BBL typically runs from December to February." }],
    logo: "/images/BBL-Logo.png",
    intro:
      "BBL 2026, Australia's top T20 league, promises thrilling matches and top domestic and international talent. Stay updated with match schedules, teams, the points table, and venues at t20leagueschedule.com.",
    externalLink: { label: "Official BBL", href: "https://www.bigbash.com.au/" },
  },
  {
    id: "cpl-schedule",
    name: "Caribbean Premier League",
    shortName: "CPL",
    country: "West Indies",
    season: "Season 14",
    seoTitle: "CPL 2026 Schedule | Fixtures, Points Table, Teams & Venues",
    seoDescription: "Check the complete CPL 2026 schedule with match fixtures, teams, venues, and updated points table. Stay updated with every match.",
    seasonsTill2026: 14,
    startDate: "Aug 2026 (expected)",
    endDate: "Sep 2026",
    status: "Window based",
    gradient: 'from-yellow-400 via-amber-500 to-violet-600',
    color: "#8b5cf6",
    teams: [
      { name: "Trinbago Knight Riders", shortName: "TKR", color: "#3b225f" },
      { name: "Jamaica Tallawahs", shortName: "JT", color: "#22c55e" },
      { name: "Guyana Amazon Warriors", shortName: "GAW", color: "#22c55e" },
    ],
    schedule: [
      { id: "cpl1", team1: "Trinbago Knight Riders", team2: "Jamaica Tallawahs", date: "Aug 15, 2026", time: "19:00", venue: "Queen's Park Oval", status: "upcoming" },
    ],
    pointsTable: [
      { team: "Trinbago Knight Riders", played: 10, won: 8, lost: 2, nrr: "+1.876", points: 16 },
      { team: "Guyana Amazon Warriors", played: 10, won: 6, lost: 4, nrr: "+0.543", points: 12 },
      { team: "Jamaica Tallawahs", played: 10, won: 4, lost: 6, nrr: "-0.321", points: 8 },
    ],
    venues: [{ name: "Queen's Park Oval", city: "Port of Spain", capacity: "18,000", image: "dubai" }],
    faqs: [{ question: "When does CPL start?", answer: "CPL 2026 begins August 15, 2026." }],
    logo: "/images/CPL-Logo.png",
    intro:
      "Follow CPL 2026, the Caribbean's top T20 competition. Check fixtures, points tables, teams, and venues at t20leagueschedule.com.",
    externalLink: { label: "Official CPL", href: "https://www.cplt20.com/" },
  },
  {
    id: "sa20-schedule",
    name: "SA20",
    shortName: "SA20",
    country: "South Africa",
    season: "Season 4",
    seoTitle: "SA20 2026 Schedule | Fixtures, Points Table, Teams & Venues",
    seoDescription: "Check the complete SA20 2026 schedule with match fixtures, teams, venues, and updated points table. Stay updated with every match.",
    seasonsTill2026: 4,
    startDate: "Jan 2026 (expected)",
    endDate: "Feb 2026",
    status: "Window based",
    gradient: 'from-orange-400 via-yellow-500 to-green-600',
    color: "#ef4444",
    teams: [
      { name: "MI Cape Town", shortName: "MICT", color: "#004ba0" },
      { name: "Paarl Royals", shortName: "PR", color: "#ea1a85" },
      { name: "Sunrisers Eastern Cape", shortName: "SEC", color: "#f97316" },
    ],
    schedule: [
      { id: "sa1", team1: "MI Cape Town", team2: "Paarl Royals", date: "Jan 9, 2026", time: "17:30", venue: "Newlands", status: "upcoming" },
    ],
    pointsTable: [
      { team: "Sunrisers Eastern Cape", played: 10, won: 8, lost: 2, nrr: "+1.654", points: 16 },
      { team: "MI Cape Town", played: 10, won: 6, lost: 4, nrr: "+0.432", points: 12 },
      { team: "Paarl Royals", played: 10, won: 4, lost: 6, nrr: "-0.567", points: 8 },
    ],
    venues: [{ name: "Newlands Cricket Ground", city: "Cape Town", capacity: "25,000", image: "mcg" }],
    faqs: [{ question: "What is SA20?", answer: "SA20 is South Africa's premier T20 cricket league." }],
    logo: "/images/SA20-Logo.png",
    intro:
      "SA20 2026 brings South Africa's top domestic and international talent together. Stay on top of match schedules, point tables, teams, and venues at t20leagueschedule.com.",
    externalLink: { label: "Official SA20", href: "https://www.sa20.co.za/" },
  },
  {
    id: "ilt20-schedule",
    name: "International League T20",
    shortName: "ILT20",
    country: "UAE",
    seoTitle: "ILT20 2026 Schedule | Fixtures, Points Table, Teams & Venues",
    seoDescription: "Check the complete ILT20 2026 schedule with match fixtures, teams, venues, and updated points table. Stay updated with every match.",
    season: "Season 4",
    seasonsTill2026: 4,
    startDate: "Jan 2026 (expected)",
    endDate: "Feb 2026",
    status: "Window based",
    color: "#06b6d4",
    teams: [
      { name: "Desert Vipers", shortName: "DV", color: "#22c55e" },
      { name: "Dubai Capitals", shortName: "DC", color: "#3b82f6" },
      { name: "Gulf Giants", shortName: "GG", color: "#f59e0b" },
    ],
    schedule: [
      { id: "ilt1", team1: "Desert Vipers", team2: "Dubai Capitals", date: "Jan 13, 2026", time: "18:00", venue: "Dubai International Stadium", status: "upcoming" },
    ],
    pointsTable: [
      { team: "Desert Vipers", played: 10, won: 7, lost: 3, nrr: "+1.234", points: 14 },
      { team: "Gulf Giants", played: 10, won: 6, lost: 4, nrr: "+0.654", points: 12 },
      { team: "Dubai Capitals", played: 10, won: 5, lost: 5, nrr: "+0.123", points: 10 },
    ],
    venues: [{ name: "Dubai International Stadium", city: "Dubai", capacity: "25,000", image: "dubai" }],
    faqs: [{ question: "Where is ILT20 played?", answer: "ILT20 is played in the United Arab Emirates." }],
    logo: "/images/ILT-Logo.png",
    intro:
      "Follow ILT20 2026, UAE's premier T20 league featuring international stars. Explore full fixtures, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official ILT20", href: "https://www.ilt20.ae/" },
  },
  {
    id: "bpl-schedule",
    name: "Bangladesh Premier League",
    shortName: "BPL",
    country: "Bangladesh",
    season: "Season 12",
    seoTitle: "BPL 2026 Schedule | Fixtures, Points Table, Teams & Venues",
    seoDescription: "Check the complete BPL 2026 schedule with match fixtures, teams, venues, and updated points table. Stay updated with every match.",
    seasonsTill2026: 12,
    startDate: "Jan 2026 (expected)",
    endDate: "Feb 2026",
    status: "Window based",
    color: "#10b981",
    teams: [
      { name: "Dhaka Dominators", shortName: "DD", color: "#e11d48" },
      { name: "Comilla Victorians", shortName: "CV", color: "#3b82f6" },
      { name: "Rangpur Riders", shortName: "RR", color: "#22c55e" },
    ],
    schedule: [
      { id: "bpl1", team1: "Dhaka Dominators", team2: "Comilla Victorians", date: "Jan 2026", time: "18:00", venue: "Sher-e-Bangla Stadium", status: "upcoming" },
    ],
    pointsTable: [
      { team: "Comilla Victorians", played: 10, won: 7, lost: 3, nrr: "+0.987", points: 14 },
      { team: "Dhaka Dominators", played: 10, won: 6, lost: 4, nrr: "+0.543", points: 12 },
      { team: "Rangpur Riders", played: 10, won: 4, lost: 6, nrr: "-0.432", points: 8 },
    ],
    venues: [{ name: "Sher-e-Bangla Stadium", city: "Dhaka", capacity: "26,000", image: "lahore" }],
    faqs: [{ question: "When does BPL start?", answer: "BPL 2026 starts February 1, 2026." }],
    logo: "/images/BPL-Logo.png",
    intro:
      "BPL 2026, Bangladesh's leading T20 league, features the best local and international players. Check match schedules, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official BPL", href: "https://www.bpl-t20.com/" },
  },
  {
    id: "lpl-schedule",
    name: "Lanka Premier League",
    shortName: "LPL",
    country: "Sri Lanka",
    season: "Season 6",
    seoTitle: "LPL 2026 Schedule | Fixtures, Points Table, Teams & Venues",
    seoDescription: "Check the complete LPL 2026 schedule with match fixtures, teams, venues, and updated points table. Stay updated with every match.",
    seasonsTill2026: 6,
    startDate: "8 July 2026",
    endDate: "8 Aug 2026",
    status: "Confirmed",
    color: "#0ea5e9",
    teams: [
      { name: "Dhaka Dominators", shortName: "DD", color: "#e11d48" },
      { name: "Comilla Victorians", shortName: "CV", color: "#3b82f6" },
      { name: "Rangpur Riders", shortName: "RR", color: "#22c55e" },
    ],
    schedule: [
      { id: "bpl1", team1: "Dhaka Dominators", team2: "Comilla Victorians", date: "Jan 2026", time: "18:00", venue: "Sher-e-Bangla Stadium", status: "upcoming" },
    ],
    pointsTable: [
      { team: "Comilla Victorians", played: 10, won: 7, lost: 3, nrr: "+0.987", points: 14 },
      { team: "Dhaka Dominators", played: 10, won: 6, lost: 4, nrr: "+0.543", points: 12 },
      { team: "Rangpur Riders", played: 10, won: 4, lost: 6, nrr: "-0.432", points: 8 },
    ],
    venues: [{ name: "Sher-e-Bangla Stadium", city: "Dhaka", capacity: "26,000", image: "lahore" }],
    faqs: [{ question: "When does LPL 2026 run?", answer: "LPL 2026 runs from July 8 to August 8, 2026." }],
    logo: "/images/LPL-Logo.png",
    intro:
      "LPL 2026 showcases Sri Lanka's top T20 talent. Stay updated with fixtures, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official LPL", href: "https://www.lpl.lk/" },
  },
  {
    id: "mlc-schedule",
    name: "Major League Cricket",
    shortName: "MLC",
    country: "USA",
    season: "Season 4",
    seoTitle: "MLC 2026 Schedule | Fixtures, Points Table, Teams & Venues",
    seoDescription: "Check the complete MLC 2026 schedule with match fixtures, teams, venues, and updated points table. Stay updated with every match.",
    seasonsTill2026: 4,
    startDate: "Jun 2026 (expected)",
    endDate: "Jul 2026",
    status: "Window based",
    color: "#dc2626",
    teams: [
      { name: "Dhaka Dominators", shortName: "DD", color: "#e11d48" },
      { name: "Comilla Victorians", shortName: "CV", color: "#3b82f6" },
      { name: "Rangpur Riders", shortName: "RR", color: "#22c55e" },
    ],
    schedule: [
      { id: "bpl1", team1: "Dhaka Dominators", team2: "Comilla Victorians", date: "Jan 2026", time: "18:00", venue: "Sher-e-Bangla Stadium", status: "upcoming" },
    ],
    pointsTable: [
      { team: "Comilla Victorians", played: 10, won: 7, lost: 3, nrr: "+0.987", points: 14 },
      { team: "Dhaka Dominators", played: 10, won: 6, lost: 4, nrr: "+0.543", points: 12 },
      { team: "Rangpur Riders", played: 10, won: 4, lost: 6, nrr: "-0.432", points: 8 },
    ],
    venues: [{ name: "Sher-e-Bangla Stadium", city: "Dhaka", capacity: "26,000", image: "lahore" }],
    faqs: [{ question: "When is MLC 2026?", answer: "MLC 2026 is expected June–July 2026." }],
    logo: "/images/MLC-Logo.png",
    intro:
      "MLC 2026, USA's top professional T20 league, features international and local stars. Check full match schedules, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official MLC", href: "https://www.majorleaguecricket.com/" },
  },
  {
    id: "npl-schedule",
    name: "Nepal Premier League",
    shortName: "NPL",
    country: "Nepal",
    season: "Season 3",
    seoTitle: "NPL 2026 Schedule | Fixtures, Points Table, Teams & Venues",
    seoDescription: "Check the complete NPL 2026 schedule with match fixtures, teams, venues, and updated points table. Stay updated with every match.",
    seasonsTill2026: 3,
    startDate: "Oct 2026 (expected)",
    endDate: "Nov 2026",
    status: "Window based",
    color: "#16a34a",
    teams: [
      { name: "Dhaka Dominators", shortName: "DD", color: "#e11d48" },
      { name: "Comilla Victorians", shortName: "CV", color: "#3b82f6" },
      { name: "Rangpur Riders", shortName: "RR", color: "#22c55e" },
    ],
    schedule: [
      { id: "bpl1", team1: "Dhaka Dominators", team2: "Comilla Victorians", date: "Jan 2026", time: "18:00", venue: "Sher-e-Bangla Stadium", status: "upcoming" },
    ],
    pointsTable: [
      { team: "Comilla Victorians", played: 10, won: 7, lost: 3, nrr: "+0.987", points: 14 },
      { team: "Dhaka Dominators", played: 10, won: 6, lost: 4, nrr: "+0.543", points: 12 },
      { team: "Rangpur Riders", played: 10, won: 4, lost: 6, nrr: "-0.432", points: 8 },
    ],
    venues: [{ name: "Sher-e-Bangla Stadium", city: "Dhaka", capacity: "26,000", image: "lahore" }],
    faqs: [{ question: "When is NPL 2026?", answer: "NPL 2026 is expected October–November 2026." }],
    logo: "/images/NPL-Logo.png",
    intro:
      "Follow NPL 2026, Nepal's top T20 league, with exciting local and international talent. Stay on top of match schedules, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official NPL", href: "https://www.cricnepal.com/npl" },
  },
  {
    id: "the-hundred-schedule",
    name: "The Hundred",
    shortName: "100",
    country: "England",
    season: "Season 5",
    seoTitle: "The Hundred 2026 Schedule | Fixtures, Teams & Points Table",
    seoDescription: "Check The Hundred 2026 schedule with match fixtures, teams, venues, and updated points table. Stay updated with every match.",
    seasonsTill2026: 5,
    startDate: "Jul 22, 2026",
    endDate: "Aug 2026",
    status: "Confirmed",
    color: "#ec4899",
    teams: [
      { name: "Oval Invincibles", shortName: "OI", color: "#22c55e" },
      { name: "Manchester Originals", shortName: "MO", color: "#f59e0b" },
      { name: "Trent Rockets", shortName: "TR", color: "#22c55e" },
    ],
    schedule: [
      { id: "th1", team1: "Oval Invincibles", team2: "Manchester Originals", date: "Jul 22, 2026", time: "18:30", venue: "The Oval", status: "upcoming" },
    ],
    pointsTable: [
      { team: "Oval Invincibles", played: 8, won: 6, lost: 2, nrr: "+1.345", points: 12 },
      { team: "Trent Rockets", played: 8, won: 5, lost: 3, nrr: "+0.765", points: 10 },
      { team: "Manchester Originals", played: 8, won: 3, lost: 5, nrr: "-0.432", points: 6 },
    ],
    venues: [{ name: "The Oval", city: "London", capacity: "25,500", image: "mcg" }],
    faqs: [{ question: "What is The Hundred?", answer: "The Hundred is a unique 100-ball cricket format played in England." }],
    logo: "/images/100-Logo.png",
    intro:
      "Follow The Hundred 2026, England's 100-ball tournament with top domestic and international stars. Check fixtures, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official Hundred", href: "https://www.thehundred.com/" },
  },
];

export const womenLeagues: WomenLeague[] = [
  {
    id: "wpl",
    name: "Women's Premier League",
    shortName: "WPL",
    country: "India",
    seasonsTill2026: 4,
    window2026: "Feb–Mar 2026 (expected)",
    seoTitle:"WPL 2026 Schedule | Fixtures, Teams & Points Table",
    seoDescription:"Check WPL 2026 full schedule including match fixtures, team squads, points table, and venues. Stay updated with every Women's Premier League match in India.",
    intro:
      "Follow WPL 2026, India's top women's T20 league. Stay updated with full fixtures, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official WPL", href: "https://www.wpl.t20/" },
  },
  {
    id: "wbbl",
    name: "Women's Big Bash League",
    shortName: "WBBL",
    country: "Australia",
    seasonsTill2026: 12,
    window2026: "Oct–Nov 2026",
    seoTitle:"WBBL 2026 Schedule | Fixtures, Teams & Points Table",
    seoDescription:"Explore WBBL 2026 complete schedule with match dates, team squads, points table, and venues. Get all updates for every Women's Big Bash League match in Australia.",
    intro:
      "WBBL 2026 features Australia's top women's T20 teams. Check complete match schedules, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official WBBL", href: "https://www.cricket.com.au/wbbl" },
  },
  { id: "wcpl", 
    name: "Women's Caribbean Premier League", 
    shortName: "WCPL", 
    country: "West Indies", 
    seasonsTill2026: 5, 
    window2026: "Aug 2026",
    seoTitle:"WCPL 2026 Schedule | Fixtures, Teams & Points Table",
    seoDescription:"Check WCPL 2026 full schedule including match fixtures, team squads, points table, and venues. Stay updated with every Women's Caribbean Premier League match.",
    intro:
      "Follow WCPL 2026, the West Indies' top women's T20 league. Get full fixtures, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official WCPL", href: "https://www.cplt20.com/women" },
  },
  { id: "the-hundred-women", 
    name: "The Hundred Women", 
    shortName: "100 Women", 
    country: "England", 
    seasonsTill2026: 6, 
    window2026: "Jul–Aug 2026",
    seoTitle:"The Hundred Women 2026 Schedule | Fixtures & Teams",
    seoDescription:"Explore The Hundred Women 2026 complete schedule including match dates, team squads, points table, and venues. Get updates for every match of The Hundred Women's tournament in England.",
    intro:
      "The Hundred Women 2026 brings England's top female players together. Stay updated with full match schedules, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official Hundred Women", href: "https://www.thehundred.com/women" },
  },
];

export const DomesticLeagues: League[] = [
  
  {
    id: "t20-blast",
    name: "T20 Blast",
    shortName: "T20B",
    country: "England & Wales",
    season: "Season 24",
    seasonsTill2026: 24,
    startDate: "May 2026",
    endDate: "Sep 2026",
    status: "Window based",
    color: "#0ea5e9",
    teams: [],
    schedule: [],
    pointsTable: [],
    pointsTableByYear: { "2026": [] },
    venues: [],
    faqs: [{ question: "When is T20 Blast 2026 expected?", answer: "The expected window is May to September 2026." }],
    seoTitle: "T20 Blast 2026 Schedule | Fixtures, Teams & Points Table",
    seoDescription:
      "Check the complete T20 Blast 2026 schedule with match fixtures, teams, and updated points table. Stay updated with every match.",
    logo: "/images/domestic/T20 Blast.jpg.jpeg",
    intro:
      "Follow T20 Blast 2026, England & Wales' top domestic T20 competition. Get complete match schedules, points table, teams, and FAQs at t20leagueschedule.com and never miss a thrilling fixture this season.",
    externalLink: { label: "Official T20 Blast", href: "https://www.ecb.co.uk/t20-blast" },
  },
  {
    id: "syed-mushtaq-ali-trophy",
    name: "Syed Mushtaq Ali Trophy",
    shortName: "SMAT",
    country: "India",
    season: "Season 19",
    seasonsTill2026: 19,
    startDate: "Oct 2026",
    endDate: "Nov 2026",
    status: "Window based",
    color: "#22c55e",
    teams: [],
    schedule: [],
    pointsTable: [],
    pointsTableByYear: { "2026": [] },
    venues: [],
    faqs: [{ question: "When is SMAT 2026 expected?", answer: "The expected window is October to November 2026." }],
    seoTitle: "SMAT 2026 Schedule | Fixtures, Teams & Points Table",
    seoDescription:
      "Explore Syed Mushtaq Ali Trophy (SMAT) 2026 expected window, fixtures, points table, teams, and venues for India's domestic T20 season.",
    logo: "/images/domestic/Syed_Mushtaq_Ali_Trophy logo.png",
    intro:
      "Syed Mushtaq Ali Trophy 2026 features India's best domestic T20 teams. Stay updated with full fixtures, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official SMAT", href: "https://www.bcci.tv/domestic/SMAT" },
  },
  {
    id: "national-t20-cup",
    name: "National T20 Cup",
    shortName: "NT20",
    country: "Pakistan",
    season: "Season 22",
    seasonsTill2026: 22,
    startDate: "Aug 2026",
    endDate: "Sep 2026",
    status: "Window based",
    color: "#10b981",
    teams: [],
    schedule: [],
    pointsTable: [],
    pointsTableByYear: { "2026": [] },
    venues: [],
    faqs: [{ question: "When is National T20 Cup 2026 expected?", answer: "The expected window is August to September 2026." }],
    seoTitle: "National T20 Cup 2026 Schedule | Fixtures, Teams & Points Table",
    seoDescription:
      "Check Pakistan National T20 Cup 2026 expected window, fixtures, points table, teams, and venues for Pakistan domestic T20 cricket.",
    logo: "/images/domestic/National_T20_Cup__Logo.png",
    intro:
      "Follow National T20 Cup 2026, Pakistan's premier domestic T20 tournament. Check full match schedules, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official NT20", href: "https://www.pcb.com.pk/" },
  },
  {
    id: "super-smash",
    name: "Super Smash",
    shortName: "SS",
    country: "New Zealand",
    season: "Season 22",
    seasonsTill2026: 22,
    startDate: "Dec 2026",
    endDate: "Jan 2027",
    status: "Window based",
    color: "#a855f7",
    teams: [],
    schedule: [],
    pointsTable: [],
    pointsTableByYear: { "2026": [] },
    venues: [],
    faqs: [{ question: "When is Super Smash 2026 expected?", answer: "The expected window is December 2026 to January 2027." }],
    seoTitle: "Super Smash 2026 Schedule | Fixtures, Teams & Points Table",
    seoDescription:
      "Explore Super Smash 2026 expected window, fixtures, points table, teams, and venues for New Zealand domestic T20 cricket.",
    logo: "/images/domestic/Super Smash logo.jpg.jpeg",
    intro:
      "Stay updated with Super Smash 2026, New Zealand's top domestic T20 league. Find full match schedules, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official Super Smash", href: "https://www.nzc.nz/competitions/super-smash/" },
  },
  {
    id: "csa-t20-challenge",
    name: "CSA T20 Challenge",
    shortName: "T20C",
    country: "South Africa",
    season: "Season 22",
    seasonsTill2026: 22,
    startDate: "Oct 2026",
    endDate: "Nov 2026",
    status: "Window based",
    color: "#f97316",
    teams: [],
    schedule: [],
    pointsTable: [],
    pointsTableByYear: { "2026": [] },
    venues: [],
    faqs: [{ question: "When is CSA T20 Challenge 2026 expected?", answer: "The expected window is October to November 2026." }],
    seoTitle: "CSA T20 Challenge 2026 Schedule | Fixtures, Teams & Points Table",
    seoDescription:
      "Check CSA T20 Challenge 2026 expected window, fixtures, points table, teams, and venues for South Africa domestic T20 cricket.",
    logo: "/images/domestic/CSA_T20_Challenge_Logo.png",
    intro:
      "Follow CSA T20 Challenge 2026, South Africa's premier T20 competition. Check fixtures, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official CSA T20", href: "https://www.cricket.co.za/t20" },
  },
  {
    id: "shpageeza-cricket-league",
    name: "Shpageeza Cricket League",
    shortName: "SCL",
    country: "Afghanistan",
    season: "Season 13",
    seasonsTill2026: 13,
    startDate: "Jul 2026",
    endDate: "Aug 2026",
    status: "Window based",
    color: "#ef4444",
    teams: [],
    schedule: [],
    pointsTable: [],
    pointsTableByYear: { "2026": [] },
    venues: [],
    faqs: [{ question: "When is SCL 2026 expected?", answer: "The expected window is July to August 2026." }],
    seoTitle: "Shpageeza League 2026 Schedule | Fixtures, Teams & Points Table",
    seoDescription:
      "Explore Shpageeza Cricket League (SCL) 2026 expected window, fixtures, points table, teams, and venues for Afghanistan domestic T20 cricket.",
    logo: "/images/domestic/Shpagiza_league_logo.png",
    intro:
      "Shpageeza Cricket League 2026 brings Afghanistan's best domestic and international players together. Follow fixtures, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official SCL", href: "https://www.afghanistancricket.af/" },
  },
  {
    id: "global-t20-canada",
    name: "Global T20 Canada",
    shortName: "GT20",
    country: "Canada",
    season: "Season 5",
    seasonsTill2026: 5,
    startDate: "Jul 2026",
    endDate: "Aug 2026",
    status: "Window based",
    color: "#3b82f6",
    teams: [],
    schedule: [],
    pointsTable: [],
    pointsTableByYear: { "2026": [] },
    venues: [],
    faqs: [{ question: "When is Global T20 Canada 2026 expected?", answer: "The expected window is July to August 2026." }],
    seoTitle: "GT20 Canada 2026 Schedule | Fixtures, Teams & Points Table",
    seoDescription:
      "Check Global T20 Canada (GT20) 2026 expected window, fixtures, points table, teams, and venues for Canada's domestic T20 season.",
    intro:
      "Stay updated with Global T20 Canada 2026, featuring top domestic and international players. Complete match schedules, points table, teams, venues, and FAQs are available at t20leagueschedule.com.",
    externalLink: { label: "Official GT20", href: "https://www.globalt20.ca/" },
  },
  {
    id: "minor-league-cricket",
    name: "Minor League Cricket",
    shortName: "MiLC",
    country: "USA",
    season: "Season 6",
    seasonsTill2026: 6,
    startDate: "Jun 2026",
    endDate: "Sep 2026",
    status: "Window based",
    color: "#64748b",
    teams: [],
    schedule: [],
    pointsTable: [],
    pointsTableByYear: { "2026": [] },
    venues: [],
    faqs: [{ question: "When is MiLC 2026 expected?", answer: "The expected window is June to September 2026." }],
    seoTitle: "MiLC 2026 Schedule | Fixtures, Teams & Points Table",
    seoDescription:
      "Explore Minor League Cricket (MiLC) 2026 expected window, fixtures, points table, teams, and venues for USA domestic T20 cricket.",
    logo: "/images/domestic/Minor League Cricket_ logo.jpg.jpeg",
    intro:
      "MiLC 2026 is USA's premier T20 cricket league with top domestic talent. Follow full fixtures, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official MiLC", href: "https://minorleaguecricket.com/" },
  },
  {
    id: "tamil-nadu-premier-league",
    name: "Tamil Nadu Premier League",
    shortName: "TNPL",
    country: "India",
    season: "Season 10",
    seasonsTill2026: 10,
    startDate: "Jun 2026",
    endDate: "Jul 2026",
    status: "Window based",
    color: "#f59e0b",
    teams: [],
    schedule: [],
    pointsTable: [],
    pointsTableByYear: { "2026": [] },
    venues: [],
    faqs: [{ question: "When is TNPL 2026 expected?", answer: "The expected window is June to July 2026." }],
    seoTitle: "TNPL 2026 Schedule | Fixtures, Teams & Points Table",
    seoDescription:
      "Check Tamil Nadu Premier League (TNPL) 2026 expected window, fixtures, points table, teams, and venues for India's domestic T20 season.",
    logo: "/images/domestic/Tamil Nadu Premier League logo.jpg.jpeg",
    intro:
      "TNPL 2026 showcases Tamil Nadu's top domestic teams. Get full match schedules, points table, teams, venues, and FAQs at t20leagueschedule.com.",
    externalLink: { label: "Official TNPL", href: "https://www.tnpl.tnca.cricket/" },
  },
];

export const getLeagueById = (id: string): League | undefined =>
  leagues.find((l) => l.id === id);

/** Returns list of years that have points table data (newest first) */
export const getPointsTableYears = (league: League): string[] => {
  if (!league.pointsTableByYear) return [];
  return Object.keys(league.pointsTableByYear).sort((a, b) => Number(b) - Number(a));
};

/** Returns points table for a given year; falls back to default pointsTable if year not in pointsTableByYear */
export const getPointsTableForYear = (league: League, year: string): PointsEntry[] => {
  const byYear = league.pointsTableByYear?.[year];
  if (byYear) return byYear;
  return league.pointsTable;
};

export const globalFaqs: FAQ[] = [
  {
    question: "What is t20leagueschedule.com?",
    answer:
      "t20leagueschedule.com is a comprehensive platform dedicated to providing schedules, fixtures, results, team information, points tables, and news for T20 cricket leagues worldwide. Our mission is to make following every T20 league easy and enjoyable for fans of all levels.",
  },
  {
    question: "How do I find match schedules?",
    answer:
      "Navigate to the Leagues section on the homepage. Select the league you are interested in. Each league page contains a full schedule, including match dates, times, and venues. Fixtures are updated regularly to ensure accuracy.",
  },
  {
    question: "How can I check team and player information?",
    answer:
      "On each league page, you will find a Teams & Players section. Here you can view team rosters, captain details, player stats, and more. This information is sourced from official announcements and updated throughout the season.",
  },
  {
    question: "How do I track points tables and standings?",
    answer:
      "Each league page includes a Points Table section. Tables are updated as matches are played, showing wins, losses, points, and rankings. Historical standings may also be available for reference.",
  },
  {
    question: "Can I rely on your information for official purposes?",
    answer:
      "Our content is for informational purposes only. We strive for accuracy but cannot guarantee completeness or real-time results. Users should verify details with official league sources before making any decisions based on the data.",
  },
  {
    question: "How can I contact t20leagueschedule.com?",
    answer:
      "For questions, feedback, or suggestions, email us at info@t20leagueschedule.com. Our team responds promptly and ensures your inquiries are addressed professionally.",
  },
  {
    question: "How often is the site updated?",
    answer:
      "We update schedules, fixtures, standings, and news as soon as official updates are released. Our goal is to keep information current and reliable for all users.",
  },
  {
    question: "Do you cover all T20 leagues?",
    answer:
      "Yes, we aim to cover all T20 cricket leagues, from widely followed competitions to smaller regional and domestic tournaments. This ensures fans can access complete information in one place.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Yes, your privacy is important to us. We do not sell or share personal information and follow strict privacy practices, as explained in our Privacy Policy.",
  },
  {
    question: "Can I suggest improvements or new leagues?",
    answer:
      "Absolutely! We welcome feedback and suggestions. Email your ideas to info@t20leagueschedule.com, and we will consider adding new content or features based on user requests.",
  },
  {
    question: "Do you provide news and updates?",
    answer:
      "Yes, our site features news, announcements, and updates related to T20 leagues. This includes changes in fixtures, team announcements, and general cricket-related news.",
  },
];
