import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data/blog";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils/formatDate";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="space-y-12 pt-8">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="flex items-center gap-2 text-brand-600 hover:text-brand-700 mb-8">
          <ArrowLeft size={20} />
          Back to Blog
        </Link>
      </div>

      {/* Hero */}
      <section className="bg-gradient-brand text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-5xl font-heading font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-4 text-blue-100">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-96 rounded-lg overflow-hidden bg-surface-200">
          <Image
            src="https://picsum.photos/800/600?random=detail"
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose max-w-none">
          <div
            className="text-lg text-surface-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Tags */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </section>

      {/* Author Bio */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-surface-50 rounded-lg p-8">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
            {post.author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">{post.author}</h3>
            <p className="text-surface-600">
              Expert dental professional with years of experience in providing quality dental care.
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-surface-200 pt-12">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((related, idx) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group"
              >
                <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 bg-surface-100 group-hover:opacity-90 transition-opacity">
                  <Image
                    src={`https://picsum.photos/500/300?random=related${idx}`}
                    alt={related.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold group-hover:text-brand-600 transition-colors mb-2">
                  {related.title}
                </h3>
                <p className="text-sm text-surface-600">{formatDate(related.publishedAt)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-brand text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Improve Your Smile?</h2>
          <p className="text-blue-100 mb-8">
            Schedule a consultation with our dental experts
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-white text-brand-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            image: post.coverImage,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
            author: {
              "@type": "Person",
              name: post.author,
            },
            description: post.excerpt,
            publisher: {
              "@type": "Organization",
              name: "Glamour Dental",
            },
          }),
        }}
      />
    </article>
  );
}
