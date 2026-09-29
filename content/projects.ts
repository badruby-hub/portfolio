export type Project = {
  id: string;
  name: string;
  url: string;
  featured?: boolean;
  tag: { ru: string; en: string };
  desc: { ru: string; en: string };
  stack: string[];
  architecture?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "miniapp",
    name: "Groztex Mini App",
    url: "https://groztex-mini-app.vercel.app",
    featured: true,
    tag: { ru: "Telegram Mini App", en: "Telegram Mini App" },
    desc: {
      ru: "Полноценное приложение внутри Telegram: курс валют, заявки на обмен, связь с поддержкой и админ-панель для управления.",
      en: "A full web app inside Telegram: exchange rate, request forms, support contact, and an admin panel.",
    },
    stack: ["Next.js", "React", "Prisma", "PostgreSQL", "TypeScript"],
    architecture: "Telegram → Next.js → React → API → Prisma → PostgreSQL",
  },
  {
    id: "moduhaus",
    name: "Moduhaus",
    url: "https://moduhaus.ae",
    tag: { ru: "Дубай · Сервисные услуги", en: "Dubai · Home services" },
    desc: {
      ru: "Сайт для дубайского заказчика: кондиционирование, ремонт, покраска. Написан вручную с нуля, без конструкторов.",
      en: "Site for a Dubai-based client: AC service, repairs, painting. Hand-coded from scratch, no site builders.",
    },
    stack: ["React", "Next.js", "CSS", "i18next", "Headless UI", "TypeScript", "Swiper"],
  },
  {
    id: "groztex",
    name: "Groztex",
    url: "https://groztex.ru",
    tag: { ru: "Чечня · Крипто-визитка", en: "Chechnya · Crypto business card" },
    desc: {
      ru: "Сайт-визитка для обменного пункта: актуальный курс, вся ключевая информация и прямые ссылки на поддержку и бота для заявок.",
      en: "Business-card site for an exchange point: live rate, key info, and direct links to support and a request bot.",
    },
    stack: ["React", "Next.js", "TypeScript", "CSS"],
  },
  {
    id: "mesir",
    name: "MESIR-Perfume",
    url: "https://mesir-perfume.vercel.app/",
    tag: { ru: "Армения · Магазин парфюмерии", en: "Armenia · Perfume shop" },
    desc: {
      ru: "Веб магазин для ознакомления и заказа парфюмерии актуальный товары, вся ключевая информация и прямые ссылки на поддержку и оформление заявок.",
      en: "An online store for browsing and ordering fragrances, featuring current products, all key information, and direct links to customer support and order placement.",
    },
    stack: ["React", "Next.js", "TypeScript", "CSS"],
  },
];
