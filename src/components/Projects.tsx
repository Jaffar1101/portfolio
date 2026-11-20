import React from 'react';
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { Layers, Terminal, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#E4E4DF] bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#5E6472]">
              Case Studies & Systems
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141518] tracking-tight">
            Selected Engineering Projects.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5E6472] max-w-2xl">
            Real software, AI agent layers, environmental intelligence, and connected hardware prototypes — documented with architectural transparency.
          </p>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-12 mb-24">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index === 0}
            />
          ))}
        </div>

        {/* Secondary Section: Other Things I've Built & Worked On */}
        <div className="pt-12 border-t border-[#DFDFD6]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Terminal className="w-4 h-4 text-[#1D4ED8]" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#141518]">
                  Other Things I've Built & Worked On
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5E6472]">
                Supporting software systems, client deliverables, and workflow automation testing.
              </p>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-[#767D8E]">
              Archived & Supporting Work
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OTHER_PROJECTS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#DFDFD6] hover:border-[#CBD5E1] transition-all shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#5E6472] mb-3">
                    <span className="text-[#1D4ED8] font-semibold">{item.category}</span>
                    <span>{item.year}</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#141518] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5E6472] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <p className="text-xs font-mono text-[#4A505D] bg-[#F9F9F7] p-2.5 rounded-lg border border-[#EAEAE4] mb-4">
                    {item.details}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#F0F0EA]">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F4F0] text-[#4A505D]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
