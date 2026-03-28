"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { leagues, DomesticLeagues, womenLeagues, type League } from "@/data/leagues";
import Image from "next/image";
import FaqDialogButton from "@/components/FaqDialogButton";

import logo from "@/public/images/T20 League Schedule.png";

/** Multi-word phrases first so shorter tokens do not break longer matches */
const SEARCH_INTENT_PHRASES = [
  "points table",
  "point table",
  "points tables",
  "fixtures and results",
  "tables",
  "table",
  "points",
  "point",
  "fixtures",
  "fixture",
  "schedules",
  "schedule",
  "standings",
  "standing",
  "squads",
  "squad",
  "teams",
  "team",
  "stadiums",
  "stadium",
  "venues",
  "venue",
  "faqs",
  "faq",
  "matches",
  "match",
  "results",
  "result",
  "scores",
  "score",
  "live",
  "cricket",
  "t20",
  "2026",
  "2025",
  "the",
  "get",
  "show",
  "find",
  "view",
  "see",
  "where",
  "how",
  "for",
  "and",
  "or",
  "leagues",
  "league",
];

/** Tab targets only — used for partial tails (e.g. "psl sc" → schedule) and link hints. Order resolves overlaps (first match wins). */
const SEARCH_INTENT_TAB_GROUPS: { keywords: string[]; hash: string; hint: string }[] = [
  {
    keywords: [
      "points table",
      "point table",
      "standings",
      "standing",
      "points",
      "point",
      "table",
      "tables",
      "pts",
      "nrr",
    ],
    hash: "#points-table",
    hint: "Points table",
  },
  {
    keywords: [
      "schedules",
      "schedule",
      "fixtures",
      "fixture",
      "matches",
      "match",
      "results",
      "result",
      "scores",
      "score",
      "upcoming",
    ],
    hash: "#schedule",
    hint: "Schedule",
  },
  {
    keywords: ["teams", "team", "squads", "squad", "players", "player", "roster"],
    hash: "#teams",
    hint: "Teams",
  },
  {
    keywords: ["venues", "venue", "stadiums", "stadium", "ground"],
    hash: "#venues",
    hint: "Venues",
  },
  {
    keywords: ["faqs", "faq", "questions", "question"],
    hash: "#faq",
    hint: "FAQ",
  },
];

function isPartialTabIntentTail(tail: string): boolean {
  if (tail.length < 2) return false;
  return SEARCH_INTENT_TAB_GROUPS.some((g) => g.keywords.some((k) => k.startsWith(tail)));
}

function intentLinkFromPartialTail(tail: string): { hash: string; hint: string } | null {
  if (tail.length < 2) return null;
  for (const g of SEARCH_INTENT_TAB_GROUPS) {
    if (g.keywords.some((k) => k.startsWith(tail))) {
      return { hash: g.hash, hint: g.hint };
    }
  }
  return null;
}

/** Remove trailing tokens that are prefixes of tab intent words (after full-phrase strip). */
function stripTrailingIntentPrefixes(s: string): string {
  const tokens = s.split(/\s+/).filter(Boolean);
  while (tokens.length >= 2) {
    const tail = tokens[tokens.length - 1];
    if (!isPartialTabIntentTail(tail)) break;
    tokens.pop();
  }
  return tokens.join(" ");
}

function stripSearchIntent(queryLower: string): string {
  let s = queryLower.replace(/\s+/g, " ").trim();
  const sorted = [...SEARCH_INTENT_PHRASES].sort((a, b) => b.length - a.length);
  for (const phrase of sorted) {
    const re = new RegExp(`\\b${phrase.replace(/\s+/g, "\\s+")}\\b`, "gi");
    s = s.replace(re, " ");
  }
  s = s.replace(/\s+/g, " ").trim();
  return stripTrailingIntentPrefixes(s);
}

function leagueMatchesSearchQuery(l: League, queryLower: string): boolean {
  const q = queryLower.trim();
  if (!q) return false;
  const name = l.name.toLowerCase();
  const short = l.shortName.toLowerCase();
  const id = l.id.toLowerCase();
  const idShort = id.replace(/-schedule$/, "");

  if (name.includes(q) || short.includes(q) || id.includes(q)) return true;

  const core = stripSearchIntent(q);
  if (!core) return false;

  if (name.includes(core) || short.includes(core) || id.includes(core) || idShort === core) return true;
  if (short.replace(/\s+/g, "").includes(core.replace(/\s+/g, ""))) return true;

  const words = core.split(/\s+/).filter((w) => w.length >= 2);
  if (words.length >= 2 && words.every((w) => name.includes(w))) return true;

  return false;
}

