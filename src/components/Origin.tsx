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
              I got into coding about 9 years ago in secondary school, trying to learn{' '}
              <strong>C++ on my mom's phone</strong>. It was tough to keep up without a computer,
              so I let it go. Later in senior school, an HTML class stirred up my interest in
              building things again, though I didn't get my own laptop until COVID.
            </motion.p>

            <motion.p variants={fadeUp}>
              After secondary school while waiting for university, my parents enrolled me in a coding school
              where I spent 4 months learning Python. Later at uni, while doing my SIWES 1 internship at an auto repair shop,
              I pitched the need for a website to the owner — he agreed and paid me to build{' '}
              <strong>Tunnel Auto Care in Django</strong>. That was my first paid project.
            </motion.p>

            <motion.p variants={fadeUp}>
              From there, I moved into fullstack development with React, JavaScript, and TypeScript, learning through docs, tutorials, and practical builds. When AI coding tools came along, I integrated them to accelerate my workflow.
            </motion.p>

            <motion.p variants={fadeUp}>
              Recently, I've been building on <strong>Solana</strong> and participating in bounties and hackathons. What keeps me coming back is building useful products that solve real problems and getting better at my craft.
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
