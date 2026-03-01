import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Glamour Dental",
  tagline: "Your Perfect Smile Awaits",
  description:
    "Premium dental care with state-of-the-art technology. From cosmetic dentistry to dental implants, we provide exceptional dental services in a comfortable and friendly environment.",
  phone: "+94-777-1234-567",
  whatsapp: "94771234567", // E.164 format without the + sign for wa.me
  email: "hello@glamourdental.lk",
  address: {
    street: "123 Smile Street",
    city: "Colombo",
    state: "Western",
    zip: "00100",
    country: "Sri Lanka",
  },
  coordinates: {
    lat: 6.9271,
    lng: 80.7789,
  },
  hours: [
    {
      days: "Monday – Friday",
      open: "9:00 AM",
      close: "7:00 PM",
    },
    {
      days: "Saturday",
      open: "10:00 AM",
      close: "5:00 PM",
    },
    {
      days: "Sunday",
      open: "10:00 AM",
      close: "3:00 PM",
    },
  ],
  social: {
    facebook: "https://facebook.com/glamourdental",
    instagram: "https://instagram.com/glamourdental",
    twitter: "https://twitter.com/glamourdental",
    youtube: "https://youtube.com/@glamourdental",
    linkedin: "https://linkedin.com/company/glamourdental",
  },
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7028644099453!2d80.7765!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259c5d5d5d5d5%3A0x1234567890123456!2sGlamour%20Dental!5e0!3m2!1sen!2slk!4v1234567890",
  googleMapsPlaceId: "ChIJ_dummy_place_id_glamour_dental",
};
