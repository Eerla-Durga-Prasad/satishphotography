"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Compass, Heart, Film } from "lucide-react";

const STATS = [
  {
    icon: Compass,
    value: "8+",
    label: "Years in Artistry"
  },
  {
    icon: Heart,
    value: "500+",
    label: "Weddings Captured"
  },
  {
    icon: Film,
    value: "150+",
    label: "Cinematic Films"
  },
  {
    icon: Award,
    value: "20+",
    label: "Industry Awards"
  }
];

const TIMELINE = [
  {
    year: "2018",
    title: "The Genesis",
    description: "Satish establishes the studio with a raw passion for lighting and frames, covering local portraits in Piduguralla."
  },
  {
    year: "2020",
    title: "Cinematic Transition",
    description: "Integrating professional Sony Alpha & Cine prime lenses, transitioning the brand into high-end cinematic wedding films."
  },
  {
    year: "2022",
    title: "Regional Acclaim",
    description: "Expanding coverage across Andhra Pradesh, recognized for exceptional candid capturing and premium album deliverables."
  },
  {
    year: "2026",
    title: "Luxury Standard",
    description: "Redefining wedding photography as fine-art visual galleries, serving clients with bespoke cinematic experiences."
  }
];

const aboutContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const aboutItemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1] as const,
    },
  },
};

const statVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const timelineVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1] as const,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-secondary overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold-radial opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Container - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-4 border border-gold/15 pointer-events-none z-0 m-4" />
            
            <div className="relative z-10 border border-white/10 overflow-hidden bg-primary p-3">
              {/* Gold inner border wrapper */}
              <div className="absolute inset-0 border border-gold/30 pointer-events-none z-20 m-6" />
              
              <Image
                src="/assets/satish_pic.webp"
                alt="Satish - Chief Photographer"
                width={800}
                height={1000}
                className="w-full h-auto object-cover transform hover:scale-103 transition-transform duration-700"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Subtle floating overlay label */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="absolute bottom-6 right-6 z-20 bg-primary/90 border border-gold/30 px-6 py-3 backdrop-blur-sm"
            >
              <span className="text-[9px] text-white/50 tracking-[0.25em] uppercase font-light block">
                Lead Director
              </span>
              <span className="text-sm font-serif text-gold tracking-wider mt-0.5 block">
                Satish Erla
              </span>
            </motion.div>
          </motion.div>

          {/* Storytelling & Stats Container - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-xs text-gold tracking-[0.3em] uppercase block mb-3 font-semibold"
            >
              The Creative Director
            </motion.span>
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="text-3xl md:text-5xl font-serif font-light tracking-wide text-white mb-6"
            >
              Capturing the Soul <br />
              <span className="text-gold-gradient font-light">of Timeless Stories</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
              className="w-12 h-[1px] bg-gold mb-8 origin-left"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-xs md:text-sm text-white/70 leading-relaxed font-light tracking-wide mb-6"
            >
              Photography is not merely about pressing a shutter button; it is an intimate play of shadows, chemistry, and composition. At Satish Photography, we view every wedding as a royal screenplay waiting to be preserved. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              Based in Piduguralla, our studio has spent nearly a decade crafting premium visual portfolios that speak to the heart. We blend raw emotional candids with high-fashion portrait layouts to deliver memories that remain timeless.
            </motion.p>

            {/* Stats Cards */}
            <motion.div
              variants={aboutContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
            >
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    variants={statVariants}
                    key={stat.label}
                    className="glass-panel p-5 border border-white/5 text-center relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gold/0 group-hover:bg-gold/40 transition-colors" />
                    <Icon className="w-4 h-4 text-gold mx-auto mb-2 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="text-2xl font-serif text-white tracking-wide font-light">
                      {stat.value}
                    </div>
                    <div className="text-[9px] text-white/40 tracking-wider uppercase mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="w-full h-[1px] bg-white/5 my-20 origin-center"
        />

        {/* Studio Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-xs text-gold tracking-[0.25em] uppercase block mb-3 font-semibold"
            >
              The Path to Perfection
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="text-2xl md:text-3xl font-serif font-light tracking-wide text-white"
            >
              Our Journey
            </motion.h3>
          </div>

          <motion.div
            variants={aboutContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {TIMELINE.map((item) => (
              <motion.div
                variants={timelineVariants}
                key={item.year}
                className="relative group pl-8 md:pl-0 border-l border-white/10 md:border-l-0 md:border-t md:pt-8 pt-1 pb-8 md:pb-0"
              >
                {/* Node circle */}
                <div className="absolute -left-[6px] top-2 md:left-0 md:-top-[6px] w-[11px] h-[11px] rounded-full bg-gold border border-primary group-hover:scale-125 transition-transform" />
                
                {/* Year tag */}
                <span className="text-sm font-mono font-bold text-gold">
                  {item.year}
                </span>
                
                {/* Title */}
                <h4 className="text-md font-serif font-light text-white mt-2 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h4>
                
                {/* Description */}
                <p className="text-[11px] text-white/50 leading-relaxed font-light tracking-wide mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
