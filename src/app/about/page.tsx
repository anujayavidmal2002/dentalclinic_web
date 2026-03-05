import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Glamour Dental - Our Story & Team",
  description: "Learn about Glamour Dental, our mission, and meet our team of expert dentists.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pt-8">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Glamour Dental"
          subtitle="Our Story"
          description="Committed to creating beautiful, healthy smiles through expert care and innovation."
        />
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-2xl font-bold mb-4 text-brand-600">Our Mission</h3>
            <p className="text-surface-700 leading-relaxed">
              To provide exceptional dental care that combines cutting-edge technology with
              compassionate patient care. We believe that everyone deserves access to high-quality
              dentistry in a comfortable, welcoming environment.
            </p>
          </Card>

          <Card>
            <h3 className="text-2xl font-bold mb-4 text-brand-600">Our Values</h3>
            <ul className="space-y-2 text-surface-700">
              <li>✓ Patient-centered care</li>
              <li>✓ Commitment to excellence</li>
              <li>✓ Continuous learning and innovation</li>
              <li>✓ Ethical practice and integrity</li>
              <li>✓ Community involvement</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Glamour Dental?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Safety First",
              description: "Strict sterilization protocols and safety standards",
            },
            {
              title: "Advanced Technology",
              description: "State-of-the-art equipment for precise diagnostics and treatment",
            },
            {
              title: "Patient Comfort",
              description: "Welcoming environment and compassionate approach to dental care",
            },
            {
              title: "Flexible Scheduling",
              description: "Evening and weekend appointments available for your convenience",
            },
            {
              title: "Comprehensive Services",
              description: "Full range of dental services from preventive to cosmetic to surgical",
            },
            {
              title: "Competitive Pricing",
              description: "Transparent pricing and flexible payment options for all treatments",
            },
          ].map((item, idx) => (
            <Card key={idx} hover>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-surface-600 text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>



      {/* CTA */}
      <section className="bg-gradient-brand text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Glamour Dental?</h2>
          <p className="text-blue-100 mb-8">
            Schedule your first appointment with our expert team today
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
            "@type": "MedicalBusiness",
            name: "Glamour Dental",
            url: "https://glamourdental.com",
            description: "Premium dental clinic providing comprehensive dental services",
            medicalSpecialty: "Dentistry",
          }),
        }}
      />
    </div>
  );
}
