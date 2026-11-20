import React from 'react';
import { CERTIFICATIONS } from '../data/portfolio';
import { CheckCircle2, ShieldCheck, ExternalLink, HelpCircle } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b border-[#E4E4DF] bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#5E6472]">
              Verified Training & Coursework
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#141518] tracking-tight">
            Certifications & Technical Training.
          </h2>
          <p className="mt-2 text-sm text-[#5E6472] max-w-xl">
            Documented completion records with verifiable issuer identifiers and training syllabus scopes.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-xl bg-white border border-[#DFDFD6] hover:border-[#CBD5E1] transition-all shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#1D4ED8] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#141518] mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-[#1D4ED8] mb-3">
                  {cert.issuer}
                </p>

                {cert.note && (
                  <p className="text-xs text-[#5E6472] leading-relaxed mb-4">
                    {cert.note}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-[#F0F0EA] space-y-1.5 text-[11px] font-mono text-[#767D8E]">
                <div className="flex justify-between">
                  <span>Record:</span>
                  <span className="text-[#141518] font-medium">{cert.credentialId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span>{cert.completionDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
