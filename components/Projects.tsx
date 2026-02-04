"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { portfolioData } from "@/lib/portfolio-data";

const categoryColors = [
  "linear-gradient(135deg, #10b981, #34d399)", // healthcare/education - green
  "linear-gradient(135deg, #3b82f6, #60a5fa)", // fintech - blue
  "linear-gradient(135deg, #f59e0b, #fbbf24)", // finance - orange
];

export function Projects() {
  const { projects } = portfolioData;

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Apps I've built and shipped"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-[var(--border-radius-lg)] border border-[var(--border-color)] bg-[var(--bg-card)] p-8 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-[#8b5cf6]/20"
          >
            {/* Colored top border */}
            <div
              className="absolute left-0 right-0 top-0 h-1"
              style={{
                background: categoryColors[index % categoryColors.length],
              }}
            />

            <div className="flex flex-1 flex-col pt-2">
              <h3 className="mb-2 font-semibold text-[var(--text-primary)]">
                {project.name}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="text-xs text-[var(--text-muted)]">
                    +{project.tech.length - 5} more
                  </span>
                )}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-purple)] transition-all hover:gap-3"
              >
                View on Play Store
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
