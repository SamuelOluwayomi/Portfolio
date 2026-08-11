import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40 });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, width: '100%' }}
    />
  );
}

export function useScrollDirection() {
  const lastY = useRef(0);
  const directionRef = useRef<'up' | 'down'>('up');

  useEffect(() => {
    const handler = () => {
      const currentY = window.scrollY;
      directionRef.current = currentY > lastY.current ? 'down' : 'up';
      lastY.current = currentY;
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return directionRef;
}
