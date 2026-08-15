import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import StackMap from "@/components/sections/StackMap";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import BeyondDev from "@/components/sections/BeyondDev";
import Contact from "@/components/sections/Contact";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function Home({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  return (
    <main>
      <Hero locale={params.locale} dict={dict} />
      <About dict={dict} />
      <StackMap locale={params.locale} dict={dict} />
      <ProjectsGrid locale={params.locale} dict={dict} />
      <Services dict={dict} />
      <Experience dict={dict} />
      <BeyondDev dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}
