import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

type Lang = 'en' | 'uz' | 'ru';

const STORAGE_KEY = 'gold-imperiya-privacy-lang';

const content: Record<Lang, {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  contact: { heading: string; body: string };
  back: string;
}> = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: May 20, 2026',
    intro:
      'Gold Imperiya ("we", "our", "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit our website (goldimperiya) or use our mobile application ("Gold Imperiya" on Google Play and the App Store).',
    sections: [
      {
        heading: '1. Information We Collect',
        body: [
          'Website — personal information you voluntarily provide such as your full name, phone number, email address and delivery address when you place an order or contact us.',
          'Website — technical information automatically collected when you visit the site, such as your IP address, browser type, operating system, referring URLs and pages viewed.',
          'Website — cookies and similar tracking technologies used to remember your language preference, theme and improve site performance.',
          'Mobile app — the application is currently a product catalog and showcase. It does not transmit personal data to our servers. All preferences (language, theme, favorites, recently viewed items) are stored only on your device using local storage.',
          'Mobile app permissions — the app may request the following device permissions strictly for in-app functionality, and the resulting data never leaves your device: Camera and Photos (to let you upload an avatar or product image), Biometric / Fingerprint (to lock the app locally), Notifications (to show local reminders such as upcoming installment due dates), Phone state (to pause audio/video during incoming calls), and Internet (only to load public product images from our CDN).',
        ],
      },
      {
        heading: '2. How We Use Your Information',
        body: [
          'To process and deliver your orders placed through the website, including installment ("Nasiya") agreements arranged offline with our stores.',
          'To respond to your inquiries and provide customer support.',
          'To improve our website, mobile application, products and customer experience.',
          'To send service notifications related to your purchases (we do not send promotional spam).',
          'To comply with legal obligations of the Republic of Uzbekistan.',
          'Mobile app data (preferences, favorites, cached images) is used only on your device to provide app functionality and is not analyzed, profiled or sold.',
        ],
      },
      {
        heading: '3. Sharing of Information',
        body: [
          'We do not sell or rent your personal data to third parties.',
          'We may share information with trusted service providers (delivery couriers, payment processors, IT infrastructure) strictly to fulfill our services to you.',
          'We may disclose information when required by law, court order or to protect our legal rights.',
        ],
      },
      {
        heading: '4. Data Security',
        body: [
          'We implement reasonable technical and organizational measures to protect your data against unauthorized access, alteration, disclosure or destruction.',
          'However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.',
        ],
      },
      {
        heading: '5. Your Rights',
        body: [
          'You may request access to, correction of, or deletion of your personal data at any time by contacting us.',
          'You may withdraw consent for processing where processing is based on consent.',
        ],
      },
      {
        heading: '6. Children\u2019s Privacy',
        body: [
          'Our services are not directed to children under 18. We do not knowingly collect personal data from children.',
        ],
      },
      {
        heading: '7. Changes to This Policy',
        body: [
          'We may update this Privacy Policy from time to time. Changes become effective when posted on this page with an updated "Last updated" date.',
        ],
      },
    ],
    contact: {
      heading: '8. Contact Us',
      body: 'If you have any questions about this Privacy Policy, please contact us at alpdiametr@gmail.com.',
    },
    back: '\u2190 Back to home',
  },
  uz: {
    title: 'Maxfiylik siyosati',
    updated: 'Oxirgi yangilanish: 2026-yil 20-may',
    intro:
      'Gold Imperiya ("biz", "bizning") sizning maxfiyligingizni hurmat qiladi. Ushbu Maxfiylik siyosati saytimizdan (goldimperiya) hamda mobil ilovamizdan ("Gold Imperiya" — Google Play va App Store da) foydalanganingizda ma’lumotlaringizni qanday yig‘ishimiz, ishlatishimiz va himoya qilishimizni tushuntiradi.',
    sections: [
      {
        heading: '1. Yig‘iladigan ma’lumotlar',
        body: [
          'Sayt — buyurtma berganingizda yoki biz bilan bog‘langaningizda ko‘ngilli ravishda taqdim etadigan shaxsiy ma’lumotlar: ism-familiya, telefon raqami, elektron pochta va yetkazib berish manzili.',
          'Sayt — tashrif buyurganingizda avtomatik to‘planadigan texnik ma’lumotlar: IP-manzil, brauzer turi, operatsion tizim, ko‘rilgan sahifalar.',
          'Sayt — til va mavzu tanlovingizni eslab qolish hamda sayt ishlashini yaxshilash uchun ishlatiladigan cookie fayllari.',
          'Mobil ilova — hozircha faqat mahsulotlar katalogi va ko‘rgazma sifatida ishlaydi. Shaxsiy ma’lumotlaringiz bizning serverlarimizga yuborilmaydi. Til, mavzu, sevimlilar va so‘nggi ko‘rilgan mahsulotlar kabi sozlamalar faqat qurilmangizning ichki xotirasida saqlanadi.',
          'Mobil ilova ruxsatlari — ilova faqat ichki funksiyalar uchun quyidagi ruxsatlarni so‘rashi mumkin va olingan ma’lumotlar qurilmangizdan tashqariga chiqarilmaydi: Kamera va Galereya (profil yoki mahsulot rasmini yuklash uchun), Barmoq izi / Biometrika (ilovani mahalliy himoyalash uchun), Bildirishnomalar (nasiya muddati kabi mahalliy eslatmalar uchun), Telefon holati (qo‘ng‘iroq vaqtida audio/videoni pauza qilish uchun), Internet (faqat ochiq mahsulot rasmlarini yuklash uchun).',
        ],
      },
      {
        heading: '2. Ma\u2019lumotlardan foydalanish',
        body: [
          'Sayt orqali topshirilgan buyurtmalaringizni qabul qilish va yetkazib berish, jumladan do‘konlarimiz bilan oflayn rasmiylashtiriladigan nasiya shartnomalari uchun.',
          'Murojaatlaringizga javob berish va mijozlarni qo‘llab-quvvatlash xizmatini taqdim etish uchun.',
          'Saytimiz, mobil ilovamiz, mahsulotlarimiz va mijoz tajribasini yaxshilash uchun.',
          'Xaridingizga oid xizmat bildirishnomalarini yuborish uchun (reklama spamlari yuborilmaydi).',
          'O‘zbekiston Respublikasi qonunchiligi talablarini bajarish uchun.',
          'Mobil ilovadagi ma’lumotlar (sozlamalar, sevimlilar, keshlangan rasmlar) faqat qurilmangizda, ilovaning ichki ishlashi uchun ishlatiladi — tahlil qilinmaydi, profillanmaydi va sotilmaydi.',
        ],
      },
      {
        heading: '3. Ma\u2019lumotlarni uchinchi shaxslarga berish',
        body: [
          'Biz sizning shaxsiy ma\u2019lumotlaringizni uchinchi shaxslarga sotmaymiz va ijaraga bermaymiz.',
          'Faqat xizmat ko\u2018rsatish maqsadida ishonchli hamkorlar (yetkazib berish kuryerlari, to\u2018lov tizimlari, IT-infratuzilma) bilan zaruriy ma\u2019lumotlar bo\u2018lishishi mumkin.',
          'Qonun, sud qarori talab qilgan yoki huquqlarimizni himoya qilish zarur bo\u2018lgan hollarda ma\u2019lumot oshkor etilishi mumkin.',
        ],
      },
      {
        heading: '4. Ma\u2019lumotlar xavfsizligi',
        body: [
          'Sizning ma\u2019lumotlaringizni ruxsatsiz kirish, o\u2018zgartirish, oshkor qilish yoki yo\u2018qotishdan himoya qilish uchun asosli texnik va tashkiliy choralarni qo\u2018llaymiz.',
          'Shunga qaramay, internet orqali uzatishning birorta usuli 100% xavfsiz emas va mutlaq xavfsizlikni kafolatlay olmaymiz.',
        ],
      },
      {
        heading: '5. Sizning huquqlaringiz',
        body: [
          'Istalgan vaqtda shaxsiy ma\u2019lumotlaringizni ko\u2018rish, tuzatish yoki o\u2018chirib tashlashni so\u2018rashga haqlisiz.',
          'Ishlov berish roziligingizga asoslangan bo\u2018lsa, roziligingizni qaytarib olishingiz mumkin.',
        ],
      },
      {
        heading: '6. Bolalarning maxfiyligi',
        body: [
          'Xizmatlarimiz 18 yoshga to\u2018lmagan shaxslarga mo\u2018ljallanmagan. Bolalardan bila turib shaxsiy ma\u2019lumot yig\u2018magaymiz.',
        ],
      },
      {
        heading: '7. Siyosatga o\u2018zgartirishlar',
        body: [
          'Ushbu Maxfiylik siyosati vaqti-vaqti bilan yangilanishi mumkin. O\u2018zgarishlar ushbu sahifada yangilangan sana bilan birga e\u2019lon qilingach kuchga kiradi.',
        ],
      },
    ],
    contact: {
      heading: '8. Biz bilan bog\u2018lanish',
      body: 'Maxfiylik siyosati bo\u2018yicha savollaringiz bo\u2018lsa, alpdiametr@gmail.com manziliga yozing.',
    },
    back: '\u2190 Bosh sahifaga qaytish',
  },
  ru: {
    title: 'Политика конфиденциальности',
    updated: 'Последнее обновление: 20 мая 2026 г.',
    intro:
      'Gold Imperiya («мы», «наш») уважает вашу конфиденциальность. Настоящая Политика конфиденциальности объясняет, как мы собираем, используем, раскрываем и защищаем вашу информацию при посещении нашего сайта (goldimperiya) и использовании нашего мобильного приложения («Gold Imperiya» в Google Play и App Store).',
    sections: [
      {
        heading: '1. Какие данные мы собираем',
        body: [
          'Сайт — личная информация, которую вы предоставляете добровольно: ФИО, номер телефона, адрес электронной почты и адрес доставки при оформлении заказа или обращении к нам.',
          'Сайт — технические данные, собираемые автоматически: IP-адрес, тип браузера, операционная система, источники переходов и просмотренные страницы.',
          'Сайт — файлы cookie и аналогичные технологии для запоминания выбранного языка, темы и улучшения работы сайта.',
          'Мобильное приложение — на данный момент работает как каталог и витрина товаров. Персональные данные на наши серверы не передаются. Все настройки (язык, тема, избранное, недавно просмотренные товары) хранятся только на вашем устройстве в локальном хранилище.',
          'Разрешения мобильного приложения — приложение может запрашивать следующие разрешения исключительно для внутренних функций, и полученные данные не покидают ваше устройство: Камера и Галерея (для загрузки аватара или изображения товара), Биометрия / Отпечаток пальца (для локальной блокировки приложения), Уведомления (для локальных напоминаний, например о сроках рассрочки), Состояние телефона (чтобы ставить аудио/видео на паузу во время входящего звонка), Интернет (только для загрузки публичных изображений товаров).',
        ],
      },
      {
        heading: '2. Как мы используем данные',
        body: [
          'Для оформления и доставки заказов через сайт, включая договоры рассрочки («Насия»), оформляемые офлайн в наших магазинах.',
          'Для ответа на ваши запросы и поддержки клиентов.',
          'Для улучшения сайта, мобильного приложения, ассортимента и качества обслуживания.',
          'Для отправки сервисных уведомлений по вашим покупкам (рекламный спам мы не рассылаем).',
          'Для выполнения требований законодательства Республики Узбекистан.',
          'Данные мобильного приложения (настройки, избранное, кэш изображений) используются только на вашем устройстве для работы приложения — не анализируются, не профилируются и не продаются.',
        ],
      },
      {
        heading: '3. Передача данных третьим лицам',
        body: [
          'Мы не продаём и не сдаём в аренду ваши персональные данные третьим лицам.',
          'Мы можем передавать данные доверенным партнёрам (курьерским службам, платёжным системам, поставщикам ИТ-услуг) исключительно для оказания вам услуг.',
          'Раскрытие возможно по требованию закона, по решению суда или для защиты наших прав.',
        ],
      },
      {
        heading: '4. Безопасность данных',
        body: [
          'Мы применяем разумные технические и организационные меры для защиты данных от несанкционированного доступа, изменения, раскрытия или уничтожения.',
          'Однако ни один способ передачи через Интернет не является на 100 % безопасным, и мы не можем гарантировать абсолютную безопасность.',
        ],
      },
      {
        heading: '5. Ваши права',
        body: [
          'Вы вправе в любой момент запросить доступ, исправление или удаление ваших персональных данных, обратившись к нам.',
          'Вы можете отозвать согласие на обработку, если обработка основана на согласии.',
        ],
      },
      {
        heading: '6. Конфиденциальность детей',
        body: [
          'Наши услуги не предназначены для лиц младше 18 лет. Мы не собираем сознательно персональные данные детей.',
        ],
      },
      {
        heading: '7. Изменения политики',
        body: [
          'Мы можем периодически обновлять Политику конфиденциальности. Изменения вступают в силу с момента публикации на этой странице с обновлённой датой.',
        ],
      },
    ],
    contact: {
      heading: '8. Связаться с нами',
      body: 'По любым вопросам, связанным с Политикой конфиденциальности, пишите нам на alpdiametr@gmail.com.',
    },
    back: '\u2190 На главную',
  },
};

