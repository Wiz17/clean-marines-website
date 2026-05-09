export interface Author {
  name: string;
  photo: string;
  qualification: string;
}

export interface Post {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  content: string[];
  author: Author;
  publishedAt: string;
  readingTime: number;
  featured?: boolean;
  categories?: string[];
}

export interface Testimonial {
  title: string;
  quote: string;
  authorName: string;
}
