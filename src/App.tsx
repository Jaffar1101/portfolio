import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Community } from './components/Community';
import { Certifications } from './components/Certifications';
import { CurrentFocus } from './components/CurrentFocus';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col selection:bg-[#1D4ED8] selection:text-white">
      {/* Top sticky navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Community />
        <Certifications />
        <CurrentFocus />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
