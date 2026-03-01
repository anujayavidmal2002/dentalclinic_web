import type { Metadata } from "next";
import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Testimonials - Glamour Dental | Real Reviews",
  description: "Read what our patients say about their experiences at Glamour Dental.",
};

export default function TestimonialsPage() {
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <div className="space-y-16 pt-8">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Patient Testimonials"
          subtitle="What Our Patients Say"
          description="Real experiences from our valued patients."
        />
      </section>

      {/* Rating Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center py-8">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={32}
                className={i < Math.round(avgRating) ? "fill-accent-500 text-accent-500" : "text-surface-300"}
              />
            ))}
          </div>
          <p className="text-4xl font-bold text-brand-600 mb-2">
            {avgRating.toFixed(1)}/5.0
          </p>
          <p className="text-surface-600">Based on {testimonials.length} patient reviews</p>
        </Card>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} hover>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < testimonial.rating
                        ? "fill-accent-500 text-accent-500"
                        : "text-surface-300"
                    }
                  />
                ))}
              </div>

              <p className="text-surface-700 italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-surface-200 pt-4">
                <p className="font-semibold text-surface-900">
                  {testimonial.patientName}
                </p>
                <p className="text-sm text-surface-600">
                  Treatment: {testimonial.treatment}
                </p>
                <p className="text-xs text-surface-500 mt-1">
                  {new Date(testimonial.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
                {testimonial.source && (
                  <p className="text-xs text-brand-600 mt-1 capitalize">
                    From {testimonial.source}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-brand text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Happy Patients</h2>
          <p className="text-blue-100 mb-8">
            Experience the Glamour Dental difference today
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-white text-brand-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Book Your Appointment
          </a>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            ratingValue: avgRating.toFixed(1),
            bestRating: "5",
            worstRating: "1",
            ratingCount: testimonials.length,
          }),
        }}
      />
    </div>
  );
}
