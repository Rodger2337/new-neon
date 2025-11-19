import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/get-help", label: "Get Help" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 w-full">
        <div className="w-full px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <div className="w-9 sm:w-10 h-9 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">E</span>
              </div>
              <div className="hidden xs:block">
                <div className="text-xs sm:text-sm font-bold text-primary">ETYW</div>
                <div className="text-xs text-gray-600 leading-tight">
                  Empower
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-2 md:gap-3">
              <Link
                to="/get-help"
                className="bg-accent hover:bg-red-500 text-white px-4 sm:px-6 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors"
              >
                Get Help
              </Link>
              <Link
                to="/donate"
                className="border-2 border-secondary text-secondary hover:bg-yellow-50 px-4 sm:px-6 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors"
              >
                Donate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-3 pb-3 flex flex-col gap-2 border-t border-gray-200 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/get-help"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-accent hover:bg-red-500 text-white px-4 py-3 rounded-lg font-medium text-sm transition-colors"
              >
                Get Help
              </Link>
              <Link
                to="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="border-2 border-secondary text-secondary hover:bg-yellow-50 px-4 py-3 rounded-lg font-medium text-sm transition-colors text-center"
              >
                Donate
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Organization Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <div>
                  <div className="text-sm font-bold">ETYW</div>
                  <div className="text-xs text-gray-400">Empower to Thrive</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Empowering homeless youth and women to rebuild their lives with
                dignity and strength.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-sm mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-sm mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Emergency Housing</li>
                <li>Mental Health Support</li>
                <li>Life Skills Training</li>
                <li>Addiction Support</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-sm mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="tel:1234567890"
                    className="hover:text-white transition-colors"
                  >
                    1-XXX-XXX-XXXX
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@etyw.ca"
                    className="hover:text-white transition-colors"
                  >
                    info@etyw.ca
                  </a>
                </li>
                <li className="text-xs mt-4">
                  24/7 Crisis Support Available
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 ETYW - Empower to Thrive Youth and Women Network. All
              rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
