import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { OctopusMascot } from '@/components/site/octopus-mascot';

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4 text-center bg-gradient-to-b from-ocean-50 to-white">
      <OctopusMascot className="w-56 h-56 sm:w-72 sm:h-72" />

      <p className="mt-2 font-urbanist text-7xl font-black text-brand-200 sm:text-8xl">404</p>
      <h1 className="mt-3 font-urbanist text-2xl font-bold text-brand-700 sm:text-3xl">
        You&apos;ve drifted into the deep!
      </h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        This page seems to have been swept out to sea. Our octopus friend is just as confused as you are.
      </p>

      <div className="mt-8 flex gap-4">
        <Button variant="gradient" asChild>
          <Link href="/">Swim Home</Link>
        </Button>
        <Button variant="outline" className="border-brand-700 text-brand-700" asChild>
          <Link href="/blog">Read Blog</Link>
        </Button>
      </div>
    </div>
  );
}
