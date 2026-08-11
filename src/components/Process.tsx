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
            Every build starts with understanding the problem properly. Not jumping
            in — <em>sitting with it</em>. Turning it over. Asking whether the thing
            is actually worth building and whether it solves something real.
          </motion.p>

          <motion.p variants={fadeUp}>
            Then Pinterest. Reference gathering, visual direction, a picture in the
            head of what it should look and feel like before a single component is
            touched. The <em>UI comes first</em> — because a beautiful interface
            keeps motivation alive through the hard parts. Around sixty percent done
            on the frontend, the backend begins.
          </motion.p>

          <motion.p variants={fadeUp}>
            When a project is serious, the laptop is open most of the day. Not
            recklessly — <em>deliberately</em>. Breaks exist. Progress does not stop.
            The work gets done.
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
