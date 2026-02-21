import { ClientConfig } from "@/lib/clients";
import ClientLogo from "./ClientLogo";
import ContactForm from "./ContactForm";

interface LandingPageProps {
  config: ClientConfig;
}

export default function LandingPage({ config }: LandingPageProps) {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: config.backgroundColor }}
    >
      {/* Header */}
      <header className="border-b px-6 py-4" style={{ borderColor: config.accentColor + "40" }}>
        <div className="mx-auto max-w-7xl">
          <ClientLogo config={config} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Hero Content */}
            <div className="flex flex-col justify-center space-y-6">
              <h1
                className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
                style={{ color: config.textColor }}
              >
                Welcome to {config.name}
              </h1>
              <p
                className="text-lg leading-relaxed md:text-xl"
                style={{ color: config.textColor + "CC" }}
              >
                We provide exceptional services tailored to your needs. 
                Get in touch with us today to learn how we can help your business grow.
              </p>
              <div className="flex flex-wrap gap-4">
                <div
                  className="rounded-lg px-4 py-2"
                  style={{ backgroundColor: config.accentColor + "20" }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: config.primaryColor }}
                  >
                    ✓ Trusted Partner
                  </span>
                </div>
                <div
                  className="rounded-lg px-4 py-2"
                  style={{ backgroundColor: config.accentColor + "20" }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: config.primaryColor }}
                  >
                    ✓ Expert Team
                  </span>
                </div>
                <div
                  className="rounded-lg px-4 py-2"
                  style={{ backgroundColor: config.accentColor + "20" }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: config.primaryColor }}
                  >
                    ✓ Proven Results
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="rounded-xl p-8 shadow-lg" style={{ backgroundColor: "white" }}>
              <ContactForm config={config} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16" style={{ backgroundColor: "white" }}>
        <div className="mx-auto max-w-7xl">
          <h2
            className="mb-12 text-center text-3xl font-bold"
            style={{ color: config.textColor }}
          >
            Why Choose {config.name}?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Quality Service",
                description: "We deliver top-notch solutions that exceed expectations.",
                icon: "⭐",
              },
              {
                title: "Expert Team",
                description: "Our experienced professionals are here to help you succeed.",
                icon: "👥",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance whenever you need us.",
                icon: "🔄",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-lg p-6 text-center"
                style={{ backgroundColor: config.backgroundColor }}
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3
                  className="mb-2 text-xl font-semibold"
                  style={{ color: config.textColor }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: config.textColor + "AA" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t px-6 py-8"
        style={{ borderColor: config.accentColor + "40", backgroundColor: config.backgroundColor }}
      >
        <div className="mx-auto max-w-7xl text-center">
          <p style={{ color: config.textColor + "AA" }}>
            © {new Date().getFullYear()} {config.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
