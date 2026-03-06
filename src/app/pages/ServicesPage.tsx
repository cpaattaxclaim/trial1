import { Link } from 'react-router'; 
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; 
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  FileText, Building2, Calculator, ShieldCheck, 
  BookOpen, TrendingUp, CheckCircle2
} from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      id: 'individual-tax',
      icon: FileText,
      title: 'Individual US Tax Filing',
      price: 'Starting from $200',
      description: 'Professional Federal and State tax preparation for individuals and expats. We maximize deductions for 2025 and 2026 tax years.',
      included: ['Federal + 1 State Return', 'W-2 & 1099 Income Reporting', 'Deduction Optimization', 'Secure E-filing Confirmation']
    },
    {
      id: 'business-tax',
      icon: Building2,
      title: 'Business Tax Preparation',
      price: 'Starting from $750',
      description: 'Specialized tax compliance for Partnerships (Form 1065) and S-Corps (Form 1120-S). Includes Schedule K-1 preparation.',
      included: ['Form 1065 or 1120-S', 'Schedule K-1 for Owners', 'State Entity Tax Returns', 'Basis Record Updates']
    },
    {
      id: 'sales-tax',
      icon: BookOpen,
      title: 'Sales & Use Tax',
      price: 'Starting from $300/month',
      description: 'Comprehensive sales tax management across all US states. We handle nexus monitoring and monthly filing.',
      included: ['Nexus Threshold Monitoring', 'Monthly State Filings', 'Taxability Analysis', 'Remittance Management']
    },
    {
      id: 'formation',
      icon: Building2,
      title: 'Company Formation',
      price: 'Starting from $300',
      description: 'Register your US LLC or C-Corp correctly. We handle the Articles of Organization and Federal EIN acquisition.',
      included: ['Entity Selection Advisory', 'IRS EIN Application', 'Operating Agreement', 'Post-Formation Support']
    },
    {
      id: 'irs-resolution',
      icon: ShieldCheck,
      title: 'IRS Notice Resolution',
      price: 'Custom Pricing',
      description: 'Expert response to IRS and State notices like CP2000 or CP148A. We handle audits and penalty abatements.',
      included: ['Notice Audit & Analysis', 'IRS Correspondence', 'Penalty Abatement Requests', 'Payment Plan Setup']
    },
    {
      id: 'bookkeeping',
      icon: Calculator,
      title: 'Bookkeeping Services',
      price: 'Starting from $300/month',
      description: 'Audit-ready monthly financials. We keep your books reconciled and your P&L accurate using QuickBooks.',
      included: ['Bank Reconciliation', 'Transaction Coding', 'Monthly Financial Reports', 'QuickBooks Support']
    },
    {
      id: 'consulting',
      icon: TrendingUp,
      title: 'Business Consulting',
      price: '$100/hour',
      description: 'Advisory on US-India cross-border tax strategy, entity structure, and financial growth planning.',
      included: ['Tax Strategy Review', 'Entity Structure Analysis', 'Cash Flow Management', 'Strategic Planning']
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "US Tax Preparation and Business Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TaxClaim"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tax & Compliance Catalog",
      "itemListElement": services.map((s, index) => ({
        "@type": "Offer",
        "position": index + 1,
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
        <title>US Tax Filing & Business Services | Starting $200 | TaxClaim</title>
        <meta name="description" content="Expert US Tax Preparation for Individuals ($200) and Businesses ($750). LLC Formation, Sales Tax, and IRS Notice Resolution." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-6 italic">Our Services</h1>
            <p className="text-xl text-gray-400">Professional US tax compliance and business infrastructure solutions.</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20" aria-label="Tax and Business Service Details">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {services.map((service, idx) => (
                <article
                  key={idx}
                  id={service.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="grid md:grid-cols-3">
                    {/* Left Column: Price & CTA */}
                    <div className="md:col-span-1 bg-slate-50 p-8 border-r border-gray-100 flex flex-col justify-between">
                      <div>
                        <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                          <service.icon className="w-8 h-8 text-teal-600" aria-hidden="true" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2 text-slate-900">{service.title}</h2>
                        <div className="text-3xl font-bold text-slate-900 mb-4">{service.price}</div>
                        <p className="text-gray-700 mb-6 text-sm leading-relaxed">{service.description}</p>
                      </div>
                      <Link to="/contact">
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 py-6">Get Started</Button>
                      </Link>
                    </div>

                    {/* Right Column: Inclusions */}
                    <div className="md:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-lg font-bold mb-6 text-slate-900 uppercase tracking-wide">What's Included</h3>
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
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
