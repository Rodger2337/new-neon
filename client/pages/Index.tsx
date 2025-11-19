import { Layout } from "@/components/Layout";
import { Heart, Home, Brain, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const services = [
    {
      icon: Home,
      title: "Emergency Housing",
      description:
        "Safe, welcoming emergency shelter and transitional housing for homeless youth and women in crisis.",
    },
    {
      icon: Brain,
      title: "Mental Health Support",
      description:
        "Trauma-informed counseling, support groups, and empowerment programs for healing and resilience.",
    },
    {
      icon: Users,
      title: "Life Skills Training",
      description:
        "Comprehensive training in job readiness, budgeting, health, and independent living skills.",
    },
    {
      icon: Heart,
      title: "Addiction & Recovery",
      description:
        "Evidence-based addiction counseling and referrals to specialized psychiatric and harm reduction services.",
    },
  ];

  const values = [
    {
      title: "Holistic Support",
      description:
        "Safe, welcoming spaces with comprehensive services in a trauma-informed, strengths-based manner.",
    },
    {
      title: "Equity & Inclusion",
      description:
        "Culturally safe services honoring diversity and respecting each person's unique background.",
    },
    {
      title: "Partnerships",
      description:
        "Collaboration with health agencies, Indigenous organizations, and community groups for seamless care.",
    },
    {
      title: "Empowerment",
      description:
        "Engaging clients as leaders and peer mentors to amplify lived experience and self-advocacy.",
    },
    {
      title: "Evidence-Based",
      description:
        "Using data and proven models to design, evaluate, and continuously improve our programs.",
    },
    {
      title: "Reconciliation",
      description:
        "Supporting Indigenous self-determination and addressing systemic barriers with compassion.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-teal-600 text-white py-20 md:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7952093/pexels-photo-7952093.jpeg"
            alt="Diverse women and young girl standing together in unity and celebration of empowerment"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-blue-600/75 to-teal-600/75"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empower to Thrive Youth and Women Network
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              We empower homeless youth and women facing mental health challenges
              to rebuild their lives with dignity, strength, and hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-help"
                className="bg-accent hover:bg-red-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                Get Help Now <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We empower homeless youth and women facing mental health
                challenges, addiction, and abuse to rebuild their lives with
                dignity and strength.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We deliver integrated, trauma-informed support and wrap-around
                services, guided by Canadian values of equity, inclusion, and
                reconciliation, and by evidence-based best practices.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Read Full Mission <ArrowRight size={20} />
              </Link>
            </div>
            <div className="order-1 md:order-2 animate-slide-up">
              <img
                src="https://images.pexels.com/photos/7202777/pexels-photo-7202777.jpeg"
                alt="Diverse women in empowered poses showing confidence and strength"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Checklist Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20 animate-slide-up">
              <div className="space-y-4">
                {[
                  "Safe housing and stable accommodation",
                  "Mental health and addiction counseling",
                  "Life skills and employment training",
                  "Trauma-informed peer support",
                  "Cultural safety and equity",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/10679195/pexels-photo-10679195.jpeg"
                alt="Hands together symbolizing unity and community support"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Our Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive, trauma-informed support designed to meet the unique
                needs of each individual on their journey to thriving.
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/5217852/pexels-photo-5217852.jpeg"
              alt="Compassionate mental health counseling and therapy session"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all animate-fade-in hover:-translate-y-1"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <img
              src="https://images.pexels.com/photos/5711372/pexels-photo-5711372.jpeg"
              alt="Diverse group in supportive circle discussing and empowering each other"
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Our Values
              </h2>
              <p className="text-lg text-gray-600">
                Everything we do is guided by these core principles that put people at the center
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-primary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <h3 className="text-lg font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Impact</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Making measurable difference in lives through evidence-based,
                compassionate support. Real stories of transformation and hope.
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/7078200/pexels-photo-7078200.jpeg"
              alt="Young women laughing and enjoying friendship in nature"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-r from-primary to-teal-600 text-white rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Numbers</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: "500+",
                  label: "Youth & Women Served",
                  description: "Direct support annually",
                },
                {
                  number: "24/7",
                  label: "Crisis Support",
                  description: "Always available when needed",
                },
                {
                  number: "95%",
                  label: "Safe Housing Achieved",
                  description: "Within 6 months of entry",
                },
              ].map((stat, i) => (
                <div key={i} className="text-center animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold mb-2">{stat.label}</div>
                  <p className="text-blue-100">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/20 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Need Support?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              If you or someone you know is homeless or in crisis, we're here to
              help. Reach out to our team for immediate, confidential support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-help"
                className="bg-accent hover:bg-red-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Help Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Banner */}
      <section className="py-12 bg-gradient-to-r from-secondary/20 to-yellow-100 border-t border-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Support Our Mission
              </h3>
              <p className="text-gray-700">
                Your donation helps us provide life-changing support to those
                who need it most.
              </p>
            </div>
            <Link
              to="/donate"
              className="bg-secondary hover:bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <Heart size={20} /> Donate Today
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
