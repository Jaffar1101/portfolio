import React from 'react';
import { PERSONAL_INFO, LEARNING_JOURNEY } from '../data/portfolio';
import { GraduationCap, ArrowRight, Compass, BookOpen } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[#E4E4DF] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#5E6472]">
              Academic & Technical Evolution
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141518] tracking-tight">
            Education & Learning Trajectory.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5E6472] max-w-2xl">
            A transparent chronicle of foundational computer science studies and progressive real-world technical milestones.
          </p>
        </div>

        {/* Current Academic Foundation Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-xl bg-[#F9F9F7] border border-[#DFDFD6] shadow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#141518] text-white flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-[#2563EB]" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-[#1D4ED8] uppercase tracking-wider">
                  Current Degree Program
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#141518] mt-0.5">
                  {PERSONAL_INFO.education.degree}
                </h3>
                <p className="text-sm font-mono text-[#4A505D] mt-1">
                  {PERSONAL_INFO.education.institution}
                </p>
                <p className="text-xs text-[#767D8E] mt-0.5">
                  {PERSONAL_INFO.education.location} · {PERSONAL_INFO.education.year}
                </p>
              </div>
            </div>

            <div className="md:text-right shrink-0">
              <span className="inline-block px-3 py-1.5 rounded-md bg-white border border-[#DFDFD6] text-xs font-mono text-[#5E6472]">
                Active Enrolment · Semester IV
              </span>
              <p className="text-[11px] font-mono text-[#767D8E] mt-2 max-w-xs md:ml-auto">
                *{PERSONAL_INFO.education.institutionNote}
              </p>
            </div>
          </div>
        </div>

        {/* Learning Progression Timeline */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Compass className="w-4 h-4 text-[#1D4ED8]" />
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#141518] font-bold">
              Engineering Progression Timeline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {LEARNING_JOURNEY.map((phase, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#EAEAE4] hover:border-[#CBD5E1] transition-all shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#1D4ED8]">
                      {phase.period}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#F4F4F0] text-[#141518] font-mono text-xs flex items-center justify-center font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[#141518] mb-2">
                    {phase.focus}
                  </h4>

                  <p className="text-xs text-[#5E6472] leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0F0EA] flex items-center justify-between text-[10px] font-mono text-[#767D8E]">
                  <span>Milestone Stage</span>
                  <ArrowRight className="w-3 h-3 text-[#1D4ED8]" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
