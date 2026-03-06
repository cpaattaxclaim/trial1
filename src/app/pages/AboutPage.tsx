import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { ShieldCheck, Award, Globe, Scale, CheckCircle2, Mail } from 'lucide-react';

export function AboutPage() {
  
  // --- ADVANCED SEO: Person & Professional Service Schema ---
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.taxclaim.co/#person",
        "name": "TaxClaim Founder", // You can replace with your actual name
        "jobTitle": "Certified Public Accountant (CPA)",
        "description": "Licensed Washington State CPA specializing in US-India cross-border taxation and small business compliance.",
        "affiliation": { "@id": "https://www.taxclaim.co/#organization" }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.taxclaim.co/#organization",
        "name": "TaxClaim",
        "url": "https://www.taxclaim.co",
        "logo": "https://www.taxclaim.co/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "knowsAbout": [
          "US Federal Taxation",
          "Washington State Tax Law",
          "IRS Form 1065 & 1120-S",
          "Cross-border Tax Compliance",
          "LLC Formation"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* --- SEO METADATA --- */}
      <Helmet>
        <title>About TaxClaim | Licensed Washington State CPA & US Tax Expert</title>
        <meta name="description" content="Meet the experts at TaxClaim. Licensed Washington State CPA specializing in US tax filing (Form 1040, 1065, 1120-S) for Indian residents and US expats. Professional, remote-first compliance." />
        <meta name="keywords" content="Licensed Washington CPA, US tax expert India, TaxClaim founder, cross-border tax specialist, US business tax advisor" />
        <link rel="canonical" href="https://www.taxclaim.co/about" />
        
        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="About TaxClaim | US Tax Expertise You Can Trust" />
        <meta property="og:description" content="Licensed CPA services bridging the gap between US tax law and global entrepreneurs." />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-600/10 skew-x-12 transform translate-x-32"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 italic">Precision Meets Integrity.</h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              We provide CPA-grade US tax solutions for global entrepreneurs, ensuring you never have to choose between growth and compliance.
            </p>
          </div>
        </section>

        {/* Credentials Section (Crucial for E-E-A-T) */}
        <section className="py-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Licensed CPA</h3>
                  <p className="text-slate-600 text-sm">Registered and licensed in Washington State, maintaining the highest professional standards.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Cross-Border Focus</h3>
                  <p className="text-slate-600 text-sm">Specialized in the unique tax intersection of US entities and international residents.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Audit Ready</h3>
                  <p className="text-slate-600 text-sm">Every filing is prepared with defense in mind, ensuring your records stand up to scrutiny.</p>
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
                    Navigating US tax laws from across the globe shouldn't be a source of anxiety. At TaxClaim, we started with a simple observation: <strong>Global entrepreneurs deserve US-standard compliance without the US-firm price tag.</strong>
                  </p>
                  <p>
                    As a remote-first CPA firm, we bridge the gap between complex IRS regulations and your business goals. We don't just "file forms"—we provide the strategic foundation your business needs to scale safely in the US market.
                  </p>
                </div>
                
                <div className="mt-10 grid sm:grid-cols-2 gap-4">
                  {['Transparent Pricing', 'Direct Communication', 'Tech-Enabled Workflow', 'CPA-Only Oversight'].map((item) => (
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
                    <p className="text-slate-400">— TaxClaim Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Experience the TaxClaim Difference</h2>
            <p className="text-lg text-slate-600 mb-10">Let's discuss how we can streamline your US tax reporting today.</p>
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
