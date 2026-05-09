'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-6xl font-bold text-coral-500">Oops!</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-brand-700">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground max-w-sm">
        An unexpected error occurred. Please try again.
      </p>
      <Button variant="gradient" className="mt-8" onClick={reset}>
        Try Again
      </Button>
    </div>
  );
}
