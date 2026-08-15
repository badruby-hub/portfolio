# Nazim Fataliev — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Запуск

npm install
npm run dev

## Структура

- app/[locale]/ — layout и главная страница, локаль в URL (/ru, /en)
- components/layout/ — Navbar, Footer
- components/sections/ — Hero, About, StackMap, ProjectsGrid, Services, Experience, BeyondDev, Contact
- components/ui/Reveal.tsx — обёртка для scroll-reveal анимации
- content/ — тексты (dictionaries/ru.json, en.json), проекты (projects.ts), стек (skills.ts), контакты (contact.ts)
- lib/i18n.ts — загрузка словаря по локали
- middleware.ts — редирект "/" на локаль по умолчанию (ru)
