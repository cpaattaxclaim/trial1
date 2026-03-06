import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { ShieldCheck, Zap, Globe2, Star, ArrowRight } from 'lucide-react';

export function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "TaxService",
    "name": "TaxClaim",
    "description": "Licensed Washington State CPA providing nationwide tax preparation for US small businesses and individuals.",
    "url": "https://www.taxclaim.co",
    "address": { "@type": "PostalAddress", "addressRegion": "WA", "addressCountry": "US" },
    "areaServed": { "@type": "Country", "name": "United States" }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>TaxClaim | Licensed US CPA | Small Business Tax & Accounting</title>
        <meta name="description" content="Professional US tax filing and CPA services. Specialized in S-Corp (1120-S), Partnership (1065), and Individual tax returns across all 50 states." />
        <meta name="keywords" content="US licensed CPA, tax preparation services, Form 1120-S filing, partnership tax return, 1040 tax prep, remote bookkeeping US" />
        <link rel="canonical" href="https://www.taxclaim.co" />
        <script type="application/ld+json">{JSON.stringify(homeSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-bold mb-6">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Licensed Washington State CPA</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 italic">
                  US Taxes, <span className="text-teal-600">Simplified.</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  Expert tax preparation and business compliance for small businesses and individuals across all 50 states. No stress, just CPA-grade accuracy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/services"><Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 py-7 text-lg group">Explore Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Button></Link>
                  <Link to="/contact"><Button size="lg" variant="outline" className="px-8 py-7 text-lg border-slate-200">Free Consultation</Button></Link>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 relative">
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                   <div className="flex items-center justify-between mb-8">
                      <div className="h-2 w-24 bg-teal-200 rounded"></div>
                      <div className="h-8 w-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs">IRS</div>
                   </div>
                   <div className="space-y-4">
                      <div className="h-4 w-full bg-slate-200 rounded"></div>
                      <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                      <div className="h-20 w-full bg-teal-50 border-2 border-dashed border-teal-200 rounded-xl flex items-center justify-center text-teal-700 font-bold text-sm">Optimized for 2025/2026</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid md:grid-cols-3 gap-12 text-center">
                <div className="space-y-4">
                   <Globe2 className="w-12 h-12 text-teal-400 mx-auto" />
                   <h3 className="text-xl font-bold">50-State Coverage</h3>
                   <p className="text-slate-400 text-sm">Managing multi-state nexus and filing requirements for modern businesses.</p>
                </div>
                <div className="space-y-4">
                   <ShieldCheck className="w-12 h-12 text-teal-400 mx-auto" />
                   <h3 className="text-xl font-bold">100% CPA Oversight</h3>
                   <p className="text-slate-400 text-sm">Every return is reviewed by a licensed Washington State CPA.</p>
                </div>
                <div className="space-y-4">
                   <Zap className="w-12 h-12 text-teal-400 mx-auto" />
                   <h3 className="text-xl font-bold">Tech-Driven Speed</h3>
                   <p className="text-slate-400 text-sm">Secure document portals and digital filing for rapid turnaround.</p>
                </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
