import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface Blog7Props {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  posts: Post[];
}

const Blog7 = ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "https://shadcnblocks.com",
  posts = [
    {
      id: "post-1",
      title: "Getting Started with shadcn/ui Components",
      summary:
        "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "/images/block/placeholder-dark-1.svg",
    },
    {
      id: "post-2",
      title: "Building Accessible Web Applications",
      summary:
        "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "/images/block/placeholder-dark-1.svg",
    },
    {
      id: "post-3",
      title: "Modern Design Systems with Tailwind CSS",
      summary:
        "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "/images/block/placeholder-dark-1.svg",
    },
  ],
}: Blog7Props) => {
  return (
    <section
      className="py-20 px-4"
      aria-label="ブログ記事"
      id="blog"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            {tagline}
          </Badge>
          <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl max-w-3xl mx-auto">
            {heading}
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            {description}
          </p>
          <Button variant="link" className="mt-6" asChild>
            <a 
              href={buttonUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-labelledby={`heading-${post.id}`}
                >
                  <span className="sr-only">記事を読む</span>
                </a>
              </div>
              <CardHeader>
                <h3 
                  id={`heading-${post.id}`}
                  className="text-lg font-semibold md:text-xl"
                >
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="px-0">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-foreground"
                  >
                    記事を読む
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog7 };