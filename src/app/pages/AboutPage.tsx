import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useSEO } from '../../hooks/useSEO';

export function AboutPage() {

  useSEO({
    title: 'About TaxClaim | US Tax for Foreign Founders',
    description:
      'TaxClaim provides streamlined US tax compliance for foreign founders, cross-border businesses, and global entrepreneurs.',
    canonical: 'https://taxclaim.co/about',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Global Tax Compliance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Streamlined US tax compliance for foreign companies
            </p>
            <Link 
              to="/services" 
              className="bg-white text-blue-900 px-12 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              View Services
            </Link>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left */}
              <div className="bg-gradient-to-br from-gray-900 to-black text-white p-12 rounded-3xl shadow-2xl">
                <h2 className="text-4xl font-bold mb-6">Why Digital Services?</h2>
                <p className="text-xl mb-8 leading-relaxed">
                  Need to be in the same city as your US customers?
                </p>
                <ul className="space-y-4 text-lg mb-12">
                  <li className="flex items-start">
                    <span className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center font-bold text-black mr-4 mt-1">✓</span>
                    Foreign teams anywhere in the world
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center font-bold text-black mr-4 mt-1">✓</span>
                    Schedule around availability across time zones
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center font-bold text-black mr-4 mt-1">✓</span>
                    Secure document sharing & collaboration
                  </li>
                </ul>
              </div>

              {/* Right */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Form 5472 for Non-Residents</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Multi-state compliance</li>
                    <li>• Alert monitoring</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Individual & Business Tax</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• R&D credits</li>
                    <li>• Audit representation</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Sales & Use Management</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Tax planning & strategy</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Industries & Countries */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">

              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 text-white p-12 rounded-3xl shadow-xl h-80 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Industries We Serve</h3>
                </div>
                <ul className="text-xl space-y-2">
                  <li>• Cross-border E-commerce</li>
                  <li>• Professional Services</li>
                  <li>• Healthcare</li>
                  <li>• Manufacturing & Consulting</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-700 to-gray-800 text-white p-12 rounded-3xl shadow-xl h-80 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Countries We Serve</h3>
                </div>
                <ul className="text-xl space-y-2 columns-2">
                  <li>• United States 🇺🇸</li>
                  <li>• United Kingdom 🇬🇧</li>
                  <li>• India 🇮🇳</li>
                  <li>• Germany 🇩🇪</li>
                  <li>• Singapore 🇸🇬</li>
                  <li>• Netherlands 🇳🇱</li>
                  <li>• Canada 🇨🇦</li>
                  <li>• China 🇨🇳</li>
                  <li>• New Zealand 🇳🇿</li>
                  <li>• South Africa 🇿🇦</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Simplify Your US Tax Compliance?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Schedule a free consultation with our tax experts today.
            </p>
            <div className="space-x-4">
              <Link 
                to="/contact" 
                className="bg-white text-blue-700 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300 inline-block"
              >
                Get Started Free
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition duration-300 inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
