import React from 'react';
import { Target, Server, Network, Cloud, BrainCircuit, Workflow, Database, RefreshCw } from 'lucide-react';

const FOCUS_AREAS = [
  {
    title: 'Multi-Cloud Active-Passive Architecture',
    desc: 'Failover strategies, synchronous state replication, and cross-provider disaster recovery (AWS & OCI).',
    icon: Cloud
  },
  {
    title: 'AI Agent & Tool Orchestration',
    desc: 'Moving beyond single LLM calls to recursive agent graphs, tool execution loops, and state memory.',
    icon: BrainCircuit
  },
  {
    title: 'RAG & Vector Context Ingestion',
    desc: 'Document chunking strategies, embeddings retrieval, and LangChain orchestration pipelines.',
    icon: Database
  },
  {
    title: 'Automated Workflow Pipelines with n8n',
    desc: 'Building autonomous webhook loops, asynchronous triggers, and multi-service event orchestration.',
    icon: Workflow
  },
  {
    title: 'Resilient Backend Systems & APIs',
    desc: 'High-concurrency FastAPI design, rate-limiting, token validation, and graceful degradation.',
    icon: Server
  },
  {
    title: 'Scalable System Architecture',
    desc: 'Observability, automated health monitoring, distributed task queues, and fault tolerance.',
    icon: Network
  }
];

export const CurrentFocus: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-[#E4E4DF] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#5E6472]">
              Engineering Roadmap
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141518] tracking-tight">
            What I'm Working Towards.
          </h2>
        </div>

        {/* Core Manifesto Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-xl bg-[#F9F9F7] border border-[#DFDFD6] shadow-card">
            <p className="text-lg sm:text-xl font-medium text-[#141518] leading-relaxed mb-4">
              I'm currently focused on becoming a stronger systems-oriented developer. I'm expanding my understanding of backend engineering, cloud infrastructure, AI agent orchestration, and modern application architecture.
            </p>
            <p className="text-base text-[#4A505D] leading-relaxed">
              My goal is not just to integrate an AI API into an application. I want to understand how intelligent systems are designed, connected, deployed, monitored, and improved.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 rounded-xl bg-[#141518] text-[#F9F9F7]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB] mb-2 font-semibold">
              <Target className="w-4 h-4" />
              <span>THE LONG-TERM HORIZON</span>
            </div>
            <h3 className="text-xl font-bold mb-2">AI Systems Orchestrator</h3>
            <p className="text-xs text-[#A5ACB9] leading-relaxed font-mono">
              Bridging modern foundation models with microservice backends, distributed event buses, edge devices, and resilient multi-cloud cloud infrastructure.
            </p>
          </div>
        </div>

        {/* Current Exploration Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FOCUS_AREAS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-lg bg-[#F9F9F7] border border-[#EAEAE4] hover:border-[#CBD5E1] transition-colors"
              >
                <div className="w-8 h-8 rounded-md bg-[#EFF6FF] text-[#1D4ED8] flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#141518] mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5E6472] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
