// ─── Site Config ─────────────────────────────────────────────────
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string; // E.164 format e.g. "15551234567"
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: {
    days: string; // e.g. "Monday – Friday"
    open: string; // e.g. "8:00 AM"
    close: string; // e.g. "6:00 PM"
  }[];
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
  googleMapsEmbedUrl: string;
  googleMapsPlaceId: string;
}

// ─── Service ─────────────────────────────────────────────────────
export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string; // 1–2 sentences for cards
  fullDescription: string; // rich paragraph for detail page
  benefits: string[]; // bullet list
  icon: string; // Lucide icon name
  image: string; // path in /public/images/services/
  metaTitle: string;
  metaDescription: string; // max 160 chars
  keywords: string[];
  faq?: FaqItem[]; // service-specific FAQs
  featured: boolean;
  order: number;
}

// ─── Doctor ──────────────────────────────────────────────────────
export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string; // e.g. "Dr."
  credentials: string[]; // e.g. ["BDS", "MDS", "FICOI"]
  specialty: string;
  bio: string;
  education: {
    degree: string;
    institution: string;
    year: number;
  }[];
  experience: number; // years
  photo: string;
  social?: {
    linkedin?: string;
  };
  languages: string[];
}

// ─── Testimonial ─────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  patientName: string;
  rating: number; // 1–5
  quote: string;
  treatment: string; // e.g. "Dental Implants"
  date: string; // ISO date string
  avatar?: string; // optional photo
  source?: "google" | "facebook" | "website";
}

// ─── Gallery Item ────────────────────────────────────────────────
export type GalleryCategory = "before-after" | "clinic" | "team" | "procedure";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  alt: string; // SEO-optimized alt text
  caption?: string;
  beforeImage?: string; // for before-after type
  afterImage?: string; // for before-after type
  image?: string; // for single-image items
}

// ─── Blog Post ───────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string; // max 200 chars
  content: string; // HTML string or Markdown
  author: string; // doctor name
  authorId: string; // links to Doctor slug
  publishedAt: string; // ISO date
  updatedAt?: string;
  coverImage: string;
  category: BlogCategory;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  readingTime: number; // minutes
  featured: boolean;
}

export type BlogCategory =
  | "oral-health"
  | "cosmetic-dentistry"
  | "patient-guides"
  | "news"
  | "tips";

// ─── FAQ ─────────────────────────────────────────────────────────
export interface FaqItem {
  id: string;
  question: string;
  answer: string; // may contain basic HTML
  category?: string;
  order: number;
}

// ─── Navigation ──────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[]; // for dropdown menus
}
