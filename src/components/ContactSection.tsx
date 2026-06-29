import { Mail, Clock, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#444245] mb-4">
              Start Your <span className="text-[#c38e7e]">Partnership</span>
            </h2>
            <p className="text-[#a09c9b] mb-8">
              Ready to bring authentic K-Beauty products to your customers? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fef5f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-[#c38e7e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#444245]">Email Us</h3>
                  <p className="text-[#a09c9b] text-sm">b2b@kbeauty.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fef5f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-[#c38e7e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#444245]">Response Time</h3>
                  <p className="text-[#a09c9b] text-sm">Within 24 hours (Mon-Fri)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fef5f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={20} className="text-[#c38e7e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#444245]">WhatsApp Support</h3>
                  <p className="text-[#a09c9b] text-sm">+82 10-XXXX-XXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-[#fbf8f7] p-8 rounded-2xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#444245] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c38e7e] focus:ring-1 focus:ring-[#c38e7e] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#444245] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c38e7e] focus:ring-1 focus:ring-[#c38e7e] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#444245] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c38e7e] focus:ring-1 focus:ring-[#c38e7e] outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="region" className="block text-sm font-medium text-[#444245] mb-2">
                  Region
                </label>
                <select
                  id="region"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c38e7e] focus:ring-1 focus:ring-[#c38e7e] outline-none transition-colors text-[#a09c9b]"
                >
                  <option>Select your region</option>
                  <option>Europe</option>
                  <option>Middle East</option>
                  <option>Asia</option>
                  <option>North America</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#444245] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your business and what products you're interested in..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c38e7e] focus:ring-1 focus:ring-[#c38e7e] outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#c38e7e] hover:bg-[#b26a6d] text-white py-3 rounded-lg font-medium transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
