import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { services } from "@/lib/data/services";

export function Footer() {
  const topServices = services.slice(0, 6);

  return (
    <footer className="bg-brand-900 text-surface-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Clinic Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg mb-6">
              {siteConfig.name}
            </h3>
            <div className="space-y-3 text-sm text-surface-200">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/dir//Glamour+Dental+Surgery,+730%2F01%2FA+Malabe+Rd,+Pannipitiya+10230/@6.8833513,79.9583435,14z/data=!4m18!1m8!3m7!1s0x640497ef8b0bea75:0xace12f7c55d3a219!2sGlamour+Dental+Surgery!8m2!3d6.8520251!4d79.968429!15sCjw3MzAvMDEvQSBNYWxhYmUgUmQsIFBhbm5pcGl0aXlhLCBXZXN0ZXJuIFByb3ZpbmNlLCBTcmkgTGFua2FaOyI5NzMwIDAxIGEgbWFsYWJlIHJkIHBhbm5pcGl0aXlhIHdlc3Rlcm4gcHJvdmluY2Ugc3JpIGxhbmthkgENZGVudGFsX2NsaW5pY5oBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsblQyMUdXRTB6YkdoalZWWmFWVEJPUmxsWFVsbGFiVFZ2Wlc1a1ZGVklZeEFC4AEA-gEECFkQLA!16s%2Fg%2F11zj6gmwpb!4m8!1m0!1m5!1m1!1s0x640497ef8b0bea75:0xace12f7c55d3a219!2m2!1d79.968429!2d6.8520251!3e9?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-400 transition-colors"
                >
                  {siteConfig.address.street}, {siteConfig.address.city},
                  <br />
                  {siteConfig.address.state} ,
                  {siteConfig.address.country}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-accent-400 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg mb-6">Hours ( Appointments Only )</h3>
            <div className="space-y-2 text-sm text-surface-200">
              {siteConfig.hours.map((hour, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Clock size={20} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-surface-100">
                      {hour.days}
                    </p>
                    <p>
                      {hour.open} - {hour.close}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-2 text-sm text-surface-200">
              {[
                { label: "About Us", href: "/about" },
                { label: "Book Appointment", href: "/book-appointment" },
                //{ label: "Gallery", href: "/gallery" },
                //{ label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Preview */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-2 text-sm text-surface-200">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <span className="text-surface-200">
                    {service.name}
                  </span>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent-400 transition-colors text-accent-400 font-semibold"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-4">
          <p className="text-sm text-surface-300">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {siteConfig.social.facebook && (
              <div
                className="text-surface-white"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </div>
            )}
            {siteConfig.social.instagram && (
              <div
                className="text-surface-white"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </div>
            )}
            {siteConfig.social.twitter && (
              <div
                className="text-surface-white"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </div>
            )}
            {siteConfig.social.linkedin && (
              <div
                className="text-surface-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
