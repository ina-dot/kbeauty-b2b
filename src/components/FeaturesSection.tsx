import { DollarSign, Shield, Grid, MapPin, Package, Headphones } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "High Profit Margin",
    description: "Competitive wholesale pricing for maximum profitability"
  },
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Direct sourcing from official Korean brand partners"
  },
  {
    icon: Grid,
    title: "500+ Products",
    description: "Wide selection of skincare, makeup, and more"
  },
  {
    icon: MapPin,
    title: "Regional Hubs",
    description: "Rotterdam & Dubai for fast European & Middle East delivery"
  },
  {
    icon: Package,
    title: "No MOQ",
    description: "Flexible ordering without minimum quantity requirements"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated account manager and WhatsApp support"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#444245] mb-4">
            Why <span className="text-[#c38e7e]">Partner</span> With Us?
          </h2>
          <p className="text-[#a09c9b] max-w-2xl mx-auto">
            Join hundreds of successful retailers and distributors who trust us for their K-Beauty sourcing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#fbf8f7] p-6 rounded-xl border border-gray-100 hover:border-[#c38e7e] transition-colors"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 border border-gray-100">
                <feature.icon size={24} className="text-[#c38e7e]" />
              </div>
              <h3 className="font-semibold text-[#444245] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#a09c9b]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
