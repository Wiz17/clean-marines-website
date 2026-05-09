import type { Post, Testimonial } from '@/types';
import { slugify, estimateReadingTime } from '@/lib/utils';
import rawData from '@/public/blogData.json';

const JOHN_DOE_PHOTO = 'https://ui-avatars.com/api/?name=John+Doe&background=3d52a0&color=fff&bold=true&size=200';

const posts: Post[] = (rawData as Array<{
  image: string;
  name: string;
  content: string[];
  author: { photo: string; name: string; qualification: string };
}>).map((item, index) => ({
  slug: slugify(item.name),
  title: item.name,
  image: item.image,
  excerpt: item.content[0]?.slice(0, 180) + '…',
  content: item.content,
  author: { ...item.author, name: 'John Doe', photo: JOHN_DOE_PHOTO },
  publishedAt: new Date(2024, 0, index + 1).toISOString(),
  readingTime: estimateReadingTime(item.content),
  featured: index === 0,
  categories: ['Marine Life'],
}));

export function getAllPosts(): Post[] {
  return posts;
}

export function getFeaturedPost(): Post {
  return posts.find((p) => p.featured) ?? posts[0]!;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): Post[] {
  return posts.filter((p) => p.slug !== slug).slice(0, count);
}

export function getPaginatedPosts(page: number, perPage = 9): { posts: Post[]; total: number; totalPages: number } {
  const total = posts.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  return { posts: posts.slice(start, start + perPage), total, totalPages };
}

export const testimonials: Testimonial[] = [
  { title: 'Stayin Alive', quote: 'The cleanup initiative gave me hope. Every piece of plastic removed is a victory for our oceans and future generations.', authorName: 'Michael Scott' },
  { title: 'Still lots of work remained!', quote: 'Working with Clean Marines has been an incredible journey. The community passion for ocean health is truly inspiring.', authorName: 'Emillie Pots' },
  { title: 'On Mission', quote: 'What started as a weekend cleanup turned into a lifelong commitment. These oceans deserve our best effort.', authorName: 'Jonathan K.' },
  { title: 'Clean Planet Mission', quote: 'Clean Marines gave me the tools and community to make a real difference. The oceans are worth fighting for.', authorName: 'Sia Novan' },
];

export const carouselImages = [
  {
    src: 'https://assets.newatlas.com/dims4/default/0399deb/2147483647/strip/true/crop/4032x3024+0+0/resize/2880x2160!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fde%2F09%2Ff6a5b08d4d5f91594324bdf4270f%2F221110-the-ocean-cleanup-interceptor-007-ballona-creek-1.jpg',
    alt: 'Ocean Cleanup Interceptor in action at Ballona Creek',
  },
  {
    src: 'https://assets.theoceancleanup.com/app/uploads/2020/01/1911-The-Ocean-Cleanup-BoyaninAsia-DvdK-1111149-960x640.jpg',
    alt: 'The Ocean Cleanup team in Asia',
  },
  {
    src: 'https://assets.theoceancleanup.com/app/uploads/2019/10/TheOceanCleanup_October2nd_Press_Briefing_System001B-24.jpg',
    alt: 'Ocean cleanup system deployment at sea',
  },
  {
    src: 'https://metro.co.uk/wp-content/uploads/2019/05/SEI_69908392.jpg?quality=90&strip=all&zoom=1&resize=480%2C320',
    alt: 'Volunteers cleaning beach plastic waste',
  },
  {
    src: 'https://www.telegraph.co.uk/content/dam/business/spark/PandG-plastics/turtle-eating-plastic.jpg?imwidth=680',
    alt: 'Sea turtle swimming near plastic debris in ocean',
  },
];
