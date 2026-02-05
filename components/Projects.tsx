"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Section } from "./Section";
import { ImagePreview } from "./ImagePreview";
import { portfolioData } from "@/lib/portfolio-data";

const categoryColors = [
  "linear-gradient(135deg, #10b981, #34d399)",
  "linear-gradient(135deg, #3b82f6, #60a5fa)",
  "linear-gradient(135deg, #f59e0b, #fbbf24)",
  "linear-gradient(135deg, #ec4899, #f472b6)",
];

type Project = (typeof portfolioData.projects)[number] & {
  links?: { label: string; url: string }[];
  screenshots?: string[];
};

function ProjectCard({
  project,
  index,
  onImageClick,
}: {
  project: Project;
  index: number;
  onImageClick: (images: string[], index: number, title: string) => void;
}) {
  const [screenshotIndex, setScreenshotIndex] = useState(0);
  const screenshots = project.screenshots ?? [];
  const hasScreenshots = screenshots.length > 0;
  const links = project.links ?? [{ label: "View on Play Store", url: project.link }];

  const handleScreenshotClick = (e: React.MouseEvent) => {
    if (hasScreenshots) {
      e.preventDefault();
      e.stopPropagation();
      onImageClick(screenshots, screenshotIndex, project.name);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-[var(--border-radius-lg)] border border-[var(--border-color)] bg-[var(--bg-card)] transition-all duration-300 hover:border-[var(--accent-purple)]/30 hover:shadow-2xl hover:shadow-[#8b5cf6]/20"
    >
      {/* Colored top border */}
      <div
        className="absolute left-0 right-0 top-0 h-1"
        style={{
          background: categoryColors[index % categoryColors.length],
        }}
      />

      {/* Screenshots section - clickable for full preview */}
      <div
        className={`relative aspect-[4/3] overflow-hidden bg-[var(--bg-secondary)] ${hasScreenshots ? "cursor-pointer" : ""}`}
        onClick={handleScreenshotClick}
        role={hasScreenshots ? "button" : undefined}
        tabIndex={hasScreenshots ? 0 : undefined}
        onKeyDown={(e) => {
          if (hasScreenshots && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onImageClick(screenshots, screenshotIndex, project.name);
          }
        }}
      >
        {hasScreenshots ? (
          <>
            <motion.div
              key={screenshotIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-full"
            >
              <Image
                src={screenshots[screenshotIndex]}
                alt={`${project.name} screenshot ${screenshotIndex + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            {/* Expand icon overlay on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
              <Expand className="h-12 w-12 text-white opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setScreenshotIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1));
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-70 transition-opacity hover:opacity-100"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setScreenshotIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1));
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-70 transition-opacity hover:opacity-100"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {screenshots.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setScreenshotIndex(i);
                      }}
                      className={`h-1.5 w-1.5 rounded-full transition-all ${
                        i === screenshotIndex
                          ? "w-4 bg-white"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`View screenshot ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div
            className="flex h-full items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(217, 70, 239, 0.1))",
            }}
          >
            <span className="text-4xl font-bold text-white/20">
              {project.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-semibold text-[var(--text-primary)]">
          {project.name}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-[var(--text-secondary)] transition-colors group-hover:bg-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Live demo links */}
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-purple)] transition-all hover:gap-3 hover:text-[var(--accent-purple)]"
            >
              {link.label}
              <ExternalLink className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { projects } = portfolioData;
  const [preview, setPreview] = useState<{
    images: string[];
    index: number;
    title: string;
  } | null>(null);

  const handleImageClick = (images: string[], index: number, title: string) => {
    setPreview({ images, index, title });
  };

  const handlePreviewClose = () => setPreview(null);

  const handlePreviewNavigate = (index: number) => {
    if (preview) setPreview({ ...preview, index });
  };

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Apps I've built and shipped"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {([...projects] as Project[]).map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            onImageClick={handleImageClick}
          />
        ))}
      </div>

      {/* Full image preview modal */}
      {preview && (
        <ImagePreview
          images={preview.images}
          currentIndex={preview.index}
          onClose={handlePreviewClose}
          onNavigate={handlePreviewNavigate}
          title={preview.title}
        />
      )}
    </Section>
  );
}
