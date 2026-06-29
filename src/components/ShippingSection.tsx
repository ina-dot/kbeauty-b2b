import { Check } from "lucide-react";

export default function ShippingSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="shipping">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#444245] mb-4">
            Global <span className="text-[#c38e7e]">Shipping Hubs</span>
          </h2>
          <p className="text-[#a09c9b] max-w-2xl mx-auto">
            Strategically located warehouses for faster delivery and reduced shipping costs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rotterdam Hub */}
          <div className="bg-[#fbf8f7] p-8 rounded-2xl border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 flex items-center">
                  {/* Netherlands Flag */}
                  <div className="w-full h-full rounded overflow-hidden flex flex-col">
                    <div className="h-1/3 bg-red-600" />
                    <div className="h-1/3 bg-white" />
                    <div className="h-1/3 bg-blue-800" />
                  </div>
                </div>
              </div>
              <span className="bg-[#c38e7e]/10 text-[#c38e7e] px-3 py-1 rounded-full text-sm font-medium">
                Europe
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#444245] mb-1">Rotterdam</h3>
            <p className="text-[#a09c9b] mb-4">Netherlands</p>
            <p className="text-sm text-[#444245] mb-6">
              Strategic hub serving all European markets with full EU regulatory compliance
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[#444245]">
                <Check size={16} className="text-[#c38e7e]" />
                EU Compliant
              </li>
              <li className="flex items-center gap-2 text-sm text-[#444245]">
                <Check size={16} className="text-[#c38e7e]" />
                3-5 Day Delivery
              </li>
              <li className="flex items-center gap-2 text-sm text-[#444245]">
                <Check size={16} className="text-[#c38e7e]" />
                Local Support
              </li>
            </ul>
          </div>

          {/* Dubai Hub */}
          <div className="bg-[#fbf8f7] p-8 rounded-2xl border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 flex items-center">
                  {/* UAE Flag */}
                  <div className="w-full h-full rounded overflow-hidden flex">
                    <div className="w-1/4 bg-green-600" />
                    <div className="flex-1 flex flex-col">
                      <div className="h-1/3 bg-red-600" />
                      <div className="h-1/3 bg-white" />
                      <div className="h-1/3 bg-black" />
                    </div>
                  </div>
                </div>
              </div>
              <span className="bg-[#c38e7e]/10 text-[#c38e7e] px-3 py-1 rounded-full text-sm font-medium">
                Middle East
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#444245] mb-1">Dubai</h3>
            <p className="text-[#a09c9b] mb-4">UAE</p>
            <p className="text-sm text-[#444245] mb-6">
              Premier gateway for Middle East and North African markets
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[#444245]">
                <Check size={16} className="text-[#c38e7e]" />
                Tax-Free Zone
              </li>
              <li className="flex items-center gap-2 text-sm text-[#444245]">
                <Check size={16} className="text-[#c38e7e]" />
                2-4 Day Delivery
              </li>
              <li className="flex items-center gap-2 text-sm text-[#444245]">
                <Check size={16} className="text-[#c38e7e]" />
                Arabic Support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
