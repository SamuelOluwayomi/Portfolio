import { motion, type Variants } from 'framer-motion';
import { DossierLabel } from './DossierLabel';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function Origin() {
  return (
    <section className="section" id="origin">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <DossierLabel>// Origin Report //</DossierLabel>
        </motion.div>

        <div className="origin__grid">
          {/* Photo */}
          <motion.div className="origin__photo-wrap" variants={fadeUp}>
            <div className="origin__photo-frame">
              <img
                src="/me-avatar.png"
                alt="Samuel Oluwayomi (DevSam) — Fullstack & Blockchain Engineer"
                className="origin__photo"
              />
              <p className="origin__photo-caption">Samuel Oluwayomi — 21</p>
            </div>
          </motion.div>

          {/* Story text */}
          <motion.div className="origin__text" variants={stagger}>
            <motion.h2 className="section__heading" variants={fadeUp}>
              Who is <em>DevSam?</em>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Nine years ago, a kid in secondary school was trying to write{' '}
              <strong>C++ on his mother's phone.</strong> He gave up. Then came a
              school subject on HTML and something lit up again — but there was
              still no laptop. Then COVID. Then a coding school. Then Python for
              four months. Then university.
            </motion.p>

            <motion.p variants={fadeUp}>
              Slow pace at first. But the pace kept growing. A{' '}
              <strong>Django website</strong> for an auto repair shop nobody asked
              him to build. Then React. Then JavaScript. Then TypeScript. YouTube
              tutorials at odd hours. Documentation when the tutorials ran out.
              Then AI coding became a thing — and the pace jumped again.
            </motion.p>

            <motion.p variants={fadeUp}>
              Then <strong>Solana.</strong> Then bounties. Then hackathons. Then
              the grind of showing up to competitions where the prize pool is real
              but the odds are long. Still showing up.
            </motion.p>

            <motion.p variants={fadeUp}>
              Based in <em>Nigeria</em>. Building everywhere.
            </motion.p>

            <motion.blockquote className="origin__tagline" variants={fadeUp}>
              I love to solve problems. I am an engineer. It is just my nature.
            </motion.blockquote>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
