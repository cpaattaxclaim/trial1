import { Link } from 'react-router';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Advanced SEO handler
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  FileText, Building2, Calculator, ShieldCheck, 
  BookOpen, TrendingUp, CheckCircle2, Phone, 
  MessageCircle, FileCheck, CheckSquare
} from 'lucide-react';

export function ServicesPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const services = [
    {
      id: 'tax-filing',
      icon: FileText,
      title: 'Individual Tax Filing',
      price: 'Starting from $200',
      description: 'Professional US tax preparation and filing services for individuals and expats, ensuring accuracy and maximum deductions.',
      included: [
        'Federal + 1 state tax return',
        'W-2, 1099, and other income forms',
        'Deduction optimization',
        'E-filing with confirmation'
      ],
      notIncluded: [
        'Tax planning recommendations',
        'Audit defence assistance',
        'Additional state returns'
      ]
    },
    {
      id: 'business-tax',
      icon: Building2,
      title: 'Business Tax Filing',
      price: 'Starting from $750',
      subtitle: 'Partnerships, S-Corps, C-Corps',
      description: 'Comprehensive business tax preparation for partnerships (Form 1065), S-Corporations (1120-S), and C-Corporations.',
      included: [
        'Form 1065, 1120-S, or 1120 preparation',
        'Schedule K-1 preparation for owners',
        'State business tax returns',
      ],
      notIncluded: [
        'Year-round support',
        'Quarterly estimated tax calculations'
      ]
    },
    {
      id: 'sales-tax',
      icon: BookOpen,
      title: 'Sales & Use Tax',
      price: 'Starting from $300/month',
      description: 'Monthly sales tax compliance, calculation, and filing services to keep your business compliant across US states.',
      included: [
        'Monthly sales tax calculations',
        'Multi-state filing support',
        'Nexus analysis and guidance'
      ],
      notIncluded: ['Audit defence assistance']
    },
    {
      id: 'formation',
      icon: Building2,
      title: 'Company Formation',
      price: 'Starting from $300',
      subtitle: 'LLC / C-Corp',
      description: 'Complete business formation services including EIN application and Articles of Organization to get your company set up correctly.',
      included: [
        'Entity selection consultation',
        'Articles of incorporation/organization',
        'EIN application',
        'Operating agreement/bylaws'
      ],
      notIncluded: ['State filing fees (passed through)']
    },
    {
      id: 'resolution',
      icon: ShieldCheck,
      title: 'IRS & State Notice Resolution',
      price: 'Custom Pricing',
      description: 'Expert handling of IRS and state tax notices, audits, and disputes to protect your interests and abate penalties.',
      included: [
        'Notice review and analysis',
        'Direct IRS/state communication',
        'Negotiation and representation'
      ],
      notIncluded: []
    },
    {
      id: 'bookkeeping',
      icon: Calculator,
      title: 'Bookkeeping Services',
      price: 'Starting from $300/month',
      description: 'Monthly bookkeeping to keep your financial records accurate, organized, and audit-ready using QuickBooks Online.',
      included: [
        'Transaction categorization',
        'Bank reconciliation',
        'Monthly financial statements'
      ],
      notIncluded: ['Catch-up bookkeeping']
    },
    {
      id: 'consulting',
      icon: TrendingUp,
      title: 'Business Consulting & Advisory',
      price: '$100/hour',
      description: 'Strategic business advisory services covering tax planning, cash flow, and entity structure to help you grow.',
      included: [
        'Financial planning and analysis',
        'Tax planning and optimization',
        'Entity structure recommendations'
      ],
      notIncluded: []
    }
  ];

  // --- ADVANCED SEO: JSON-LD Structured Data ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "US Tax and Business Consulting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TaxClaim", // Replace with your actual business name
      "image": "https://yourdomain.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tax & Compliance Services",
      "itemListElement": services.map((s, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.description
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "description": s.price
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* --- SEO METADATA --- */}
      <Helmet>
        <title>US Tax Filing & Business Services | Pricing starting at $200</title>
        <meta name="description" content="Expert US Individual & Business Tax Filing, LLC Formation, Sales Tax, and IRS Resolution. Fixed pricing, no hidden fees. CPA-grade compliance." />
        <meta name="keywords" content="US tax filing India, Form 1065, Form 1120-S, US LLC formation, sales tax nexus, IRS notice resolution, US bookkeeping services" />
        <link rel="canonical" href="https://yourdomain.com/services" />
        
        {/* Injecting Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Header />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6 font-bold">Our Services & Pricing</h1>
            <p className="text-xl text-gray-300">
              Transparent, competitive pricing for all your US tax and business infrastructure needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" aria-label="Service Details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <article
                key={idx}
                id={service.id}
                className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1 bg-slate-50 p-8">
                    <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-teal-600" aria-hidden="true" />
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-2 text-slate-900">{service.title}</h2>
                    {service.subtitle && (
                      <p className="text-sm text-gray-600 mb-4">{service.subtitle}</p>
                    )}
                    
                    <div className="text-3xl font-bold text-teal-600 mb-4">{service.price}</div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                    
                    <Link to="/contact">
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">
                        Get Started
                      </Button>
                    </Link>
                  </div>

                  <div className="md:col-span-2 p-8 lg:p-12">
                    <h3 className="text-lg font-bold mb-6 text-slate-900 uppercase tracking-wide">What's Included</h3>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {service.included.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    {service.notIncluded.length > 0 && (
                      <div className="pt-6 border-t border-gray-100">
                        <h3 className="text-sm font-bold mb-4 text-gray-500 uppercase">Available Add-ons</h3>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {service.notIncluded.map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-500 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">How It Works</h2>
            <p className="text-xl text-gray-600">Our simple 4-step process to compliance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Inquiry', desc: 'Reach out via our form or WhatsApp.', icon: Phone },
              { step: '02', title: 'Consult', desc: 'Free 15-min call to discuss your needs.', icon: MessageCircle },
              { step: '03', title: 'Onboard', desc: 'Securely upload your documents.', icon: FileCheck },
              { step: '04', title: 'Delivery', desc: 'We file your returns and provide support.', icon: CheckSquare }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <item.icon className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                <div className="text-xs font-bold text-teal-600 mb-2 uppercase">Step {item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to simplify your US Taxes?</h2>
          <p className="text-xl text-gray-400 mb-10">Join 500+ business owners who trust us with their compliance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-10 py-6 text-lg">Request a Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
