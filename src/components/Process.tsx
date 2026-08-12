import { motion, type Variants } from 'framer-motion';
import { DossierLabel } from './DossierLabel';
import { StampBadge } from './StampBadge';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function Process() {
  return (
    <section className="section" id="process">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <DossierLabel>// Operational Method //</DossierLabel>
        </motion.div>

        <motion.h2 className="section__heading" variants={fadeUp}>
          How the <em>work</em> gets done.
        </motion.h2>

        <div className="process__body">
          <motion.p variants={fadeUp}>
            Before writing code, I start by thoroughly understanding the task and thinking through how useful the idea actually is. I want to make sure I'm solving a real problem for myself and hopefully for others.
          </motion.p>

          <motion.p variants={fadeUp}>
            Next, I spend time on Pinterest gathering design inspiration. I prefer building about 60% of the UI first — a clean, responsive interface keeps me motivated as I move into the backend logic.
          </motion.p>

          <motion.p variants={fadeUp}>
            When I'm working on a serious build, I stay on my laptop most of the day, making sure to take regular breaks so I stay sharp and produce my best work.
          </motion.p>

          <motion.div className="process__stamps" variants={fadeUp}>
            <StampBadge variant="shipped" rotate={-2}>UI First</StampBadge>
            <StampBadge variant="shipped" rotate={1}>Ships Clean</StampBadge>
            <StampBadge variant="shipped" rotate={-1}>Problem Driven</StampBadge>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
