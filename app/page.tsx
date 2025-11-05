'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <ProjectsCarousel />
      <Contact />
      <Footer />
    </main>
  );
}