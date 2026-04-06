import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Phone, ChevronRight, Navigation } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { locations } from '../../data/locations';
import AnimatedSection from '../ui/AnimatedSection';
import TextReveal from '../ui/TextReveal';

export default function Locations() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  return (
    <section id="stores" className={`py-20 md:py-28 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-dark-bg' : 'bg-light-bg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/20 rounded-full px-4 py-1.5 mb-6"
          >
            <Navigation size={14} className="text-gold-400" />
            <span className="text-gold-400 text-xs font-medium">{t('stores.subtitle')}</span>
          </motion.div>

          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <TextReveal>{t('stores.title')}</TextReveal>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full mx-auto" />
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {locations.map((store, i) => {
            const name = i18n.language === 'uz' ? store.nameUz : store.nameRu;
            const address = i18n.language === 'uz' ? store.addressUz : store.addressRu;

            return (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-dark-card border-dark-border hover:border-gold-400/30 hover:shadow-[0_8px_30px_rgba(218,165,32,0.08)]'
                    : 'bg-light-card border-light-border hover:border-gold-400/40 hover:shadow-[0_8px_30px_rgba(218,165,32,0.12)]'
                }`}
              >
                {/* Gold accent top */}
                <div className="h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="p-5 md:p-6">
                  {/* Store icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-4"
                  >
                    <MapPin size={22} className="text-gold-400" />
                  </motion.div>

                  {/* Name */}
                  <h3 className={`font-bold text-base mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {name}
                  </h3>

                  {/* Address */}
                  <p className={`text-sm mb-4 leading-relaxed ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {address}
                  </p>

                  {/* Work hours */}
                  <div className={`flex items-center gap-2 text-sm mb-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <Clock size={14} className="text-gold-400" />
                    <span>{t('stores.workHours')}: {store.workHours}</span>
                  </div>

                  {/* Phone */}
                  <a
                    href={`tel:${store.phone.replace(/\s/g, '')}`}
                    className={`flex items-center gap-2 text-sm mb-5 hover:text-gold-400 transition-colors ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    <Phone size={14} className="text-gold-400" />
                    <span>{store.phone}</span>
                  </a>

                  {/* Map button */}
                  <motion.a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    <MapPin size={15} />
                    {t('stores.openMap')}
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
