import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, MapPin, Terminal, Cpu, Database, Network, ShieldCheck, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

const SYSTEM_NODES = [
  {
    id: 'telemetry',
    name: 'Hardware & Telemetry',
    sub: 'ESP32 / BLE / Sensor Packets',
    icon: Cpu,
    status: 'ACTIVE',
    type: 'Edge Input'
  },
  {
    id: 'gateway',
    name: 'FastAPI Gateway',
    sub: 'Schema Validation & Sanitization',
    icon: Network,
    status: 'STABLE',
    type: 'Ingestion'
  },
  {
    id: 'models',
    name: 'Model & Reasoning Layer',
    sub: 'Confidence Scorer · Gemini / Trend Models',
    icon: Activity,
    status: 'OPTIMAL',
    type: 'Intelligence'
  },
  {
    id: 'persistence',
    name: 'Data & State Stores',
    sub: 'Relational Schemas · Multi-Cloud DR',
    icon: Database,
    status: 'SYNCED',
    type: 'Persistence'
  },
  {
    id: 'actuator',
    name: 'Actuators & Interfaces',
    sub: 'Purifier Relays · Alert Dispatches · React UI',
    icon: ShieldCheck,
    status: 'READY',
    type: 'Execution'
  }
];

export const Hero: React.FC = () => {
  const [activeNode, setActiveNode] = useState(SYSTEM_NODES[2]);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#E4E4DF] bg-canvas">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow & Location pill */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EAEAE4] border border-[#DFDFD6] text-[11px] font-mono font-medium tracking-wider text-[#4A505D] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                {PERSONAL_INFO.hero.eyebrow}
              </span>

              <div className="inline-flex items-center gap-1 text-xs font-mono text-[#5E6472]">
                <MapPin className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#141518] leading-[1.08] mb-6">
              I turn ideas into <br />
              <span className="relative inline-block text-[#141518]">
                working systems
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#2563EB]/20 -z-10 rounded-sm"></span>
              </span>
              .
            </h1>

            {/* Supporting Narrative */}
            <p className="text-lg sm:text-xl text-[#4A505D] font-normal leading-relaxed max-w-2xl mb-4">
              {PERSONAL_INFO.hero.supportingCopy}
            </p>

            <p className="text-sm sm:text-base font-mono text-[#5E6472] mb-8 max-w-xl border-l-2 border-[#1D4ED8] pl-3 py-0.5">
              "{PERSONAL_INFO.hero.secondaryLine}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-lg bg-[#141518] text-[#F9F9F7] hover:bg-[#1D4ED8] transition-all font-mono text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm group"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-lg bg-white border border-[#DFDFD6] hover:border-[#141518] text-[#141518] transition-all font-mono text-xs font-semibold tracking-wide shadow-subtle"
              >
                Let's Connect
              </a>
            </div>

            {/* Social & Verification Links */}
            <div className="flex items-center gap-5 pt-4 border-t border-[#EAEAE4] w-full">
              <span className="text-xs font-mono text-[#767D8E]">Direct links:</span>
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-[#141518] hover:text-[#1D4ED8] font-medium transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#767D8E]" />
              </a>
              <span className="text-[#DFDFD6]">/</span>
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-[#141518] hover:text-[#1D4ED8] font-medium transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#767D8E]" />
              </a>
              <span className="text-[#DFDFD6]">/</span>
              <a
                href={`mailto:${PERSONAL_INFO.social.email}`}
                className="inline-flex items-center gap-1 text-xs font-mono text-[#141518] hover:text-[#1D4ED8] font-medium transition-colors"
              >
                <span>Email</span>
                <ArrowUpRight className="w-3 h-3 text-[#767D8E]" />
              </a>
            </div>

          </div>

          {/* Right Column: Abstract Systems Thinking Visualization */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-[#DFDFD6] p-5 sm:p-6 shadow-card">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0F0EA]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#DFDFD6]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#DFDFD6]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#DFDFD6]"></div>
                  <span className="text-[11px] font-mono text-[#767D8E] ml-2">sys_orchestrator.topology</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[10px] font-mono text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>PIPELINE ONLINE</span>
                </div>
              </div>

              {/* Systems Flow Architecture */}
              <div className="space-y-2.5 mb-6">
                {SYSTEM_NODES.map((node, index) => {
                  const Icon = node.icon;
                  const isSelected = activeNode.id === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setActiveNode(node)}
                      className={`cursor-pointer p-3 rounded-lg border transition-all text-left relative ${
                        isSelected
                          ? 'bg-[#F9F9F7] border-[#1D4ED8] shadow-sm'
                          : 'bg-white border-[#EAEAE4] hover:border-[#CBD5E1]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-[#1D4ED8] text-white'
                                : 'bg-[#F0F0EA] text-[#4A505D]'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold text-[#141518]">
                                {node.name}
                              </span>
                              <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 bg-[#EAEAE4] rounded text-[#4A505D]">
                                0{index + 1}
                              </span>
                            </div>
                            <span className="text-[11px] text-[#5E6472] block font-mono">
                              {node.sub}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                              isSelected
                                ? 'bg-blue-100 text-[#1D4ED8] font-medium'
                                : 'text-[#767D8E]'
                            }`}
                          >
                            {node.status}
                          </span>
                        </div>
                      </div>

                      {/* Connector Line indicator */}
                      {index < SYSTEM_NODES.length - 1 && (
                        <div className="absolute -bottom-2.5 left-6 w-0.5 h-2 bg-[#E4E4DF] z-10" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Active Inspector Panel */}
              <div className="bg-[#141518] text-[#F9F9F7] rounded-lg p-3.5 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-[#A5ACB9] pb-2 border-b border-white/10 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>NODE_INSPECTOR</span>
                  </span>
                  <span className="text-[#A5ACB9]">{activeNode.type}</span>
                </div>
                <div className="space-y-1 text-[11px]">
                  <p className="text-emerald-400">$ telemetry-handshake --target={activeNode.id}</p>
                  <p className="text-[#DFDFD6]">&gt; Status: {activeNode.status} (Verified contract)</p>
                  <p className="text-[#A5ACB9]">&gt; Protocol: REST / JSON / Async Event Queue</p>
                </div>
              </div>

              {/* Micro philosophy footnote */}
              <div className="mt-4 pt-3 border-t border-[#F0F0EA] flex items-center justify-between text-[11px] font-mono text-[#5E6472]">
                <span>Architecture-first mindset</span>
                <span className="text-[#1D4ED8]">Interactive Inspector</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
