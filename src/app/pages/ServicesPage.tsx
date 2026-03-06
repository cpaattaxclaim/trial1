import { Link } from 'react-router'; 
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
      title: 'Individual Tax Filing',
      price: 'Starting from $200',
      description: 'Professional tax preparation and filing services for individuals, ensuring accuracy and maximum deductions.',
      included: ['Federal + 1 state tax return', 'W-2, 1099, and income forms', 'Deduction optimization', 'E-filing with confirmation'],
      notIncluded: ['Tax planning', 'Audit defence', 'International income']
    },
    {
      id: 'business-tax',
      icon: Building2,
      title: 'Business Tax Filing',
      price: 'Starting from $750',
      subtitle: 'Partnerships, S-Corps, C-Corps',
      description: 'Comprehensive business tax preparation for partnerships, S-Corporations, and C-Corporations.',
      included: ['Form 1065, 1120-S, or 1120', 'Schedule K-1 preparation', 'State business tax returns'],
      notIncluded: ['Year-round support', 'Quarterly estimates', 'Audit defence']
    },
    {
      id: 'sales-tax',
      icon: BookOpen,
      title: 'Sales & Use Tax',
      price: 'Starting from $300/month',
      description: 'Monthly sales tax compliance, calculation, and filing services to keep your business compliant.',
      included: ['Monthly calculations', 'Multi-state filing support', 'Nexus analysis', 'Rate monitoring'],
      notIncluded: ['Audit defence assistance']
    },
    {
      id: 'formation',
      icon: Building2,
      title: 'Company Formation',
      price: 'Starting from $300',
      subtitle: 'LLC / C-Corp',
      description: 'Complete business formation services to get your company set up correctly from day one.',
      included: ['Entity selection', 'Articles of organization', 'EIN application', 'Operating agreement'],
      notIncluded: ['State filing fees']
    },
    {
      id: 'resolution',
      icon: ShieldCheck,
      title: 'IRS & State Notice Resolution',
      price: 'Custom Pricing',
      description: 'Expert handling of IRS and state tax notices, audits, and disputes to protect your interests.',
      included: ['Notice review', 'IRS/state communication', 'Penalty abatement', 'Payment plans'],
      notIncluded: []
    },
    {
      id: 'bookkeeping',
      icon: Calculator,
      title: 'Bookkeeping Services',
      price: 'Starting from $300/month',
      description: 'Monthly bookkeeping to keep your financial records accurate, organized, and audit-ready.',
      included: ['Transaction coding', 'Bank reconciliation', 'Monthly statements', 'QuickBooks support'],
      notIncluded: ['Catch-up bookkeeping']
    },
    {
      id: 'consulting',
      icon: TrendingUp,
      title: 'Business Consulting',
      price: '$100/hour',
      description: 'Strategic business advisory services to help you make informed financial decisions and grow.',
      included: ['Financial planning', 'Tax optimization', 'Cash flow management', 'Entity structure'],
      notIncluded: []
    }
  ];

  // SEO Schema Generation
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "US Tax and Business Compliance Services",
    "provider": { "@type": "LocalBusiness", "name": "TaxClaim" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tax & Compliance Services",
      "itemListElement": services.map(s => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": s.title, "description": s.description }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Professional US Tax Filing & Business Services | TaxClaim</title>
        <meta name="description" content="Expert US Individual & Business Tax Filing starting at $200. LLC Formation, Bookkeeping, and IRS Resolution." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-6">Expert US Tax & Business Solutions</h1>
            <p className="text-xl text-gray-300 max-w-2xl">Transparent pricing and professional compliance for individuals and businesses.</p>
          </div>
        </section>

        {/* STICKY NAV AT 90PX */}
        <nav className="sticky top-[90px] z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap mr-2">Jump To:</span>
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

        <section className="py-20">
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
                      <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                        <service.icon className="w-7 h-7 text-teal-600" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2 text-slate-900">{service.title}</h2>
                      <div className="text-2xl font-bold text-teal-600 mb-4">{service.price}</div>
                      <p className="text-gray-600 mb-8 text-sm leading-relaxed">{service.description}</p>
                      <Link to="/contact">
                        <Button className="w-full bg-teal-600 hover:bg-teal-700">Get Started</Button>
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
