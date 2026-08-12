import { ArrowUp } from '@phosphor-icons/react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__wordmark">DevSam</span>
          <span className="footer__file">File No: SO-2026 // Classified</span>
        </div>

        <p className="footer__text">
          © {new Date().getFullYear()} Samuel Oluwayomi. All rights reserved.
        </p>

        <button className="footer__top-btn" onClick={scrollToTop} aria-label="Back to top">
          <span>Back to top</span>
          <ArrowUp size={14} weight="bold" />
        </button>
      </div>
    </footer>
  );
}
