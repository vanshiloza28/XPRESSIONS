import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Plane, Train, Car, AlertCircle, ExternalLink, Sparkles } from 'lucide-react';
import TentativeBadge from '../components/TentativeBadge';
import SectionHeading from '../components/SectionHeading';
import PageBanner from '../components/PageBanner';
import SparkleCanvas from '../components/SparkleCanvas';
import AmbientGlow from '../components/AmbientGlow';
import { generalContact } from '../data/contacts';

export default function ScheduleVenue() {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = [
    {
      dayNumber: 1,
      date: "Friday, 29 January 2027",
      title: "Day 1 · Grand Inauguration & Preliminary Clashes",
      daytime: {
        title: "Daytime Sessions",
        description: "Inauguration, first rounds of business competitions, stage events"
      },
      evening: {
        title: "Evening Showcase",
        description: "Performances and a stand-up comedy act"
      }
    },
    {
      dayNumber: 2,
      date: "Saturday, 30 January 2027",
      title: "Day 2 · Competitions, MUN & Celeblitz",
      daytime: {
        title: "Daytime Sessions",
        description: "Business competitions and MUN sessions, stage and campus events"
      },
      evening: {
        title: "Celeblitz Celebrity Night",
        description: "Celeblitz, the celebrity night"
      }
    },
    {
      dayNumber: 3,
      date: "Sunday, 31 January 2027",
      title: "Day 3 · Grand Finals & Closing Extravaganza",
      daytime: {
        title: "Daytime Sessions",
        description: "Finals, results and closing ceremony"
      },
      evening: {
        title: "Closing Night Performance",
        description: "Closing night performance"
      }
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 relative overflow-hidden">
      {/* 6.2 Page Banner with Light Beams, Falling Sparkles & Ambient Glows */}
      <PageBanner
        image="./assets/schedule/banner.jpg"
        badge={
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-xp-red">
              Campus Roadmap
            </span>
            <TentativeBadge />
          </div>
        }
        title="Schedule & Venue"
        subtitle="Plan your visit to Xavier Institute of Management (XIMB). Three consecutive days of intense competition by day, and legendary celebration by night."
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-20 relative z-20">
        {/* Falling light sparkles across body */}
        <SparkleCanvas density="page" />

        {/* 6.4 Status Notice with Amber Glow */}
        <section className="bg-xp-panel/90 border border-amber-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-2xl card-shine">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Notice From Steering Committee
                </span>
                <span className="text-[10px] bg-amber-400/15 text-amber-300 px-2.5 py-0.5 rounded-full font-mono font-bold">
                  TENTATIVE SCHEDULE
                </span>
              </div>
              <p className="text-sm sm:text-base text-xp-cream/95 leading-relaxed">
                <strong className="text-white">Tentative:</strong> the event schedule is still being finalised by the Xpressions Steering Committee. This outline follows previous editions and will be updated once confirmed. <strong className="text-amber-300 font-semibold">Dates are final: 29 to 31 January 2027.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* 6.5 Three-Day Schedule: Interactive Day Tabs & Schedule Cards */}
        <section className="relative">
          <AmbientGlow color="blue" size="lg" className="top-1/4 -left-20 opacity-40" />
          <AmbientGlow color="red" size="lg" className="top-1/2 -right-20 opacity-40" />

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 relative z-10">
            <SectionHeading
              tag="Three-Day Blueprint"
              title="Festival Schedule"
              subtitle="Overview of day and night sequences across all three festival dates."
            />

            {/* Day Selector Tabs */}
            <div className="inline-flex p-1.5 rounded-xl bg-xp-panel border border-xp-border shadow-xl">
              {[1, 2, 3].map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    activeDay === day
                      ? 'bg-xp-red text-white shadow-glow-red scale-102'
                      : 'text-xp-cream/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Day {day}
                </button>
              ))}
            </div>
          </div>

          {/* Full Schedule Table / Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {scheduleData.map((day) => {
              const isSelected = activeDay === day.dayNumber;
              return (
                <div
                  key={day.dayNumber}
                  onClick={() => setActiveDay(day.dayNumber)}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between card-shine ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#1a202d] to-xp-panel border-xp-red shadow-2xl ring-1 ring-xp-red/50 scale-102'
                      : 'bg-xp-panel/70 border-xp-border hover:border-xp-border/80 opacity-80 hover:opacity-100 hover:scale-101'
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-xp-border/60 mb-6">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-xp-red block">
                          Day 0{day.dayNumber}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                          {day.date}
                        </h3>
                      </div>
                      <Calendar className="w-5 h-5 text-xp-muted" />
                    </div>

                    {/* Daytime Box */}
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase text-xp-blue tracking-wider mb-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Daytime</span>
                        </div>
                        <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                          {day.daytime.description}
                        </p>
                      </div>

                      {/* Evening Box */}
                      <div className="p-4 rounded-xl bg-xp-red/15 border border-xp-red/30 shadow-inner">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase text-xp-red tracking-wider mb-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Evening</span>
                        </div>
                        <p className="text-sm sm:text-base text-white font-semibold leading-relaxed">
                          {day.evening.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-xp-border/40 text-[11px] text-xp-muted uppercase tracking-wider flex items-center justify-between">
                    <span>XIMB Campus</span>
                    <span className="text-xp-red font-semibold">TENTATIVE SCHEDULE</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6.6 & 6.7 Venue Information & Getting Here */}
        <section className="bg-xp-panel border border-xp-border rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column: Venue details and transit */}
            <div className="p-8 sm:p-12 flex flex-col justify-between relative z-10">
              <div>
                <SectionHeading
                  tag="Location & Logistics"
                  title="Campus Venue"
                  subtitle="Situated in the vibrant institutional heart of Odisha's capital city."
                />

                <div className="space-y-6">
                  {/* Address card */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-black/40 border border-xp-border card-shine">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-xp-red/15 text-xp-red border border-xp-red/30 shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-display text-xl font-bold text-white">
                          Xavier Institute of Management (XIMB)
                        </div>
                        <p className="text-sm text-xp-muted mt-1 leading-relaxed">
                          Maitri Vihar, Rail Vihar, Chandrasekharpur, Bhubaneswar, Odisha 751013
                        </p>
                        <a
                          href={generalContact.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-xp-red hover:text-white transition-colors"
                        >
                          <span>Open in Google Maps</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Getting Here Sub-section */}
                  <div>
                    <h4 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-3">
                      Getting Here
                    </h4>
                    <div className="space-y-3">
                      <div className="p-3.5 sm:p-4 rounded-xl bg-black/30 border border-xp-border/60 flex items-start gap-3.5 hover:border-xp-blue/40 transition-colors">
                        <Plane className="w-5 h-5 text-xp-blue shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <strong className="text-white">By air: </strong>
                          <span className="text-xp-muted">Biju Patnaik International Airport, Bhubaneswar, then about 25 minutes by cab.</span>
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-xl bg-black/30 border border-xp-border/60 flex items-start gap-3.5 hover:border-xp-blue/40 transition-colors">
                        <Train className="w-5 h-5 text-xp-blue shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <strong className="text-white">By train: </strong>
                          <span className="text-xp-muted">Bhubaneswar railway station, then about 17 minutes by cab.</span>
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-xl bg-black/30 border border-xp-border/60 flex items-start gap-3.5 hover:border-xp-blue/40 transition-colors">
                        <Car className="w-5 h-5 text-xp-blue shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <strong className="text-white">Local transport: </strong>
                          <span className="text-xp-muted">Cabs and autos are easily available across the city.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-xp-border/40 text-xs text-xp-muted">
                Note: Travel times are estimates based on standard city traffic conditions.
              </div>
            </div>

            {/* Right Column: Google Maps Interactive Embed */}
            <div className="relative min-h-[400px] lg:min-h-full bg-black/60 border-t lg:border-t-0 lg:border-l border-xp-border">
              <iframe
                title="XIMB Campus Map"
                className="w-full h-full min-h-[400px] lg:min-h-full border-0 filter grayscale contrast-125 opacity-90"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.9791484196144!2d85.81977797597148!3d20.30113191244583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909e7f86f8a45%3A0x6e2df199ea076e05!2sXavier%20Institute%20of%20Management%20(XIM%20University)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
