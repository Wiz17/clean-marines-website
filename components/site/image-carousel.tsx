'use client';

import { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
}

export function ImageCarousel({ images, autoPlay = true }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!autoPlay || !emblaApi) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;
    intervalRef.current = setInterval(() => emblaApi.scrollNext(), 5000);
    emblaApi.on('pointerDown', () => { if (intervalRef.current) clearInterval(intervalRef.current); });
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [emblaApi, autoPlay]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%] aspect-[4/3]">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-brand-700 bg-white/90 p-2 text-brand-700 transition hover:bg-brand-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-brand-700 bg-white/90 p-2 text-brand-700 transition hover:bg-brand-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
