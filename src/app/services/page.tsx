import type { Metadata } from "next";
import Link from "next/link";
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
  const featuredServices = services.filter((s) => s.featured);
  const otherServices = services.filter((s) => !s.featured);

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

      {/* Featured Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Featured Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredServices.map((service) => {
            const Icon = iconMap[service.icon] || Smile;
            return (
              <Card key={service.slug} hover className="flex flex-col">
                <div className="mb-4 p-3 bg-brand-100 rounded-lg w-fit">
                  <Icon size={28} className="text-brand-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                <p className="text-surface-600 text-sm mb-4 flex-grow">
                  {service.shortDescription}
                </p>
                <Button
                  asLink
                  href={`/services/${service.slug}`}
                  variant="ghost"
                  size="sm"
                  className="self-start"
                >
                  Learn More →
                </Button>
              </Card>
            );
          })}
        </div>
      </section>

      {/* All Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">All Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="p-4 bg-surface-white rounded-lg border border-surface-200 hover:border-brand-300 hover:bg-brand-50 transition-all"
            >
              <h3 className="font-semibold text-lg mb-1">{service.name}</h3>
              <p className="text-sm text-surface-600">{service.shortDescription}</p>
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
