import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Hammer, ShieldCheck, Crown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import AnimatedSection from '../ui/AnimatedSection';
import TextReveal from '../ui/TextReveal';

const values = [
  { icon: Hammer, titleKey: 'craftsmanship', descKey: 'craftsmanshipDesc' },
  { icon: ShieldCheck, titleKey: 'quality', descKey: 'qualityDesc' },
  { icon: Crown, titleKey: 'heritage', descKey: 'heritageDesc' },
];

export default function BrandStory() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section className={`py-20 md:py-28 overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-dark-card' : 'bg-amber-50/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image with parallax feel */}
          <AnimatedSection>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-gold-400/10"
              >
                {/* Decorative gradient background */}
                <div className="w-full h-full bg-gradient-to-br from-gold-900 via-dark-bg to-gold-800 flex flex-col items-center justify-center relative">
                  {/* Radial glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,165,32,0.15),transparent_70%)]" />

                  {/* Decorative rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-[280px] h-[280px] border border-gold-400/10 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-[360px] h-[360px] border border-gold-400/5 rounded-full"
                  />

                  {/* Logo */}
                  <motion.img
                    src="/Gold_imperiya_logo.png"
                    alt="Gold Imperiya"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_40px_rgba(218,165,32,0.4)] relative z-10"
                  />

                  {/* Text below logo */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-6 text-center relative z-10"
                  >
                    <p className="shimmer-text text-xl md:text-2xl font-bold tracking-wider">GOLD IMPERIYA</p>
                    <p className="text-gold-400/60 text-xs mt-2 tracking-[0.3em] uppercase">Est. 2015</p>
                  </motion.div>

                  {/* Sparkle dots */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-gold-300/40"
                      style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${10 + Math.random() * 80}%`,
                      }}
                      animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
                      transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
                    />
                  ))}
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md border border-gold-400/30 rounded-2xl px-5 py-3 z-20"
                >
                  <span className="text-gold-300 font-bold text-lg">10+</span>
                  <span className="text-gold-200/80 text-sm ml-2">{t('stats.experience')}</span>
                </motion.div>
              </motion.div>

              {/* Decorative border */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-gold-400/20 -z-10" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 rounded-full bg-gold-400/5 blur-2xl" />
            </div>
          </AnimatedSection>

          {/* Right — Text */}
          <div>
            <AnimatedSection>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/20 rounded-full px-4 py-1.5 mb-6"
              >
                <Crown size={14} className="text-gold-400" />
                <span className="text-gold-400 text-xs font-medium">{t('brand.subtitle')}</span>
              </motion.div>
            </AnimatedSection>

            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <TextReveal>{t('brand.title')}</TextReveal>
            </h2>

            <AnimatedSection delay={0.2}>
              <p className={`text-sm md:text-base leading-relaxed mb-10 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('brand.description')}
              </p>
            </AnimatedSection>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.titleKey}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                    whileHover={{ y: -4 }}
                    className={`text-center p-4 rounded-2xl border transition-colors ${
                      theme === 'dark'
                        ? 'bg-dark-bg/50 border-dark-border hover:border-gold-400/20'
                        : 'bg-white border-light-border hover:border-gold-400/30'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mx-auto mb-3">
                      <Icon size={22} className="text-gold-400" strokeWidth={1.5} />
                    </div>
                    <h4 className={`font-semibold text-sm mb-1.5 ${
                      theme === 'dark' ? 'text-gold-300' : 'text-gold-600'
                    }`}>
                      {t(`brand.${val.titleKey}`)}
                    </h4>
                    <p className={`text-xs leading-relaxed ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {t(`brand.${val.descKey}`)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
