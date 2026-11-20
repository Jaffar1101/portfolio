import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { ArrowUpRight, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#DFDFD6] bg-white py-12 sm:py-16 text-[#5E6472]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[#F0F0EA]">
          
          {/* Identity & Ambition */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-md bg-[#141518] text-[#F9F9F7] flex items-center justify-center font-mono font-bold text-xs">
                JM
              </span>
              <span className="font-bold text-base text-[#141518]">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono text-[#767D8E]">· {PERSONAL_INFO.location}</span>
            </div>
            <p className="text-xs font-mono text-[#5E6472] max-w-md">
              AI Product Builder & Systems-Oriented Developer exploring practical intelligence, robust backend architectures, and multi-cloud resilience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a
              href="#about"
              className="text-[#4A505D] hover:text-[#1D4ED8] transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-[#4A505D] hover:text-[#1D4ED8] transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-[#4A505D] hover:text-[#1D4ED8] transition-colors"
            >
              Skills
            </a>
            <a
              href="#achievements"
              className="text-[#4A505D] hover:text-[#1D4ED8] transition-colors"
            >
              Achievements
            </a>
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#141518] hover:text-[#1D4ED8] font-medium transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#767D8E]" />
            </a>
            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#141518] hover:text-[#1D4ED8] font-medium transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#767D8E]" />
            </a>
          </div>

        </div>

        {/* Bottom sign-off & copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#767D8E]">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>Built with curiosity, code, and a lot of experimentation.</span>
          </div>

          <div>
            &copy; {currentYear} Jaffar Mala. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
