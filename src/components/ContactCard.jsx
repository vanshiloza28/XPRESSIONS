import React from 'react';
import { Mail, Phone, UserCheck } from 'lucide-react';

export default function ContactCard({ member, department }) {
  return (
    <div className="bg-xp-panel border border-xp-border rounded-xl p-5 hover:border-xp-blue/50 transition-all duration-300 group">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1b2233] to-[#11141c] border border-xp-border flex items-center justify-center text-xp-blue group-hover:scale-105 transition-transform">
          <UserCheck className="w-6 h-6" />
        </div>
        {member.badge && (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-xp-blue/15 text-blue-400 border border-blue-500/20">
            {member.badge}
          </span>
        )}
      </div>

      <div className="space-y-1 mb-4">
        <h4 className="text-base font-bold text-white group-hover:text-xp-cream transition-colors">
          {member.name}
        </h4>
        <p className="text-xs font-medium text-xp-muted">
          {member.role}
        </p>
      </div>

      <div className="pt-3 border-t border-xp-border/60 flex items-center gap-2">
        <a
          href={`mailto:${member.email}`}
          className="flex-1 py-1.5 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-xp-cream hover:text-white flex items-center justify-center gap-1.5 transition-colors"
          title={`Email ${member.name}`}
        >
          <Mail className="w-3.5 h-3.5 text-xp-blue" />
          <span>Email</span>
        </a>
        <a
          href={`tel:${member.phone}`}
          className="flex-1 py-1.5 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-xp-cream hover:text-white flex items-center justify-center gap-1.5 transition-colors"
          title={`Call ${member.name}`}
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span>Call</span>
        </a>
      </div>
    </div>
  );
}

