export type Tech = {
  id: string;
  name: string;
  cat: "frontend" | "backend" | "product";
  usedIn: string[];
};

export const TECH: Tech[] = [
  { id: "react", name: "React", cat: "frontend", usedIn: ["moduhaus", "groztex", "miniapp"] },
  { id: "nextjs", name: "Next.js", cat: "frontend", usedIn: ["moduhaus", "groztex", "miniapp"] },
  { id: "ts", name: "TypeScript", cat: "frontend", usedIn: ["moduhaus", "groztex", "miniapp"] },
  { id: "i18next", name: "i18next", cat: "frontend", usedIn: ["moduhaus"] },
  { id: "headlessui", name: "Headless UI", cat: "frontend", usedIn: ["moduhaus"] },
  { id: "swiper", name: "Swiper", cat: "frontend", usedIn: ["moduhaus"] },
  { id: "node", name: "Node.js", cat: "backend", usedIn: ["miniapp"] },
  { id: "prisma", name: "Prisma", cat: "backend", usedIn: ["miniapp"] },
  { id: "postgres", name: "PostgreSQL", cat: "backend", usedIn: ["miniapp"] },
  { id: "tgwebapp", name: "Telegram WebApp", cat: "product", usedIn: ["miniapp", "groztex"] },
  { id: "git", name: "Git", cat: "product", usedIn: ["moduhaus", "groztex", "miniapp"] },
];
