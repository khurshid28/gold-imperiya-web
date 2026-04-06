import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function IntroScreen() {
  const [show, setShow] = useState(() => {
    return !sessionStorage.getItem('gold-imperiya-intro');
  });

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem('gold-imperiya-intro', 'done');
        document.body.style.overflow = '';
      }, 3200);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [show]);

  const letters = 'GOLD IMPERIYA'.split('');

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gradient-bg"
        >
          {/* Radial glow */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute w-[400px] h-[400px] rounded-full bg-gold-400/10 blur-[80px]"
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, delay: 0.2 }}
            className="relative mb-8"
          >
            <img
              src="/Gold_imperiya_logo.png"
              alt="Gold Imperiya"
              className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-[0_0_30px_rgba(218,165,32,0.6)]"
            />
          </motion.div>

          {/* Letter-by-letter title */}
          <div className="flex items-center gap-[2px] md:gap-1">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.8 + i * 0.06,
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="inline-block text-3xl md:text-5xl font-bold shimmer-text"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          {/* Subtitle line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.8, duration: 0.8, ease: 'easeInOut' }}
            className="mt-6 w-32 md:w-48 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          />

          {/* Loading dots */}
          <div className="flex gap-1.5 mt-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 2.2 + i * 0.2, duration: 0.8, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-gold-400"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
