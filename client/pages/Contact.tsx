import { Layout } from "@/components/Layout";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "1-XXX-XXX-XXXX",
      description: "24/7 Crisis Hotline",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@etyw.ca",
      description: "General inquiries",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Main Street",
      description: "City, Province, Postal Code",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "24/7 Crisis Support",
      description: "Walk-in: 8am-8pm Daily",
    },
  ];

  const offices = [
    {
      name: "Main Office & Shelter",
      address: "123 Main Street, City, Province",
      phone: "1-XXX-XXX-XXXX",
      hours: "24/7 Crisis Support, Walk-in 8am-8pm",
      services: [
        "Emergency Shelter",
        "Counseling",
        "Case Management",
        "Life Skills Training",
      ],
    },
    {
      name: "Outreach & Community Hub",
      address: "456 Community Avenue, City, Province",
      phone: "1-XXX-XXX-XXXX",
      hours: "Monday-Friday 9am-5pm",
      services: [
        "Community Outreach",
        "Group Programs",
        "Job Training",
        "Resource Navigation",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-teal-600 text-white py-16 md:py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/10679195/pexels-photo-10679195.jpeg"
            alt="Hands together symbolizing unity and community connection"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-blue-600/80 to-teal-600/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Get in touch with ETYW. We're here to help, answer questions, and
            support your journey.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center hover:shadow-lg transition-all"
                >
                  <Icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {info.label}
                  </h3>
                  <p className="font-bold text-primary mb-2">{info.value}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Our Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {office.name}
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Address</p>
                    <p className="text-gray-900 font-medium">{office.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <a
                      href={`tel:${office.phone}`}
                      className="text-primary font-medium hover:underline"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Hours</p>
                    <p className="text-gray-900">{office.hours}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-3 font-semibold">
                    Services Available
                  </p>
                  <ul className="space-y-2">
                    {office.services.map((service, j) => (
                      <li
                        key={j}
                        className="text-gray-700 text-sm flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Send Us a Message
            </h2>
            <p className="text-gray-700 mb-8">
              Have a question? Want to volunteer or partner with us? Fill out
              the form below and we'll get back to you soon.
            </p>

            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="1-XXX-XXX-XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject *
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select a subject...</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="donation">Donation Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="rounded border-gray-300"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I agree to be contacted about my inquiry
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-red-500 text-white font-semibold py-3 sm:py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-base"
              >
                <Send size={20} /> Send Message
              </button>

              <p className="text-xs text-gray-600 text-center">
                For urgent matters, please call our crisis line: 1-XXX-XXX-XXXX
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: "Are your services free?",
                a: "Yes, all ETYW services are free and available to those who need them.",
              },
              {
                q: "Do I need to be referred by someone else?",
                a: "No, you can self-refer. Simply reach out to us and we'll help you get started.",
              },
              {
                q: "Is everything confidential?",
                a: "Yes, your privacy and safety are our highest priorities. All services are confidential.",
              },
              {
                q: "What if I'm in crisis right now?",
                a: "Call our 24/7 crisis hotline immediately: 1-XXX-XXX-XXXX. We're here to help right now.",
              },
              {
                q: "Can I visit without an appointment?",
                a: "Yes, we welcome walk-ins during our office hours: 8am-8pm daily. Emergency support is available 24/7.",
              },
              {
                q: "How can I help or support your work?",
                a: "You can donate, volunteer, or partner with us. Contact us and we'll discuss the best way for you to help.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-3 text-lg">
                  {faq.q}
                </h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
