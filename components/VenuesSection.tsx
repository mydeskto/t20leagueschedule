"use client";
import { motion } from "framer-motion";
import { MapPin, Users, Landmark } from "lucide-react";

import lahorePic from "@/public/images/venue-lahore.jpg";
import wankhedePic from "@/public/images/venue-wankhede.jpg";
import dubaiPic from "@/public/images/venue-dubai.jpg";
import mcgPic from "@/public/images/venue-mcg.jpg";

const venueImages: Record<string, string> = {
  lahore: lahorePic.src,
  wankhede: wankhedePic.src,
  dubai: dubaiPic.src,
  mcg: mcgPic.src,
};

const venues = [
  { name: "Gaddafi Stadium", city: "Lahore, Pakistan", capacity: "27,000", image: "lahore" },
  { name: "Wankhede Stadium", city: "Mumbai, India", capacity: "33,108", image: "wankhede" },
  { name: "Dubai International Stadium", city: "Dubai, UAE", capacity: "25,000", image: "dubai" },
  { name: "Melbourne Cricket Ground", city: "Melbourne, Australia", capacity: "100,024", image: "mcg" },
];

export { venueImages };

const VenuesSection = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-5">
            <Landmark className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Venues</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Iconic Stadiums</h2>
          <p className="text-muted-foreground">Where legends are made</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {venues.map((venue, i) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-glass-border bg-card/50 transition-all duration-500 hover:border-primary/20 hover:shadow-glow"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={venueImages[venue.image]}
                  alt={venue.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-foreground text-lg mb-3 group-hover:text-primary transition-colors duration-300">{venue.name}</h3>
                <div className="flex items-center gap-5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary/50" />
                    {venue.city}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-primary/50" />
                    {venue.capacity}
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

export default VenuesSection;
