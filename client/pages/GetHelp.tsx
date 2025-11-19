import { Layout } from "@/components/Layout";
import { Phone, AlertCircle, MapPin, Clock, Shield } from "lucide-react";

export default function GetHelp() {
  const resources = [
    {
      title: "Crisis Support",
      icon: AlertCircle,
      description: "Immediate support for emergencies",
      details: [
        "24/7 Crisis Hotline: 1-XXX-XXX-XXXX",
        "Text Support: Text ETYW to XXXXX",
        "Crisis counseling available anytime",
        "Emergency shelter coordination",
      ],
    },
    {
      title: "Housing Support",
      icon: MapPin,
      description: "Find safe housing and shelter",
      details: [
        "Emergency shelter placement",
        "Transitional housing programs",
        "Housing search assistance",
        "Rent support and housing advocacy",
      ],
    },
    {
      title: "Support Hours",
      icon: Clock,
      description: "When you can reach us",
      details: [
        "Walk-in services: Daily 8am-8pm",
        "Crisis line: 24/7",
        "Counseling appointments: By booking",
        "Group programs: Weekday evenings",
      ],
    },
    {
      title: "Safety & Confidentiality",
      icon: Shield,
      description: "Your privacy is protected",
      details: [
        "All services are confidential",
        "No judgment or discrimination",
        "You control your information",
        "Safe, welcoming environment",
      ],
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Reach Out",
      description:
        "Call our crisis line, visit in person, or fill out a form below. You can share as much or as little as you're comfortable with.",
    },
    {
      number: "2",
      title: "Initial Assessment",
      description:
        "Our team will listen to your situation and understand what you need most right now.",
    },
    {
      number: "3",
      title: "Create a Plan",
      description:
        "Together, we'll develop a plan that addresses your immediate needs and supports your long-term goals.",
    },
    {
      number: "4",
      title: "Begin Your Journey",
      description:
        "With support and services in place, you'll begin rebuilding your life with dignity and strength.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-teal-600 text-white py-16 md:py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7203899/pexels-photo-7203899.jpeg"
            alt="Diverse hands united in solidarity and support"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-blue-600/80 to-teal-600/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Help Now</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            You are not alone. We're here to support you with compassion,
            confidentiality, and respect. Reach out today.
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-accent text-white py-12 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 flex-shrink-0" />
              <div>
                <div className="text-sm text-red-100">Crisis Hotline</div>
                <div className="text-2xl font-bold">1-XXX-XXX-XXXX</div>
              </div>
            </div>
            <div className="border-l border-red-200 pl-8 md:pl-16 hidden md:block"></div>
            <div className="text-center md:text-left">
              <div className="text-sm text-red-100 mb-1">Available 24/7</div>
              <p className="text-red-100">
                Free, confidential support whenever you need it
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            How We Can Help
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <div key={i} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <Icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    {resource.description}
                  </p>
                  <ul className="space-y-3">
                    {resource.details.map((detail, j) => (
                      <li key={j} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-accent font-bold">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Your Journey Starts Here
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-xl p-6 border-2 border-primary h-full">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 w-4 h-0.5 bg-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-8">
            Fill out the form below and we'll get back to you as soon as
            possible. Or call our crisis line for immediate support.
          </p>

          <form className="space-y-6 bg-gray-50 p-4 sm:p-8 rounded-xl border border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name (optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com (optional)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="1-XXX-XXX-XXXX (optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                What Kind of Support Do You Need?
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select a service...</option>
                <option value="housing">Emergency Housing</option>
                <option value="mental-health">Mental Health Support</option>
                <option value="counseling">Counseling</option>
                <option value="legal">Legal Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Tell Us More (Optional)
              </label>
              <textarea
                rows={4}
                placeholder="Share what's on your mind. We're here to listen."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-red-500 text-white font-semibold py-3 sm:py-4 rounded-lg transition-colors text-base"
            >
              Get in Touch
            </button>

            <p className="text-xs text-gray-600 text-center">
              Your information is private and confidential. We only use it to
              help you.
            </p>
          </form>
        </div>
      </section>

      {/* Important Info Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 to-orange-50 border-t-4 border-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Important Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                You Are Safe Here
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ No judgement or stigma</li>
                <li>✓ Complete confidentiality</li>
                <li>✓ Welcoming to all backgrounds</li>
                <li>✓ Professional, compassionate staff</li>
                <li>✓ Your needs come first</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ No requirements or strings attached</li>
                <li>✓ Free services for all</li>
                <li>✓ Flexible, personalized support</li>
                <li>✓ Choice and self-determination</li>
                <li>✓ Support for your journey</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
