import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { services } from "@/lib/data/services";
import { doctors } from "@/lib/data/doctors";
import { testimonials } from "@/lib/data/testimonials";
import { blogPosts } from "@/lib/data/blog";
import {
  Smile,
  Award,
  Heart,
  Zap,
  Users,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";
import { formatDate } from "@/lib/utils/formatDate";

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);
  const latestBlogPosts = blogPosts.slice(0, 3);
  const featuredDoctors = doctors.slice(0, 2);

  return (
    <div className="space-y-20">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero/dental-chair.jpg')`,
          }}
        />
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-brand opacity-30" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Badge variant="secondary" className="mb-6 inline-block">
            ✨ Premium Dental Care in Colombo
          </Badge>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Your Perfect Smile Starts Here
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience world-class dental care with our expert team, cutting-edge technology,
            and personalized treatment plans designed just for you.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Button variant="primary" size="lg" asLink href="/book-appointment">
              Book Your Appointment
            </Button>
            <Button variant="secondary" size="lg" asLink href="/services">
              Explore Services
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-white text-sm">
            <div className="flex items-center gap-2">
              <Star className="fill-accent-500 text-accent-500" size={20} />
              <span>4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span>5000+ Happy Patients</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={20} />
              <span>15+ Years Experience</span>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-surface-50 to-transparent" />
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-brand-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <p className="text-blue-200">Happy Patients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-blue-200">Years in Practice</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12</div>
              <p className="text-blue-200">Specialties</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <p className="text-blue-200">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Why Choose Glamour Dental?"
          subtitle="What Sets Us Apart"
          description="Excellence in every aspect of dental care"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: Award,
              title: "Expert Team",
              description: "Board-certified dentists with continuous education",
            },
            {
              icon: Zap,
              title: "Advanced Technology",
              description: "Latest equipment for precise diagnosis and treatment",
            },
            {
              icon: Heart,
              title: "Patient Comfort",
              description: "Gentle care in a welcoming, anxiety-free environment",
            },
            {
              icon: Shield,
              title: "Safety First",
              description: "Strict sterilization protocols and safety standards",
            },
            {
              icon: Smile,
              title: "Personalized Care",
              description: "Custom treatment plans tailored to your needs",
            },
            {
              icon: Users,
              title: "Family Friendly",
              description: "Services for all ages from kids to seniors",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} hover>
                <Icon size={40} className="text-brand-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-surface-600">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ===== FEATURED SERVICES ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading title="Our Services" subtitle="Comprehensive Dental Care" />
          <Link href="/services" className="text-brand-600 font-semibold hover:text-brand-700">
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card hover className="h-full flex flex-col">
                <div className="relative w-full h-32 rounded-lg overflow-hidden mb-4 bg-surface-200">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                <p className="text-surface-600 text-sm mb-4 flex-grow">{service.shortDescription}</p>
                <span className="text-brand-600 font-semibold text-sm">Learn more →</span>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== FEATURED DOCTORS ===== */}
      <section className="bg-surface-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Meet Our Experts"
            subtitle="Our Dentists"
            description="Experienced professionals dedicated to your smile"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {featuredDoctors.map((doctor) => (
              <Card key={doctor.slug} hover>
                <div className="bg-gradient-brand rounded-lg h-48 flex items-center justify-center mb-6">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-2">
                      {doctor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <p className="text-blue-100">{doctor.specialty}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">
                  {doctor.title} {doctor.name}
                </h3>
                <p className="text-brand-600 font-semibold mb-3">{doctor.specialty}</p>
                <p className="text-surface-600 text-sm mb-4">{doctor.bio}</p>
                <p className="text-xs text-surface-500">
                  <strong>{doctor.experience}+ years</strong> • {doctor.credentials.join(", ")}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asLink href="/doctors" variant="outline" size="lg">
              View All Doctors
            </Button>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            title="What Patients Say"
            subtitle="Testimonials"
            description="Real experiences from our valued patients"
          />
          <Link href="/testimonials" className="text-brand-600 font-semibold hover:text-brand-700">
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredTestimonials.map((testimonial) => (
            <Card key={testimonial.id} hover>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < testimonial.rating
                        ? "fill-accent-500 text-accent-500"
                        : "text-surface-300"
                    }
                  />
                ))}
              </div>
              <p className="text-surface-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="border-t border-surface-200 pt-4">
                <p className="font-semibold text-surface-900">{testimonial.patientName}</p>
                <p className="text-xs text-surface-600">{testimonial.treatment}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== LATEST BLOG ===== */}
      <section className="bg-surface-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <SectionHeading
              title="Health Tips & Guides"
              subtitle="From Our Blog"
              description="Expert advice on oral health and dental care"
            />
            <Link href="/blog" className="text-brand-600 font-semibold hover:text-brand-700">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestBlogPosts.map((post, idx) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card hover className="h-full flex flex-col">
                  <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 bg-surface-200">
                    <Image
                      src={`https://picsum.photos/500/300?random=${idx}`}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <Badge variant="secondary" className="w-fit mb-3">
                    {post.category}
                  </Badge>

                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>

                  <p className="text-surface-600 text-sm mb-4 line-clamp-2 grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-surface-500">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>•</span>
                    <span>{post.readingTime} min</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="bg-gradient-brand text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Ready for Your Best Smile?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our expert dentists today and discover the difference
            professional dental care can make
          </p>
          <Button variant="primary" size="lg" asLink href="/book-appointment">
            Book Your Appointment Now
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Real Results"
          subtitle="Before & After"
          description="See the transformations we've created for our patients"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {[...Array(4)].map((_, i) => (
            <Link key={i} href="/gallery">
              <Card hover>
                <div className="relative w-full h-64 rounded-lg overflow-hidden bg-surface-200">
                  <Image
                    src={`https://picsum.photos/700/500?random=${i}`}
                    alt={`Before & After Gallery Image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asLink href="/gallery" variant="outline" size="lg">
            View Full Gallery
          </Button>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-brand-50 py-20 border-t border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-surface-900 mb-4">
            Have Questions? We're Here to Help
          </h2>
          <p className="text-surface-600 mb-8 max-w-2xl mx-auto">
            Contact us anytime to discuss your dental needs or schedule an appointment
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asLink href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
            <Button asLink href="/faq" variant="ghost" size="lg">
              View FAQ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
