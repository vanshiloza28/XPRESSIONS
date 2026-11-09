import React from 'react';
import { Mail, Phone, Instagram, Youtube, MapPin, MessageSquare, HelpCircle, Users, ExternalLink, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import ContactCard from '../components/ContactCard';
import PageBanner from '../components/PageBanner';
import SparkleCanvas from '../components/SparkleCanvas';
import AmbientGlow from '../components/AmbientGlow';
import { faqsData } from '../data/faqs';
import { generalContact, departmentsDirectory } from '../data/contacts';

export default function FAQsContact() {
  return (
    <div className="min-h-screen pt-20 pb-20 relative overflow-hidden">
      {/* Page Banner with Light Beams, Falling Sparkles & Ambient Glows */}
      <PageBanner
        image="./assets/schedule/banner.jpg"
        badge={
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-xp-red/15 text-xp-red border border-xp-red/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Helpdesk & Team Directory</span>
          </span>
        }
        title="FAQs & Contact"
        subtitle="Find answers to frequently asked festival questions, access direct departmental contacts, or connect with our social media channels."
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-24 relative z-20">
        <SparkleCanvas density="page" />

        {/* 10.1 Frequently Asked Questions Accordion */}
        <section id="faqs" className="scroll-mt-28 relative">
          <AmbientGlow color="blue" size="lg" className="top-1/3 -right-20 opacity-30" />

          <SectionHeading
            tag="Knowledge Base"
            title="Frequently Asked Questions"
            subtitle="Essential information regarding fest dates, eligibility, passes, accommodation, and festival policies."
          />

          <div className="max-w-4xl relative z-10">
            <FAQAccordion items={faqsData} />
          </div>
        </section>

        {/* 10.2 Direct Contact Information Block */}
        <section className="bg-gradient-to-r from-xp-panel via-[#151a24] to-xp-panel border border-xp-border rounded-3xl p-8 sm:p-12 card-shine shadow-2xl relative">
          <AmbientGlow color="red" size="md" className="top-0 right-0 opacity-30" />

          <SectionHeading
            tag="General Helpdesk"
            title="Get In Touch"
            subtitle="Reach out to the central Xpressions Steering Committee secretariat for inquiries."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Email */}
            <div className="p-6 rounded-2xl bg-black/40 border border-xp-border/80 flex flex-col justify-between hover:border-xp-red/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-xp-red/15 text-xp-red border border-xp-red/30 flex items-center justify-center mb-4 shadow-glow-red">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase font-bold text-xp-muted tracking-wider mb-1">Email Us</div>
                <div className="font-semibold text-white break-all text-sm">{generalContact.email}</div>
              </div>
              <a
                href={`mailto:${generalContact.email}`}
                className="mt-4 text-xs font-bold text-xp-red hover:underline flex items-center gap-1"
              >
                <span>Compose Mail</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-2xl bg-black/40 border border-xp-border/80 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase font-bold text-xp-muted tracking-wider mb-1">Direct Helpline</div>
                <div className="font-semibold text-white text-sm">{generalContact.formattedPhone}</div>
              </div>
              <a
                href={`tel:${generalContact.phone}`}
                className="mt-4 text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>Call Helpline</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Instagram */}
            <div className="p-6 rounded-2xl bg-black/40 border border-xp-border/80 flex flex-col justify-between hover:border-pink-500/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-500/15 text-pink-400 border border-pink-500/30 flex items-center justify-center mb-4">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase font-bold text-xp-muted tracking-wider mb-1">Instagram</div>
                <div className="font-semibold text-white text-sm">{generalContact.instagramHandle}</div>
              </div>
              <a
                href={generalContact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xs font-bold text-pink-400 hover:underline flex items-center gap-1"
              >
                <span>Follow Updates</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* YouTube */}
            <div className="p-6 rounded-2xl bg-black/40 border border-xp-border/80 flex flex-col justify-between hover:border-red-500/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-500/15 text-red-500 border border-red-500/30 flex items-center justify-center mb-4">
                  <Youtube className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase font-bold text-xp-muted tracking-wider mb-1">YouTube Channel</div>
                <div className="font-semibold text-white text-sm">{generalContact.youtubeHandle}</div>
              </div>
              <a
                href={generalContact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xs font-bold text-red-500 hover:underline flex items-center gap-1"
              >
                <span>Subscribe</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
