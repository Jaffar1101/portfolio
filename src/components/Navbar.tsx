import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Community', href: '#community' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F9F9F7]/90 backdrop-blur-md border-b border-[#E4E4DF] shadow-subtle'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Identity */}
          <a
            href="#"
            className="group flex items-center gap-3 font-medium text-[#141518] hover:text-[#1D4ED8] transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-[#141518] text-[#F9F9F7] flex items-center justify-center font-mono font-bold text-sm tracking-tight group-hover:bg-[#1D4ED8] transition-colors">
              JM
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-[#141518]">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-[#5E6472] -mt-0.5 hidden sm:inline">
                AI & Systems Builder
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-mono tracking-wide text-[#4A505D] hover:text-[#141518] hover:bg-[#F0F0EA] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action / Status badge */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAEAE4]/80 border border-[#DFDFD6] text-[11px] font-mono text-[#4A505D]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for collaborations</span>
            </div>

            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#141518] text-[#F9F9F7] hover:bg-[#1D4ED8] transition-colors shadow-sm"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#141518] hover:bg-[#EAEAE4] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F9F9F7] border-b border-[#E4E4DF] px-4 pt-3 pb-6 shadow-card">
          <div className="flex items-center gap-2 mb-4 px-2 py-1.5 bg-[#F0F0EA] rounded-md text-xs font-mono text-[#5E6472]">
            <Terminal className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>Mumbai, IN · B.Sc IT 2nd Year</span>
          </div>
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#141518] hover:bg-[#EAEAE4] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#E4E4DF] flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-lg bg-[#1D4ED8] text-white text-xs font-mono font-semibold"
            >
              Get in Touch
            </a>
            <div className="flex items-center justify-between px-2 pt-2 text-[11px] font-mono text-[#767D8E]">
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1D4ED8] flex items-center gap-1"
              >
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1D4ED8] flex items-center gap-1"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
