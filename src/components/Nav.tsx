import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';

const navLinks = [
  { label: 'Origin', href: '#origin' },
  { label: 'Work', href: '#work' },
  { label: 'Wins', href: '#wins' },
  { label: 'Obsessions', href: '#obsessions' },
  { label: 'Contact', href: '#contact' },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastY && currentY > 80);
      setLastY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className="nav"
        animate={{ y: hidden ? -70 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="nav__brand">
          <img src="/DevSam-logo.png" alt="DevSam Logo" className="nav__logo" />
          <div className="nav__brand-text">
            <span className="nav__wordmark">DevSam</span>
            <span className="nav__file">File No: SO-2026</span>
          </div>
        </div>

        <div className="nav__links">
          {navLinks.map((link) => (
            <button
              key={link.href}
              className="nav__link"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="nav__cta"
          onClick={() => handleNavClick('#contact')}
        >
          Open Channel
        </button>

        <button
          className="nav__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav__mobile open"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="nav__mobile-link"
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            ))}
            <button
              className="nav__mobile-link"
              style={{ color: 'var(--rust)' }}
              onClick={() => handleNavClick('#contact')}
            >
              Open Channel
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
