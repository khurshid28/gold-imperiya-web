import { motion } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

interface SectionDividerProps {
  variant?: 'line' | 'diamond' | 'dots';
}

export default function SectionDivider({ variant = 'diamond' }: SectionDividerProps) {
  const { theme } = useTheme();

  if (variant === 'line') {
    return (
      <div className="py-4">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="max-w-xs mx-auto h-px shimmer-border"
        />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex items-center justify-center gap-2 py-6">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 300 }}
            className={`rounded-full ${
              i === 2 ? 'w-2 h-2 bg-gold-400' : 'w-1 h-1 bg-gold-400/40'
            }`}
          />
        ))}
      </div>
    );
  }

  // Diamond variant (default)
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className={`h-px w-16 md:w-24 origin-right ${
          theme === 'dark'
            ? 'bg-gradient-to-l from-gold-400/40 to-transparent'
            : 'bg-gradient-to-l from-gold-400/50 to-transparent'
        }`}
      />
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        className="w-2 h-2 bg-gold-400/60 rounded-sm"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className={`h-px w-16 md:w-24 origin-left ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-gold-400/40 to-transparent'
            : 'bg-gradient-to-r from-gold-400/50 to-transparent'
        }`}
      />
    </div>
  );
}
