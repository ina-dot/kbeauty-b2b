import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Package, Euro, Box } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brands, getProductsByBrand, getBrandBySlug } from "@/data/products";

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  const products = getProductsByBrand(slug);

  return (
    <main className="min-h-screen">
      <Header />

      <div className="bg-[#fef5f2] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#brands"
            className="inline-flex items-center gap-2 text-[#a09c9b] hover:text-[#c38e7e] transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            Back to Brands
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#444245] mb-2">
                {brand.name}
              </h1>
              <p className="text-[#a09c9b]">{brand.description}</p>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Package size={18} className="text-[#c38e7e]" />
              <span className="text-sm font-medium text-[#444245]">
                {products.length} products in European stock
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <>
              {/* Product Table Header */}
              <div className="bg-[#fef5f2] rounded-t-xl p-4 hidden md:grid md:grid-cols-12 gap-4 font-semibold text-[#444245] text-sm">
                <div className="col-span-5">Product Name</div>
                <div className="col-span-2 text-center">Category</div>
                <div className="col-span-2 text-center">Stock</div>
                <div className="col-span-3 text-right">Price (EUR)</div>
              </div>

              {/* Product List */}
              <div className="divide-y divide-gray-100 border border-gray-100 rounded-b-xl overflow-hidden">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[#fbf8f7] transition-colors"
                  >
                    <div className="col-span-5">
                      <div className="flex items-center gap-3">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-[#fef5f2] flex items-center justify-center">
                            <Box size={24} className="text-[#c38e7e]" />
                          </div>
                        )}
                        <div>
                          <h3 className="font-medium text-[#444245]">{product.name}</h3>
                          <p className="text-xs text-[#a09c9b] md:hidden">{product.category}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 text-center hidden md:block">
                      <span className="px-3 py-1 bg-[#fef5f2] text-[#c38e7e] rounded-full text-xs font-medium">
                        {product.category}
                      </span>
                    </div>
                    <div className="col-span-2 text-center">
                      <div className="md:hidden text-xs text-[#a09c9b] mb-1">Stock</div>
                      <span className={`font-medium ${product.stock > 50 ? 'text-green-600' : product.stock > 10 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {product.stock} units
                      </span>
                    </div>
                    <div className="col-span-3 text-right">
                      <div className="md:hidden text-xs text-[#a09c9b] mb-1">Price</div>
                      <span className="text-xl font-bold text-[#c38e7e] flex items-center justify-end gap-1">
                        <Euro size={16} />
                        {product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-8 bg-gradient-to-r from-[#d38b83] to-[#c38e64] rounded-xl p-6 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Interested in {brand.name} products?</h3>
                    <p className="text-white/80">Contact us for wholesale pricing and bulk orders</p>
                  </div>
                  <Link
                    href="/#contact"
                    className="bg-white text-[#c38e7e] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-[#fef5f2] rounded-full flex items-center justify-center">
                <Package size={48} className="text-[#c38e7e]" />
              </div>
              <h2 className="text-2xl font-bold text-[#444245] mb-2">
                No products in European stock yet
              </h2>
              <p className="text-[#a09c9b] mb-8 max-w-md mx-auto">
                We're currently updating our inventory for {brand.name}. Check back soon or contact us for availability.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-[#c38e7e] hover:bg-[#b26a6d] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact for Availability
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
