"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { brands } from "@/data/products";

export default function BrandsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fef5f2]" id="brands">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#444245] mb-4">
            Trusted <span className="text-[#c38e7e]">Brand Partners</span>
          </h2>
          <p className="text-[#a09c9b] max-w-2xl mx-auto">
            We partner with Korea's most sought-after beauty brands to bring you authentic, trending products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brand/${brand.slug}`}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#c38e7e] hover:shadow-lg transition-all text-center group"
            >
              <span className="font-semibold text-[#444245] group-hover:text-[#c38e7e] transition-colors">
                {brand.name}
              </span>
              {brand.productCount > 0 && (
                <span className="block text-xs text-[#c38e7e] mt-1">
                  {brand.productCount} products in stock
                </span>
              )}
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 text-[#c38e7e] hover:text-[#b26a6d] transition-colors font-medium"
          >
            View all 50+ brands
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
