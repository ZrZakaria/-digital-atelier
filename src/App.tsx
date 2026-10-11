import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/sections/Hero';
import SelectedWork from '@/sections/SelectedWork';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Skills from '@/sections/Skills';
import Achievements from '@/sections/Achievements';
import Contact from '@/sections/Contact';
import Footer from '@/components/layout/Footer';
import ProjectPage from '@/pages/ProjectPage';

const sections = ['hero', 'work', 'about', 'experience', 'skills', 'contact'];

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return null;
}

function HomePage() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-softwhite">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
