import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/types';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: Post;
  variant?: 'default' | 'featured';
}

export function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  if (variant === 'featured') {
    return (
      <article className="group relative overflow-hidden rounded-xl shadow-md">
        <Link href={`/blog/${post.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 rounded-xl">
          <div className="relative aspect-[4/5] w-full sm:aspect-[16/9] md:aspect-[16/7]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="100vw"
              
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
            <span className="inline-block rounded-full bg-brand-700/80 px-2.5 py-0.5 text-[10px] sm:text-xs font-medium mb-2 sm:mb-3">
              Featured
            </span>
            <h2 className="font-display text-lg sm:text-2xl md:text-3xl font-bold line-clamp-3 sm:line-clamp-2 group-hover:underline">
              {post.title}
            </h2>
            <p className="mt-1.5 sm:mt-2 text-white/80 line-clamp-2 text-xs sm:text-sm md:text-base">{post.excerpt}</p>
            <div className="mt-3 sm:mt-4 flex items-center gap-2.5 sm:gap-3">
              <Image
                src={post.author.photo}
                alt={post.author.name}
                width={32}
                height={32}
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full object-cover"
              />
              <div>
                <p className="text-xs sm:text-sm font-semibold">{post.author.name}</p>
                <p className="text-[10px] sm:text-xs text-white/70">{formatDate(post.publishedAt)} · {post.readingTime} min read</p>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/blog/${post.slug}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 rounded-xl">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
          />
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-semibold text-brand-700 line-clamp-2 group-hover:underline underline-offset-4">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={post.author.photo}
              alt={post.author.name}
              width={28}
              height={28}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-semibold text-brand-700">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.author.qualification}</p>
            </div>
          </div>
          <time
            dateTime={post.publishedAt}
            className="mt-3 block text-xs text-muted-foreground"
          >
            {formatDate(post.publishedAt)} · {post.readingTime} min read
          </time>
        </div>
      </Link>
    </article>
  );
}
