import type { Metadata } from "next";
import { doctors } from "@/lib/data/doctors";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Our Dentists - Glamour Dental | Meet Our Team",
  description: "Meet our expert dental team. Board-certified dentists with years of experience.",
};

export default function DoctorsPage() {
  return (
    <div className="space-y-16 pt-8">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Meet Our Expert Team"
          subtitle="Our Dentists"
          description="Experienced, passionate professionals dedicated to your perfect smile."
        />
      </section>

      {/* Doctors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.slug} hover>
              <div className="mb-6 h-64 bg-gradient-to-br from-brand-100 to-brand-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-brand-600 mb-2">
                    {doctor.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <p className="text-brand-600 font-semibold">{doctor.specialty}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-1">
                {doctor.title} {doctor.name}
              </h3>

              <p className="text-brand-600 font-semibold mb-4">{doctor.specialty}</p>

              <div className="space-y-3 mb-6 text-sm">
                <div>
                  <p className="font-semibold text-surface-900">Credentials</p>
                  <p className="text-surface-600">{doctor.credentials.join(", ")}</p>
                </div>

                <div>
                  <p className="font-semibold text-surface-900">Experience</p>
                  <p className="text-surface-600">{doctor.experience}+ years in dentistry</p>
                </div>

                <div>
                  <p className="font-semibold text-surface-900">Languages</p>
                  <p className="text-surface-600">{doctor.languages.join(", ")}</p>
                </div>

                <div>
                  <p className="font-semibold text-surface-900">Education</p>
                  {doctor.education.map((edu, idx) => (
                    <div key={idx} className="text-surface-600">
                      <p>{edu.degree}</p>
                      <p className="text-xs text-surface-500">
                        {edu.institution} ({edu.year})
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-surface-700 leading-relaxed">{doctor.bio}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-brand text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Schedule Your Consultation</h2>
          <p className="text-blue-100 mb-8">
            Book an appointment with one of our expert dentists today
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-white text-brand-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
}
