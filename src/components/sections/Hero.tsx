import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Sparkles, Shield, Award } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const stats = [
    { icon: Sparkles, value: '585°', labelUz: 'Oltin sifati', labelRu: 'Проба золота' },
    { icon: Shield, value: '100%', labelUz: 'Kafolat', labelRu: 'Гарантия' },
    { icon: Award, value: '10+', labelUz: 'Yillik tajriba', labelRu: 'Лет опыта' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'gradient-bg' : 'bg-gradient-to-br from-amber-50 via-white to-yellow-50'}`} />

      {/* Gold particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-gold-400/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] border border-gold-400/5 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/Gold_imperiya_logo.png"
                alt="Gold Imperiya"
                className="w-32 h-32 md:w-44 md:h-44 mx-auto object-contain drop-shadow-[0_0_20px_rgba(218,165,32,0.5)]"
              />
            </motion.div>
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-2xl -z-10" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="shimmer-text">GOLD IMPERIYA</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className={`text-lg md:text-2xl font-light mb-6 ${
            theme === 'dark' ? 'text-gold-200' : 'text-gold-600'
          }`}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className={`text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {t('hero.description')}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <MagneticButton
            href="#catalog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 text-dark-bg px-8 py-3.5 rounded-full font-semibold text-sm md:text-base shadow-lg shadow-gold-400/20 hover:shadow-gold-400/40 transition-shadow"
            strength={0.25}
          >
            {t('hero.cta')}
            <ArrowDown size={18} />
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 md:mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const lang = localStorage.getItem('gold-imperiya-lang') || 'uz';
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="text-center"
              >
                <Icon size={24} className="text-gold-400 mx-auto mb-2" strokeWidth={1.5} />
                <div className="text-xl md:text-2xl font-bold text-gold-300">{stat.value}</div>
                <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                  {lang === 'uz' ? stat.labelUz : stat.labelRu}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gold-400/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-gold-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
