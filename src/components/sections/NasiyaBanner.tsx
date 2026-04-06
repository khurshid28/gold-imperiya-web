import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Clock, CreditCard, CalendarCheck, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import AnimatedSection from '../ui/AnimatedSection';
import TextReveal from '../ui/TextReveal';

export default function NasiyaBanner() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section id="nasiya" className={`py-20 md:py-28 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-dark-bg' : 'bg-light-bg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className={`relative overflow-hidden rounded-3xl border ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-dark-card via-dark-bg to-dark-card border-gold-400/20'
              : 'bg-gradient-to-br from-amber-50 via-white to-yellow-50 border-gold-400/30'
          }`}>
            {/* Shimmer top border */}
            <div className="absolute top-0 left-0 right-0 h-px shimmer-border" />
            <div className="absolute bottom-0 left-0 right-0 h-px shimmer-border" />

            <div className="relative p-8 md:p-14 text-center">
              {/* Floating icons */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 left-8 md:left-16"
                >
                  <CreditCard size={28} className="text-gold-400/20" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-8 right-8 md:right-16"
                >
                  <CalendarCheck size={32} className="text-gold-400/20" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute bottom-8 left-1/4"
                >
                  <Sparkles size={24} className="text-gold-400/15" />
                </motion.div>
              </div>

              {/* Clock icon */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-400/10 border border-gold-400/20 mb-8"
              >
                <Clock size={36} className="text-gold-400" />
              </motion.div>

              {/* Title */}
              <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <TextReveal>{t('nasiya.title')}</TextReveal>
              </h2>

              {/* Coming soon badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-300 text-dark-bg px-6 py-2 rounded-full font-bold text-sm md:text-base mb-6 shadow-lg shadow-gold-400/20"
              >
                <Sparkles size={16} />
                {t('nasiya.subtitle')}
              </motion.div>

              {/* Description */}
              <p className={`text-sm md:text-base max-w-xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('nasiya.description')}
              </p>

              {/* Coming soon countdown-like */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 inline-flex items-center gap-3"
              >
                <div className="flex items-center gap-1.5">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                      className="w-2.5 h-2.5 rounded-full bg-gold-400"
                    />
                  ))}
                </div>
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gold-300' : 'text-gold-600'
                }`}>
                  {t('nasiya.coming')}
                </span>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
