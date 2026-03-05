"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-white shadow-sm transition-shadow duration-300 hover:shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo/logo_new.svg"
                  alt="Glamour Dental Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-heading font-bold text-lg text-brand-900">
                  {siteConfig.name}
                </p>
                <p className="text-xs text-surface-600">Premium Dental Care</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-surface-700 hover:text-brand-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-surface-700 hover:text-brand-600 font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-surface-700 hover:text-brand-600 font-medium transition-colors"
              >
                Services
              </Link>
         
              <Link
                href="/contact"
                className="text-surface-700 hover:text-brand-600 font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button and Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <Button
                asLink
                href="/book-appointment"
                size="md"
                className="hidden sm:inline-flex"
              >
                Book Appointment
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-surface-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X size={24} className="text-surface-900" />
                ) : (
                  <Menu size={24} className="text-surface-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileMenu onClose={() => setIsMenuOpen(false)} />
      )}

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
}
