import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Trophy, Users, Star, Award, Film, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import PageBanner from '../components/PageBanner';
import SparkleCanvas from '../components/SparkleCanvas';
import AmbientGlow from '../components/AmbientGlow';
import { celeblitzRoster, pastStarsList } from '../data/events';

export default function Highlights() {
  const galleryItems = [
    {
      id: 1,
      image: "./assets/highlights/celeblitz.jpg",
      title: "Celeblitz",
      caption: "Celeblitz: the celebrity night that closes Xpressions"
    },
    {
      id: 2,
      image: "./assets/highlights/thirkan.jpg",
      title: "Thirkan",
      caption: "Thirkan, the group dance battle"
    },
    {
      id: 3,
      image: "./assets/highlights/aaghaz.png",
      title: "Aaghaz",
      caption: "Aaghaz, the street play competition"
    },
    {
      id: 4,
      image: "./assets/highlights/carnival-de-vogue.png",
      title: "Carnival de Vogue",
      caption: "Carnival de Vogue, our fashion show"
    },
    {
      id: 5,
      image: "./assets/highlights/decibelz.jpg",
      title: "Decibelz",
      caption: "Decibelz, the battle of bands"
    },
    {
      id: 6,
      image: "./assets/highlights/business.jpg",
      title: "Business Pitches",
      caption: "Teams pitching at a national-level business competition"
    },
    {
      id: 7,
      image: "./assets/highlights/crowd.jpg",
      title: "Campus Energy",
      caption: "Three days of crowds, colour and energy"
    },
    {
      id: 8,
      image: "./assets/highlights/inauguration.jpg",
      title: "Inauguration Stage",
      caption: "The inauguration that kicks it all off"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen pt-20 pb-20 relative overflow-hidden">
      {/* 5.2 & 5.3 Banner with Light Beams, Ambient Glows, and Falling Light Sparkles */}
      <PageBanner
        image="./assets/highlights/celeblitz.jpg"
        badge={
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-xp-red/15 text-xp-red border border-xp-red/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Archived Editions & Memories</span>
          </span>
        }
        title="Relive Xpressions"
        subtitle="For close to two decades, Xpressions has turned the XIMB campus into Eastern India's biggest stage for business minds and performers. Here is a look at what the last few editions brought."
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-24 relative z-20">
        {/* 5.5 Interactive Image Carousel / Gallery with Captions and Glow */}
        <section className="relative">
          <SparkleCanvas density="page" />
          <AmbientGlow color="red" size="lg" className="top-1/3 -right-20" />

          <SectionHeading
            tag="Festival Archive"
            title="Moments That Defined Us"
            subtitle="Explore highlights from historical editions showcasing high-octane cultural battles, business simulations, and legendary stadium performances."
          />

          <div className="bg-xp-panel border border-xp-border rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 card-shine relative z-10">
            {/* Main Carousel Display */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-black/60 shadow-inner">
              <img
                src={galleryItems[currentIndex].image}
                alt={galleryItems[currentIndex].caption}
                className="w-full h-full object-cover object-center transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent"></div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-20">
                <div className="max-w-2xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-xp-red bg-black/70 px-3 py-1 rounded-full backdrop-blur-md mb-2 inline-flex items-center gap-1.5 border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-xp-red animate-pulse"></span>
                    <span>Moment 0{currentIndex + 1} of 0{galleryItems.length}</span>
                  </span>
                  <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug drop-shadow-lg">
                    {galleryItems[currentIndex].caption}
                  </p>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-3 sm:p-3.5 rounded-full bg-black/70 hover:bg-xp-red border border-white/20 text-white transition-all backdrop-blur-md focus:outline-none hover:scale-105 active:scale-95 shadow-lg"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-3 sm:p-3.5 rounded-full bg-black/70 hover:bg-xp-red border border-white/20 text-white transition-all backdrop-blur-md focus:outline-none hover:scale-105 active:scale-95 shadow-lg"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip with Active Glow */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3 mt-4">
              {galleryItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all relative ${
                    currentIndex === idx
                      ? 'border-xp-red scale-105 shadow-glow-red z-10'
                      : 'border-transparent opacity-60 hover:opacity-100 hover:scale-102'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 5.6 By The Numbers */}
        <section className="bg-gradient-to-r from-xp-panel via-[#151a24] to-xp-panel border border-xp-border rounded-2xl p-8 sm:p-12 relative overflow-hidden card-shine">
          <AmbientGlow color="blue" size="md" className="top-0 right-0 opacity-40" />
          <SectionHeading
            tag="Historical Benchmark"
            title="By The Numbers"
            subtitle="Verified edition statistics documented across past festival iterations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="p-6 rounded-xl bg-black/40 border border-xp-border/80 hover:border-xp-red/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-display font-black text-white mb-2">
                40,000+
              </div>
              <p className="text-sm text-xp-muted leading-relaxed">
                people across three days at the 25th edition (January 2023)
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-xp-border/80 hover:border-xp-blue/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-display font-black text-white mb-2">
                3,000 / 20k+
              </div>
              <p className="text-sm text-xp-muted leading-relaxed">
                3,000 participants and 20,000+ at the final night in 2016
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-xp-border/80 hover:border-amber-400/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-display font-black text-white mb-2">
                29 Sponsors
              </div>
              <p className="text-sm text-xp-muted leading-relaxed">
                leading national & global brands partnering at our 25th edition
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-xp-border/80 hover:border-emerald-400/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-display font-black text-white mb-2">
                National Reach
              </div>
              <p className="text-sm text-xp-muted leading-relaxed">
                Participants from XLRI, IIM Lucknow, IIM Shillong, Great Lakes, IMT Ghaziabad, KIIT and more
              </p>
            </div>
          </div>
        </section>

        {/* 5.7 The Stars of Celeblitz with Card Hover Glow */}
        <section className="relative">
          <AmbientGlow color="red" size="lg" className="top-1/2 left-1/3 opacity-40" />

          <SectionHeading
            tag="Celeblitz Hall of Fame"
            title="The Stars of Celeblitz"
            subtitle="Historical headlining superstars who have set the stage on fire at our celebrity closing nights."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {celeblitzRoster.map((artist, idx) => (
              <div
                key={idx}
                className="bg-xp-panel border border-xp-border rounded-xl p-6 hover:border-xp-red/60 hover:shadow-glow-red transition-all duration-300 card-shine group"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-xp-red tracking-wider uppercase">
                    Celeblitz {artist.year}
                  </span>
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-xp-cream transition-colors">
                  {artist.name}
                </h3>
                <p className="text-xs text-xp-muted mt-1">
                  {artist.note}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Legendary Artists */}
          <div className="mt-8 p-6 sm:p-7 rounded-xl bg-xp-panel/80 border border-xp-border relative z-10">
            <div className="text-xs font-bold uppercase tracking-wider text-xp-blue mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Legacy Performers Over The Years</span>
            </div>
            <p className="text-sm sm:text-base text-xp-cream/90 leading-relaxed">
              Over the years the stage has also hosted <span className="text-white font-semibold">{pastStarsList.join(', ')}</span>.
            </p>
          </div>
        </section>

        {/* 5.8 Video Embed (YouTube Aftermovie) */}
        <section className="pt-4 relative">
          <SectionHeading
            tag="Watch The Action"
            title="The Official Aftermovie"
            subtitle="Experience the roar, the electric lights, and the spirit of Xpressions in motion."
          />

          <div className="bg-xp-panel border border-xp-border rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 card-shine relative z-10">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/9VgWLvP7rug"
                title="Xpressions Official Aftermovie"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-xp-muted">
              <div className="flex items-center gap-1.5">
                <Film className="w-4 h-4 text-xp-red" />
                <span>Original official aftermovie footage</span>
              </div>
              <a
                href="https://www.youtube.com/watch?v=9VgWLvP7rug"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xp-red hover:underline font-semibold"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
