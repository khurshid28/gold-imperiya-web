import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import AnimatedSection from '../ui/AnimatedSection';

export default function Footer() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <footer
      className={`relative border-t transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-dark-bg border-gold-400/10'
          : 'bg-gray-50 border-gold-400/20'
      }`}
    >
      {/* Gold top line */}
      <div className="h-px shimmer-border" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img
                  src="/Gold_imperiya_logo.png"
                  alt="Gold Imperiya"
                  className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(218,165,32,0.4)]"
                />
                <span className="shimmer-text text-xl font-bold">GOLD IMPERIYA</span>
              </div>
              <p className={`text-sm leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('footer.description')}
              </p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h3 className="text-gold-400 font-semibold mb-4">{t('footer.contactUs')}</h3>
              <div className="flex flex-col gap-3">
                <a href="tel:+998901234567" className={`inline-flex items-center justify-center gap-2 text-sm hover:text-gold-400 transition-colors ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <Phone size={16} className="text-gold-400" />
                  +998 90 123 45 67
                </a>
                <div className={`inline-flex items-center justify-center gap-2 text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <MapPin size={16} className="text-gold-400" />
                  Toshkent, O'zbekiston
                </div>
                <div className={`inline-flex items-center justify-center gap-2 text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <Clock size={16} className="text-gold-400" />
                  09:00 — 21:00
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="text-center md:text-right">
              <h3 className="text-gold-400 font-semibold mb-4">{t('footer.followUs')}</h3>
              <div className="flex items-center justify-center md:justify-end gap-3">
                {/* Telegram */}
                <motion.a
                  href="https://t.me/goldimperiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full border transition-colors ${
                    theme === 'dark'
                      ? 'border-gold-400/20 hover:bg-gold-400/10 text-gold-400'
                      : 'border-gold-400/30 hover:bg-gold-400/10 text-gold-500'
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://instagram.com/goldimperiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full border transition-colors ${
                    theme === 'dark'
                      ? 'border-gold-400/20 hover:bg-gold-400/10 text-gold-400'
                      : 'border-gold-400/30 hover:bg-gold-400/10 text-gold-500'
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </motion.a>

                {/* Facebook */}
                <motion.a
                  href="https://facebook.com/goldimperiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full border transition-colors ${
                    theme === 'dark'
                      ? 'border-gold-400/20 hover:bg-gold-400/10 text-gold-400'
                      : 'border-gold-400/30 hover:bg-gold-400/10 text-gold-500'
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-gold-400/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
              © 2026 Gold Imperiya. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-1.5 h-1.5 rounded-full bg-gold-400"
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
