import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="gradient-hero py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-sm text-[#444245]">Trusted by 500+ businesses worldwide</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#444245] mb-6">
          Premium <span className="text-[#c38e7e]">K-Beauty</span>
          <br />
          Wholesale Partner
        </h1>

        {/* Subheading */}
        <p className="text-lg text-[#a09c9b] max-w-2xl mx-auto mb-8">
          Direct sourcing from Korea with strategic hubs in <span className="text-[#444245] font-semibold">Rotterdam</span> & <span className="text-[#444245] font-semibold">Dubai</span>. Authentic products, competitive pricing, reliable delivery.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button type="button" className="bg-[#c38e7e] hover:bg-[#b26a6d] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
            Start Partnership
            <ArrowRight size={18} />
          </button>
          <button type="button" className="bg-white border border-gray-200 text-[#a09c9b] px-6 py-3 rounded-lg font-medium hover:border-[#c38e7e] transition-colors flex items-center gap-2">
            <Play size={18} />
            Watch Overview
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-[#c38e7e]">500+</div>
            <div className="text-sm text-[#a09c9b]">Products</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-[#c38e7e]">50+</div>
            <div className="text-sm text-[#a09c9b]">Brands</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-[#c38e7e]">40+</div>
            <div className="text-sm text-[#a09c9b]">Countries</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-[#c38e7e]">24/7</div>
            <div className="text-sm text-[#a09c9b]">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
