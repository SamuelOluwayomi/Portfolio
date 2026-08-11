import { motion } from 'framer-motion';

interface QuoteInterstitialProps {
  text: string;
  author: string;
}

export function QuoteInterstitial({ text, author }: QuoteInterstitialProps) {
  return (
    <motion.div
      className="quote-block"
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <span className="quote-block__label">// Transmission //</span>
      <p className="quote-block__text">&ldquo;{text}&rdquo;</p>
      <span className="quote-block__attr">— {author}</span>
    </motion.div>
  );
}
