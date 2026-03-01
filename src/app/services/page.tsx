import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Smile, Sparkles, Zap, Gem, Activity, Shield, Eye, Heart, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Services - Glamour Dental | Expert Treatments",
  description:
    "Explore our comprehensive dental services including implants, whitening, cosmetic dentistry, and more.",
  keywords: [
    "dental services",
    "dental treatments",
    "teeth whitening",
    "dental implants",
    "orthodontics",
  ],
};

const iconMap: Record<string, any> = {
  Smile,
  Sparkles,
  Zap,
  Gem,
  Activity,
  Shield,
  Eye,
  Heart,
  AlertCircle,
};

export default function ServicesPage() {

  return (
    <div className="space-y-20 pt-8">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Dental Services"
          subtitle="Comprehensive Care"
          description="From general dentistry to advanced cosmetic procedures, we offer a full range of dental services to meet all your needs."
        />
      </section>

      {/* All Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="overflow-hidden bg-surface-white rounded-lg border border-surface-200 hover:border-brand-300 hover:shadow-md transition-all"
            >
              <div className="relative w-full h-48 bg-surface-200">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col h-full">
                <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                <p className="text-sm text-surface-600 mb-4 flex-grow">{service.shortDescription}</p>
                <span className="text-brand-600 font-semibold text-sm">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-brand text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-blue-100 mb-8">
            Schedule a consultation with our expert dentists today
          </p>
          <Button asLink href="/book-appointment" variant="primary" size="lg">
            Book Your Appointment
          </Button>
        </div>
      </section>
    </div>
  );
}
