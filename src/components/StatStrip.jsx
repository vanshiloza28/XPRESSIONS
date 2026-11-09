import React from 'react';
import { Users, Award, Calendar, Sparkles } from 'lucide-react';

export default function StatStrip() {
  const stats = [
    {
      metric: "40,000+",
      label: "footfall at our 25th edition",
      icon: Users,
      accent: "text-xp-red"
    },
    {
      metric: "20+",
      label: "competitions and events",
      icon: Award,
      accent: "text-xp-blue"
    },
    {
      metric: "3 days",
      label: "of business, culture and music",
      icon: Calendar,
      accent: "text-emerald-400"
    },
    {
      metric: "Celebrity nights",
      label: "Vishal-Shekhar, Darshan Raval, Mika Singh, Sunidhi Chauhan",
      icon: Sparkles,
      accent: "text-amber-400"
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-xp-panel/80 border border-xp-border rounded-xl p-5 sm:p-6 backdrop-blur-sm hover:border-xp-border/80 transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Icon className={`w-5 h-5 ${stat.accent}`} />
                  </div>
                </div>
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-wide text-white mb-1">
                  {stat.metric}
                </div>
                <div className="text-xs sm:text-sm text-xp-muted leading-snug">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

