import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoWhiteImg from '../../assets/Footer.webp';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

          {/* Column 1: Brand */}
          <div>
            <div className="mb-4">
              <img src={logoWhiteImg} alt="TaxClaim - CPA and Business Advisory" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              US tax compliance and advisory for foreign founders and cross-border businesses - serving clients across 11 countries.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/international-tax" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  International Tax
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: International Tax */}
          <div>
            <h3 className="font-semibold mb-5">International Tax</h3>
            <ul className="space-y-3 text-sm break-words">
              <li>
                <Link to="/international-tax" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  International Tax and Compliance
                </Link>
              </li>
              <li>
                <Link to="/international-tax#form-5472" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  Form 5472 - Foreign-Owned US Entities
                </Link>
              </li>
              <li>
                <Link to="/international-tax#form-5471" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  Form 5471 - US Persons with Foreign Corps
                </Link>
              </li>
              <li>
                <Link to="/international-tax#fbar-fatca" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  FBAR and FATCA Reporting
                </Link>
              </li>
              <li>
                <Link to="/international-tax#foreign-founder" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  Foreign Founder Setup Package
                </Link>
              </li>
              <li>
                <Link to="/international-tax#cross-border" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  Cross-Border Tax Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Domestic Services */}
          <div>
            <h3 className="font-semibold mb-5">Domestic Services</h3>
            <ul className="space-y-3 text-sm break-words">
              <li>
                <Link to="/services#business-tax" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  Business Tax Filing
                </Link>
              </li>
              <li>
                <Link to="/services#tax-filing" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  Individual Tax Filing
                </Link>
              </li>
              <li>
                <Link to="/services#formation" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  Company Formation
                </Link>
              </li>
              <li>
                <Link to="/services#bookkeeping" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  Bookkeeping Services
                </Link>
              </li>
              <li>
                <Link to="/services#sales-tax" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  Sales and Use Tax
                </Link>
              </li>
              <li>
                <Link to="/services#resolution" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  IRS Notice Resolution
                </Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  Business Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="font-semibold mb-5">Contact Us</h3>

            <div className="mb-4">
              <a
                href="https://wa.me/14153047262"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors cursor-pointer text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Chat
              </a>
            </div>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-teal-300 flex-shrink-0" />
                <a href={`mailto:${'cpa'}@${'taxclaim'}.co`} className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  cpa&#64;taxclaim.co
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-teal-300 flex-shrink-0" />
                <a href="tel:+14153047262" className="text-gray-400 hover:text-teal-300 transition-colors cursor-pointer">
                  +1 (415) 304-7262
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-teal-300 flex-shrink-0" />
                <span className="text-gray-400">3401 Iron Point Drive,<br />San Jose, CA 95134</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} TaxClaim. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-teal-300 transition-colors cursor-pointer">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-teal-300 transition-colors cursor-pointer">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-teal-300 transition-colors cursor-pointer">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
