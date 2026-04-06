import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { X, Gem, Truck, Clock, MapPin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const navItems = [
  { key: 'catalog', href: '#catalog', icon: Gem },
  { key: 'delivery', href: '#delivery', icon: Truck },
  { key: 'installment', href: '#nasiya', icon: Clock },
  { key: 'stores', href: '#stores', icon: MapPin },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={`fixed top-0 right-0 bottom-0 z-50 w-72 p-6 border-l transition-colors ${
              theme === 'dark'
                ? 'bg-dark-bg border-gold-400/10'
                : 'bg-light-bg border-gold-400/20'
            }`}
          >
            <div className="flex justify-between items-center mb-10">
              <span className="shimmer-text text-lg font-bold">GOLD IMPERIYA</span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full text-gold-400 hover:bg-gold-400/10"
              >
                <X size={22} />
              </motion.button>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:bg-gold-400/10 hover:text-gold-300'
                        : 'text-gray-700 hover:bg-gold-400/10 hover:text-gold-600'
                    }`}
                  >
                    <Icon size={20} className="text-gold-400" />
                    {t(`nav.${item.key}`)}
                  </motion.a>
                );
              })}
            </nav>

            {/* Bottom decoration */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="h-px shimmer-border rounded-full" />
              <p className="text-center text-xs text-gold-500 mt-3">
                © 2026 Gold Imperiya
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
