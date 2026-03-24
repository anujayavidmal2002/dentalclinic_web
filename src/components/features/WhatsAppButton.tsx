"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi Glamour Dental! I'd like to inquire about your dental services."
    );
    // Remove spaces and special characters from phone number
    const phoneNumber = siteConfig.whatsapp.replace(/\s+/g, "").replace("+", "");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-float"
    >
      <MessageCircle size={28} />
    </button>
  );
}
