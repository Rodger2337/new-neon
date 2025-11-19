import { Layout } from "@/components/Layout";
import { CheckCircle, Home, Heart, Users, Briefcase, Shield, BookOpen } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Emergency Housing & Shelter",
      description:
        "Safe, welcoming emergency shelter and transitional housing with 24/7 support for youth and women in crisis.",
      details: [
        "Emergency crisis shelter available 24/7",
        "Transitional housing with varying support levels",
        "Safe, trauma-informed living environments",
        "Support services and case management included",
      ],
    },
    {
      icon: Heart,
      title: "Mental Health & Counseling",
      description:
        "Comprehensive mental health support including trauma-informed counseling and therapeutic programs.",
      details: [
        "Individual counseling and therapy",
        "Support groups for healing and connection",
        "Trauma-informed care approach",
        "Psychiatric referrals and medication management",
        "Crisis mental health support",
      ],
    },
    {
      icon: Users,
      title: "Life Skills & Empowerment",
      description:
        "Comprehensive training in employment readiness, financial literacy, health, and independent living.",
      details: [
        "Job readiness and employment training",
        "Financial literacy and budgeting workshops",
        "Health and wellness education",
        "Parenting support for mothers",
        "Peer mentoring and support networks",
      ],
    },
    {
      icon: Briefcase,
      title: "Addiction Recovery Services",
      description:
        "Evidence-based addiction support with referrals to specialized counseling and harm reduction services.",
      details: [
        "Addiction counseling and recovery programs",
        "Harm reduction services and referrals",
        "Connection to specialized treatment",
        "Peer recovery support",
        "Relapse prevention strategies",
      ],
    },
    {
      icon: Shield,
      title: "Safety & Legal Support",
      description:
        "Specialized support for those experiencing abuse with legal advocacy and safety planning.",
      details: [
        "Safety planning and protective measures",
        "Connection to legal advocates",
        "Support navigating justice systems",
        "Domestic violence specialized services",
        "Trauma-informed crisis response",
      ],
    },
    {
      icon: BookOpen,
      title: "Education & Community Outreach",
      description:
        "Public education, prevention programs, and community engagement to address root causes of homelessness.",
      details: [
        "Community workshops and training",
        "School-based prevention programs",
        "Bystander intervention training",
        "Public awareness campaigns",
        "Partnership with community organizations",
      ],
    },
  ];

  const accessibilityFeatures = [
    "Culturally safe services for Indigenous clients",
    "Language interpretation services available",
    "Anti-racism training for all staff",
    "LGBTQ2+ affirming programs",
    "Specialized services for newcomers and refugees",
    "Accessible physical environments",
    "Transportation assistance when available",
    "Childcare support for parents",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-teal-600 text-white py-16 md:py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5217852/pexels-photo-5217852.jpeg"
            alt="Compassionate counseling and mental health support"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-blue-600/80 to-teal-600/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Comprehensive, trauma-informed, and evidence-based support designed
            to meet the diverse needs of youth and women on their journey to
            thriving.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 p-8 hover:shadow-lg hover:border-primary transition-all"
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.details.map((detail, j) => (
                      <div key={j} className="flex gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accessibility & Inclusion */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Accessible & Inclusive Services
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            We are committed to ensuring all individuals feel welcome and
            supported. Our services are designed with accessibility and
            cultural safety at the forefront.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accessibilityFeatures.map((feature, i) => (
              <div key={i} className="flex gap-3 bg-white rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Our Holistic Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Trauma-Informed Care
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                All our services are grounded in trauma-informed practice,
                recognizing the pervasive impact of trauma on those experiencing
                homelessness. We create safe, respectful environments where
                healing can occur.
              </p>
              <ul className="space-y-3">
                {[
                  "Safety and physical security",
                  "Trustworthiness and transparency",
                  "Peer support and mutual respect",
                  "Empowerment and choice",
                  "Cultural sensitivity",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Strengths-Based Practice
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We recognize and build upon the strengths, resilience, and
                capabilities of each individual. Rather than focusing only on
                problems, we help clients discover and develop their own
                resources for change.
              </p>
              <ul className="space-y-3">
                {[
                  "Building on existing strengths and resilience",
                  "Encouraging self-determination",
                  "Supporting personal goals and aspirations",
                  "Fostering hope and possibility",
                  "Celebrating progress and achievements",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wrap-Around Support */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Comprehensive Wrap-Around Services
          </h2>

          <div className="bg-white rounded-xl p-8 border border-primary/20">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We understand that homelessness and poverty are complex issues
              requiring integrated solutions. Our wrap-around approach means:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Case Management",
                  description:
                    "Dedicated support coordinating all services and navigating complex systems",
                },
                {
                  title: "Seamless Referrals",
                  description:
                    "Connections to healthcare, legal services, employment, and community resources",
                },
                {
                  title: "Flexible Support",
                  description:
                    "Services adapted to individual needs and circumstances as they change",
                },
                {
                  title: "Continuity of Care",
                  description:
                    "Ongoing relationship with service providers throughout the journey",
                },
                {
                  title: "Peer Support",
                  description:
                    "Connection with others with lived experience for mutual support",
                },
                {
                  title: "Family Support",
                  description:
                    "Services and support for families, partners, and children when applicable",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-accent pl-6">
                  <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Get Support?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            All our services are confidential and free. We're here to support
            you on your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-help"
              className="bg-accent hover:bg-red-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Get Help Now
            </a>
            <a
              href="/contact"
              className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
