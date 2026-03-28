'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Trophy,
  Clock,
  ArrowRight,
  Play,
  TrendingUp,
  Globe,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import trophy from "@/public/images/trop.png"

const slides = [
  {
    id: 1,
    league: 'Indian Premier League',
    shortName: 'IPL 2026',
    tagline: 'Where Legends Are Made',
    description:
      'Experience the world most electrifying T20 cricket tournament featuring global superstars battling for glory',
    matches: '84',
    teams: '10',
    period: 'Mar - May 2026',
    prize: '₹20 Crore', // Winner prize (2025 confirmed; 2026 not officially announced yet)
    gradient: 'from-yellow-400 via-orange-500 to-purple-600',
    accentColor: '#f59e0b',
    logo: "/images/IPL-Logo.png"
  },
  {
    id: 2,
    league: 'Big Bash League',
    shortName: 'BBL 2026',
    tagline: 'Summer Cricket Festival',
    description:
      'Australia premier T20 spectacle delivering explosive cricket action under the summer sun',
    matches: '44',
    teams: '8',
    period: 'Dec 2025 - Jan 2026',
    prize: '$1.5M AUD',
    gradient: 'from-orange-500 via-red-600 to-pink-600',
    glowColor: 'rgba(249, 115, 22, 0.5)',
    accentColor: '#f97316',
    logo: "/images/BBL-Logo.png",
  },
  {
    id: 3,
    league: 'Pakistan Super League',
    shortName: 'PSL 2026',
    tagline: 'Talent Meets Passion',
    description:
      'Pakistan crown jewel of cricket showcasing emerging stars and fierce rivalries',
    matches: '44',
    teams: '8',
    period: 'Mar - May 2026',
    prize: '$2.5M USD',
    gradient: 'from-red-500 via-rose-600 to-purple-700',
    glowColor: 'rgba(239, 68, 68, 0.5)',
    accentColor: '#ef4444',
    logo: "/images/PSL-Logo.png",
  },
  {
    id: 4,
    league: 'Caribbean Premier League',
    shortName: 'CPL 2025',
    tagline: 'The Ultimate Cricket Party',
    description:
      'Where cricket meets carnival - experience the Caribbean flavor of explosive T20 action',
    matches: '34',
    teams: '6',
    period: 'Aug - Sep 2025',
    prize: '$1M USD',
    gradient: 'from-yellow-400 via-amber-500 to-violet-600',
    glowColor: 'rgba(234, 179, 8, 0.5)',
    accentColor: '#eab308',
    logo: "/images/CPL-Logo.png",
  },
  {
    id: 5,
    league: 'SA20 League',
    shortName: 'SA20 2026',
    tagline: 'African Cricket Revolution',
    description:
      'South Africa premier T20 franchise tournament bringing world-class cricket to the continent',
    matches: '34',
    teams: '6',
    period: 'Dec 2025 - Jan 2026',
    prize: 'R50 Million',
    gradient: 'from-orange-400 via-yellow-500 to-green-600',
    glowColor: 'rgba(249, 115, 22, 0.5)',
    accentColor: '#f97316',
    logo: "/images/SA20-Logo.png",
  },
];

