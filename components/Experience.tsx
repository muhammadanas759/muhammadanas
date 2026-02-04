"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { portfolioData } from "@/lib/portfolio-data";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Professional journey and achievements"
      altBg
    >
      <div className="relative mx-auto max-w-3xl">
        {/* Vertical timeline line with gradient */}
        <div
          className="absolute left-[23px] top-6 bottom-6 w-0.5 md:left-[31px]"
          style={{
            background: "linear-gradient(to bottom, #8b5cf6, #d946ef, #f97316, transparent)",
          }}
        />

        <div className="space-y-0">
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative flex gap-6 pb-10 last:pb-0"
            >
              {/* Timeline dot with gradient */}
              <div className="relative z-10 flex shrink-0 items-start pt-1">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
                    boxShadow: "0 4px 14px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  <span className="text-sm font-bold text-white">{index + 1}</span>
                </div>
              </div>

              {/* Content card */}
              <div className="min-w-0 flex-1 rounded-[var(--border-radius)] border border-[var(--border-color)] bg-[var(--bg-card)] p-6 transition-all hover:bg-[var(--bg-card-hover)] hover:shadow-lg hover:shadow-[#8b5cf6]/10">
                <h3 className="mb-2 text-lg font-bold text-[var(--accent-purple)]">
                  {job.company}
                </h3>

                <span
                  className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    background: "rgba(139, 92, 246, 0.2)",
                    color: "#a78bfa",
                  }}
                >
                  {job.period}
                </span>

                <p className="mb-2 font-semibold text-[var(--text-primary)]">
                  {job.role}
                </p>
                <p className="mb-4 text-sm text-[var(--text-muted)]">
                  {job.location}
                </p>

                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-[var(--text-secondary)]"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "linear-gradient(135deg, #8b5cf6, #d946ef)" }}
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
