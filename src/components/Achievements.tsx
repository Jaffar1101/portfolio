import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolio';
import { Award, MapPin, Calendar, CheckCircle } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 border-b border-[#E4E4DF] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#5E6472]">
              Competitions & Honors
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141518] tracking-tight">
            Built, Presented, Recognized.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5E6472] max-w-2xl">
            National hackathons, university research conventions, and pitching conclaves where technical execution and product feasibility were defended.
          </p>
        </div>

        {/* Structured Award Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                index === 0
                  ? 'bg-[#FFFDF7] border-amber-300 ring-1 ring-amber-100 shadow-card'
                  : index === 1
                  ? 'bg-[#F8FAFF] border-blue-200 ring-1 ring-blue-50 shadow-card'
                  : 'bg-[#F9F9F7] border-[#DFDFD6] hover:border-[#CBD5E1] shadow-subtle'
              }`}
            >
              <div>
                {/* Top Badge & Year */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md ${
                      index === 0
                        ? 'bg-amber-100 text-amber-900 border border-amber-200'
                        : index === 1
                        ? 'bg-blue-100 text-blue-900 border border-blue-200'
                        : 'bg-[#EAEAE4] text-[#4A505D]'
                    }`}
                  >
                    {item.award}
                  </span>

                  <span className="flex items-center gap-1 text-xs font-mono text-[#767D8E]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#141518] mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Organizer */}
                <p className="text-xs font-mono text-[#1D4ED8] mb-3">
                  {item.organizer}
                </p>

                {/* Details */}
                <p className="text-xs text-[#5E6472] leading-relaxed mb-6">
                  {item.details}
                </p>
              </div>

              {/* Bottom Meta */}
              <div className="pt-4 border-t border-[#EAEAE4] flex items-center justify-between text-[11px] font-mono text-[#767D8E]">
                {item.project && (
                  <span className="truncate max-w-[180px] text-[#141518] font-medium">
                    Project: {item.project}
                  </span>
                )}
                {item.location && (
                  <span className="flex items-center gap-1 text-[#5E6472] shrink-0">
                    <MapPin className="w-3 h-3 text-[#767D8E]" />
                    <span>{item.location}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
