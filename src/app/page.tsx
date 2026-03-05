import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";
// import { blogPosts } from "@/lib/data/blog";
import { siteConfig } from "@/lib/data/site";
import {
  Award,
  Users,
  Star,
  ArrowRight,
  Phone,
} from "lucide-react";
// import { formatDate } from "@/lib/utils/formatDate";

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);
  // const latestBlogPosts = blogPosts.slice(0, 3);

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
            <Button variant="secondary" size="lg" asLink href={`tel:${siteConfig.phone}`}>
              <Phone className="mr-2" size={20} />
              Call Us
            </Button>
            <Button variant="primary" size="lg" asLink href="/services">
              Explore Services
            </Button>
          </div>


        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-surface-50 to-transparent" />
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
              title: "Advanced Technology",
              description: "Latest equipment for precise diagnosis and treatment",
              number: "01",
            },
            {
              title: "Patient Comfort",
              description: "Gentle care in a welcoming, anxiety-free environment",
              number: "02",
            },
            {
              title: "Safety First",
              description: "Strict sterilization protocols and safety standards",
              number: "03",
            },
            {
              title: "Personalized Care",
              description: "Custom treatment plans tailored to your needs",
              number: "04",
            },
            {
              title: "Family Friendly",
              description: "Services for all ages from kids to seniors",
              number: "05",
            },
            {
              title: "Time Flexible",
              description: "Convenient appointment times to fit your busy schedule",
              number: "06",
            },
          ].map((item) => {
            return (
              <Card key={item.title} hover className="relative overflow-hidden border-l-4 border-l-brand-600">
                <div className="absolute top-0 right-0 text-6xl font-bold text-brand-50 opacity-20">
                  {item.number}
                </div>
                <div className="relative z-10">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-surface-600">{item.description}</p>
                </div>
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
              </Card>
            </Link>
          ))}
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
      {/* COMMENTED OUT - Blog section disabled
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
      */}

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
            <Button asLink href={`tel:${siteConfig.phone}`} variant="secondary" size="lg">
              <Phone className="mr-2" size={20} />
              Call Us
            </Button>
            <Button asLink href="/contact" variant="ghost" size="lg">
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
