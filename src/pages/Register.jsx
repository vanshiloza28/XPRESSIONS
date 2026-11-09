import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import SparkleCanvas from '../components/SparkleCanvas';
import AmbientGlow from '../components/AmbientGlow';

export default function Register() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSecNOm5jG6FV12BpiO_xCkwjpt1D9f7kVkgUhDZx3JGmXiDSg/viewform?usp=publish-editor";

  return (
    <div className="min-h-screen pt-20 pb-20 relative overflow-hidden">
      <PageBanner
        image="./assets/home/hero-crowd.png"
        badge={
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-xp-red/15 text-xp-red border border-xp-red/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Registration</span>
          </span>
        }
        title="Register Your Intent"
        subtitle="Registrations for Xpressions 2027 open soon. Fill the form below and we'll notify you first when events are announced and registration opens."
      />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-14 relative z-20">
        <SparkleCanvas density="page" />
        <AmbientGlow color="red" size="xl" className="top-1/4 -right-20 opacity-30" />
        <AmbientGlow color="blue" size="xl" className="top-2/3 -left-20 opacity-30" />

        {/* Notice Card */}
        <div className="bg-xp-panel/90 border border-xp-border rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4 flex-wrap shadow-xl card-shine">
          <div className="flex items-center gap-3.5 text-xs sm:text-sm text-xp-cream/90">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Official Google Form managed by the Xpressions 2027 Steering Committee.</span>
          </div>
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-wider text-xp-red hover:underline inline-flex items-center gap-1"
          >
            <span>Open in new tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Embedded Google Form */}
        <div className="bg-xp-panel border border-xp-border rounded-3xl overflow-hidden shadow-2xl p-3 sm:p-6 relative card-shine">
          <div className="w-full min-h-[750px] rounded-2xl overflow-hidden bg-white/5 flex flex-col items-center justify-center relative shadow-inner">
            <iframe
              src={googleFormUrl}
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Xpressions 2027 Registration Intent Form"
              className="w-full min-h-[750px] border-0 rounded-xl"
            >
              Loading registration form…
            </iframe>
          </div>

          <div className="mt-4 pt-4 border-t border-xp-border/40 text-center">
            <p className="text-xs text-xp-muted">
              Trouble loading the form?{' '}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xp-red font-bold hover:underline"
              >
                Click here to open the Google Form directly ↗
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
