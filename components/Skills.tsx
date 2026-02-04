"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { portfolioData } from "@/lib/portfolio-data";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

function SkillChip({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.span
      variants={itemVariants}
      transition={{ duration: 0.3, delay }}
      className="inline-flex rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-all hover:border-[var(--accent-purple)]/30 hover:bg-[var(--gradient-subtle)]"
    >
      {children}
    </motion.span>
  );
}

export function Skills() {
  const { topSkills, technicalSkills } = portfolioData;

  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I work with">
      <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }}>
        <div className="mb-12">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--accent-purple)]">
            Top Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {topSkills.map((skill, i) => (
              <SkillChip key={skill} delay={i * 0.05}>
                {skill}
              </SkillChip>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {technicalSkills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="rounded-[var(--border-radius)] border border-[var(--border-color)] bg-[var(--bg-card)] p-6 transition-colors hover:bg-[var(--bg-card-hover)]"
            >
              <h4 className="mb-4 font-semibold text-[var(--text-primary)]">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl bg-[var(--bg-secondary)] px-3 py-1.5 text-sm text-[var(--text-secondary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
