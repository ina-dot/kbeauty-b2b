import { Sparkles, Sun, Palette, Scissors, CircleDot, Heart } from "lucide-react";

const categories = [
  { icon: Sparkles, name: "Skincare", count: "200+ Products" },
  { icon: Sun, name: "Sunscreen", count: "80+ Products" },
  { icon: Palette, name: "Makeup", count: "120+ Products" },
  { icon: Scissors, name: "Haircare", count: "50+ Products" },
  { icon: CircleDot, name: "Masks", count: "100+ Products" },
  { icon: Heart, name: "Body Care", count: "40+ Products" },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fef5f2]" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#444245] mb-4">
            Shop by <span className="text-[#c38e7e]">Category</span>
          </h2>
          <p className="text-[#a09c9b] max-w-2xl mx-auto">
            Browse our extensive collection of authentic K-Beauty products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#c38e7e] transition-all cursor-pointer text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <category.icon size={28} className="text-[#c38e7e]" />
              </div>
              <h3 className="font-semibold text-[#444245] mb-1">{category.name}</h3>
              <p className="text-xs text-[#a09c9b]">{category.count}</p>
            </div>
          ))}
        </div>

        {/* New Partners Banner */}
        <div className="mt-12 gradient-warm rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Welcome New Partners!</h3>
              <p className="text-white/80">First order discounts with escalating savings</p>
              <div className="flex gap-4 mt-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
                  <div className="text-xl font-bold">10%</div>
                  <div className="text-xs text-white/80">Orders $500+</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
                  <div className="text-xl font-bold">15%</div>
                  <div className="text-xs text-white/80">Orders $1,000+</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
                  <div className="text-xl font-bold">20%</div>
                  <div className="text-xs text-white/80">Orders $2,500+</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="button" className="bg-white text-[#c38e7e] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Register Now
              </button>
              <p className="text-xs text-white/60 mt-2">Limited time offer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
