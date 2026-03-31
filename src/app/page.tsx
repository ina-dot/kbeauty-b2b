import Link from "next/link";
import {
  ArrowRight,
  Play,
  DollarSign,
  Shield,
  LayoutGrid,
  MapPin,
  Package,
  Headphones,
  Sparkles,
  Sun,
  Palette,
  Scissors,
  CircleDot,
  Heart,
  Mail,
  Clock,
  MessageCircle,
  Check,
  ChevronRight,
} from "lucide-react";

const brands = [
  {
    name: "COSRX",
    slug: "cosrx",
    stock: null,
    image: "https://ext.same-assets.com/3744483410/1972599832.jpeg",
    color: "#f5e6c8",
  },
  {
    name: "Klairs",
    slug: "klairs",
    stock: 16,
    image: "https://images.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018659412ko.jpg",
    color: "#e8f4f8",
  },
  {
    name: "SOME BY MI",
    slug: "some-by-mi",
    stock: null,
    image: "https://images.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016892604ko.jpg",
    color: "#e8f5e9",
  },
  {
    name: "PURITO",
    slug: "purito",
    stock: null,
    image: "https://images.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020083006ko.jpg",
    color: "#e0f2e9",
  },
  {
    name: "Beauty of Joseon",
    slug: "beauty-of-joseon",
    stock: null,
    image: "https://images.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018088311ko.jpg",
    color: "#fdf6e3",
  },
  {
    name: "numbuzin",
    slug: "numbuzin",
    stock: null,
    image: "https://images.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018557003ko.jpg",
    color: "#f3e8ff",
  },
  {
    name: "I'm from",
    slug: "im-from",
    stock: 22,
    image: "https://images.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0014/A00000014778806ko.jpg",
    color: "#fef9e7",
  },
  {
    name: "rom&nd",
    slug: "romand",
    stock: null,
    image: "https://images.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018975001ko.jpg",
    color: "#fce4ec",
  },
  {
    name: "SKIN1004",
    slug: "skin1004",
    stock: 19,
    image: "https://images.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018261102ko.jpg",
    color: "#e8f5e9",
  },
  {
    name: "One-day's you",
    slug: "one-days-you",
    stock: null,
    image: "https://images.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018274501ko.jpg",
    color: "#fff8e1",
  },
  {
    name: "Anua",
    slug: "anua",
    stock: 9,
    image: "https://images.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018896314ko.jpg",
    color: "#e3f2fd",
  },
  {
    name: "Axis-Y",
    slug: "axis-y",
    stock: 13,
    image: "https://images.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018689901ko.jpg",
    color: "#e8f5e9",
  },
  {
    name: "Torriden",
    slug: "torriden",
    stock: 9,
    image: "https://images.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018762301ko.jpg",
    color: "#e0f4ff",
  },
  {
    name: "By Wishtrend",
    slug: "by-wishtrend",
    stock: 2,
    image: "https://images.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018545103ko.jpg",
    color: "#fce4ec",
  },
];

