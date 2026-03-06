import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { ShieldCheck, Award, Globe, Scale, CheckCircle2 } from 'lucide-react';

export function AboutPage() {
  
  // --- SEO: Professional US CPA Service Schema ---
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.taxclaim.co/#person",
        "name": "TaxClaim CPA",
        "jobTitle": "Certified Public Accountant",
        "description": "Licensed Washington State CPA providing nationwide tax compliance and business advisory.",
        "affiliation": { "@id": "https://www.taxclaim.co/#organization" }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.taxclaim.co/#organization",
        "name": "TaxClaim",
        "url": "https://www.taxclaim.co",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "WA",
          "addressCountry": "US"
        },
        "knowsAbout": [
          "US Federal Taxation",
          "S-Corp Compliance",
          "Partnership Tax Law",
          "Multi-state Nexus",
          "Bookkeeping"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* --- SEO METADATA --- */}
      <Helmet>
        <title>About Us | Licensed Washington State CPA | TaxClaim</title>
        <meta name="description" content="Meet the team at TaxClaim. Licensed Washington State CPA providing expert tax preparation and business advisory for US-based entrepreneurs and small businesses across all 50 states." />
        <meta name="keywords" content="Licensed Washington CPA, US tax expert, small business tax advisor, remote CPA United States, S-Corp tax specialist" />
        <link rel="canonical" href="https://www.taxclaim.co/about" />
        
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 italic text-left">Precision Meets Integrity.</h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              We provide CPA-grade tax solutions for modern American businesses, ensuring you never have to choose between growth and compliance.
            </p>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Licensed CPA</h3>
                  <p className="text-slate-600 text-sm">Registered and licensed in Washington State, maintaining the highest professional standards of the AICPA.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Nationwide Coverage</h3>
                  <p className="text-slate-600 text-sm">Expertise in federal and multi-state tax requirements for businesses operating in all 50 states.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Audit Ready</h3>
                  <p className="text-slate-600 text-sm">Every filing is prepared with defense in mind, ensuring your records stand up to the most rigorous scrutiny.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story / Mission Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Navigating US tax laws shouldn't be a source of anxiety for business owners. At TaxClaim, we started with a clear goal: <strong>Provide high-level CPA expertise with the agility of a modern, remote-first firm.</strong>
                  </p>
                  <p>
                    We bridge the gap between complex IRS regulations and your daily operations. We don't just file forms—we provide the strategic foundation your business needs to scale safely and efficiently in the US market.
                  </p>
                </div>
                
                <div className="mt-10 grid sm:grid-cols-2 gap-4">
                  {['Transparent Pricing', 'Direct CPA Communication', 'Tech-Enabled Workflow', 'Multi-State Expertise'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-500" />
                      <span className="font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <div className="relative">
                  <div className="absolute -inset-4 bg-teal-100 rounded-2xl rotate-3"></div>
                  <div className="relative bg-slate-900 p-12 rounded-2xl text-white">
                    <h3 className="text-2xl font-bold mb-4 italic">"Compliance is the silent partner of every successful business."</h3>
                    <p className="text-slate-400">— TaxClaim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Experience the TaxClaim Difference</h2>
            <p className="text-lg text-slate-600 mb-10">Let's discuss how we can streamline your business tax reporting today.</p>
            <div className="flex justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-10">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
