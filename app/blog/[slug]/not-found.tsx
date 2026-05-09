import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BlogNotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4 text-center pt-24">
      <p className="font-display text-6xl font-bold text-brand-200">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-brand-700">Article not found</h1>
      <p className="mt-3 text-muted-foreground">This blog post may have been moved or removed.</p>
      <Button variant="gradient" className="mt-8" asChild>
        <Link href="/blog">Browse All Articles</Link>
      </Button>
    </div>
  );
}
