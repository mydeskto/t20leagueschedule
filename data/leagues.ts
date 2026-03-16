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
}

export interface WomenLeague {
  id: string;
  name: string;
  shortName: string;
  country: string;
  seasonsTill2026: number;
  window2026: string;
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
    id: "ipl",
    name: "Indian Premier League",
    shortName: "IPL",
    country: "India",
    season: "Season 19",
    seasonsTill2026: 19,
    startDate: "28 March 2026",
    endDate: "31 May 2026",
    status: "Confirmed",
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
      { id: "ipl2", team1: "Mumbai Indians", team2: "Kolkata Knight Riders", date: "Mar 29, 2026", time: "19:30", venue: "Mumbai", status: "upcoming" },
      { id: "ipl3", team1: "Rajasthan Royals", team2: "Chennai Super Kings", date: "Mar 30, 2026", time: "19:30", venue: "Guwahati", status: "upcoming" },
      { id: "ipl4", team1: "Punjab Kings", team2: "Gujarat Titans", date: "Mar 31, 2026", time: "19:30", venue: "Mullanpur", status: "upcoming" },
      { id: "ipl5", team1: "Lucknow Super Giants", team2: "Delhi Capitals", date: "Apr 1, 2026", time: "19:30", venue: "Lucknow", status: "upcoming" },
      { id: "ipl6", team1: "Kolkata Knight Riders", team2: "Sunrisers Hyderabad", date: "Apr 2, 2026", time: "19:30", venue: "Kolkata", status: "upcoming" },
      { id: "ipl7", team1: "Chennai Super Kings", team2: "Punjab Kings", date: "Apr 3, 2026", time: "19:30", venue: "Chennai", status: "upcoming" },
      { id: "ipl8", team1: "Delhi Capitals", team2: "Mumbai Indians", date: "Apr 4, 2026", time: "15:30", venue: "Delhi", status: "upcoming" },
      { id: "ipl9", team1: "Gujarat Titans", team2: "Rajasthan Royals", date: "Apr 4, 2026", time: "19:30", venue: "Ahmedabad", status: "upcoming" },
      { id: "ipl10", team1: "Sunrisers Hyderabad", team2: "Lucknow Super Giants", date: "Apr 5, 2026", time: "15:30", venue: "Hyderabad", status: "upcoming" },
      { id: "ipl11", team1: "Royal Challengers Bengaluru", team2: "Chennai Super Kings", date: "Apr 5, 2026", time: "19:30", venue: "Bengaluru", status: "upcoming" },
      { id: "ipl12", team1: "Kolkata Knight Riders", team2: "Punjab Kings", date: "Apr 6, 2026", time: "19:30", venue: "Kolkata", status: "upcoming" },
      { id: "ipl13", team1: "Rajasthan Royals", team2: "Mumbai Indians", date: "Apr 7, 2026", time: "19:30", venue: "Guwahati", status: "upcoming" },
      { id: "ipl14", team1: "Delhi Capitals", team2: "Gujarat Titans", date: "Apr 8, 2026", time: "19:30", venue: "Delhi", status: "upcoming" },
      { id: "ipl15", team1: "Kolkata Knight Riders", team2: "Lucknow Super Giants", date: "Apr 9, 2026", time: "19:30", venue: "Kolkata", status: "upcoming" },
      { id: "ipl16", team1: "Rajasthan Royals", team2: "Royal Challengers Bengaluru", date: "Apr 10, 2026", time: "19:30", venue: "Guwahati", status: "upcoming" },
      { id: "ipl17", team1: "Punjab Kings", team2: "Sunrisers Hyderabad", date: "Apr 11, 2026", time: "15:30", venue: "Mullanpur", status: "upcoming" },
      { id: "ipl18", team1: "Chennai Super Kings", team2: "Delhi Capitals", date: "Apr 11, 2026", time: "19:30", venue: "Chennai", status: "upcoming" },
      { id: "ipl19", team1: "Lucknow Super Giants", team2: "Gujarat Titans", date: "Apr 12, 2026", time: "15:30", venue: "Lucknow", status: "upcoming" },
      { id: "ipl20", team1: "Mumbai Indians", team2: "Royal Challengers Bengaluru", date: "Apr 12, 2026", time: "19:30", venue: "Mumbai", status: "upcoming" },
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
      { question: "When does IPL 2026 start?", answer: "IPL 2026 begins on March 28, 2026 (RCB vs SRH at Bengaluru) and the final is on May 31, 2026. The first phase (20 matches) runs till April 12." },
      { question: "How many teams are in IPL?", answer: "There are 10 teams: RCB, SRH, MI, KKR, RR, CSK, Punjab Kings, Gujarat Titans, Lucknow Super Giants, and Delhi Capitals." },
    ],
    seoTitle: "IPL 2026 Schedule: Match Dates, Points Table, Teams & Venues",
    seoDescription: "Check IPL 2026 full schedule, match fixtures, points table, teams, venues, and latest news. Stay updated with every IPL match.",
  },
  {
    id: "psl",
    name: "Pakistan Super League",
    shortName: "PSL",
    country: "Pakistan",
    season: "Season 11",
    seasonsTill2026: 11,
    startDate: "26 March 2026",
    endDate: "3 May 2026",
    status: "Confirmed",
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
      { team: "Islamabad United", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Karachi Kings", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Lahore Qalandars", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Multan Sultans", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Peshawar Zalmi", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Quetta Gladiators", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Hyderabad Kingsmen", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
      { team: "Rawalpindi Pindiz", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
    ],
    pointsTableByYear: {
      "2026": [
        { team: "Islamabad United", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Karachi Kings", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Lahore Qalandars", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Multan Sultans", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Peshawar Zalmi", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Quetta Gladiators", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Hyderabad Kingsmen", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
        { team: "Rawalpindi Pindiz", played: 0, won: 0, lost: 0, nrr: "0.000", points: 0 },
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
    seoTitle: "PSL 2026 Schedule: Match Dates, Points Table, Teams & Venues",
    seoDescription: "Explore PSL 2026 full schedule including match dates, points table, team squads, venues, and latest news.",
  },
  {
    id: "bbl",
    name: "Big Bash League",
    shortName: "BBL",
    country: "Australia",
    season: "Season 15",
    seasonsTill2026: 15,
    startDate: "Dec 2026 (expected)",
    endDate: "Jan 2027",
    status: "Window based",
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
  },
  {
    id: "cpl",
    name: "Caribbean Premier League",
    shortName: "CPL",
    country: "West Indies",
    season: "Season 14",
    seasonsTill2026: 14,
    startDate: "Aug 2026 (expected)",
    endDate: "Sep 2026",
    status: "Window based",
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
  },
  {
    id: "sa20",
    name: "SA20",
    shortName: "SA20",
    country: "South Africa",
    season: "Season 4",
    seasonsTill2026: 4,
    startDate: "Jan 2026 (expected)",
    endDate: "Feb 2026",
    status: "Window based",
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
  },
  {
    id: "ilt20",
    name: "International League T20",
    shortName: "ILT20",
    country: "UAE",
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
  },
  {
    id: "bpl",
    name: "Bangladesh Premier League",
    shortName: "BPL",
    country: "Bangladesh",
    season: "Season 12",
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
  },
  {
    id: "lpl",
    name: "Lanka Premier League",
    shortName: "LPL",
    country: "Sri Lanka",
    season: "Season 6",
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
  },
  {
    id: "mlc",
    name: "Major League Cricket",
    shortName: "MLC",
    country: "USA",
    season: "Season 4",
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
  },
  {
    id: "npl",
    name: "Nepal Premier League",
    shortName: "NPL",
    country: "Nepal",
    season: "Season 3",
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
  },
  {
    id: "the-hundred",
    name: "The Hundred",
    shortName: "100",
    country: "England",
    season: "Season 5",
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
  },
];

export const womenLeagues: WomenLeague[] = [
  { id: "wpl", name: "Women's Premier League", shortName: "WPL", country: "India", seasonsTill2026: 4, window2026: "Feb–Mar 2026 (expected)" },
  { id: "wbbl", name: "Women's Big Bash League", shortName: "WBBL", country: "Australia", seasonsTill2026: 12, window2026: "Oct–Nov 2026" },
  { id: "wcpl", name: "Women's Caribbean Premier League", shortName: "WCPL", country: "West Indies", seasonsTill2026: 5, window2026: "Aug 2026" },
  { id: "the-hundred-women", name: "The Hundred Women", shortName: "100 Women", country: "England", seasonsTill2026: 6, window2026: "Jul–Aug 2026" },
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
  { question: "What leagues are included?", answer: "We cover IPL, PSL, BBL, CPL, BPL, SA20, ILT20, LPL, MLC, NPL, The Hundred, and women's leagues (WPL, WBBL, WCPL, The Hundred Women)." },
  { question: "How often are schedules updated?", answer: "Schedules are updated in real-time as official fixtures are announced or modified by the respective cricket boards." },
  { question: "Where can I see points tables?", answer: "Each league page has a dedicated points table section that is updated after every match." },
  { question: "How to check team details?", answer: "Navigate to any league page and explore the Teams tab to see all team rosters and information." },
  { question: "Is this platform free to use?", answer: "Yes, all cricket league information is freely accessible on our platform." },
];
