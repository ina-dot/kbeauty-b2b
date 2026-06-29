import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fef5f2] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#c38e7e] flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <span className="text-lg font-semibold text-[#444245]">
                <span className="font-bold">K-Beauty</span> B2B
              </span>
            </Link>
            <p className="text-sm text-[#a09c9b]">
              Your trusted partner for premium Korean beauty products wholesale.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-[#444245] mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-[#a09c9b] hover:text-[#c38e7e] transition-colors">Skincare</Link></li>
              <li><Link href="#" className="text-sm text-[#a09c9b] hover:text-[#c38e7e] transition-colors">Makeup</Link></li>
              <li><Link href="#" className="text-sm text-[#a09c9b] hover:text-[#c38e7e] transition-colors">Suncare</Link></li>
              <li><Link href="#" className="text-sm text-[#a09c9b] hover:text-[#c38e7e] transition-colors">Haircare</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[#444245] mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-sm text-[#a09c9b] hover:text-[#c38e7e] transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-[#a09c9b] hover:text-[#c38e7e] transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="text-sm text-[#a09c9b] hover:text-[#c38e7e] transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-sm text-[#a09c9b] hover:text-[#c38e7e] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-[#444245] mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-[#a09c9b] hover:text-[#c38e7e] transition-colors">FAQ</Link></li>
              <li><Link href="#shipping" className="text-sm text-[#a09c9b] hover:text-[#c38e7e] transition-colors">Shipping Info</Link></li>
              <li><Link href="#" className="text-sm text-[#a09c9b] hover:text-[#c38e7e] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-[#a09c9b] hover:text-[#c38e7e] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e8d0c9] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#a09c9b]">
            © 2026 K-Beauty B2B. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[#a09c9b] hover:text-[#c38e7e] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
              </svg>
            </Link>
            <Link href="#" className="text-[#a09c9b] hover:text-[#c38e7e] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
            <Link href="#" className="text-[#a09c9b] hover:text-[#c38e7e] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
