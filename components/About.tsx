"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Section } from "./Section";
import { portfolioData } from "@/lib/portfolio-data";

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="A brief introduction" altBg>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="rounded-[var(--border-radius-lg)] border border-[var(--border-color)] bg-[var(--bg-card)] p-8 md:p-10"
      >
        <p className="text-lg leading-relaxed text-[var(--text-secondary)] [&>strong]:text-[var(--text-primary)]">
          {portfolioData.about}
        </p>
        {portfolioData.introVideoSrc ? (
          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--border-color)] bg-black shadow-lg">
            <video
              className="mx-auto aspect-video w-full max-h-[min(70vh,560px)] object-contain"
              controls
              playsInline
              preload="metadata"
              aria-label="Introduction video"
            >
              <source src={portfolioData.introVideoSrc} type="video/mp4" />
            </video>
          </div>
        ) : null}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card-hover)] px-4 py-2">
          <MapPin className="h-4 w-4 text-[var(--accent-pink)]" />
          <span className="text-sm font-medium text-[var(--text-secondary)]">
            Remote, Pakistan
          </span>
        </div>
      </motion.div>
    </Section>
  );
}
