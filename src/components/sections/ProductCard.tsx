import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShoppingCart } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import DiscountBadge from '../ui/DiscountBadge';
import ImageSkeleton from '../ui/ImageSkeleton';
import type { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { i18n, t } = useTranslation();
  const { theme } = useTheme();
  const name = i18n.language === 'uz' ? product.nameUz : product.nameRu;

  const formatPrice = (price: number) => {
    return price.toLocaleString('uz-UZ');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-dark-card border-dark-border hover:border-gold-400/30 hover:shadow-[0_8px_30px_rgba(218,165,32,0.1)]'
          : 'bg-light-card border-light-border hover:border-gold-400/40 hover:shadow-[0_8px_30px_rgba(218,165,32,0.15)]'
      }`}
    >
      {/* Discount Badge */}
      {product.discount > 0 && <DiscountBadge discount={product.discount} />}

      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <ImageSkeleton
          src={product.image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quick order button on hover */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-bg px-5 py-2.5 rounded-full font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg"
        >
          <ShoppingCart size={16} />
          {t('catalog.order')}
        </motion.button>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className={`font-semibold text-sm mb-2 line-clamp-1 transition-colors ${
          theme === 'dark' ? 'text-gray-200 group-hover:text-gold-300' : 'text-gray-800 group-hover:text-gold-600'
        }`}>
          {name}
        </h3>

        <div className={`flex items-center gap-2 text-xs mb-3 ${
          theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
        }`}>
          <span>{t('catalog.weight')}: {product.weight} {t('catalog.gram')}</span>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <div className={`text-xs line-through ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}`}>
              {formatPrice(product.oldPrice)} {t('catalog.currency')}
            </div>
            <div className="text-lg font-bold text-gold-400">
              {formatPrice(product.price)} <span className="text-xs font-normal text-gold-500">{t('catalog.currency')}</span>
            </div>
          </div>

          {/* Small cart icon for mobile */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded-full bg-gold-400/10 text-gold-400 hover:bg-gold-400/20 transition-colors"
          >
            <ShoppingCart size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
