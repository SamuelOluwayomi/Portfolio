import { motion } from 'framer-motion';
import { ArrowDown } from '@phosphor-icons/react';

export function Hero() {
  const scrollDown = () => {
    const el = document.getElementById('origin');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Dot grid background */}
      <div className="hero__bg" aria-hidden="true" />

      {/* Corner bracket SVGs */}
      <svg
        className="hero__bracket hero__bracket--tl"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path d="M48 4H4V48" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg
        className="hero__bracket hero__bracket--br"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path d="M48 4H4V48" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.span
          className="hero__classified"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          // Classified // Developer Dossier // File No: SO-2026
        </motion.span>

        <motion.h1
          className="hero__question"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="sr-only">Samuel Oluwayomi (DevSam) — </span>
          Story Time?
        </motion.h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          Fullstack & blockchain engineer. I build software that solves real problems and actually matters.
        </motion.p>

        <motion.button
          className="hero__scroll"
          onClick={scrollDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          aria-label="Scroll down"
        >
          <span className="hero__scroll-label">Begin</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
