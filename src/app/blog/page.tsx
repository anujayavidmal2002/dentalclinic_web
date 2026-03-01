import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils/formatDate";

export const metadata: Metadata = {
  title: "Dental Health Blog - Glamour Dental | Expert Tips & Guides",
  description:
    "Read our latest articles on dental health, tips, and cosmetic dentistry guides.",
};

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const other = blogPosts.filter((p) => !p.featured);
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <div className="space-y-16 pt-8">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Dental Health Blog"
          subtitle="Tips & Guides"
          description="Expert advice on oral health, cosmetic dentistry, and patient care."
        />
      </section>

      {/* Featured Post */}
      {featured.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Featured Article</h2>
          <Card hover className="md:grid md:grid-cols-2 gap-8">
            <div className="relative w-full h-64 md:h-auto rounded-lg overflow-hidden mb-4 md:mb-0 bg-surface-200">
              <Image
                src="https://picsum.photos/600/400?random=featured"
                alt={featured[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <Badge variant="primary" className="w-fit mb-3">
                {featured[0].category}
              </Badge>
              <Link href={`/blog/${featured[0].slug}`}>
                <h3 className="text-3xl font-bold hover:text-brand-600 transition-colors mb-3">
                  {featured[0].title}
                </h3>
              </Link>
              <p className="text-surface-600 mb-4">{featured[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-surface-500 mb-6">
                <span>By {featured[0].author}</span>
                <span>{formatDate(featured[0].publishedAt)}</span>
                <span>{featured[0].readingTime} min read</span>
              </div>
              <Link
                href={`/blog/${featured[0].slug}`}
                className="text-brand-600 font-semibold hover:text-brand-700"
              >
                Read Article →
              </Link>
            </div>
          </Card>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[...featured.slice(1), ...other].map((post, idx) => (
            <Card key={post.slug} hover>
              <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 bg-surface-200">
                <Image
                  src={`https://picsum.photos/500/300?random=${idx}`}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <Badge variant="secondary" className="mb-3">
                {post.category}
              </Badge>

              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-lg font-bold hover:text-brand-600 transition-colors mb-2">
                  {post.title}
                </h3>
              </Link>

              <p className="text-surface-600 text-sm mb-4">{post.excerpt}</p>

              <div className="flex items-center gap-3 text-xs text-surface-500 mb-4">
                <span>{formatDate(post.publishedAt)}</span>
                <span>•</span>
                <span>{post.readingTime} min</span>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="text-brand-600 font-semibold text-sm hover:text-brand-700"
              >
                Read More →
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold mb-4">Browse by Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Badge key={cat} variant="secondary" className="cursor-pointer hover:bg-surface-200">
              {cat}
            </Badge>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-brand text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Have Questions About Your Smile?</h2>
          <p className="text-blue-100 mb-8">
            Schedule a consultation with our experts to discuss your dental health
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-white text-brand-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
}
