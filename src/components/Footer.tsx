import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="footer">
      {/* DeFi puzzle image — decorative prop bottom left */}
      <img
        src="/defi1.jpg"
        alt=""
        aria-hidden="true"
        className="footer__defi-prop"
      />

      <div className="footer__center">
        {/* Real stamp image */}
        <motion.img
          src="/stamp.jpg"
          alt=""
          aria-hidden="true"
          className="footer__stamp-img"
          initial={{ rotate: -6, opacity: 0 }}
          whileInView={{ rotate: -6, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Signature */}
        <motion.img
          src="/signature.jpg"
          alt="Samuel Oluwayomi signature"
          className="footer__signature"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        />

        <p className="footer__text">DevSam // File Closed // 2026</p>
      </div>
    </footer>
  );
}
