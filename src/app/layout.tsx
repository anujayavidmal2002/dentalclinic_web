import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteConfig } from "@/lib/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/features/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glamourdental.lk"),
  title: `${siteConfig.name} - Premium Dental Care`,
  description: siteConfig.description,
  icons: {
    icon: "/images/logo/logonn.svg",
  },
  keywords: [
    "dental clinic",
    "dentist",
    "dental implants",
    "teeth whitening",
    "cosmetic dentistry",
    "Colombo",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glamourdental.com",
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Premium Dental Care`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/logo/logonn.png",
        width: 400,
        height: 400,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/logo/logonn.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Dentist"],
              name: siteConfig.name,
              url: "https://glamourdental.com",
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.state,
                postalCode: siteConfig.address.zip,
                addressCountry: siteConfig.address.country,
              },
              openingHoursSpecification: siteConfig.hours.map((hour) => ({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: hour.days,
                opens: hour.open,
                closes: hour.close,
              })),
              image: "/images/logo/logonn.png",
              logo: {
                "@type": "ImageObject",
                url: "https://glamourdental.lk/images/logo/logonn.png",
                width: 400,
                height: 400,
              },
              priceRange: "$$",
              sameAs: Object.values(siteConfig.social).filter(Boolean),
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-surface-50 text-surface-900`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
