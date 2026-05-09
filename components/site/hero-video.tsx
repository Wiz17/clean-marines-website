'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '4.2M', label: 'Tons of plastic removed' },
  { value: '120+', label: 'Countries reached' },
  { value: '50K+', label: 'Active volunteers' },
  { value: '1M+', label: 'Marine animals saved' },
];

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section
      className="relative h-dvh min-h-[600px] w-full overflow-hidden"
      aria-label="Hero — ocean cleanup"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        src="/turtle_swimming_desktop.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />

      {/* Layered gradient overlays for readability + depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 via-brand-900/40 to-brand-900/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/50 via-transparent to-brand-900/30" />

      {/* Floating ambient blurs */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-ocean-700/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-coral-500/15 blur-3xl"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 pb-44 pt-20 text-center sm:px-6 sm:pb-40 sm:pt-24">
        {/* Pill badge */}
        <div className="mb-6 inline-flex animate-in items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-md fade-in slide-in-from-top-4 duration-700 sm:mb-8 sm:px-4 sm:py-1.5">
          <Waves className="h-3.5 w-3.5 text-coral-500 sm:h-4 sm:w-4" strokeWidth={2.5} />
          <span className="font-urbanist text-xs font-medium tracking-wide text-white/90 sm:text-sm">
            A Global Ocean Conservation Initiative
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl animate-in font-urbanist text-[2.75rem] font-black leading-[1.05] tracking-tight text-white drop-shadow-2xl fade-in slide-in-from-bottom-6 duration-1000 sm:text-5xl md:text-6xl lg:text-7xl">
          Cleaner oceans,
          <br />
          healthier futures.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-xl animate-in font-urbanist text-sm leading-relaxed text-white/80 fade-in slide-in-from-bottom-6 duration-1000 sm:text-base md:text-lg [animation-delay:150ms]">
          Join our global mission to free the seas from plastic, restore marine ecosystems, and
          protect our blue planet — one wave at a time.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex animate-in flex-row items-center justify-center gap-2.5 fade-in slide-in-from-bottom-6 duration-1000 sm:mt-10 sm:gap-4 [animation-delay:300ms]">
          <Button
            variant="gradient"
            size="lg"
            className="group h-10 px-4 text-xs font-semibold shadow-xl shadow-brand-900/40 sm:h-12 sm:px-8 sm:text-base"
            asChild
          >
            <Link href="#">
              Donate Today
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:ml-2 sm:h-4 sm:w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group h-10 border-2 border-white/40 bg-white/5 px-4 text-xs font-semibold text-white backdrop-blur-md hover:border-white hover:bg-white/15 hover:text-white sm:h-12 sm:px-8 sm:text-base"
            asChild
          >
            <Link href="/about">
              <Play className="mr-1.5 h-3.5 w-3.5 fill-current sm:mr-2 sm:h-4 sm:w-4" />
              Watch Our Story
            </Link>
          </Button>
        </div>
      </div>

      {/* Glass stats strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 animate-in border-t border-white/10 bg-brand-900/40 backdrop-blur-xl fade-in slide-in-from-bottom-4 duration-1000 [animation-delay:500ms]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-brand-900/30 px-2 py-3 text-center transition-colors hover:bg-brand-900/50 sm:px-4 sm:py-7"
            >
              <p className="font-urbanist text-lg font-extrabold leading-none text-white sm:text-3xl md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 font-urbanist text-[9px] uppercase leading-tight tracking-[0.12em] text-white/60 sm:mt-2 sm:text-xs sm:tracking-[0.15em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
