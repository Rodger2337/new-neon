import { Layout } from "@/components/Layout";
import { CheckCircle } from "lucide-react";

export default function About() {
  const missionPoints = [
    "Provide safe, welcoming spaces and comprehensive services in a trauma-informed, strengths-based manner",
    "Honor diversity and inclusion, including culturally safe services for Indigenous and equity-deserving populations",
    "Collaborate with health agencies, Indigenous organizations, community groups, and policy-makers",
    "Engage clients as leaders and peer mentors to advocate for their own needs",
    "Use data and evidence to design, evaluate, and continuously improve our programs",
  ];

  const visionPoints = [
    "Safe Housing for All: Every youth and woman has access to secure, affordable housing",
    "Inclusive Communities: Services are culturally safe, anti-racist, and gender-responsive",
    "Healing and Empowerment: Complex needs are met with compassion and resources",
    "Equity and Reconciliation: Institutional barriers are dismantled and policies support self-determination",
  ];

  const objectives = [
    {
      title: "Service Delivery",
      description:
        "By 2026, deliver integrated support to homeless youth and women annually, including stable housing, intensive case management, mental health counseling, addiction recovery, and life-skills workshops.",
    },
    {
      title: "Community Impact",
      description:
        "Strengthen community capacity through public education campaigns, workshops, and research partnerships to reduce stigma and build prevention networks.",
    },
    {
      title: "Partnership Building",
      description:
        "Formalize collaborative partnerships with health agencies, Indigenous-led groups, and social service agencies to ensure seamless support for clients.",
    },
    {
      title: "Advocacy",
      description:
        "Actively engage in policy and social change efforts to improve the system of care and amplify the voices of those with lived experience.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-teal-600 text-white py-16 md:py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5711372/pexels-photo-5711372.jpeg"
            alt="Diverse group supporting each other in community circle"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-blue-600/80 to-teal-600/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ETYW</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            We believe every young person and woman deserves safe housing,
            compassionate support, and the opportunity to thrive.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Empower to Thrive Youth and Women Network empowers homeless youth
            and women facing mental health challenges, addiction, and abuse to
            rebuild their lives with dignity and strength. We deliver
            integrated, trauma-informed support and wrap-around services, and we
            amplify the voices of those with lived experience. Our work is
            guided by Canadian values of equity, inclusion, and reconciliation,
            and by evidence-based best practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-bold text-primary mb-6">
                Key Mission Elements
              </h3>
              <div className="space-y-4">
                {missionPoints.map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/7202777/pexels-photo-7202777.jpeg"
                alt="Diverse women showing confidence and empowerment"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-4">
                What We Stand For
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Holistic Support:</strong> Comprehensive services
                    addressing all aspects of wellbeing
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Equity:</strong> Services tailored to diverse
                    backgrounds and needs
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Partnerships:</strong> Collaborative approach with
                    community and Indigenous partners
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Empowerment:</strong> Clients as leaders and
                    advocates
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Evidence-Based:</strong> Programs grounded in
                    research and data
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Our vision is an equitable, inclusive society where every young
            person and woman thrives in a safe, supportive community. We foresee
            a Canada where homelessness is rare, brief and non-recurring, and
            where stable housing and holistic supports are recognized as a basic
            human right.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visionPoints.map((point, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <h3 className="font-bold text-primary mb-3">
                  {point.split(":")[0]}
                </h3>
                <p className="text-gray-700">{point.split(":")[1]?.trim()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Organizational Objectives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className="border-l-4 border-accent pl-6 py-4 hover:bg-gray-50 rounded-r-lg transition-colors"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {obj.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canadian Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Canadian Values & Reconciliation
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Our work is rooted in Canadian values of equity, inclusion, and
            reconciliation. We are committed to:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Indigenous Leadership",
                description:
                  "Supporting Indigenous self-determination and incorporating Indigenous Elders and leaders in our advisory councils",
              },
              {
                title: "Systemic Change",
                description:
                  "Working to dismantle institutional barriers and advance national frameworks like the Truth and Reconciliation Commission calls to action",
              },
              {
                title: "Inclusive Services",
                description:
                  "Serving women and youth of all backgrounds, including Indigenous, immigrant, racialized, and LGBTQ2+ communities",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-primary/20"
              >
                <h3 className="font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
