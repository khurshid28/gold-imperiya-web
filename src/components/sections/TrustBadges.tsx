import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Gem, RotateCcw, Gift } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const badges = [
  { icon: Gem, titleKey: 'hallmark', descKey: 'hallmarkDesc' },
  { icon: ShieldCheck, titleKey: 'genuine', descKey: 'genuineDesc' },
  { icon: RotateCcw, titleKey: 'guarantee', descKey: 'guaranteeDesc' },
  { icon: Gift, titleKey: 'packaging', descKey: 'packagingDesc' },
];

export default function TrustBadges() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section className={`py-10 md:py-14 border-y transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-dark-card/50 border-gold-400/10'
        : 'bg-amber-50/30 border-gold-400/15'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="flex flex-col items-center text-center gap-2.5"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center"
                >
                  <Icon size={22} className="text-gold-400" strokeWidth={1.5} />
                </motion.div>
                <div>
                  <h4 className={`font-semibold text-sm ${
                    theme === 'dark' ? 'text-gold-300' : 'text-gold-600'
                  }`}>
                    {t(`trust.${badge.titleKey}`)}
                  </h4>
                  <p className={`text-xs mt-0.5 ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {t(`trust.${badge.descKey}`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
