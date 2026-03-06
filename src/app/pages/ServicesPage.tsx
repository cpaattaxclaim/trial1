import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  FileText, 
  BarChart3, 
  Briefcase, 
  ShieldCheck, 
  Search, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export function ServicesPage() {
  
  // --- SEO: Service Schema for US Tax Categories ---
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Tax Preparation and Accounting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TaxClaim",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "WA",
        "addressCountry": "US"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tax & Business Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "S-Corp & Partnership Tax Filing",
            "description": "Professional preparation of Form 1120-S and Form 1065 including Schedule K-1s."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Individual Income Tax",
            "description": "Comprehensive Form 1040 preparation for professionals and business owners."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Monthly Bookkeeping",
            "description": "Audit-ready financials and reconciliation using QuickBooks Online."
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* --- SEO METADATA --- */}
      <Helmet>
        <title>US Tax Services | S-Corp, Partnership & Individual Filing | TaxClaim</title>
        <meta name="description" content="Expert tax preparation for US businesses and individuals. Licensed CPA services for Form 1120-S, 1065, and 1040 across all 50 states. Audit-ready bookkeeping and advisory." />
        <meta name="keywords" content="S-Corp tax return, Partnership filing, 1120-S CPA, Form 1065 help, multi-state tax filing, business bookkeeping US" />
        <link rel="canonical" href="https://www.taxclaim.co/services" />
        
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-6 italic">Our Services.</h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              Comprehensive tax compliance and strategic financial oversight for businesses operating in all 50 states.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Business Tax Filing */}
              <div className="border border-slate-200 p-8 rounded-2xl hover:shadow-xl transition-shadow group">
                <Briefcase className="w-12 h-12 text-teal-600 mb-6" />
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Business Tax Filing</h2>
                <p className="text-slate-600 mb-6">Expert preparation for pass-through entities. We ensure your business return is finalized accurately so K-1s flow seamlessly to partners.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" /> Form 1120-S (S-Corps)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" /> Form 1065 (Partnerships)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" /> Multi-State Nexus Filing
                  </li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    Get a Quote
                  </Button>
                </Link>
              </div>

              {/* Individual Taxes */}
              <div className="border border-slate-200 p-8 rounded-2xl hover:shadow-xl transition-shadow group">
                <FileText className="w-12 h-12 text-teal-600 mb-6" />
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Individual Taxes</h2>
                <p className="text-slate-600 mb-6">Strategic filing for high-net-worth individuals, freelancers, and small business owners reporting on Schedule C.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" /> Form 1040 Preparation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" /> Itemized Deductions
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" /> Capital Gains & Dividends
                  </li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    Start Filing
                  </Button>
                </Link>
              </div>

              {/* Bookkeeping */}
              <div className="border border-slate-200 p-8 rounded-2xl hover:shadow-xl transition-shadow group">
                <BarChart3 className="w-12 h-12 text-teal-600 mb-6" />
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Smart Bookkeeping</h2>
                <p className="text-slate-600 mb-6">Audit-ready financials provided monthly. We keep your books clean so tax season is just another day at the office.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" /> QuickBooks Reconciliation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" /> P&L and Balance Sheets
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" /> Catch-up Bookkeeping
                  </li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    Learn More
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Process</h2>
              <p className="text-slate-600">Secure. Digital. Precise.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consult', desc: 'Free 15-min strategy call.' },
                { step: '02', title: 'Upload', desc: 'Secure portal document sharing.' },
                { step: '03', title: 'Review', desc: 'Direct CPA oversight and audit-check.' },
                { step: '04', title: 'File', desc: 'Electronic filing with IRS & States.' }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-4xl font-black text-teal-100 mb-2">{item.step}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
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
