"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#c38e7e] flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
            <span className="text-lg font-semibold text-[#444245]">
              <span className="font-bold">K-Beauty</span> B2B
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#products" className="text-[#444245] hover:text-[#c38e7e] transition-colors text-sm font-medium">
              Products
            </Link>
            <Link href="/#brands" className="text-[#444245] hover:text-[#c38e7e] transition-colors text-sm font-medium">
              Brands
            </Link>
            <Link href="/#shipping" className="text-[#444245] hover:text-[#c38e7e] transition-colors text-sm font-medium">
              Shipping
            </Link>
            <Link href="/#about" className="text-[#444245] hover:text-[#c38e7e] transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/#contact" className="text-[#444245] hover:text-[#c38e7e] transition-colors text-sm font-medium">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button type="button" className="text-[#444245] hover:text-[#c38e7e] transition-colors text-sm font-medium">
              Sign In
            </button>
            <button type="button" className="bg-[#c38e7e] hover:bg-[#b26a6d] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <Link href="/#products" className="text-[#444245] hover:text-[#c38e7e] transition-colors text-sm font-medium">
                Products
              </Link>
              <Link href="/#brands" className="text-[#444245] hover:text-[#c38e7e] transition-colors text-sm font-medium">
                Brands
              </Link>
              <Link href="/#shipping" className="text-[#444245] hover:text-[#c38e7e] transition-colors text-sm font-medium">
                Shipping
              </Link>
              <Link href="/#about" className="text-[#444245] hover:text-[#c38e7e] transition-colors text-sm font-medium">
                About
              </Link>
              <Link href="/#contact" className="text-[#444245] hover:text-[#c38e7e] transition-colors text-sm font-medium">
                Contact
              </Link>
              <div className="flex gap-4 pt-4 border-t border-gray-100">
                <button type="button" className="text-[#444245] hover:text-[#c38e7e] transition-colors text-sm font-medium">
                  Sign In
                </button>
                <button type="button" className="bg-[#c38e7e] hover:bg-[#b26a6d] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
