import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('gold-imperiya-lang', lang);
  };

  return (
    <div className="flex items-center gap-1.5">
      <Globe size={16} className="text-gold-400" />
      <div className="flex rounded-full overflow-hidden border border-gold-400/30">
        <motion.button
          onClick={() => switchLang('uz')}
          whileTap={{ scale: 0.95 }}
          className={`px-2.5 py-1 text-xs font-semibold transition-all duration-300 ${
            currentLang === 'uz'
              ? 'bg-gold-400 text-dark-bg'
              : 'bg-transparent text-gold-400 hover:bg-gold-400/10'
          }`}
        >
          UZ
        </motion.button>
        <motion.button
          onClick={() => switchLang('ru')}
          whileTap={{ scale: 0.95 }}
          className={`px-2.5 py-1 text-xs font-semibold transition-all duration-300 ${
            currentLang === 'ru'
              ? 'bg-gold-400 text-dark-bg'
              : 'bg-transparent text-gold-400 hover:bg-gold-400/10'
          }`}
        >
          RU
        </motion.button>
      </div>
    </div>
  );
}
