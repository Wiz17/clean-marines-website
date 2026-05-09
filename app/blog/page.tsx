import { getAllPosts, getFeaturedPost } from '@/lib/data';
import { BlogCard } from '@/components/site/blog-card';

export const metadata = {
  title: 'Blog',
  description: 'Explore our latest articles on ocean conservation, marine life, and environmental science.',
};

export default function BlogPage() {
  const featured = getFeaturedPost();
  const allPosts = getAllPosts();
  const gridPosts = allPosts.filter((p) => p.slug !== featured.slug);

  return (
    <div className="pt-20 pb-12 sm:pt-24 sm:pb-16">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8 sm:mb-12 text-center">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-700">Blogs</h1>
        <p className="mt-2 sm:mt-3 text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto">
          Stories, science, and solutions from the front lines of ocean conservation.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-8 sm:space-y-10">
        {/* Featured */}
        <BlogCard post={featured} variant="featured" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {gridPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
