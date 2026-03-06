import { Link } from 'react-router'; // HIGHLIGHT: Fixed back to react-router
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  FileText, Building2, Calculator, ShieldCheck, 
  BookOpen, TrendingUp, CheckCircle2, Phone, 
  MessageCircle, FileCheck, CheckSquare
} from 'lucide-react';

export function ServicesPage() {
  const scrollToService = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    {
      id: 'tax-filing',
      icon: FileText,
      title: 'Individual US Tax Filing',
      price: 'Starting from $200',
      description: 'Professional Federal and State tax preparation for US expats and residents. We maximize your 2025 deductions and ensure 100% IRS compliance.',
      included: ['Federal + 1 state tax return', 'W-2, 1099, and investment income', 'Deduction & Credit optimization', 'Secure E-filing'],
      notIncluded: ['Advanced tax planning', 'Audit defense representation', 'International FBAR reporting']
    },
    {
      id: 'business-tax',
      icon: Building2,
      title: 'Business Tax Preparation',
      price: 'Starting from $750',
      subtitle: 'Partnerships (1065) & S-Corps (1120-S)',
      description: 'Expert tax compliance for pass-through entities. We handle the complex business returns so your Schedules K-1 are ready on time.',
      included: ['Form 1065 or 1120-S preparation', 'Shareholder/Partner K-1 generation', 'State-level business filings'],
      notIncluded: ['Year-round advisory', 'Quarterly estimated tax math', 'Multi-state nexus filing']
    },
    {
      id: 'sales-tax',
      icon: BookOpen,
      title: 'Sales & Use Tax Compliance',
      price: 'Starting from $300/month',
      description: 'Monthly sales tax calculation and nexus monitoring to keep your e-commerce or retail business compliant across US states.',
      included: ['Monthly calculations', 'Multi-state support', 'Nexus analysis'],
      notIncluded: ['Audit representation']
    },
    {
      id: 'formation',
      icon: Building2,
      title: 'US Company Formation',
      price: 'Starting from $300',
      subtitle: 'LLC / C-Corp Registration',
      description: 'Start your US business with confidence. We handle the Articles of Organization, EIN application, and Operating Agreements.',
      included: ['Entity selection', 'Articles of Incorporation', 'EIN Application', 'Operating Agreement'],
      notIncluded: ['State filing fees']
    },
    {
      id: 'bookkeeping',
      icon: Calculator,
      title: 'Professional Bookkeeping',
      price: 'Starting from $300/month',
      description: 'Accurate financial records and monthly reconciliations to keep your business audit-ready and tax-prepared.',
      included: ['Transaction coding', 'Bank reconciliation', 'QuickBooks support'],
      notIncluded: ['Historical clean-up']
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "US Tax Preparation and Business Consulting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TaxClaim"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tax & Compliance Services",
      "itemListElement": services.map(s => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.description
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Professional US Tax Filing & Business Services | TaxClaim</title>
        <meta name="description" content="Expert US Individual & Business Tax Filing starting at $200." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-6">Expert US Tax Filing & Business Advisory</h1>
            <p className="text-xl text-gray-300">Transparent, competitive pricing for all your Federal and State tax needs.</p>
          </div>
        </section>

        {/* --- STICKY NAVIGATION --- */}
        <nav className="sticky top-[90px] z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1 md:pb-0">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap mr-2">Quick Access:</span>
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  className="px-4 py-2 bg-slate-50 hover:bg-teal-600 hover:text-white rounded-full text-xs font-bold border border-slate-100 transition-all whitespace-nowrap"
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <section className="py-20" aria-label="Our Service Offerings">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  id={service.id}
                  className="scroll-mt-[190px] bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid md:grid-cols-3">
                    <div className="md:col-span-1 bg-slate-50 p-8 border-r border-gray-100">
                      <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-teal-600" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2 text-slate-900">{service.title}</h2>
                      <div className="text-3xl font-bold text-slate-900 mb-4">{service.price}</div>
                      <p className="text-gray-700 mb-6 text-sm leading-relaxed">{service.description}</p>
                      <Link to="/contact">
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 py-6 font-bold">Get Started</Button>
                      </Link>
                    </div>

                    <div className="md:col-span-2 p-8 lg:p-12">
                      <h3 className="text-lg font-bold mb-6 text-slate-900">What's Included</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.included.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
