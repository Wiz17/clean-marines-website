import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/data';
import { WaveDivider } from '@/components/site/wave-divider';
import { BlogCard } from '@/components/site/blog-card';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <article>
      {/* Cover image */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] max-h-[520px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      {/* Title block */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-6 sm:pt-10 pb-3 sm:pb-4 text-center">
        <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-brand-700 leading-tight">
          {post.title}
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-muted-foreground">{post.excerpt}</p>

        {/* Wave separator */}
        <div className="my-6 sm:my-8">
          <svg
            className="w-full h-6 sm:h-auto"
            height="47"
            viewBox="0 0 575 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M575 26.049c0-.638-.589-1.113-1.213-.979a417.107 417.107 0 0 1-119.091 8.109c-14.321-1.099-28.576-2.954-42.858-4.813h-.001c-2.284-.297-4.57-.595-6.856-.89-16.567-2.133-33.182-4.108-49.915-4.731-50.775-1.891-101.072 8.692-150.557 19.428-7.111 1.543-15.008 2.77-22.177 2.194-7.16-.577-13.462-2.94-17.588-8.451-.5-.667-.936-1.34-1.393-2.044a67.078 67.078 0 0 0-.846-1.284c-.776-1.141-1.657-2.295-2.809-3.242-3.527-2.9-8.451-2.967-12.59-2.481-5.351.627-10.686 2.055-15.917 3.454-1.933.517-3.851 1.03-5.751 1.498-7.108 1.75-14.046 2.895-20.979 1.527-1.865-.368-3.533-.944-4.546-2.131-1.599-1.875-1.173-4.115.142-7.07.321-.72.682-1.456 1.058-2.216l.104-.212c.341-.688.691-1.396 1.02-2.107.722-1.564 1.376-3.219 1.638-4.896.511-3.28-.678-6.392-2.703-8.85-2.023-2.453-4.926-4.322-8.008-5.15C87.108-.917 80.75.546 75.006 2.118A262.929 262.929 0 0 0 .448 35.799.995.995 0 0 0 0 36.63c0 .796.888 1.272 1.553.835A260.931 260.931 0 0 1 75.535 4.047c5.77-1.58 11.638-2.875 17.11-1.404 2.681.721 5.226 2.36 6.983 4.491 1.754 2.129 2.674 4.682 2.27 7.27-.218 1.397-.776 2.85-1.477 4.365-.316.685-.654 1.368-.996 2.06l-.105.211a63.372 63.372 0 0 0-1.092 2.29c-1.323 2.972-2.285 6.31.163 9.18 1.485 1.742 3.757 2.416 5.681 2.796 7.381 1.457 14.675.218 21.844-1.547 1.987-.49 3.959-1.017 5.922-1.542 5.183-1.386 10.305-2.756 15.501-3.366 4.071-.477 8.243-.298 11.087 2.04.931.765 1.684 1.731 2.425 2.822.248.364.502.756.764 1.158.486.748.995 1.532 1.528 2.243 4.597 6.14 11.548 8.644 19.028 9.246 7.471.602 15.601-.679 22.762-2.233 49.517-10.743 99.574-21.264 150.059-19.383 16.634.62 33.17 2.583 49.734 4.716 2.281.294 4.564.591 6.847.889 14.279 1.858 28.592 3.721 42.971 4.824h.001a419.107 419.107 0 0 0 119.667-8.148.998.998 0 0 0 .788-.976z"
              fill="#074E92"
            />
          </svg>
        </div>

        {/* Author */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm italic text-muted-foreground">Written by</span>
          <Image
            src={post.author.photo}
            alt={post.author.name}
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <div className="text-left">
            <p className="font-semibold text-brand-700 text-sm">{post.author.name}</p>
            <p className="text-xs text-muted-foreground">{post.author.qualification}</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          {' · '}{post.readingTime} min read
        </p>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-12 sm:pb-16">
        {post.content.map((paragraph, index) => {
          if (index === 0) {
            return (
              <p key={index} className="mt-6 sm:mt-8 text-sm sm:text-base text-gray-700 leading-relaxed prose-drop-cap">
                {paragraph}
              </p>
            );
          }
          return (
            <p key={index} className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-ocean-50 py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-brand-700 mb-6 sm:mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to blog */}
      <div className="py-6 sm:py-8 text-center">
        <Button variant="outline" className="border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white" asChild>
          <Link href="/blog">← Back to Blog</Link>
        </Button>
      </div>
    </article>
  );
}
