"use client";

import { siteConfig } from "@/lib/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useRef } from "react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    // Construct WhatsApp message
    const whatsappMessage = `Hello! I'm interested in your dental services.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`;

    // WhatsApp API URL (94 is Sri Lanka's country code)
    const whatsappUrl = `https://wa.me/94702081832?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Clear form
    formRef.current?.reset();
  };

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
                <a
                  href="https://www.google.com/maps/dir//Glamour+Dental+Surgery,+730%2F01%2FA+Malabe+Rd,+Pannipitiya+10230/@6.8833513,79.9583435,14z/data=!4m18!1m8!3m7!1s0x640497ef8b0bea75:0xace12f7c55d3a219!2sGlamour+Dental+Surgery!8m2!3d6.8520251!4d79.968429!15sCjw3MzAvMDEvQSBNYWxhYmUgUmQsIFBhbm5pcGl0aXlhLCBXZXN0ZXJuIFByb3ZpbmNlLCBTcmkgTGFua2FaOyI5NzMwIDAxIGEgbWFsYWJlIHJkIHBhbm5pcGl0aXlhIHdlc3Rlcm4gcHJvdmluY2Ugc3JpIGxhbmthkgENZGVudGFsX2NsaW5pY5oBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsblQyMUdXRTB6YkdoalZWWmFWVEJPUmxsWFVsbGFiVFZ2Wlc1a1ZGVklZeEFC4AEA-gEECFkQLA!16s%2Fg%2F11zj6gmwpb!4m8!1m0!1m5!1m1!1s0x640497ef8b0bea75:0xace12f7c55d3a219!2m2!1d79.968429!2d6.8520251!3e9?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:text-brand-700 transition-colors font-medium"
                >
                  <address className="text-sm not-italic">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state},
                    <br />
                    {siteConfig.address.country}.
                  </address>
                </a>
              </div>
            </div>
          </Card>

          {/* Hours */}
          <Card>
            <div className="flex items-start gap-4">
              <Clock className="text-brand-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">Hours ( Appointments Only )</h3>
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
