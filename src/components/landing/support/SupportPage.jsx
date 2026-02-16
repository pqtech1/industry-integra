import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaHeadset,
  FaComments,
  FaBug,
} from "react-icons/fa";

export const CONTACT_DETAILS = {
  email: "info@positivequadrant.in",
  phone: "+91 7219623991",
  address: "Ambernath - Thane, Mumbai, Maharashtra",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
};

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
            <FaHeadset className="h-4 w-4" />
            <span className="text-sm">Get in Touch</span>
          </div>

          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>

          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <a
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="text-sm text-green-600 hover:underline"
              >
                {CONTACT_DETAILS.phone}
              </a>
            </div>

            {/* Email */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="text-sm text-green-600 hover:underline"
              >
                {CONTACT_DETAILS.email}
              </a>
              <p className="text-xs text-gray-500 mt-2">24hr response time</p>
            </div>

            {/* Address */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-sm text-gray-600">{CONTACT_DETAILS.address}</p>
              <p className="text-xs text-gray-500 mt-2">By appointment only</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Submit Ticket Form */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold text-center text-gray-900 mb-6">
              Send us a Message
            </h2>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none">
                <option>Select subject...</option>
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Sales Question</option>
                <option>Partnership</option>
              </select>

              <textarea
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm h-32 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                placeholder="Your message..."
              />

              <div className="text-center">
                <button className="bg-green-600 text-white px-8 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                  Send Message
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Connect With Us
          </h2>

          <div className="flex justify-center gap-4">
            <a
              href={CONTACT_DETAILS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
           
          </div>
        </div>
      </section>

      {/* Map/Address Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Our Office</h3>
            <p className="text-sm text-gray-600 mb-4">
              {CONTACT_DETAILS.address}
            </p>
            
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>

          <p className="text-sm text-gray-300 max-w-xl mx-auto mb-6">
            Our team is ready to help you with any questions or concerns.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${CONTACT_DETAILS.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg text-sm hover:bg-gray-100 transition"
            >
              <FaPhone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={`mailto:${CONTACT_DETAILS.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 border border-white text-white rounded-lg text-sm hover:bg-white/10 transition"
            >
              <FaEnvelope className="h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
