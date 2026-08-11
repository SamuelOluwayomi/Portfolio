import { motion } from 'framer-motion';
import { Seal } from '@phosphor-icons/react';
import { DossierLabel } from './DossierLabel';
import { wins } from '../data/wins';

export function Wins() {
  return (
    <section className="section" id="wins">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <DossierLabel>// Commendations //</DossierLabel>
        <h2 className="section__heading">
          The wins. <em>Verified.</em>
        </h2>
      </motion.div>

      <div className="wins__list">
        {wins.map((win, i) => (
          <motion.div
            key={win.id}
            className="win-row"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="win-row__seal">
              <Seal
                size={20}
                weight={win.isHighlight ? 'fill' : 'regular'}
                color={win.isHighlight ? 'var(--rust)' : undefined}
              />
            </div>
            <div>
              <p className="win-row__title">{win.event}</p>
              <p className="win-row__project">{win.project} — {win.description}</p>
            </div>
            <div>
              <p
                className="win-row__prize"
                style={win.isHighlight ? { fontSize: '1.1rem' } : undefined}
              >
                {win.prize}
              </p>
            </div>
            <p className="win-row__date">{win.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