function searchIntentLink(queryLower: string): { hash: string; hint: string } | null {
  const q = queryLower;
  if (/\b(points?\s+table|point\s+table|standings?|nrr\b|\bpts\b|\bpoints\b)/.test(q)) {
    return { hash: "#points-table", hint: "Points table" };
  }
  if (/\b(schedules?|fixtures?|matches?|match\s+list|upcoming|next\s+match)/.test(q)) {
    return { hash: "#schedule", hint: "Schedule" };
  }
  if (/\b(teams?|squads?|squad|players?|roster)/.test(q)) {
    return { hash: "#teams", hint: "Teams" };
  }
  if (/\b(venues?|stadiums?|ground)/.test(q)) {
    return { hash: "#venues", hint: "Venues" };
  }
  if (/\b(faqs?|questions?)\b/.test(q)) {
    return { hash: "#faq", hint: "FAQ" };
  }
  const parts = q.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    const tail = parts[parts.length - 1];
    const fromTail = intentLinkFromPartialTail(tail);
    if (fromTail) return fromTail;
  }
  return null;
}

function buildLeagueSearchHits(query: string): { league: League; href: string; hint?: string }[] {
  const q = query.trim();
  if (!q) return [];
  const lower = q.toLowerCase();
  const intent = searchIntentLink(lower);
  const matched = leagues.filter((l) => leagueMatchesSearchQuery(l, lower));
  return matched.map((league) => ({
    league,
    href: `/${league.id}${intent?.hash ?? ""}`,
    hint: intent?.hint,
  }));
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [leaguesOpen, setLeaguesOpen] = useState(false);
  const [mobileLeaguesOpen, setMobileLeaguesOpen] = useState(false);
  const [mobileOtherOpen, setMobileOtherOpen] = useState(false);
  const [mobileDomesticOpen, setMobileDomesticOpen] = useState(false);
  const [mobileWomenOpen, setMobileWomenOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    setMobileLeaguesOpen(false);
    setMobileOtherOpen(false);
    setMobileDomesticOpen(false);
    setMobileWomenOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  const searchHits = useMemo(() => buildLeagueSearchHits(searchQuery), [searchQuery]);

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <FaqDialogButton />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-transparant"
            : "bg-transparent"
        }`}
      >
      <div className="container-narrow flex items-center justify-between h-18 px-4 md:px-8 py-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image src={logo.src} alt="Logo" width={100} height={100} className="w-30 h-60 object-contain" />
          
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
          >
            Home
          </Link>
          <div className="relative group"
            onMouseEnter={() => setLeaguesOpen(true)}
            onMouseLeave={() => setLeaguesOpen(false)}
          >
            <button className="px-4 py-2 rounded-xl text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all duration-300 flex items-center gap-1">
              Leagues
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${leaguesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {leaguesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-2"
                >
                  <div className="bg-card/95 backdrop-blur-2xl border border-glass-border rounded-2xl p-2 min-w-[260px] max-h-[70vh] overflow-y-auto shadow-2xl shadow-background/60">
                    {leagues.map((league) => (
                      <Link
                        key={league.id}
                        href={`/${league.id}`}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all duration-200"
                      >
                        {league.logo ? (
                          <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden bg-background/40">
                            <Image src={league.logo} alt="" width={32} height={32} className="w-full h-full object-contain" />
                          </div>
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        )}
                        {league.shortName} — {league.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/venues" className="px-4 py-2 rounded-xl text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all duration-300">
            Venues
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              if (searchOpen) {
                setSearchQuery("");
              }
              setSearchOpen(!searchOpen);
              setMobileOpen(false);
            }}
            className="p-2.5 rounded-xl text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => { setMobileOpen(!mobileOpen); setSearchOpen(false); }}
            className="md:hidden p-2.5 rounded-xl text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-card/95 backdrop-blur-2xl border-t border-glass-border"
          >
            <div className="container-narrow px-4 md:px-8 py-5">
              <div className="flex items-center gap-2">
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Try IPL, PSL schedule, points table…"
                  className="min-w-0 flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-lg font-body"
                />
                <button
                  type="button"
                  aria-label="Close search"
                  onClick={closeSearch}
                  className="shrink-0 p-2.5 rounded-xl text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {searchQuery && (
                <div className="mt-3 space-y-1">
                  {searchHits.length === 0 ? (
                    <p className="px-4 py-2 text-sm text-muted-foreground">No leagues match that search.</p>
                  ) : (
                    searchHits.map(({ league: l, href, hint }) => (
                      <Link
                        key={l.id}
                        href={href}
                        onClick={closeSearch}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all"
                      >
                        {l.logo ? (
                          <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden bg-background/40">
                            <Image src={l.logo} alt="" width={28} height={28} className="w-full h-full object-contain" />
                          </div>
                        ) : (
                          <span className="w-7 h-7 rounded-lg flex-shrink-0 bg-foreground/5" />
                        )}
                        <span className="flex flex-col gap-0.5 min-w-0">
                          <span className="text-foreground font-medium truncate">
                            {l.shortName} — {l.name}
                          </span>
                          {hint ? (
                            <span className="text-xs text-primary/90">Open {hint}</span>
                          ) : null}
                        </span>
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-card/95 backdrop-blur-2xl border-t border-glass-border"
          >
            <div className="px-4 py-5 space-y-1">
              <Link href="/" className="block px-4 py-3 rounded-xl text-foreground hover:bg-foreground/5 transition-all font-medium">
                Home
              </Link>

              {/* Leagues (international / main) */}
              <button
                type="button"
                onClick={() => setMobileLeaguesOpen((o) => !o)}
                className="flex w-full items-center justify-between px-4 py-3 rounded-xl text-foreground/90 hover:bg-foreground/5 transition-all font-medium text-left"
              >
                Leagues
                <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${mobileLeaguesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {mobileLeaguesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-2 pl-2 space-y-0.5 border-l border-glass-border ml-4">
                      {leagues.map((l) => (
                        <Link
                          key={l.id}
                          href={`/${l.id}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all"
                        >
                          {l.logo ? (
                            <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden bg-background/40">
                              <Image src={l.logo} alt="" width={28} height={28} className="w-full h-full object-contain" />
                            </div>
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          )}
                          <span>
                            <span className="font-medium text-foreground/90">{l.shortName}</span>
                            <span className="text-muted-foreground"> — {l.name}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              

              {/* Domestic T20 */}
              <button
                type="button"
                onClick={() => setMobileDomesticOpen((o) => !o)}
                className="flex w-full items-center justify-between px-4 py-3 rounded-xl text-foreground/90 hover:bg-foreground/5 transition-all font-medium text-left"
              >
                Domestic T20
                <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${mobileDomesticOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {mobileDomesticOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-2 pl-2 space-y-0.5 border-l border-glass-border ml-4">
                      <Link
                        href="/#domestic-t20"
                        className="block px-3 py-2 rounded-lg text-xs font-medium text-primary hover:underline"
                      >
                        View all on homepage ↓
                      </Link>
                      {DomesticLeagues.map((l) => (
                        <Link
                          key={l.id}
                          href="/#domestic-t20"
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all"
                        >
                          {l.logo ? (
                            <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden bg-background/40">
                              <Image src={l.logo} alt="" width={28} height={28} className="w-full h-full object-contain" />
                            </div>
                          ) : (
                            <span className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center bg-foreground/5 text-xs">🏏</span>
                          )}
                          <span>
                            <span className="font-medium text-foreground/90">{l.shortName}</span>
                            <span className="text-muted-foreground"> — {l.name}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Women&apos;s leagues */}
              <button
                type="button"
                onClick={() => setMobileWomenOpen((o) => !o)}
                className="flex w-full items-center justify-between px-4 py-3 rounded-xl text-foreground/90 hover:bg-foreground/5 transition-all font-medium text-left"
              >
                Women&apos;s leagues
                <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${mobileWomenOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {mobileWomenOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-2 pl-2 space-y-0.5 border-l border-glass-border ml-4">
                      <Link
                        href="/#womens-leagues"
                        className="block px-3 py-2 rounded-lg text-xs font-medium text-primary hover:underline"
                      >
                        View all on homepage ↓
                      </Link>
                      {womenLeagues.map((l) => (
                        <Link
                          key={l.id}
                          href="/#womens-leagues"
                          className="block px-3 py-2.5 rounded-lg text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all"
                        >
                          <span className="font-medium text-foreground/90">{l.shortName}</span>
                          <span className="text-muted-foreground"> — {l.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/venues"
                className="block px-4 py-3 rounded-xl text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all font-medium"
              >
                Venues
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
