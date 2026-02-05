"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImagePreviewProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate?: (index: number) => void;
  title?: string;
}

export function ImagePreview({
  images,
  currentIndex,
  onClose,
  onNavigate,
  title,
}: ImagePreviewProps) {
  const currentImage = images[currentIndex];
  const hasMultiple = images.length > 1;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (hasMultiple && onNavigate) {
        if (e.key === "ArrowLeft") {
          onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
        }
        if (e.key === "ArrowRight") {
          onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [currentIndex, hasMultiple, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          aria-label="Close preview"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Title */}
        {title && (
          <div className="absolute left-4 top-4 z-10 text-lg font-medium text-white">
            {title}
          </div>
        )}

        {/* Image container - prevent click propagation */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative flex max-h-[90vh] max-w-[95vw] items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-[85vh] w-full max-w-4xl overflow-hidden rounded-lg">
            <Image
              src={currentImage}
              alt={`Preview ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="95vw"
              priority
            />
          </div>

          {/* Navigation arrows */}
          {hasMultiple && onNavigate && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          {/* Image counter */}
          {hasMultiple && (
            <div className="mt-2 text-center text-sm text-white/70">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
