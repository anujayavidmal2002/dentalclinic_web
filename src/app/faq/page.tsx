import type { Metadata } from "next";
import { faqItems } from "@/lib/data/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "FAQ - Glamour Dental | Common Questions",
  description: "Find answers to common questions about our dental services, treatments, and clinic.",
};

export default function FAQPage() {
  const categories = Array.from(new Set(faqItems.map((item) => item.category)));

  return (
    <div className="space-y-16 pt-8">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Got Questions?"
          description="Find answers to common questions about our dental services and treatments."
        />
      </section>

      {/* FAQ Items */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((category) => (
          <div key={category} className="mb-12">
            {category && (
              <h2 className="text-2xl font-bold mb-6 text-brand-600">{category}</h2>
            )}
            <div className="space-y-3">
              {faqItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <details
                    key={item.id}
                    className="bg-surface-white border border-surface-200 rounded-lg p-6 cursor-pointer hover:border-brand-300 transition-colors"
                  >
                    <summary className="font-semibold text-lg text-surface-900 hover:text-brand-600">
                      {item.question}
                    </summary>
                    <p className="text-surface-700 mt-4 leading-relaxed">{item.answer}</p>
                  </details>
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
