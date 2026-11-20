import React, { useState } from 'react';
import { Project } from '../data/portfolio';
import { ArrowUpRight, Github, Trophy, AlertTriangle, Layers, GitBranch, Check, HelpCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const [activeView, setActiveView] = useState<'overview' | 'architecture' | 'contribution'>('overview');

  return (
    <div
      className={`rounded-xl border transition-all duration-300 bg-white overflow-hidden shadow-card hover:shadow-card-hover ${
        featured ? 'border-[#1D4ED8]/30 ring-1 ring-[#1D4ED8]/10' : 'border-[#DFDFD6]'
      }`}
    >
      {/* Top Header: Category & Status */}
      <div className="p-6 sm:p-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="text-xs font-mono font-medium tracking-wider text-[#5E6472] uppercase">
            {project.category}
          </span>
          <span
            className={`text-[11px] font-mono px-3 py-1 rounded-full border font-medium ${project.statusColor}`}
          >
            {project.status}
          </span>
        </div>

        {/* Project Title & Tagline */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141518] tracking-tight">
            {project.title}
          </h3>
          {project.achievement && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold self-start sm:self-auto">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>{project.achievement.title}</span>
            </div>
          )}
        </div>

        <p className="text-base text-[#4A505D] leading-relaxed mb-6">
          {project.tagline}
        </p>

        {/* Optional Visual / Media Banner */}
        {project.image && (
          <div className="mb-6 rounded-lg overflow-hidden border border-[#EAEAE4] bg-[#F9F9F7] max-h-72 flex items-center justify-center p-3">
            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              className="object-contain max-h-64 rounded-md"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Interactive View Tabs */}
        <div className="flex items-center gap-2 border-b border-[#EAEAE4] pb-2 mb-6">
          <button
            type="button"
            onClick={() => setActiveView('overview')}
            className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-all ${
              activeView === 'overview'
                ? 'bg-[#141518] text-white'
                : 'text-[#5E6472] hover:text-[#141518] hover:bg-[#F0F0EA]'
            }`}
          >
            Problem & Solution
          </button>
          <button
            type="button"
            onClick={() => setActiveView('architecture')}
            className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
              activeView === 'architecture'
                ? 'bg-[#141518] text-white'
                : 'text-[#5E6472] hover:text-[#141518] hover:bg-[#F0F0EA]'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>Architecture Flow</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveView('contribution')}
            className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
              activeView === 'contribution'
                ? 'bg-[#141518] text-white'
                : 'text-[#5E6472] hover:text-[#141518] hover:bg-[#F0F0EA]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>My Contribution</span>
          </button>
        </div>

        {/* View 1: Overview */}
        {activeView === 'overview' && (
          <div className="space-y-5">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#767D8E] mb-1.5">
                The Problem
              </h4>
              <p className="text-sm text-[#4A505D] leading-relaxed bg-[#F9F9F7] p-3.5 rounded-lg border border-[#EAEAE4]">
                {project.problem}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#767D8E] mb-1.5">
                System Solution
              </h4>
              <p className="text-sm text-[#141518] leading-relaxed">
                {project.summary}
              </p>
            </div>

            {project.keyDecisions && project.keyDecisions.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#767D8E] mb-2">
                  Key Technical Decisions
                </h4>
                <ul className="space-y-1.5">
                  {project.keyDecisions.map((decision, i) => (
                    <li key={i} className="text-xs text-[#5E6472] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-1.5 shrink-0" />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* View 2: Architecture Flow */}
        {activeView === 'architecture' && (
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#767D8E] flex items-center justify-between">
              <span>Pipeline & State Flow</span>
              <span className="text-[10px] text-[#1D4ED8]">Linear Trace</span>
            </h4>

            {project.architectureFlow ? (
              <div className="space-y-2">
                {project.architectureFlow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#F9F9F7] border border-[#EAEAE4] flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded bg-[#141518] text-white font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-[#141518] block">
                        {step.step}
                      </span>
                      <span className="text-xs text-[#5E6472] font-mono leading-relaxed">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-[#767D8E] font-mono">
                Architecture flow documentation in progress.
              </p>
            )}
          </div>
        )}

        {/* View 3: My Contribution */}
        {activeView === 'contribution' && (
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#767D8E]">
              Direct Engineering Work
            </h4>
            <div className="space-y-2">
              {project.myContribution.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#F9F9F7] border border-[#EAEAE4] flex items-start gap-2.5"
                >
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-[#141518] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Honest Notes / Limitations (Crucial for trust) */}
        {project.honestNotes && (
          <div className="mt-6 p-3.5 rounded-lg bg-[#FFFBEB] border border-[#FDE68A] flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 leading-relaxed font-mono">
              {project.honestNotes}
            </p>
          </div>
        )}
      </div>

      {/* Card Footer: Tech Stack & Actions */}
      <div className="px-6 sm:px-8 py-4 bg-[#F9F9F7] border-t border-[#EAEAE4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white border border-[#DFDFD6] text-[#4A505D]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 shrink-0">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#141518] text-white hover:bg-[#1D4ED8] transition-colors text-xs font-mono font-medium shadow-sm"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Repository</span>
              <ArrowUpRight className="w-3 h-3 text-[#A5ACB9]" />
            </a>
          )}

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-[#DFDFD6] hover:border-[#141518] text-[#141518] text-xs font-mono font-medium transition-colors"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}

          {!project.links.github && !project.links.demo && (
            <span className="text-[11px] font-mono text-[#767D8E] flex items-center gap-1">
              <HelpCircle className="w-3 h-3" />
              <span>Prototype / In Development</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
