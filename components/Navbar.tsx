"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { leagues } from "@/data/leagues";
import Image from "next/image";
import FaqDialogButton from "@/components/FaqDialogButton";

import logo from "@/public/images/T20 League Schedule.png"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [leaguesOpen, setLeaguesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const filteredLeagues = leagues.filter((l) =>
    l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.shortName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <FaqDialogButton />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-2xl border-b border-glass-border shadow-lg shadow-background/50"
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
                  <div className="bg-card/95 backdrop-blur-2xl border border-glass-border rounded-2xl p-2 min-w-[220px] max-h-[70vh] overflow-y-auto shadow-2xl shadow-background/60">
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
            onClick={() => { setSearchOpen(!searchOpen); setMobileOpen(false); }}
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
              <input
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search leagues, teams..."
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-lg font-body"
              />
              {searchQuery && (
                <div className="mt-3 space-y-1">
                  {filteredLeagues.map((l) => (
                    <Link
                      key={l.id}
                      href={`/${l.id}`}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all"
                    >
                      {l.logo ? (
                        <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden bg-background/40">
                          <Image src={l.logo} alt="" width={28} height={28} className="w-full h-full object-contain" />
                        </div>
                      ) : null}
                      {l.name}
                    </Link>
                  ))}
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
              <Link href="/" className="block px-4 py-3 rounded-xl text-foreground hover:bg-foreground/5 transition-all font-medium">Home</Link>
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Leagues</div>
              {leagues.map((l) => (
                <Link key={l.id} href={`/${l.id}`} className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all">
                  {l.logo ? (
                    <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden bg-background/40">
                      <Image src={l.logo} alt="" width={28} height={28} className="w-full h-full object-contain" />
                    </div>
                  ) : null}
                  {l.shortName}
                </Link>
              ))}
              <Link href="/venues" className="block px-4 py-3 rounded-xl text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all">Venues</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
