import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [showTop, setShowTop] = useState(false);
  const { theme } = useTheme();

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setShowTop(v > 0.08);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress bar at top */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500"
      />

      {/* Back to top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg border transition-colors ${
              theme === 'dark'
                ? 'bg-dark-card border-gold-400/20 text-gold-400 hover:bg-dark-border shadow-gold-400/10'
                : 'bg-white border-gold-400/30 text-gold-500 hover:bg-gold-50 shadow-gold-400/15'
            }`}
          >
            <ChevronUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
