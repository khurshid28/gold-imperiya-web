import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Smartphone, CheckCircle, Truck, PackageCheck, Gift } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import AnimatedSection from '../ui/AnimatedSection';
import TextReveal from '../ui/TextReveal';

const steps = [
  { icon: Smartphone, key: 'step1', descKey: 'step1desc', color: 'from-blue-500 to-blue-400' },
  { icon: CheckCircle, key: 'step2', descKey: 'step2desc', color: 'from-gold-500 to-gold-400' },
  { icon: Truck, key: 'step3', descKey: 'step3desc', color: 'from-emerald-500 to-emerald-400' },
  { icon: PackageCheck, key: 'step4', descKey: 'step4desc', color: 'from-purple-500 to-purple-400' },
];

export default function Delivery() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section id="delivery" className={`py-20 md:py-28 transition-colors duration-300 relative overflow-hidden ${
      theme === 'dark' ? 'bg-dark-card' : 'bg-amber-50/50'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-gold-400/5' : 'bg-gold-400/10'
        }`} />
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-gold-400/3' : 'bg-gold-400/5'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/20 rounded-full px-4 py-1.5 mb-6"
          >
            <Truck size={14} className="text-gold-400" />
            <span className="text-gold-400 text-xs font-medium">{t('delivery.subtitle')}</span>
          </motion.div>

          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <TextReveal>{t('delivery.title')}</TextReveal>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full mx-auto" />
        </AnimatedSection>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-gold-500/30 via-gold-400/50 to-gold-500/30 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative text-center"
                >
                  {/* Step number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative inline-flex"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      className={`w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center border-2 transition-colors ${
                        theme === 'dark'
                          ? 'bg-dark-bg border-gold-400/20'
                          : 'bg-white border-gold-400/30'
                      }`}
                    >
                      <Icon size={36} className="text-gold-400" strokeWidth={1.5} />
                    </motion.div>
                    {/* Step badge */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 flex items-center justify-center text-dark-bg text-sm font-bold shadow-lg">
                      {i + 1}
                    </div>
                  </motion.div>

                  <h3 className={`font-semibold mt-5 mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t(`delivery.${step.key}`)}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {t(`delivery.${step.descKey}`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Free delivery banner */}
        <AnimatedSection delay={0.3} className="mt-14 md:mt-16">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-2xl border transition-colors ${
              theme === 'dark'
                ? 'bg-dark-bg border-gold-400/20'
                : 'bg-white border-gold-400/30'
            }`}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Gift size={32} className="text-gold-400" />
            </motion.div>
            <div className="text-center sm:text-left">
              <h3 className={`font-bold text-lg ${
                theme === 'dark' ? 'text-gold-300' : 'text-gold-600'
              }`}>
                {t('delivery.free')}
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                {t('delivery.freeDesc')}
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
