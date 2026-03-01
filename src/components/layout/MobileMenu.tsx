"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Doctors", href: "/doctors" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <div className="fixed inset-0 top-20 z-40 md:hidden bg-surface-white">
      <nav className="flex flex-col p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="block px-4 py-3 rounded-lg text-surface-700 hover:bg-brand-50 hover:text-brand-600 font-medium transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <div className="pt-4 border-t border-surface-200">
          <Button
            asLink
            href="/book-appointment"
            onClick={onClose}
            fullWidth
            size="lg"
          >
            Book Appointment
          </Button>
        </div>
      </nav>
    </div>
  );
}
