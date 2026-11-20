import React from 'react';
import { Cpu, Server, Cloud, Layers, Radio, Globe, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

const INTERESTS = [
  {
    title: 'Artificial Intelligence & AI Agents',
    description: 'Decision-making loops, autonomous workflows, confidence metrics, and model integration.',
    icon: Cpu,
  },
  {
    title: 'Backend Engineering & API Architecture',
    description: 'Contract-first REST services, FastAPI microservices, and relational schema modeling.',
    icon: Server,
  },
  {
    title: 'Cloud Infrastructure & Resiliency',
    description: 'Multi-cloud DR topologies, AWS/OCI foundational services, and automated deployment pipelines.',
    icon: Cloud,
  },
  {
    title: 'AI-Powered Product Development',
    description: 'Turning raw models into explainable, usable tools that solve high-friction real-world problems.',
    icon: Layers,
  },
  {
    title: 'IoT & Connected Systems',
    description: 'ESP32 microcontrollers, BLE communication, environmental telemetry, and physical actuators.',
    icon: Radio,
  },
  {
    title: 'Emerging Ecosystems & Developer Communities',
    description: 'Hackathons, open-source collaboration, and participating in engineering meetups.',
    icon: Globe,
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#E4E4DF] bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#5E6472]">
              Identity & Engineering Approach
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141518] tracking-tight">
            More than just writing code.
          </h2>
        </div>

        {/* Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: First-Person Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#4A505D] text-base sm:text-lg leading-relaxed">
            <p className="text-xl sm:text-2xl font-medium text-[#141518] leading-snug">
              I'm currently pursuing a B.Sc. in Information Technology, exploring how software, artificial intelligence, and infrastructure come together to create meaningful products.
            </p>

            <p>
              My interests go beyond building individual applications. I enjoy understanding how the pieces connect: how an API communicates with a backend, how AI models can be integrated into real workflows, how cloud infrastructure supports applications, and how technology can solve problems outside the screen.
            </p>

            <p>
              I've worked on projects involving AI-powered applications, predictive analytics, IoT concepts, backend systems, and web development. I've also participated in hackathons, innovation competitions, developer events, and technology communities.
            </p>

            <div className="p-5 rounded-xl bg-white border border-[#DFDFD6] shadow-subtle my-6">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#1D4ED8] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>The Core Engineering Philosophy</span>
              </div>
              <blockquote className="text-[#141518] font-medium text-base sm:text-lg italic">
                "{PERSONAL_INFO.hero.philosophy}"
              </blockquote>
            </div>

            <p>
              I believe learning becomes more valuable when it is applied. That's why I enjoy building prototypes, testing ideas, collaborating with others, and continuously improving what I create.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#EAEAE4]">
              <div>
                <span className="block text-2xl font-bold font-mono text-[#141518]">2nd Year</span>
                <span className="text-xs font-mono text-[#5E6472]">B.Sc. Information Tech</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-mono text-[#1D4ED8]">5+ Hackathons</span>
                <span className="text-xs font-mono text-[#5E6472]">Competitions & Conclaves</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-mono text-[#141518]">Mumbai, IN</span>
                <span className="text-xs font-mono text-[#5E6472]">Active Tech Ecosystem</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Technical Interests */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Real Portrait & Credibility Card */}
            <div className="bg-white rounded-xl border border-[#DFDFD6] p-6 shadow-card">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/images/jaffar.jpeg`}
                    alt="Jaffar Mala"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-[#DFDFD6] shadow-sm"
                    onError={(e) => {
                      // Fallback in case of image load delay
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#141518]">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs font-mono text-[#1D4ED8]">{PERSONAL_INFO.title}</p>
                  <p className="text-xs text-[#5E6472] mt-0.5">{PERSONAL_INFO.education.institution}</p>
                  <p className="text-[11px] font-mono text-[#767D8E]">{PERSONAL_INFO.education.degree}</p>
                </div>
              </div>

              <div className="text-xs font-mono bg-[#F9F9F7] p-3 rounded-lg border border-[#EAEAE4] text-[#4A505D] space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#767D8E]">Focus:</span>
                  <span className="font-medium text-[#141518]">Systems & AI Integration</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#767D8E]">Ambition:</span>
                  <span className="font-medium text-[#1D4ED8]">End-to-End AI Orchestrator</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#767D8E]">Location:</span>
                  <span>Mumbai, Maharashtra</span>
                </div>
              </div>
            </div>

            {/* What I'm Interested In */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#5E6472] flex items-center justify-between">
                <span>What I'm Interested In</span>
                <span className="text-[10px] text-[#767D8E]">Key Disciplines</span>
              </h3>

              <div className="grid grid-cols-1 gap-2.5">
                {INTERESTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-white border border-[#DFDFD6] hover:border-[#CBD5E1] transition-all flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-md bg-[#EFF6FF] text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#141518]">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#5E6472] mt-0.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
