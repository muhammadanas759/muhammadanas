"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const { name, heroApps } = portfolioData;
  const firstName = name.split(" ")[1] || name; // "Anas"

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg-primary)] py-[120px] pb-20"
    >
      {/* Decorative gradient background */}
      <div
        className="pointer-events-none absolute -right-[20%] top-[-50%] h-[200%] w-[80%] rounded-full opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-[60px] px-6 text-center lg:grid-cols-[1.2fr_1fr] lg:text-left">
        {/* Hero Content - Left Column */}
        <div className="flex flex-col">
          {/* Hero Badge */}
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="flex flex-col"
          >
            <motion.div
              variants={item}
              transition={{ duration: 0.5 }}
              className="hero-badge mb-6 inline-flex items-center gap-2.5 self-center lg:self-start"
            >
              <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse-dot" />
              <span className="text-[0.85rem] font-medium text-[#22c55e]">
                Open to Opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={item}
              transition={{ duration: 0.5 }}
              className="mb-2 text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-[1.2]"
            >
              Hi, I&apos;m <span className="gradient-text">{firstName}</span>
            </motion.h1>

            {/* Tagline */}
            {/* <motion.p
              variants={item}
              transition={{ duration: 0.5 }}
              className="hero-tagline mb-6 text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-[var(--text-secondary)]"
            >
              {tagline}
            </motion.p> */}

            {/* Description */}
            <motion.p
              variants={item}
              transition={{ duration: 0.5 }}
              className="hero-desc mb-8 max-w-[520px] self-center text-[1.1rem] leading-[1.8] text-[var(--text-secondary)] lg:self-start"
            >
              I build <strong className="text-[var(--text-primary)]">beautiful, high-performance</strong> mobile apps that users love. Specialized in
              <span className="highlight"> Ed-Tech</span>,
              <span className="highlight"> Delivery</span>,
              <span className="highlight"> Fintech</span> & <span className="highlight">Healthcare</span> with 6+ years of experience crafting solutions with Kotlin, Jetpack Compose & Flutter.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              transition={{ duration: 0.5 }}
              className="hero-cta mb-12 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-[0_4px_24px_rgba(168,85,247,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(168,85,247,0.4)]"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #d946ef, #f97316)",
                }}
              >
                View My Work
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="btn-outline inline-flex items-center gap-2 rounded-full border-2 border-white/[0.08] bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-[#8b5cf6] hover:bg-[rgba(139,92,246,0.1)]"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              variants={item}
              transition={{ duration: 0.5 }}
              className="hero-stats flex flex-wrap justify-center gap-10 sm:gap-6 lg:justify-start"
            >
              <div className="stat text-center">
                <span className="stat-value block text-[2rem] font-extrabold">5+</span>
                <span className="stat-label text-[0.85rem] text-[#6b7280]">Years Exp.</span>
              </div>
              <div className="stat text-center">
                <span className="stat-value block text-[2rem] font-extrabold">12+</span>
                <span className="stat-label text-[0.85rem] text-[#6b7280]">Apps Built</span>
              </div>
              <div className="stat text-center">
                <span className="stat-value block text-[2rem] font-extrabold">15M+</span>
                <span className="stat-label text-[0.85rem] text-[#6b7280]">Downloads</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Visual - Phone Mockup (Right Column) - Hidden on mobile */}
        <motion.div
          variants={item}
          transition={{ duration: 0.5 }}
          className="hero-visual hidden items-center justify-center lg:flex"
        >
          <div className="phone-mockup animate-float">
            <div className="phone-screen !grid grid-cols-3 place-content-start gap-x-2 gap-y-4 px-3 pb-5 pt-4">
              {heroApps.map((app) => (
                <a
                  key={app.name}
                  href={app.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-1.5 no-underline transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e2e] rounded-lg"
                  aria-label={`${app.name} on Google Play`}
                >
      
                  <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-2xl shadow-md ring-1 ring-white/10 transition-[box-shadow,transform] group-hover:ring-[#c084fc]/50">
                    <Image
                      src={app.iconSrc}
                      alt=""
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                      sizes="56px"
                    />
                  </span>
                       <span className="line-clamp-2 min-h-[2rem] max-w-[4.5rem] text-center text-[0.65rem] font-semibold leading-tight text-white/85 transition-colors group-hover:text-white">
                    {app.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
