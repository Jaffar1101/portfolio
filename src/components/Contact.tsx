import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Send, Check, Copy, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.social.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hi Jaffar,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.social.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#5E6472]">
              Start a Conversation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141518] tracking-tight">
            Have an interesting problem? <br className="hidden sm:inline" />
            Let's build something.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5E6472] max-w-2xl">
            I'm always interested in connecting with developers, founders, teams, and people building meaningful technology products.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Links & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="p-6 rounded-xl bg-white border border-[#DFDFD6] shadow-card">
              <span className="text-xs font-mono uppercase tracking-wider text-[#767D8E] block mb-2">
                Primary Contact Channel
              </span>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-sm sm:text-base font-mono font-bold text-[#141518] truncate">
                  {PERSONAL_INFO.social.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#F4F4F0] hover:bg-[#EAEAE4] text-[#141518] transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#4A505D]" />}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.social.email}`}
                  className="flex-1 text-center px-4 py-2.5 rounded-lg bg-[#141518] text-white hover:bg-[#1D4ED8] transition-colors text-xs font-mono font-medium shadow-sm"
                >
                  Open Email Client
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-white border border-[#DFDFD6] hover:border-[#1D4ED8] transition-all shadow-subtle group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Linkedin className="w-5 h-5 text-[#1D4ED8]" />
                  <ArrowUpRight className="w-4 h-4 text-[#767D8E] group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h4 className="text-sm font-bold text-[#141518]">LinkedIn</h4>
                <p className="text-xs font-mono text-[#5E6472] mt-0.5">/in/jaffar-mala</p>
              </a>

              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-white border border-[#DFDFD6] hover:border-[#141518] transition-all shadow-subtle group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Github className="w-5 h-5 text-[#141518]" />
                  <ArrowUpRight className="w-4 h-4 text-[#767D8E] group-hover:text-[#141518] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h4 className="text-sm font-bold text-[#141518]">GitHub</h4>
                <p className="text-xs font-mono text-[#5E6472] mt-0.5">@Jaffar1101</p>
              </a>
            </div>

            {/* Location & Collaboration badge */}
            <div className="p-5 rounded-xl bg-white border border-[#DFDFD6] shadow-subtle flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#141518]">Based in Mumbai, India</h4>
                <p className="text-xs text-[#5E6472] mt-0.5 leading-relaxed">
                  Available for technical internships, hackathons, open-source projects, and engineering collaborations.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form (Drafts to mailto) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#DFDFD6] shadow-card">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F0F0EA]">
                <h3 className="text-lg font-bold text-[#141518]">
                  Send a Direct Message
                </h3>
                <span className="text-[11px] font-mono text-[#767D8E]">
                  Direct Dispatch
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-[#4A505D] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#DFDFD6] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8] text-xs font-mono text-[#141518] bg-[#FDFDFB]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[#4A505D] mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#DFDFD6] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8] text-xs font-mono text-[#141518] bg-[#FDFDFB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-[#4A505D] mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Collaboration on AI agent workflows / Internship"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DFDFD6] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8] text-xs font-mono text-[#141518] bg-[#FDFDFB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-[#4A505D] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about what you are building or what you'd like to collaborate on..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DFDFD6] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8] text-xs font-mono text-[#141518] bg-[#FDFDFB]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-[#767D8E]">
                    Dispatches directly via your system email client.
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#141518] hover:bg-[#1D4ED8] text-white text-xs font-mono font-semibold transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
