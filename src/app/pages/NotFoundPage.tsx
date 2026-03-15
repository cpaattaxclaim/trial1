import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Home, ArrowRight, Phone, Mail, FileText, HelpCircle } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>

      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* 404 Display */}
          <div className="relative mb-8">
            <div className="text-[180px] font-bold text-slate-100 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide">
                Page Not Found
              </div>
            </div>
          </div>

          <h1 className="text-3xl text-slate-900 mb-4">
            Looks like this page took a wrong turn
          </h1>
          <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
            The page you're looking for doesn't exist or may have been moved. Don't worry, your taxes are still in good hands.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/" className="cursor-pointer">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 cursor-pointer">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link to="/contact" className="cursor-pointer">
              <Button size="lg" variant="outline" className="px-8 cursor-pointer">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="border-t border-gray-100 pt-12">
            <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide">You might be looking for</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: 'Our Services', href: '/services', icon: FileText },
                { label: 'About TaxClaim', href: '/about', icon: Home },
                { label: 'FAQ', href: '/faq', icon: HelpCircle },
                { label: 'Blog', href: '/blog', icon: FileText },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center gap-2 p-4 border border-gray-200 rounded-xl hover:border-teal-400 hover:text-teal-600 transition-colors text-gray-600 text-sm cursor-pointer"
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-500">
            <a href={`mailto:${'cpa'}@${'taxclaim'}.co`} className="flex items-center gap-2 hover:text-teal-600 transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              cpa&#64;taxclaim.co
            </a>
            <a href="tel:+14153047262" className="flex items-center gap-2 hover:text-teal-600 transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              +1 (415) 304-7262
            </a>
          </div>

        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
