'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '@/types';

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    breakpoints: { '(min-width: 1024px)': { slidesToScroll: 1 } },
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-display text-3xl font-semibold text-brand-700">
          What Our Crew Is Saying
        </h2>
        <div className="flex gap-3">
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="rounded-full border border-brand-700 p-3 text-brand-700 transition hover:bg-brand-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="rounded-full border border-brand-700 p-3 text-brand-700 transition hover:bg-brand-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="flex-[0_0_90%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0"
            >
              <blockquote className="flex h-full flex-col justify-between rounded-xl bg-slate-50 p-6 shadow-sm sm:p-8">
                <div>
                  <p className="text-xl font-display font-semibold text-brand-700">{t.title}</p>
                  <p className="mt-4 leading-relaxed text-gray-700">{t.quote}</p>
                </div>
                <footer className="mt-6 text-sm font-medium text-gray-600">
                  — {t.authorName}
                </footer>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
