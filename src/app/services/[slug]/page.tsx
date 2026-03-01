import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle } from "lucide-react";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.name,
      description: service.metaDescription,
      type: "article",
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <article className="space-y-12 pt-8">
      {/* Hero */}
      <section className="bg-gradient-brand text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4">
            Dental Service
          </Badge>
          <h1 className="text-5xl font-heading font-bold mb-4">{service.name}</h1>
          <p className="text-xl text-blue-100">{service.shortDescription}</p>
        </div>
      </section>

      {/* Service Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-96 rounded-lg overflow-hidden mb-12 bg-surface-200">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Description */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About This Service</h2>
          <p className="text-lg text-surface-700 leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle size={24} className="text-brand-600 flex-shrink-0 mt-0.5" />
                <p className="text-surface-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        {service.faq && service.faq.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Common Questions</h2>
            <div className="space-y-4">
              {service.faq.map((item) => (
                <details
                  key={item.id}
                  className="bg-surface-50 rounded-lg p-4 cursor-pointer"
                >
                  <summary className="font-semibold text-surface-900">
                    {item.question}
                  </summary>
                  <p className="text-surface-700 mt-3">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-brand-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Interested in {service.name}?</h2>
          <p className="text-surface-600 mb-6">
            Schedule a consultation with our experts today
          </p>
          <Button asLink href="/book-appointment" size="lg">
            Book Your Appointment
          </Button>
        </div>
      </section>

      {/* Related Services */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">Related Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {services
            .filter((s) => s.slug !== service.slug)
            .slice(0, 3)
            .map((related) => (
              <a
                key={related.slug}
                href={`/services/${related.slug}`}
                className="p-4 bg-surface-white rounded-lg border border-surface-200 hover:border-brand-300 transition-colors"
              >
                <h3 className="font-semibold mb-1">{related.name}</h3>
                <p className="text-sm text-surface-600">{related.shortDescription}</p>
              </a>
            ))}
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: service.name,
            description: service.fullDescription,
            provider: {
              "@type": "MedicalBusiness",
              name: "Glamour Dental",
              url: "https://glamourdental.com",
            },
          }),
        }}
      />
    </article>
  );
}
