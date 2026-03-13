import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 90, suffix: '%', label: 'Client Satisfaction' },
  { value: 180, suffix: '+', label: 'Project Successfully Done' },
  { value: 10, suffix: 'K+', label: 'Overall Revenue Raised' },
];

function useCountUp(target: number, duration: number = 1800, active: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatItem({ stat, active, isLast }: { stat: typeof stats[0]; active: boolean; isLast: boolean }) {
  const count = useCountUp(stat.value, 1600, active);
  return (
    <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
      <div style={{ flex: 1, padding: '0 2.5rem', textAlign: 'center' }}>
        <div
          style={{
            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            fontWeight: 800,
            color: '#0f172a',
            fontFamily: 'Outfit, sans-serif',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          {count}{stat.suffix}
        </div>
        <div
          style={{
            fontSize: '0.95rem',
            color: '#9ca3af',
            fontWeight: 500,
            marginTop: '0.5rem',
            letterSpacing: '0.02em',
          }}
        >
          {stat.label}
        </div>
      </div>
      {!isLast && (
        <div
          style={{
            width: '1px',
            height: '80px',
            background: 'rgba(0,0,0,0.1)',
            flexShrink: 0,
          }}
        />
      )}
    </div>
  );
}

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{
        background: '#fff',
        borderTop: '1px solid #f0f0f0',
        borderBottom: '1px solid #f0f0f0',
        padding: '3.5rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              stat={stat}
              active={inView}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
