import { Doctor } from "@/types";

export const doctors: Doctor[] = [
  {
    id: "1",
    slug: "dr-sarah-johnson",
    name: "Sarah Johnson",
    title: "Dr.",
    credentials: ["BDS", "MDS (Prosthodontics)", "FICOI"],
    specialty: "Prosthodontics & Cosmetic Dentistry",
    bio: "Dr. Sarah Johnson is a passionate prosthodontist with 12 years of experience in cosmetic and restorative dentistry. She specializes in smile design, dental implants, and complex restorations. Dr. Johnson is committed to creating beautiful, functional smiles that transform her patients' lives.",
    education: [
      {
        degree: "Bachelor of Dental Surgery (BDS)",
        institution: "University of Colombo",
        year: 2010,
      },
      {
        degree: "Master of Dental Surgery (MDS) in Prosthodontics",
        institution: "National Institute of Dental Sciences",
        year: 2013,
      },
    ],
    experience: 12,
    photo: "/images/doctors/dr-sarah-johnson.jpg",
    social: {
      linkedin:
        "https://linkedin.com/in/dr-sarah-johnson-dentist",
    },
    languages: ["English", "Sinhala", "Tamil"],
  },
  {
    id: "2",
    slug: "dr-michael-chen",
    name: "Michael Chen",
    title: "Dr.",
    credentials: ["BDS", "MDS (Orthodontics)", "Invisalign Certified"],
    specialty: "Orthodontics & Preventive Dentistry",
    bio: "Dr. Michael Chen is an accomplished orthodontist with 10 years of experience in creating beautiful smiles. He is an Invisalign Certified Preferred Provider and specializes in both traditional and clear aligner orthodontics. Dr. Chen believes that everyone deserves a confident smile.",
    education: [
      {
        degree: "Bachelor of Dental Surgery (BDS)",
        institution: "University of Peradeniya",
        year: 2011,
      },
      {
        degree: "Master of Dental Surgery (MDS) in Orthodontics",
        institution: "Institute of Orthodontic Studies",
        year: 2014,
      },
    ],
    experience: 10,
    photo: "/images/doctors/dr-michael-chen.jpg",
    social: {
      linkedin: "https://linkedin.com/in/dr-michael-chen-orthodontist",
    },
    languages: ["English", "Sinhala", "Mandarin"],
  },
];
