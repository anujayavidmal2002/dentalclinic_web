"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CheckCircle } from "lucide-react";

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi Glamour Dental! I'd like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred Date: ${formData.date}\nNotes: ${formData.message}`;
    const whatsappUrl = `https://wa.me/94702081832?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
    setSubmitted(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", phone: "", service: "", date: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="space-y-16 pt-8">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Book Your Appointment"
          subtitle="Schedule Your Visit"
          description="Fill out the form below and we'll connect with you via WhatsApp to confirm your appointment."
        />
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-surface-600">
                    WhatsApp is opening now. You can also chat with us directly in WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-surface-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-surface-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600"
                      placeholder="+94 7X XXX XXXX"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-surface-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-surface-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-surface-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600"
                      placeholder="Any specific concerns or questions?"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 rounded-lg transition-colors text-lg"
                  >
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <Card>
              <h3 className="font-bold text-lg mb-3">Why Book With Us?</h3>
              <ul className="space-y-2 text-sm text-surface-600">
                <li>✓ Fast and easy WhatsApp booking</li>
                <li>✓ Expert dental care</li>
                <li>✓ State-of-the-art equipment</li>
                <li>✓ Flexible scheduling</li>
                <li>✓ Gentle and caring team</li>
              </ul>
            </Card>

            <Card>
              <h3 className="font-bold text-lg mb-3">Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-brand-600">Hours</p>
                  <p className="text-surface-600">Monday - Friday: 9AM - 7PM</p>
                  <p className="text-surface-600">Saturday: 10AM - 5PM</p>
                  <p className="text-surface-600">Sunday: 10AM - 3PM</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-600">Location</p>
                  <p className="text-surface-600">{siteConfig.address.street}</p>
                  <p className="text-surface-600">{siteConfig.address.city}, {siteConfig.address.state}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