// Particle Component
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();

        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - distance / 120)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />

        <motion.div
          key={`orb1-${currentSlide}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1 }}
          className={`absolute top-[-200px] right-[-100px] w-[700px] h-[700px] rounded-full opacity-10 bg-gradient-to-br ${slide.gradient}`}
          style={{ filter: `blur(120px)` }}
        />
        <motion.div
          key={`orb2-${currentSlide}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-10 bg-gradient-to-tr ${slide.gradient}`}
          style={{ filter: `blur(100px)` }}
        />

        <ParticleBackground />

        {/* <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        /> */}

        {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,15,0.7)_100%)]" /> */}
      </div>


      <div className='w-full flex justify-center items-center'>
        {/* Featured Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=" inline-flex items-center  gap-2 px-4 py-2 mt-22 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4"
        >
          {/* <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: slide.accentColor }}
          /> */}
          <Image src={trophy.src} alt='trophy' width={20} height={20} />

          <h1 className="text-xs md:text-lg font-medium text-center text-slate-300 italic">Schedules & Fixtures for  <span className={`text-xs md:text-lg bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent mb-4 inline`}>
            All T20 Cricket Leagues 2026
          </span>
          </h1>
        </motion.div>

      </div>
      <div className='w-full flex justify-center items-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=" inline-flex items-center  gap-2 px-4 py-2  rounded-full  backdrop-blur-xl  mb-4"
        >
          {/* <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: slide.accentColor }}
          /> */}
          <p className='text-white text-center'>Stay updated with all T20 cricket leagues worldwide. Check match schedules, points tables, team squads, and venues — all in one place.</p>

        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative  z-10 w-full px-4 sm:px-6 lg:px-8  pb-2">

        <AnimatePresence mode="popLayout" >
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left w-full">


                {/* League Name */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 leading-tight">
                    {slide.league.split(' ').slice(0, -1).join(' ')}
                    <br />
                    <span className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent mb-4`}>
                      {slide.league.split(' ').slice(-1)}
                    </span>
                  </h2>

                </motion.div>

                {/* Short Name & Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center justify-center lg:justify-start gap-3 mb-4 flex-wrap"
                >
                  <span
                    className="text-xl sm:text-2xl font-bold"
                    style={{ color: slide.accentColor }}
                  >
                    {slide.shortName}
                  </span>
                  <span className="text-slate-600">|</span>
                  <span className="text-base sm:text-lg text-slate-400">{slide.tagline}</span>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-base sm:text-lg text-slate-400 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                >
                  {slide.description}
                </motion.p>

                {/* Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
                >
                  {[
                    { icon: Calendar, label: 'Matches', value: slide.matches },
                    { icon: Trophy, label: 'Teams', value: slide.teams },
                    { icon: Clock, label: 'Duration', value: slide.period },
                    { icon: TrendingUp, label: 'Prize Pool', value: slide.prize },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="group p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <stat.icon
                        className="w-4 h-4 sm:w-5 sm:h-5 mb-2 transition-colors"
                        style={{ color: slide.accentColor }}
                      />
                      <p className="text-xl sm:text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.5, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-3"
                >
                  <Button
                    size="lg"
                    className={`bg-gradient-to-r ${slide.gradient} hover:opacity-90 text-white shadow-lg group`}
                    style={{ boxShadow: `0 0 30px ${slide.glowColor}` }}
                  >
                    <span className="flex items-center">
                      View Full Schedule
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Watch Trailer
                  </Button>
                </motion.div>
              </div>

              {/* Right Content - 3D Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex-1 w-full max-w-md lg:max-w-lg"
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div
                    className={`absolute -inset-3 rounded-3xl bg-gradient-to-r ${slide.gradient} opacity-10 blur-xl`}
                  />

                  {/* Main Card */}
                  <div className="relative p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 overflow-hidden">
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className='flex items-center justify-center gap-2'>
                        <Image src={slide.logo} width={60} height={60} alt='league image'></Image>
                        <div>
                          <p className="text-slate-400 text-sm mb-1">Tournament Series</p>
                          <h3 className="text-xl sm:text-1xl font-bold text-white">{slide.shortName}</h3>
                        </div>

                      </div>
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${slide.gradient} flex items-center justify-center`}
                        style={{ boxShadow: `0 0 40px ${slide.glowColor}` }}
                      >
                        <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                    </div>

                    {/* Live Indicator */}
                    <div className="flex items-center gap-3 mb-5 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="relative">
                        <div
                          className="w-3 h-3 rounded-full animate-pulse"
                          style={{ backgroundColor: slide.accentColor }}
                        />
                        <div
                          className="absolute inset-0 w-3 h-3 rounded-full animate-ping opacity-50"
                          style={{ backgroundColor: slide.accentColor }}
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm sm:text-base">Registration Open</p>
                        <p className="text-slate-400 text-xs sm:text-sm">Secure your tickets now</p>
                      </div>
                    </div>

                    {/* Stats List */}
                    <div className="space-y-2 mb-5">
                      {[
                        { label: 'Total Matches', value: slide.matches },
                        { label: 'Franchise Teams', value: slide.teams },
                        { label: 'Tournament Period', value: slide.period },
                        { label: 'Champion Prize', value: slide.prize },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2.5 px-3 sm:px-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <span className="text-slate-400 text-sm">{item.label}</span>
                          <span className="text-white font-semibold text-sm">{item.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        className={`flex-1 bg-gradient-to-r ${slide.gradient} hover:opacity-90 text-white text-sm sm:text-base`}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-white/20 text-white hover:bg-white/10 text-sm sm:text-base"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Teams
                      </Button>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20"
                  >
                    <Zap className="w-5 h-5 text-yellow-400" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-3 -left-3 p-2.5 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20"
                  >
                    <Globe className="w-4 h-4 text-cyan-400" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Section */}
        <div className="max-w-screen mx-auto mt-12">
          {/* Slide Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`group relative h-10 sm:h-12 rounded-lg overflow-hidden transition-all duration-300 ${index === currentSlide ? 'w-18 sm:w-22' : 'w-10 sm:w-12 hover:w-14'
                    }`}
                >
                  {index === currentSlide ? (
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${s.gradient} opacity-60 group-hover:opacity-40 transition-opacity`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">

                        <span className="text-white font-medium text-xs sm:text-sm">{s.shortName}</span>
                      </div>
                    </div>

                  ) : (
                    <div
                      className="w-2 h-2 px-2 rounded-full"
                      style={{ backgroundColor: s.accentColor }}
                    />
                  )}

                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  prevSlide();
                  setIsAutoPlaying(false);
                }}
                className="p-3 sm:p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => {
                  nextSlide();
                  setIsAutoPlaying(false);
                }}
                className="p-3 sm:p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
