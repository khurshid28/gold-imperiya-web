import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Users, Calendar, MapPin, Gem } from 'lucide-react';

interface StatItem {
  icon: typeof Users;
  value: number;
  suffix: string;
  key: string;
}

const stats: StatItem[] = [
  { icon: Users, value: 5000, suffix: '+', key: 'customers' },
  { icon: Calendar, value: 10, suffix: '+', key: 'experience' },
  { icon: MapPin, value: 4, suffix: '', key: 'branches' },
  { icon: Gem, value: 585, suffix: '°', key: 'purity' },
];

function CounterNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    <span className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export default function StatsCounter() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-14 md:py-16 overflow-hidden">
      {/* Gold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <Icon size={28} className="text-dark-bg/70 mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-3xl md:text-4xl font-bold text-dark-bg mb-1">
                  <CounterNumber value={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <p className="text-dark-bg/70 text-xs md:text-sm font-medium">
                  {t(`stats.${stat.key}`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
