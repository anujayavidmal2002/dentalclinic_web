import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    slug: "general-dentistry",
    name: "General Dentistry",
    shortDescription:
      "Preventive care and routine dental treatments to maintain your oral health and prevent future complications.",
    fullDescription:
      "General dentistry is the foundation of maintaining a healthy smile. Our comprehensive preventive care includes routine cleanings, oral exams, fluoride treatments, and dietary advice. We use the latest diagnostic technology to detect issues early, preventing more complex and costly treatments down the road.",
    benefits: [
      "Regular checkups and professional cleanings",
      "Early detection of dental problems",
      "Personalized oral hygiene guidance",
      "Treatment of cavities and decay",
      "Gum disease screening and treatment",
    ],
    icon: "Smile",
    image: "/images/services/generaldentistry.jpg",
    metaTitle:
      "General Dentistry in Colombo - Glamour Dental | Preventive Care",
    metaDescription:
      "Comprehensive general dentistry services including cleanings, checkups, and preventive care at Glamour Dental in Colombo.",
    keywords: ["general dentistry", "dental checkup", "teeth cleaning", "preventive care"],
    featured: true,
    order: 1,
  },
  {
    id: "2",
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    shortDescription:
      "Transform your smile with advanced cosmetic procedures designed to enhance your teeth and facial aesthetics.",
    fullDescription:
      "Cosmetic dentistry is about creating beautiful, confident smiles. Our cosmetic services include smile design, bonding, veneers, and whitening treatments. Using advanced technology like digital smile design software, we help you visualize your new smile before treatment begins.",
    benefits: [
      "Digital smile design planning",
      "Smile transformation and enhancement",
      "Natural-looking aesthetic results",
      "Confidence boost from a beautiful smile",
      "Improved facial harmony and proportions",
    ],
    icon: "Sparkles",
    image: "/images/services/cosmeticdentistry.jpg",
    metaTitle: "Cosmetic Dentistry in Colombo - Glamour Dental | Smile Design",
    metaDescription:
      "Transform your smile with cosmetic dentistry services at Glamour Dental. Digital smile design, veneers, and more.",
    keywords: ["cosmetic dentistry", "smile design", "dental veneers", "smile transformation"],
    featured: true,
    order: 2,
  },
  {
    id: "3",
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDescription:
      "Professional teeth whitening treatments that safely brighten your smile by several shades.",
    fullDescription:
      "Our professional teeth whitening treatments are safe, effective, and fast. We offer both in-office whitening for immediate results and take-home kits for convenience. Professional-grade whitening is far superior to over-the-counter options and provides lasting results.",
    benefits: [
      "Professional-grade whitening agents",
      "Safe and effective results",
      "In-office or take-home options",
      "Visible results in one session",
      "Protects enamel during treatment",
    ],
    icon: "Zap",
    image: "/images/services/teethwhitening.jpg",
    metaTitle: "Professional Teeth Whitening in Colombo - Glamour Dental",
    metaDescription:
      "Brighten your smile with professional teeth whitening at Glamour Dental. Fast, safe, and effective results.",
    keywords: ["teeth whitening", "professional whitening", "smile brightening", "teeth bleaching"],
    featured: true,
    order: 3,
  },
  {
    id: "4",
    slug: "dental-implants",
    name: "Dental Implants",
    shortDescription:
      "Replace missing teeth with permanent dental implants that look and function like natural teeth.",
    fullDescription:
      "Dental implants are the gold standard for replacing missing teeth. They integrate with your jawbone, preventing bone loss and providing a permanent, natural-looking solution. Our implant specialists use advanced 3D imaging to plan each implant for optimal placement and aesthetics.",
    benefits: [
      "Permanent tooth replacement solution",
      "Prevents jawbone deterioration",
      "Looks and functions like natural teeth",
      "Improved speech and eating comfort",
      "Long-lasting results with proper care",
    ],
    icon: "Gem",
    image: "/images/services/implant.jpg",
    metaTitle: "Dental Implants in Colombo - Glamour Dental | Expert Placement",
    metaDescription:
      "Replace missing teeth with premium dental implants at Glamour Dental. Expert care and natural-looking results.",
    keywords: ["dental implants", "missing teeth replacement", "implant dentistry", "tooth implants"],
    featured: true,
    order: 4,
  },
  {
    id: "5",
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    shortDescription:
      "Expert endodontic treatment to save teeth with infected or damaged pulp.",
    fullDescription:
      "Root canal treatment is a highly effective way to save a tooth that might otherwise need extraction. Our endodontists use advanced technology including rotary instruments and digital imaging to ensure thorough cleaning and sealing of the root canal system.",
    benefits: [
      "Saves your natural tooth",
      "Pain relief from infected tooth",
      "Advanced rotary instrumentation",
      "High success rate and longevity",
      "Prevents tooth loss and bone loss",
    ],
    icon: "Activity",
    image: "/images/services/rootcanal.jpg",
    metaTitle: "Root Canal Treatment in Colombo - Glamour Dental | Expert Care",
    metaDescription:
      "Expert root canal treatment to save your tooth at Glamour Dental. Advanced endodontics with high success rates.",
    keywords: ["root canal", "endodontics", "infected tooth", "root canal treatment"],
    featured: false,
    order: 5,
  },
  {
    id: "6",
    slug: "orthodontics",
    name: "Orthodontics & Braces",
    shortDescription:
      "Straighten your teeth and correct bite problems with modern orthodontic treatments.",
    fullDescription:
      "Our orthodontic specialists offer multiple options for straightening teeth including traditional braces, ceramic braces, and advanced technology options. We create personalized treatment plans to achieve your ideal smile alignment.",
    benefits: [
      "Multiple brace options available",
      "Faster treatment times with modern technology",
      "Improved bite and chewing function",
      "Better oral hygiene and health",
      "Enhanced facial aesthetics and proportion",
    ],
    icon: "Zap",
    image: "/images/services/braces.jpg",
    metaTitle: "Orthodontics & Braces in Colombo - Glamour Dental | Smile Straightening",
    metaDescription:
      "Straighten your teeth with expert orthodontics and braces at Glamour Dental. Modern solutions for perfect alignment.",
    keywords: ["orthodontics", "braces", "teeth straightening", "bite correction"],
    featured: false,
    order: 6,
  },
  {
    id: "7",
    slug: "veneers",
    name: "Dental Veneers",
    shortDescription:
      "Thin porcelain shells that cover the front of teeth to improve appearance and color.",
    fullDescription:
      "Dental veneers are a conservative way to transform the appearance of your teeth. These ultra-thin porcelain shells are bonded to the front of teeth, correcting chips, stains, gaps, and misalignment without requiring extensive tooth removal.",
    benefits: [
      "Minimal tooth preparation",
      "Natural appearance and feel",
      "Stain-resistant porcelain material",
      "Long-lasting results (10-15 years)",
      "Instantly improve smile aesthetics",
    ],
    icon: "Sparkles",
    image: "/images/services/cosmeticdentistry.jpg",
    metaTitle: "Porcelain Veneers in Colombo - Glamour Dental | Smile Makeover",
    metaDescription:
      "Transform your smile with porcelain veneers at Glamour Dental. Natural-looking and long-lasting results.",
    keywords: ["veneers", "porcelain veneers", "dental veneers", "smile makeover"],
    featured: false,
    order: 7,
  },
  {
    id: "8",
    slug: "crowns-and-bridges",
    name: "Dental Crowns & Bridges",
    shortDescription:
      "Restore damaged teeth with crowns and replace missing teeth with bridges.",
    fullDescription:
      "Crowns and bridges are effective restorative treatments. Crowns cover damaged teeth to restore function and appearance, while bridges replace one or more missing teeth by anchoring to adjacent teeth. We offer multiple material options including all-ceramic for the most natural appearance.",
    benefits: [
      "Restores tooth function and strength",
      "Multiple material options",
      "Natural-looking appearance",
      "Durable and long-lasting",
      "Improves chewing and speech",
    ],
    icon: "Shield",
    image: "/images/services/generaldentistry.jpg",
    metaTitle: "Dental Crowns & Bridges in Colombo - Glamour Dental",
    metaDescription:
      "Restore your smile with dental crowns and bridges at Glamour Dental. Durable and natural-looking restorations.",
    keywords: ["dental crowns", "dental bridges", "tooth restoration", "crown and bridge"],
    featured: false,
    order: 8,
  },
  {
    id: "9",
    slug: "invisalign",
    name: "Invisalign & Clear Aligners",
    shortDescription:
      "Straighten teeth discreetly with clear, removable aligners that are almost invisible.",
    fullDescription:
      "Invisalign and other clear aligner systems offer a modern alternative to traditional braces. These custom-made, nearly invisible aligners gradually move your teeth into position without wires or brackets, making them perfect for teens and adults.",
    benefits: [
      "Nearly invisible treatment option",
      "Removable for eating and cleaning",
      "No metal wires or brackets",
      "Fewer office visits required",
      "Predictable results with digital planning",
    ],
    icon: "Eye",
    image: "/images/services/braces.jpg",
    metaTitle: "Invisalign & Clear Aligners in Colombo - Glamour Dental",
    metaDescription:
      "Straighten teeth discreetly with Invisalign and clear aligners at Glamour Dental. Modern orthodontic solution.",
    keywords: ["invisalign", "clear aligners", "invisible braces", "orthodontics"],
    featured: false,
    order: 9,
  },
  {
    id: "10",
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    shortDescription:
      "Specialized dental care for children from infancy through teenage years.",
    fullDescription:
      "We understand that children have unique dental needs. Our pediatric specialists create a friendly, comfortable environment that helps children feel at ease. We focus on preventive care, early detection of problems, and establishing good oral hygiene habits.",
    benefits: [
      "Child-friendly and comfortable environment",
      "Prevention and early detection",
      "Education on proper oral hygiene",
      "Treatment of primary and permanent teeth",
      "Sports mouthguards and fluoride treatments",
    ],
    icon: "Heart",
    image: "/images/services/generaldentistry.jpg",
    metaTitle: "Pediatric Dentistry in Colombo - Glamour Dental | Kids Dental Care",
    metaDescription:
      "Specialized pediatric dental care for children at Glamour Dental. Friendly environment and expert care.",
    keywords: ["pediatric dentistry", "children dentist", "kids dental care", "child orthodontics"],
    featured: false,
    order: 10,
  },
  {
    id: "11",
    slug: "gum-treatment",
    name: "Gum Treatment & Periodontics",
    shortDescription:
      "Expert treatment of gum disease to maintain healthy teeth and gums.",
    fullDescription:
      "Healthy gums are essential for healthy teeth. We treat all stages of gum disease from simple gingivitis to advanced periodontitis. Our treatment approaches range from scaling and root planing to advanced laser therapy and tissue grafting when needed.",
    benefits: [
      "Treatment of gingivitis and periodontitis",
      "Scaling and root planing",
      "Advanced laser therapy options",
      "Prevents tooth loss",
      "Reduces bad breath and bleeding gums",
    ],
    icon: "Shield",
    image: "/images/services/generaldentistry.jpg",
    metaTitle: "Gum Disease Treatment in Colombo - Glamour Dental | Periodontics",
    metaDescription:
      "Expert gum disease and periodontal treatment at Glamour Dental. Healthy gums for a healthy smile.",
    keywords: ["gum disease", "periodontics", "gum treatment", "periodontal disease"],
    featured: false,
    order: 11,
  },
  {
    id: "12",
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    shortDescription:
      "Urgent dental care for painful emergencies and unexpected dental problems.",
    fullDescription:
      "Dental emergencies can happen anytime. We offer same-day emergency appointments to address urgent issues like severe pain, broken teeth, or lost fillings. Our compassionate team works quickly to relieve your pain and restore your teeth.",
    benefits: [
      "Same-day emergency appointments",
      "Quick pain relief",
      "Treatment of broken/chipped teeth",
      "Management of tooth loss",
      "Expert emergency care 24/7 availability",
    ],
    icon: "AlertCircle",
    image: "/images/services/generaldentistry.jpg",
    metaTitle: "Emergency Dentistry in Colombo - Glamour Dental | Urgent Care",
    metaDescription:
      "Fast emergency dental care in Colombo. Same-day appointments for urgent dental problems at Glamour Dental.",
    keywords: ["emergency dentistry", "urgent dental care", "tooth pain", "dental emergency"],
    featured: false,
    order: 12,
  },
];
