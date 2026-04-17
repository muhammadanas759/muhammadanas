"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin } from "lucide-react";
import { Section } from "./Section";
import { portfolioData } from "@/lib/portfolio-data";

const contactLinks = [
  {
    href: `mailto:${portfolioData.contact.email}`,
    icon: Mail,
    label: "Email",
    value: portfolioData.contact.email,
  },
  {
    href: portfolioData.contact.whatsapp,
    icon: MessageCircle,
    label: "WhatsApp",
    value: portfolioData.contact.phone,
  },
  {
    href: portfolioData.contact.linkedin,
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-anas-180169154",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      title="Let's Connect"
      subtitle={portfolioData.connectMessage}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-8"
      >
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex w-full max-w-xs items-center gap-4 rounded-[var(--border-radius)] border border-[var(--border-color)] bg-[var(--bg-card)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--accent-purple)]/30 hover:bg-[var(--bg-card-hover)] hover:shadow-lg md:max-w-none md:flex-1"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-secondary)] text-[var(--accent-purple)] transition-colors group-hover:bg-[var(--accent-purple)]/20">
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-[var(--text-muted)]">
                  {link.label}
                </span>
                <span className="font-medium text-[var(--text-primary)]">
                  {link.value}
                </span>
              </div>
            </a>
          );
        })}
      </motion.div>
    </Section>
  );
}
