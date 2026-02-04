"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { portfolioData } from "@/lib/portfolio-data";

export function Education() {
  const { education } = portfolioData;

  return (
    <Section id="education" title="Education" subtitle="Academic background" altBg>
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, index) => (
          <motion.div
            key={`${edu.degree}-${edu.period}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-4 rounded-[var(--border-radius)] border border-[var(--border-color)] bg-[var(--bg-card)] p-6 transition-all hover:bg-[var(--bg-card-hover)]"
          >
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
                boxShadow: "0 4px 14px rgba(139, 92, 246, 0.3)",
              }}
            >
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-primary)]">
                {edu.degree}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {edu.institution}
              </p>
              <p className="mt-1 text-xs text-[var(--text-muted)]">
                {edu.period}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
