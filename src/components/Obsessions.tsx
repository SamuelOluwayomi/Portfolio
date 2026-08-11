import { motion } from 'framer-motion';
import type { ReactElement } from 'react';
import {
  DeviceMobile,
  Plant,
  Robot,
  Lightning,
  ShieldCheck,
  Wallet,
  Medal,
  Brain,
} from '@phosphor-icons/react';
import { DossierLabel } from './DossierLabel';
import { obsessions } from '../data/obsessions';

const iconMap: Record<string, ReactElement> = {
  'local-ai': <DeviceMobile size={24} weight="duotone" />,
  'farming': <Plant size={24} weight="duotone" />,
  'robotics': <Robot size={24} weight="duotone" />,
  'onchain-infra': <Lightning size={24} weight="duotone" />,
  'hardware-security': <ShieldCheck size={24} weight="duotone" />,
  'account-abstraction': <Wallet size={24} weight="duotone" />,
  'onchain-reputation': <Medal size={24} weight="duotone" />,
  'ai-agents': <Brain size={24} weight="duotone" />,
};

export function Obsessions() {
  return (
    <section className="section" id="obsessions">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <DossierLabel>// Areas of Interest //</DossierLabel>
        <h2 className="section__heading">
          What <em>pulls</em> the attention.
        </h2>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          fontWeight: 300,
          color: 'var(--charcoal-light)',
          marginBottom: '3rem',
          maxWidth: 560,
        }}>
          Not a skills list. Not a resume section. The things that actually
          occupy the mind — building, growing, and becoming.
        </p>
      </motion.div>

      <div className="obsessions__grid">
        {obsessions.map((item, i) => (
          <motion.div
            key={item.id}
            className="obsession-tile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
          >
            <div className="obsession-tile__icon">
              {iconMap[item.id]}
            </div>
            <p className="obsession-tile__name">{item.name}</p>
            <p className="obsession-tile__note">{item.note}</p>
            {item.personal && (
              <span className="obsession-tile__mission">Personal Mission</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
