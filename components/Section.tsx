"use client";

import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  altBg?: boolean;
}

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function Section({ id, title, subtitle, children, className = "", altBg = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 scroll-mt-24 ${
        altBg ? "bg-[var(--bg-secondary)]" : "bg-[var(--bg-primary)]"
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {(title || subtitle) && (
          <motion.div
            className="mb-12 md:mb-16"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, margin: "-50px" }}
            transition={fadeInUp.transition}
          >
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="gradient-text">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-lg text-[var(--text-secondary)]">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
