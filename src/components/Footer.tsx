export function Footer() {
  return (
    <footer className="footer">
      {/* Wax seal SVG */}
      <svg
        className="footer__seal"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" />
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <text
          x="20"
          y="24"
          textAnchor="middle"
          fontFamily="Space Mono, monospace"
          fontSize="7"
          fill="currentColor"
          letterSpacing="1"
        >
          DS
        </text>
      </svg>
      <p className="footer__text">DevSam // File Closed // 2026</p>
    </footer>
  );
}
