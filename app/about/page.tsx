import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { WaveDivider } from '@/components/site/wave-divider';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Clean Marines — our mission, our team, and our impact on ocean conservation.',
};

const stats = [
  { value: '10,000T', label: 'Plastic Removed' },
  { value: '50+',     label: 'Countries Active' },
  { value: '120K',    label: 'Volunteers Worldwide' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero band */}
      <section className="relative pt-32 pb-20 bg-brand-800 text-white overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Our Mission</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Clean Marines is a leading international ocean conservation non-profit dedicated to
            keeping the oceans clean and repairing marine ecosystems, allowing nature and people
            to thrive.
          </p>
        </div>
      </section>

      <WaveDivider variant="top" fill="#ffffff" />

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label} className="p-8 rounded-xl border bg-card shadow-sm">
                <p className="font-display text-5xl font-bold text-brand-700 tabular-nums">{s.value}</p>
                <p className="mt-2 text-muted-foreground font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 sm:px-6 bg-ocean-50">
        <div className="mx-auto max-w-3xl space-y-6 text-gray-700 leading-relaxed text-lg">
          <h2 className="font-display text-3xl font-semibold text-brand-700">Our Story</h2>
          <p>
            Founded in 2015, Clean Marines began as a small group of passionate ocean lovers who
            believed that the plastic crisis was solvable. Starting with weekend beach cleanups, we
            quickly grew into a global movement.
          </p>
          <p>
            Today, we operate in over 50 countries, working with governments, NGOs, local
            communities, and innovators to intercept plastic before it reaches the ocean — and to
            remove what is already there.
          </p>
          <p>
            From the Great Pacific Garbage Patch to river Interceptors in Southeast Asia, our
            technology and community programs are making a measurable dent in ocean plastic.
          </p>
        </div>
      </section>

      <WaveDivider variant="bottom" fill="#f0f9ff" />

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 text-center" id="help">
        <h2 className="font-display text-3xl font-semibold text-brand-700 mb-4">
          Get Involved
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Whether you donate, volunteer, or spread the word — every action counts.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button variant="gradient" size="lg" asChild>
            <Link href="#">Donate Now</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white" asChild>
            <Link href="/blog">Read Our Blog</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
