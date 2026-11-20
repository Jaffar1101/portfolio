import React from 'react';
import { COMMUNITY_ACTIVITIES } from '../data/portfolio';
import { Users, Calendar, MapPin, CheckCircle2, Globe, HeartHandshake } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <section id="community" className="py-20 md:py-28 border-b border-[#E4E4DF] bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#5E6472]">
              Ecosystem & Volunteering
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141518] tracking-tight">
            Learning doesn't happen only behind a screen.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5E6472] max-w-2xl">
            Active presence in developer meetups, hackathon organizing support, and regional engineering communities across Mumbai.
          </p>
        </div>

        {/* Community Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Volunteering / Community Case Studies */}
          <div className="lg:col-span-7 space-y-6">
            {COMMUNITY_ACTIVITIES.filter(c => c.type === 'volunteer' || c.type === 'community').map((activity) => (
              <div
                key={activity.id}
                className="p-6 sm:p-7 rounded-xl bg-white border border-[#DFDFD6] shadow-subtle hover:border-[#CBD5E1] transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-[#EFF6FF] text-[#1D4ED8] flex items-center justify-center">
                      <HeartHandshake className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#1D4ED8] uppercase">
                      {activity.role}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#767D8E] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activity.year}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#141518] mb-1">
                  {activity.title}
                </h3>
                <p className="text-xs font-mono text-[#5E6472] mb-3">
                  {activity.organization} {activity.location ? `· ${activity.location}` : ''}
                </p>

                <p className="text-sm text-[#4A505D] leading-relaxed mb-4">
                  {activity.description}
                </p>

                {activity.keyPoints && (
                  <div className="space-y-2 pt-3 border-t border-[#F0F0EA]">
                    {activity.keyPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#5E6472]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Industry Conclaves & Tech Gatherings Timeline */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-[#DFDFD6] p-6 sm:p-7 shadow-card">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#F0F0EA]">
                <Globe className="w-4 h-4 text-[#1D4ED8]" />
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#141518] font-bold">
                  Conferences, Meetups & Summits
                </h3>
              </div>
              <p className="text-xs text-[#5E6472] leading-relaxed mb-6">
                Direct participant exposure to enterprise scale, automated testing pipelines, API gateways, and spatial platforms:
              </p>

              <div className="space-y-4">
                {COMMUNITY_ACTIVITIES.find(c => c.type === 'event')?.keyPoints?.map((eventStr, idx) => {
                  const [eventName, ...eventDetails] = eventStr.split(' — ');
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-[#F9F9F7] border border-[#EAEAE4] text-xs"
                    >
                      <div className="font-bold text-[#141518] mb-1 flex items-center justify-between">
                        <span>{eventName}</span>
                        <span className="text-[10px] font-mono text-[#767D8E]">Mumbai</span>
                      </div>
                      <p className="text-[#5E6472] leading-relaxed">
                        {eventDetails.join(' — ')}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F0EA] text-[11px] font-mono text-[#767D8E]">
                * Presented as active attendee participation and learning immersion.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
