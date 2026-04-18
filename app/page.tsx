'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';

export default function HomePage() {
  return (
    <LanguageProvider>
      <main className="bg-black text-white">
        <Header />
        <Hero />
        <About />
        <Skills />
        <ProjectsCarousel />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}