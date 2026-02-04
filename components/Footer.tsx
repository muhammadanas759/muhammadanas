"use client";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] py-8 text-center">
      <p className="text-sm text-[var(--text-muted)]">
        © {new Date().getFullYear()} Muhammad Anas Qamar. Built with Next.js & Framer Motion.
      </p>
    </footer>
  );
}
