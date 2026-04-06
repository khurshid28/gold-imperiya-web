import { motion } from 'motion/react';

interface DiscountBadgeProps {
  discount: number;
}

export default function DiscountBadge({ discount }: DiscountBadgeProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -12 }}
      animate={{ scale: 1, rotate: -12 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
      className="absolute top-3 right-3 z-10"
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg"
      >
        -{discount}%
      </motion.div>
    </motion.div>
  );
}
