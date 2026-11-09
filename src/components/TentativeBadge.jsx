import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function TentativeBadge({ text = "TENTATIVE" }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-xp-red/15 text-xp-red border border-xp-red/30">
      <AlertCircle className="w-3.5 h-3.5" />
      <span>{text}</span>
    </span>
  );
}

