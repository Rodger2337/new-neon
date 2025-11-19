import { Layout } from "@/components/Layout";
import { Heart, Home, Users, Utensils, BookOpen, Stethoscope } from "lucide-react";

export default function Donate() {
  const donationOptions = [
    {
      amount: "$25",
      impact: "Provides one meal and emergency supplies",
    },
    {
      amount: "$50",
      impact: "Supports one hour of counseling services",
    },
    {
      amount: "$100",
      impact: "Provides one night of safe shelter",
    },
    {
      amount: "$250",
      impact: "Covers a week of life skills training",
    },
    {
      amount: "$500",
      impact: "Supports one person's housing transition",
    },
    {
      amount: "Custom",
      impact: "You decide the impact",
    },
  ];

  const impactAreas = [
    {
      icon: Home,
      title: "Safe Housing",
      description:
        "Emergency shelter and transitional housing that provide safety and stability",
      percentage: 35,
    },
    {
      icon: Stethoscope,
      title: "Mental Health",
      description:
        "Trauma-informed counseling and mental health support services",
      percentage: 25,
    },
    {
      icon: BookOpen,
      title: "Life Skills",
      description:
        "Employment training, education, and skills development programs",
      percentage: 20,
    },
    {
      icon: Utensils,
      title: "Basic Needs",
      description: "Meals, clothing, hygiene products, and essential supplies",
      percentage: 15,
    },
    {
      icon: Users,
      title: "Operations",
      description:
        "Staff, administration, and infrastructure to support all services",
      percentage: 5,
    },
  ];

  const stories = [
    {
      name: "Sarah",
      quote:
        "Thanks to ETYW, I found stable housing and access to counseling. I never thought I could rebuild my life, but your support made it possible.",
    },
    {
      name: "Marcus",
      quote:
        "The life skills training and job support helped me get back on my feet. I have a job now and my own apartment. Thank you.",
    },
    {
      name: "Keisha",
      quote:
        "ETYW treated me with respect and dignity when I felt worthless. They helped me understand my trauma and gave me hope for the future.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-yellow-300 to-orange-300 py-16 md:py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7078200/pexels-photo-7078200.jpeg"
            alt="Women and youth thriving together in community"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-yellow-300/80 to-orange-300/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Support Our Mission
          </h1>
          <p className="text-lg text-gray-800 max-w-3xl">
            Your generosity directly impacts lives. Every donation helps provide
            safe housing, mental health support, and hope to those who need it
            most.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Where Your Donation Goes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {impactAreas.map((area, i) => {
                const Icon = area.icon;
                return (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                  >
                    <div className="flex gap-4 mb-4">
                      <Icon className="w-8 h-8 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {area.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {area.description}
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-accent to-primary rounded-full h-2"
                        style={{ width: `${area.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-gray-700 mt-2">
                      {area.percentage}% of donations
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  100% Transparency
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We believe in transparency and accountability. Every dollar
                  you donate goes directly to supporting the youth and women we
                  serve. Our organization is committed to maximum impact and
                  responsible stewardship of your generosity.
                </p>
                <div className="space-y-3">
                  {[
                    "Registered Canadian charity",
                    "Annual financial audits",
                    "Detailed impact reporting",
                    "Independent oversight",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Make Your Donation
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {donationOptions.map((option, i) => (
                <button
                  key={i}
                  className="bg-white border-2 border-gray-300 hover:border-primary hover:shadow-lg rounded-lg p-6 text-center transition-all group cursor-pointer"
                >
                  <div className="text-2xl font-bold text-primary group-hover:text-accent transition-colors mb-2">
                    {option.amount}
                  </div>
                  <p className="text-sm text-gray-700">{option.impact}</p>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-8 border-2 border-primary shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Complete Your Donation
              </h3>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
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
                    <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                      Donation Amount *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 bg-gray-100 border border-gray-300 rounded-l-lg text-gray-700 font-semibold">
                        $
                      </span>
                      <input
                        type="number"
                        required
                        min="1"
                        step="0.01"
                        className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary text-base"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                      Donation Frequency
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base">
                      <option value="one-time">One-time Donation</option>
                      <option value="monthly">Monthly Donation</option>
                      <option value="yearly">Yearly Donation</option>
                    </select>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-primary">
                      Tax Deductible:
                    </span>{" "}
                    ETYW is a registered Canadian charity. Your donation is tax
                    deductible. Receipt will be provided.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    className="rounded border-gray-300 mt-1"
                  />
                  <label htmlFor="anonymous" className="text-sm text-gray-700">
                    I prefer to remain anonymous
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="rounded border-gray-300 mt-1"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-700">
                    Send me updates about our programs and impact
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-red-500 text-white font-semibold py-3 sm:py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-base"
                >
                  <Heart size={20} /> Donate Now
                </button>
              </form>

              <p className="text-xs text-gray-600 text-center mt-4">
                Your payment is secure and encrypted. We accept credit cards,
                debit, and bank transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Real Stories of Change
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/20"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-secondary text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{story.quote}"
                </blockquote>
                <p className="font-bold text-primary">— {story.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Other Ways to Support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-4">
                Corporate Partnerships
              </h3>
              <p className="text-gray-700 mb-6">
                Organizations interested in supporting our mission through
                corporate sponsorships, matching funds, or in-kind donations.
              </p>
              <a
                href="/contact"
                className="text-accent font-semibold hover:underline"
              >
                Contact Us →
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-4">
                Volunteer
              </h3>
              <p className="text-gray-700 mb-6">
                Give your time and skills. We need volunteers for various
                programs and initiatives throughout the year.
              </p>
              <a
                href="/contact"
                className="text-accent font-semibold hover:underline"
              >
                Get Involved →
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-4">
                Leave a Legacy
              </h3>
              <p className="text-gray-700 mb-6">
                Consider including ETYW in your will or estate plan to create
                lasting impact for future generations.
              </p>
              <a
                href="/contact"
                className="text-accent font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions About Donating?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            We're here to help. Contact us to learn more about donation options,
            tax deductions, or how to support our work.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent hover:bg-red-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
}