const LANG_LABEL: Record<Lang, string> = { en: 'EN', uz: 'UZ', ru: 'RU' };

export default function PrivacyPolicy() {
  const { theme } = useTheme();
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && (saved === 'en' || saved === 'uz' || saved === 'ru')) return saved;
    const site = localStorage.getItem('gold-imperiya-lang');
    if (site === 'ru' || site === 'uz') return site;
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.title = content[lang].title + ' \u2014 Gold Imperiya';
  }, [lang]);

  const c = content[lang];
  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-dark-bg text-gray-200' : 'bg-light-bg text-gray-800'
      }`}
    >
      {/* Top bar */}
      <header
        className={`sticky top-0 z-40 backdrop-blur border-b ${
          isDark
            ? 'bg-dark-bg/80 border-gold-400/10'
            : 'bg-white/80 border-gold-400/20'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          <a href="/" className="flex items-center gap-2">
            <img src="/Gold_imperiya_logo.png" alt="Gold Imperiya" className="h-9 w-auto" />
            <span className="font-semibold tracking-wide hidden sm:inline">Gold Imperiya</span>
          </a>
          <div
            className={`flex items-center rounded-full p-1 text-xs sm:text-sm border ${
              isDark ? 'border-gold-400/20 bg-white/5' : 'border-gold-400/30 bg-white'
            }`}
          >
            {(['en', 'uz', 'ru'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  lang === l
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold'
                    : isDark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-black'
                }`}
                aria-pressed={lang === l}
              >
                {LANG_LABEL[l]}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <a
          href="/"
          className={`inline-block mb-6 text-sm hover:underline ${
            isDark ? 'text-gold-400' : 'text-yellow-700'
          }`}
        >
          {c.back}
        </a>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
          {c.title}
        </h1>
        <p className={`text-sm mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {c.updated}
        </p>

        <p className="leading-relaxed mb-10">{c.intro}</p>

        <div className="space-y-8">
          {c.sections.map((s) => (
            <section key={s.heading}>
              <h2
                className={`text-xl sm:text-2xl font-semibold mb-3 ${
                  isDark ? 'text-gold-400' : 'text-yellow-700'
                }`}
              >
                {s.heading}
              </h2>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                {s.body.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <h2
              className={`text-xl sm:text-2xl font-semibold mb-3 ${
                isDark ? 'text-gold-400' : 'text-yellow-700'
              }`}
            >
              {c.contact.heading}
            </h2>
            <p className="leading-relaxed">
              {c.contact.body.split('alpdiametr@gmail.com').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <a
                      href="mailto:alpdiametr@gmail.com"
                      className={`font-medium underline underline-offset-4 ${
                        isDark ? 'text-gold-400 hover:text-gold-300' : 'text-yellow-700 hover:text-yellow-800'
                      }`}
                    >
                      alpdiametr@gmail.com
                    </a>
                  )}
                </span>
              ))}
            </p>
          </section>
        </div>

        <div className={`mt-12 pt-6 border-t text-xs ${
          isDark ? 'border-gold-400/10 text-gray-500' : 'border-gold-400/20 text-gray-500'
        }`}>
          &copy; {new Date().getFullYear()} Gold Imperiya. All rights reserved.
        </div>
      </main>
    </div>
  );
}
