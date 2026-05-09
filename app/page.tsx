import Link from 'next/link';
import { Waves, Users, BookOpen, FlaskConical } from 'lucide-react';
import { HeroVideo } from '@/components/site/hero-video';
import { WaveDivider } from '@/components/site/wave-divider';
import { ImageCarousel } from '@/components/site/image-carousel';
import { Button } from '@/components/ui/button';
import { carouselImages, testimonials } from '@/lib/data';

const missionPoints = [
  { icon: Waves,        label: 'Cleanup Initiatives',      desc: 'Active operations in the Great Pacific Garbage Patch and polluted rivers worldwide.' },
  { icon: Users,        label: 'Community Equipment',      desc: 'Equipping local volunteers with the tools they need to make a real difference.' },
  { icon: BookOpen,     label: 'Educational Resources',    desc: 'Raising awareness through schools, media, and grassroots campaigns.' },
];

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroVideo />

      {/* 2 — Mission / Stats + cleanup video */}
      <section className="py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12">
          {/* Cleanup video */}
          <div className="w-full md:w-1/2">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-xl shadow-lg"
              aria-label="Ocean plastic cleanup footage"
            >
              <source
                src="https://assets.theoceancleanup.com/app/uploads/2022/05/donate-video-new-600.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Stats text */}
          <div className="w-full md:w-1/2 space-y-4">
            <p className="font-display text-4xl font-bold text-brand-700 tabular-nums">
              10,000T
            </p>
            <p className="text-2xl font-light text-brand-700">of floating plastic</p>
            <p className="text-2xl font-light text-brand-700">cleaned through 2024!</p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With your help, we can work towards a future where plastic no longer pollutes our
              oceans. We are currently cleaning up in the Great Pacific Garbage Patch, as well as
              working on river Interceptor deployments in the world&apos;s most polluted rivers.
            </p>
          </div>
        </div>
      </section>

      {/* Wave top */}
      <WaveDivider variant="bottom" fill="#dcf1fe" />

      {/* 3 — Mission intro + image carousel */}
      <section className="bg-ocean-100 py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-14">

          {/* Left — text content */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5">
              <Waves className="h-4 w-4 text-brand-700" />
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                Our Mission
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-urbanist text-4xl font-extrabold leading-tight text-brand-900 sm:text-5xl">
              Leading the fight for{' '}
              <span className="text-brand-700">cleaner oceans</span>
            </h2>

            {/* Intro */}
            <p className="text-lg leading-relaxed text-gray-600">
              Clean Marines is an international ocean conservation non-profit. We keep the oceans
              clean and repair marine ecosystems — allowing nature and people to thrive.
            </p>

            {/* Feature list */}
            <ul className="space-y-5">
              {missionPoints.map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-700/10">
                    <Icon className="h-5 w-5 text-brand-700" />
                  </span>
                  <div>
                    <p className="font-semibold text-brand-900">{label}</p>
                    <p className="mt-0.5 text-sm text-gray-500">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button variant="gradient" size="lg" asChild>
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>

          {/* Right — carousel */}
          <div className="w-full lg:w-1/2">
            <ImageCarousel images={carouselImages} />
          </div>
        </div>
      </section>

      {/* Wave bottom */}
      <WaveDivider variant="top" fill="#dcf1fe" />

      {/* 4 — CTA band */}
      <section className="bg-white py-16 px-4 sm:px-6 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-700">
          Join The Cleanup
        </h2>
        <p className="mt-2 text-2xl sm:text-3xl font-semibold text-brand-700">
          You Can Help Rid
        </p>
        <p className="text-2xl sm:text-3xl font-semibold text-brand-700 mb-8">
          The Oceans of Plastic!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button variant="gradient" size="lg" asChild>
            <Link href="#">Donate</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white" asChild>
            <Link href="/about">Read More</Link>
          </Button>
        </div>
      </section>

      {/* 5 — Testimonials */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-urbanist text-3xl font-bold text-brand-900 text-center mb-12">
            What Our Crew Is Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <blockquote key={i} className="flex flex-col justify-between rounded-2xl border border-border bg-ocean-50 p-8 shadow-sm">
                <div>
                  <p className="font-urbanist text-lg font-semibold text-brand-700">{t.title}</p>
                  <p className="mt-3 leading-relaxed text-gray-600">{t.quote}</p>
                </div>
                <footer className="mt-6 text-sm font-semibold text-brand-900">— {t.authorName}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
