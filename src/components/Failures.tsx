import { motion } from 'framer-motion';
import { DossierLabel } from './DossierLabel';
import { StampBadge } from './StampBadge';

const failures = [
  {
    id: 'sui-incubator',
    title: 'The Incubator Drop',
    sub: 'Sui Blockchain // Incubator',
    body: 'Got into a Sui blockchain incubator. Midway through building, looked at it honestly and knew it had no future. Did not ship. Walked away. Sometimes stopping is the right call.',
  },
  {
    id: 'rwa-lending',
    title: 'Democratised Lending',
    sub: 'DeFi // RWA // Paused',
    body: 'Wanted to let people borrow against their stock holdings the same way banks quietly do for the wealthy. Pay back at a fair rate, no selling required. Found it already existed while still building. Filed away for now. Might still come back to it.',
  },
];

export function Failures() {
  return (
    <section className="section" id="failures">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <DossierLabel>// Unclassified: Attempts //</DossierLabel>
        <h2 className="section__heading">
          The ones that <em>did not land.</em>
        </h2>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          fontWeight: 300,
          color: 'var(--charcoal-light)',
          marginBottom: '3rem',
          maxWidth: 560,
        }}>
          Honesty is cheap when things are going well. These are the files that
          got closed before they were finished.
        </p>
      </motion.div>

      <div className="failures__grid">
        {failures.map((failure, i) => (
          <motion.div
            key={failure.id}
            className="failure-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="failure-card__stamp">
              <StampBadge variant="closed" rotate={3}>Closed File</StampBadge>
            </div>
            <p className="failure-card__title">{failure.title}</p>
            <p className="failure-card__sub">{failure.sub}</p>
            <div className="failure-card__redact" />
            <p className="failure-card__body">{failure.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
