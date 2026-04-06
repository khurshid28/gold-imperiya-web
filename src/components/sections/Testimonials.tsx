import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import AnimatedSection from '../ui/AnimatedSection';
import TextReveal from '../ui/TextReveal';

interface Testimonial {
  id: number;
  nameUz: string;
  nameRu: string;
  textUz: string;
  textRu: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    nameUz: 'Nilufar Karimova',
    nameRu: 'Нилуфар Каримова',
    textUz: "Gold Imperiya'dan nikoh uzugimni oldim. Sifati ajoyib, xizmat darajasi yuqori. Juda mamnunman!",
    textRu: 'Купила обручальное кольцо в Gold Imperiya. Превосходное качество и высокий уровень обслуживания. Очень довольна!',
    rating: 5,
    avatar: 'N',
  },
  {
    id: 2,
    nameUz: 'Sardor Aliyev',
    nameRu: 'Сардор Алиев',
    textUz: "Onamga tug'ilgan kun sovg'asi sifatida sirg'a oldim. Narxi hamyonga mos, sifati zo'r!",
    textRu: 'Купил серьги маме на день рождения. Цена приемлемая, качество отличное!',
    rating: 5,
    avatar: 'S',
  },
  {
    id: 3,
    nameUz: 'Madina Rashidova',
    nameRu: 'Мадина Рашидова',
    textUz: "Zanjir va bilaguzuk to'plamini xarid qildim. Yetkazib berish tez va qulay bo'ldi.",
    textRu: 'Приобрела набор цепочку и браслет. Доставка была быстрой и удобной.',
    rating: 5,
    avatar: 'M',
  },
  {
    id: 4,
    nameUz: 'Jamshid Toshmatov',
    nameRu: 'Жамшид Тошматов',
    textUz: "Oilamga 3 marta xarid qilganmiz. Har safar sifatdan mamnun bo'lamiz. Tavsiya qilaman!",
    textRu: 'Покупали для семьи 3 раза. Каждый раз довольны качеством. Рекомендую!',
    rating: 5,
    avatar: 'J',
  },
  {
    id: 5,
    nameUz: "Zulfiya Abdullayeva",
    nameRu: 'Зульфия Абдуллаева',
    textUz: "Chegirmalar juda yaxshi! 585 probali uzuk oldim, kafolat bilan. Rahmat Gold Imperiya!",
    textRu: 'Отличные скидки! Купила кольцо 585 пробы с гарантией. Спасибо Gold Imperiya!',
    rating: 5,
    avatar: 'Z',
  },
];

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const item = testimonials[current];
  const name = i18n.language === 'uz' ? item.nameUz : item.nameRu;
  const text = i18n.language === 'uz' ? item.textUz : item.textRu;

  return (
    <section className={`py-20 md:py-28 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-dark-bg' : 'bg-light-bg'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/20 rounded-full px-4 py-1.5 mb-6"
          >
            <Star size={14} className="text-gold-400" fill="currentColor" />
            <span className="text-gold-400 text-xs font-medium">{t('testimonials.subtitle')}</span>
          </motion.div>

          <h2 className={`text-3xl md:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <TextReveal>{t('testimonials.title')}</TextReveal>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full mx-auto mt-4" />
        </AnimatedSection>

        {/* Carousel */}
        <div className="relative">
          {/* Quote decoration */}
          <Quote
            size={80}
            className={`absolute -top-6 left-0 md:left-8 ${
              theme === 'dark' ? 'text-gold-400/5' : 'text-gold-400/10'
            }`}
            strokeWidth={1}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className={`relative text-center p-8 md:p-12 rounded-3xl border ${
                theme === 'dark'
                  ? 'bg-dark-card border-dark-border'
                  : 'bg-white border-light-border'
              }`}
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.08, type: 'spring', stiffness: 300 }}
                  >
                    <Star size={18} className="text-gold-400" fill="currentColor" />
                  </motion.div>
                ))}
              </div>

              {/* Review text */}
              <p className={`text-base md:text-lg leading-relaxed mb-8 italic ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                "{text}"
              </p>

              {/* Avatar + Name */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-dark-bg font-bold text-lg">
                  {item.avatar}
                </div>
                <div className="text-left">
                  <p className={`font-semibold text-sm ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {name}
                  </p>
                  <p className="text-gold-500 text-xs">Gold Imperiya mijozi</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className={`p-2.5 rounded-full border transition-colors ${
                theme === 'dark'
                  ? 'border-dark-border hover:border-gold-400/30 text-gold-400'
                  : 'border-light-border hover:border-gold-400/40 text-gold-500'
              }`}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrent(i)}
                  animate={{
                    width: i === current ? 24 : 8,
                    backgroundColor: i === current ? '#DAA520' : theme === 'dark' ? '#2a2a2a' : '#d4d4d4',
                  }}
                  className="h-2 rounded-full transition-colors"
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className={`p-2.5 rounded-full border transition-colors ${
                theme === 'dark'
                  ? 'border-dark-border hover:border-gold-400/30 text-gold-400'
                  : 'border-light-border hover:border-gold-400/40 text-gold-500'
              }`}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
