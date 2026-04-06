import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Gem, Diamond, Heart, Watch } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { products } from '../../data/products';
import ProductCard from './ProductCard';
import AnimatedSection from '../ui/AnimatedSection';
import TextReveal from '../ui/TextReveal';

const categories = [
  { key: 'all', icon: Gem },
  { key: 'rings', icon: Diamond },
  { key: 'earrings', icon: Heart },
  { key: 'chains', icon: Gem },
  { key: 'bracelets', icon: Watch },
];

export default function Catalog() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className={`py-20 md:py-28 transition-colors duration-300 ${
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
            <Gem size={14} className="text-gold-400" />
            <span className="text-gold-400 text-xs font-medium">{t('catalog.subtitle')}</span>
          </motion.div>

          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <TextReveal>{t('catalog.title')}</TextReveal>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full mx-auto" />
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection delay={0.1} className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 md:mb-14">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <motion.button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  isActive
                    ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-dark-bg border-gold-400 shadow-lg shadow-gold-400/20'
                    : theme === 'dark'
                    ? 'bg-dark-card border-dark-border text-gray-400 hover:border-gold-400/30 hover:text-gold-400'
                    : 'bg-white border-light-border text-gray-600 hover:border-gold-400/40 hover:text-gold-600'
                }`}
              >
                <Icon size={16} />
                {t(`catalog.${cat.key}`)}
              </motion.button>
            );
          })}
        </AnimatedSection>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
          >
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
