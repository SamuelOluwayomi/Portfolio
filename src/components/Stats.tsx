import { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const stats = [
  { number: 18, label: 'Submissions', suffix: '', rust: false },
  { number: 3, label: 'Confirmed Wins', suffix: '+', rust: true },
  { number: 9, label: 'Years Building', suffix: '', rust: false },
  { number: 21, label: 'Years Old', suffix: '', rust: false },
  { number: 4, label: 'Chains Shipped On', suffix: '+', rust: true },
  { number: 600, label: 'USD Earned', suffix: '+', rust: false },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!inView || !nodeRef.current) return;
    const node = nodeRef.current;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate(value) {
        node.textContent = Math.round(value) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export function Stats() {
  return (
    <section className="section--dark" id="stats">
      <div className="section__inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--rust)',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          // The Numbers //
        </motion.div>

        <div className="stats__strip">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <span className={`stat-item__number${stat.rust ? ' stat-item__number--rust' : ''}`}>
                <CountUp target={stat.number} suffix={stat.suffix} />
              </span>
              <span className="stat-item__label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
