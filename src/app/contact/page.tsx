import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Glamour Dental - Get in Touch",
  description: "Contact Glamour Dental for appointments and inquiries. Visit us in Colombo or call us today.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pt-8">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Contact Us"
          description="Have questions? We're here to help! Reach out to us through any of these channels."
        />
      </section>

      {/* Contact Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <Card>
            <div className="flex items-start gap-4">
              <Phone className="text-brand-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">Phone</h3>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-brand-600 hover:text-brand-700 font-medium"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </Card>

          {/* Email */}
          <Card>
            <div className="flex items-start gap-4">
              <Mail className="text-brand-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand-600 hover:text-brand-700 font-medium"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </Card>

          {/* Address */}
          <Card>
            <div className="flex items-start gap-4">
              <MapPin className="text-brand-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">Address</h3>
                <address className="text-sm text-surface-600 not-italic">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}
                  <br />
                  {siteConfig.address.zip}, {siteConfig.address.country}
                </address>
              </div>
            </div>
          </Card>

          {/* Hours */}
          <Card>
            <div className="flex items-start gap-4">
              <Clock className="text-brand-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">Hours</h3>
                <div className="text-sm text-surface-600 space-y-1">
                  {siteConfig.hours.map((hour, idx) => (
                    <div key={idx}>
                      <p className="font-semibold text-surface-900">{hour.days}</p>
                      <p>
                        {hour.open} - {hour.close}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Map & Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-lg overflow-hidden h-96 lg:h-full min-h-96">
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-surface-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-surface-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-surface-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-surface-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: siteConfig.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address.street,
              addressLocality: siteConfig.address.city,
              postalCode: siteConfig.address.zip,
              addressCountry: siteConfig.address.country,
            },
            telephone: siteConfig.phone,
            url: "https://glamourdental.com",
          }),
        }}
      />
    </div>
  );
}
