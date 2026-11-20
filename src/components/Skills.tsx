import React, { useState } from 'react';
import { SKILL_GROUPS, CURRENTLY_EXPLORING } from '../data/portfolio';
import { Sparkles, Compass, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#E4E4DF] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#5E6472]">
              Technical Taxonomy & Tooling
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141518] tracking-tight">
            Capabilities & Learning Status.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5E6472] max-w-2xl">
            Organized by real hands-on experience and implementation context — without arbitrary percentage bars or artificial 5-star ratings.
          </p>
        </div>

        {/* Established Skills: Categorized Taxonomy */}
        <div className="mb-20">
          {/* Category Tabs for Desktop & Mobile */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-[#EAEAE4] mb-8">
            {SKILL_GROUPS.map((group, idx) => (
              <button
                key={group.category}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeTab === idx
                    ? 'bg-[#141518] text-white shadow-sm'
                    : 'bg-[#F4F4F0] text-[#4A505D] hover:bg-[#EAEAE4]'
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <div className="bg-[#F9F9F7] rounded-xl border border-[#DFDFD6] p-6 sm:p-8 shadow-card">
            <div className="mb-6 pb-4 border-b border-[#EAEAE4] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-[#141518]">
                  {SKILL_GROUPS[activeTab].category}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6472] mt-1">
                  {SKILL_GROUPS[activeTab].description}
                </p>
              </div>
              <span className="text-xs font-mono text-[#1D4ED8] bg-blue-50 border border-blue-200 px-3 py-1 rounded-md self-start sm:self-center">
                {SKILL_GROUPS[activeTab].skills.length} core competencies
              </span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SKILL_GROUPS[activeTab].skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-lg bg-white border border-[#EAEAE4] hover:border-[#1D4ED8]/40 transition-colors shadow-subtle group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-[#141518] group-hover:text-[#1D4ED8] transition-colors">
                      {skill.name}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 opacity-80" />
                  </div>
                  <p className="text-xs text-[#5E6472] font-mono leading-relaxed">
                    {skill.context}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Currently Exploring (Strictly separated for credibility) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#B45309]" />
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#141518] font-bold">
                Currently Exploring & Researching
              </h3>
            </div>
            <span className="text-xs font-mono text-[#B45309] bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded">
              Active Growth Vector
            </span>
          </div>

          <div className="bg-[#FFFDF8] rounded-xl border border-[#F3E8D2] p-6 sm:p-8">
            <div className="mb-6 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#78350F]">
                To maintain complete engineering honesty, these technologies are actively being studied, benchmarked, or prototyped in sandbox projects rather than deployed in full-scale production.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CURRENTLY_EXPLORING.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-lg bg-white border border-[#EADBBD] shadow-subtle"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-[#141518]">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium">
                      {item.stage}
                    </span>
                  </div>
                  <p className="text-xs text-[#5E6472] leading-relaxed">
                    {item.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
