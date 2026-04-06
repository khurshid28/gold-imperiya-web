import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import MobileMenu from './MobileMenu';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { key: 'catalog', href: '#catalog' },
  { key: 'delivery', href: '#delivery' },
  { key: 'installment', href: '#nasiya' },
  { key: 'stores', href: '#stores' },
];

export default function Header() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-dark-bg/80 border-gold-400/10'
            : 'bg-light-bg/80 border-gold-400/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <img
                src="/Gold_imperiya_logo.png"
                alt="Gold Imperiya"
                className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_8px_rgba(218,165,32,0.4)]"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-bold shimmer-text leading-tight">
                  GOLD IMPERIYA
                </h1>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-gold-400 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </motion.a>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-lg text-gold-400 hover:bg-gold-400/10 transition-colors"
              >
                <Menu size={22} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