const categories = [
  { name: "Skincare", count: "200+", icon: Sparkles },
  { name: "Sunscreen", count: "80+", icon: Sun },
  { name: "Makeup", count: "120+", icon: Palette },
  { name: "Haircare", count: "50+", icon: Scissors },
  { name: "Masks", count: "100+", icon: CircleDot },
  { name: "Body Care", count: "40+", icon: Heart },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbf7f5]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#fbf7f5]/95 backdrop-blur-sm border-b border-[#e8e0dd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#c88f6d] rounded-full flex items-center justify-center text-white font-semibold">
                K
              </div>
              <span className="font-semibold text-[#494849]">K-Beauty B2B</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-[#494849]">
              <Link href="#products" className="hover:text-[#c88f6d] transition">Products</Link>
              <Link href="#brands" className="hover:text-[#c88f6d] transition">Brands</Link>
              <Link href="#shipping" className="hover:text-[#c88f6d] transition">Shipping</Link>
              <Link href="#about" className="hover:text-[#c88f6d] transition">About</Link>
              <Link href="#contact" className="hover:text-[#c88f6d] transition">Contact</Link>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" className="text-sm text-[#494849] hover:text-[#c88f6d] transition">
                Sign In
              </button>
              <button type="button" className="bg-[#c88f6d] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#b87d5d] transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#fef9f6] to-[#fbf7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm text-[#494849]">Trusted by 500+ businesses worldwide</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#494849] mb-6">
            Premium <span className="text-[#c88f6d]">K-Beauty</span>
            <br />
            Wholesale Partner
          </h1>
          <p className="text-lg text-[#a69c99] max-w-2xl mx-auto mb-8">
            Direct sourcing from Korea with strategic hubs in{" "}
            <span className="font-semibold text-[#494849]">Rotterdam</span> &{" "}
            <span className="font-semibold text-[#494849]">Dubai</span>. Authentic
            products, competitive pricing, reliable delivery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button type="button" className="flex items-center gap-2 bg-[#c88f6d] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#b87d5d] transition">
              Start Partnership
              <ArrowRight className="w-4 h-4" />
            </button>
            <button type="button" className="flex items-center gap-2 bg-white text-[#494849] px-6 py-3 rounded-lg font-medium border border-[#e8e0dd] hover:bg-[#fef9f6] transition">
              <Play className="w-4 h-4" />
              Watch Overview
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
            {[
              { value: "500+", label: "Products" },
              { value: "50+", label: "Brands" },
              { value: "40+", label: "Countries" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-[#e8e0dd]">
                <div className="text-3xl font-bold text-[#c88f6d]">{stat.value}</div>
                <div className="text-sm text-[#a69c99]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#494849] mb-4">
              Why <span className="text-[#c88f6d]">Partner</span> With Us?
            </h2>
            <p className="text-[#a69c99] max-w-2xl mx-auto">
              Join hundreds of successful retailers and distributors who trust us for their K-Beauty sourcing
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: "High Profit Margin", desc: "Competitive wholesale pricing for maximum profitability" },
              { icon: Shield, title: "100% Authentic", desc: "Direct sourcing from official Korean brand partners" },
              { icon: LayoutGrid, title: "500+ Products", desc: "Wide selection of skincare, makeup, and more" },
              { icon: MapPin, title: "Regional Hubs", desc: "Rotterdam & Dubai for fast European & Middle East delivery" },
              { icon: Package, title: "No MOQ", desc: "Flexible ordering without minimum quantity requirements" },
              { icon: Headphones, title: "24/7 Support", desc: "Dedicated account manager and WhatsApp support" },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-[#fbf7f5] rounded-xl p-6 border border-[#e8e0dd] hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 border border-[#e8e0dd]">
                  <feature.icon className="w-6 h-6 text-[#c88f6d]" />
                </div>
                <h3 className="font-semibold text-[#494849] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#a69c99]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-[#fbf7f5]" id="brands">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#494849] mb-4">
              Trusted <span className="text-[#c88f6d]">Brand Partners</span>
            </h2>
            <p className="text-[#a69c99] max-w-2xl mx-auto">
              We partner with Korea's most sought-after beauty brands to bring you authentic, trending products
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brand/${brand.slug}`}
                className="bg-white rounded-xl p-4 border border-[#e8e0dd] hover:shadow-lg hover:border-[#c88f6d]/30 transition group"
              >
                <div
                  className="aspect-square relative mb-3 rounded-lg overflow-hidden"
                  style={{ backgroundColor: brand.color }}
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-[#494849] text-sm group-hover:text-[#c88f6d] transition">{brand.name}</h3>
                  {brand.stock && (
                    <p className="text-xs text-[#c88f6d] mt-1">{brand.stock} products in stock</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/brands"
              className="inline-flex items-center gap-2 text-[#c88f6d] font-medium hover:underline"
            >
              View all 50+ brands
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#494849] mb-4">
              Shop by <span className="text-[#c88f6d]">Category</span>
            </h2>
            <p className="text-[#a69c99] max-w-2xl mx-auto">
              Browse our extensive collection of authentic K-Beauty products
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/category/${cat.name.toLowerCase()}`}
                className="bg-[#fbf7f5] rounded-xl p-6 border border-[#e8e0dd] text-center hover:shadow-md hover:border-[#c88f6d]/30 transition group"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 border border-[#e8e0dd] group-hover:border-[#c88f6d]/30 transition">
                  <cat.icon className="w-6 h-6 text-[#c88f6d]" />
                </div>
                <h3 className="font-medium text-[#494849] mb-1">{cat.name}</h3>
                <p className="text-xs text-[#a69c99]">{cat.count} Products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#c88f6d] to-[#ddbb9b] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Welcome New Partners!</h3>
              <p className="text-white/90">First order discounts with escalating savings</p>
              <div className="flex gap-3 mt-4">
                {[
                  { pct: "10%", order: "$500+" },
                  { pct: "15%", order: "$1,000+" },
                  { pct: "20%", order: "$2,500+" },
                ].map((tier) => (
                  <div key={tier.pct} className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                    <div className="text-xl font-bold text-white">{tier.pct}</div>
                    <div className="text-xs text-white/80">Orders {tier.order}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <button type="button" className="bg-white text-[#c88f6d] px-6 py-3 rounded-lg font-medium hover:bg-[#fef9f6] transition">
                Register Now
              </button>
              <p className="text-xs text-white/70 mt-2">Limited time offer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Section */}
      <section className="py-20 bg-[#fbf7f5]" id="shipping">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#494849] mb-4">
              Global <span className="text-[#c88f6d]">Shipping Hubs</span>
            </h2>
            <p className="text-[#a69c99] max-w-2xl mx-auto">
              Strategically located warehouses for faster delivery and reduced shipping costs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Rotterdam */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8e0dd]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  <div className="w-8 h-6 bg-red-600" />
                  <div className="w-8 h-6 bg-white border" />
                  <div className="w-8 h-6 bg-blue-700" />
                </div>
                <span className="text-[#c88f6d] text-sm font-medium bg-[#c88f6d]/10 px-3 py-1 rounded-full">Europe</span>
              </div>
              <h3 className="text-2xl font-bold text-[#494849] mb-1">Rotterdam</h3>
              <p className="text-[#a69c99] mb-4">Netherlands</p>
              <p className="text-sm text-[#494849] mb-4">
                Strategic hub serving all European markets with full EU regulatory compliance
              </p>
              <ul className="space-y-2">
                {["EU Compliant", "3-5 Day Delivery", "Local Support"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#a69c99]">
                    <Check className="w-4 h-4 text-[#c88f6d]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dubai */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8e0dd]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  <div className="w-4 h-6 bg-green-600" />
                  <div className="w-6 h-6 bg-white" />
                  <div className="w-8 h-3 bg-black mt-1.5" />
                  <div className="w-8 h-3 bg-red-600 mt-3" />
                </div>
                <span className="text-[#c88f6d] text-sm font-medium bg-[#c88f6d]/10 px-3 py-1 rounded-full">Middle East</span>
              </div>
              <h3 className="text-2xl font-bold text-[#494849] mb-1">Dubai</h3>
              <p className="text-[#a69c99] mb-4">UAE</p>
              <p className="text-sm text-[#494849] mb-4">
                Premier gateway for Middle East and North African markets
              </p>
              <ul className="space-y-2">
                {["Tax-Free Zone", "2-4 Day Delivery", "Arabic Support"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#a69c99]">
                    <Check className="w-4 h-4 text-[#c88f6d]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#494849] mb-4">
                Start Your <span className="text-[#c88f6d]">Partnership</span>
              </h2>
              <p className="text-[#a69c99] mb-8">
                Ready to bring authentic K-Beauty products to your customers? Fill out the form and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#fbf7f5] rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#c88f6d]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#494849]">Email Us</h4>
                    <p className="text-sm text-[#a69c99]">b2b@kbeauty.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#fbf7f5] rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#c88f6d]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#494849]">Response Time</h4>
                    <p className="text-sm text-[#a69c99]">Within 24 hours (Mon-Fri)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#fbf7f5] rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#c88f6d]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#494849]">WhatsApp Support</h4>
                    <p className="text-sm text-[#a69c99]">+82 10-XXXX-XXXX</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fbf7f5] rounded-2xl p-8 border border-[#e8e0dd]">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#494849] mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 rounded-lg border border-[#e8e0dd] bg-white focus:outline-none focus:ring-2 focus:ring-[#c88f6d]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#494849] mb-1">Company</label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full px-4 py-2 rounded-lg border border-[#e8e0dd] bg-white focus:outline-none focus:ring-2 focus:ring-[#c88f6d]/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#494849] mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-2 rounded-lg border border-[#e8e0dd] bg-white focus:outline-none focus:ring-2 focus:ring-[#c88f6d]/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#494849] mb-1">Region</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-[#e8e0dd] bg-white focus:outline-none focus:ring-2 focus:ring-[#c88f6d]/30 text-[#a69c99]">
                    <option>Select your region</option>
                    <option>Europe</option>
                    <option>Middle East</option>
                    <option>North Africa</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#494849] mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business and what products you're interested in..."
                    className="w-full px-4 py-2 rounded-lg border border-[#e8e0dd] bg-white focus:outline-none focus:ring-2 focus:ring-[#c88f6d]/30"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#c88f6d] text-white py-3 rounded-lg font-medium hover:bg-[#b87d5d] transition"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fbf7f5] py-12 border-t border-[#e8e0dd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-[#c88f6d] rounded-full flex items-center justify-center text-white font-semibold">
                  K
                </div>
                <span className="font-semibold text-[#494849]">K-Beauty B2B</span>
              </div>
              <p className="text-sm text-[#a69c99]">
                Your trusted partner for premium Korean beauty products wholesale.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#494849] mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-[#a69c99]">
                <li><Link href="#" className="hover:text-[#c88f6d]">Skincare</Link></li>
                <li><Link href="#" className="hover:text-[#c88f6d]">Makeup</Link></li>
                <li><Link href="#" className="hover:text-[#c88f6d]">Suncare</Link></li>
                <li><Link href="#" className="hover:text-[#c88f6d]">Haircare</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#494849] mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-[#a69c99]">
                <li><Link href="#about" className="hover:text-[#c88f6d]">About Us</Link></li>
                <li><Link href="#" className="hover:text-[#c88f6d]">Careers</Link></li>
                <li><Link href="#contact" className="hover:text-[#c88f6d]">Contact</Link></li>
                <li><Link href="#" className="hover:text-[#c88f6d]">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#494849] mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-[#a69c99]">
                <li><Link href="#" className="hover:text-[#c88f6d]">FAQ</Link></li>
                <li><Link href="#shipping" className="hover:text-[#c88f6d]">Shipping Info</Link></li>
                <li><Link href="#" className="hover:text-[#c88f6d]">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-[#c88f6d]">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#e8e0dd] mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#a69c99]">
              &copy; 2026 K-Beauty B2B. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-[#e8e0dd] hover:border-[#c88f6d]/30 transition">
                <svg className="w-4 h-4 text-[#a69c99]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-[#e8e0dd] hover:border-[#c88f6d]/30 transition">
                <svg className="w-4 h-4 text-[#a69c99]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-[#e8e0dd] hover:border-[#c88f6d]/30 transition">
                <svg className="w-4 h-4 text-[#a69c99]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}