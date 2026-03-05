import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Glamour Dental",
  tagline: "Your Perfect Smile Awaits",
  description:
    "Premium dental care with state-of-the-art technology. From cosmetic dentistry to dental implants, we provide exceptional dental services in a comfortable and friendly environment.",
  phone: "+94 70 208 18 32",
  whatsapp: "+94 070 208 18 32", // E.164 format without the + sign for wa.me
  email: "hello@glamourdental.lk",
  address: {
    street: "730/01/A",
    city: "Malabe Rd",
    state: "Kottawa",
    country: "Sri Lanka",
  },
  coordinates: {
    lat: 6.8520251,
    lng: 79.968429,
  },
  hours: [
    {
      days: "Monday – Friday",
      open: "5:00 PM",
      close: "9:00 PM",
    },
    {
      days: "Saturday",
      open: "03:00 PM",
      close: "07:00 PM",
    },
    {
      days: "Sunday",
      open: "02:00 PM",
      close: "09:00 PM",
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
    "https://www.google.com/maps?q=Glamour+Dental+Surgery&output=embed",
  googleMapsPlaceId: "ChIJ_dummy_place_id_glamour_dental",
};
