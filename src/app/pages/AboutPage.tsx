import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { ShieldCheck, Award, Globe, CheckCircle2 } from 'lucide-react';

export function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TaxClaim",
    "url": "https://www.taxclaim.co",
    "address": { "@type": "PostalAddress", "addressRegion": "WA", "addressCountry": "US" },
    "knowsAbout": ["US Federal Taxation", "S-Corp Compliance", "Partnership Tax Law", "IRS Audit Defense"]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us | Licensed Washington State CPA | TaxClaim</title>
        <meta name="description" content="Meet the team at TaxClaim. Licensed Washington State CPA providing expert tax preparation and business advisory for US small businesses in all 50 states." />
        <meta name="keywords" content="Licensed Washington CPA, US tax expert, small business tax advisor, remote CPA United States, S-Corp tax specialist" />
        <link rel="canonical" href="https://www.taxclaim.co/about" />
        <script type="application/ld+json">{JSON.stringify(aboutSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <section className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 italic">Precision Meets Integrity.</h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">We provide CPA-grade tax solutions for modern American businesses, ensuring growth and compliance work together.</p>
          </div>
        </section>
        <section className="py-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
            <div className="flex gap-4">
              <Award className="w-12 h-12 text-teal-600" />
              <div><h3 className="text-xl font-bold">Licensed CPA</h3><p className="text-slate-600 text-sm">Washington State licensed, adhering to the highest professional standards.</p></div>
            </div>
            <div className="flex gap-4">
              <Globe className="w-12 h-12 text-teal-600" />
              <div><h3 className="text-xl font-bold">Nationwide Reach</h3><p className="text-slate-600 text-sm">Filing capability for Federal and State returns across all 50 US states.</p></div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck className="w-12 h-12 text-teal-600" />
              <div><h3 className="text-xl font-bold">Audit Defense</h3><p className="text-slate-600 text-sm">Every filing is prepared with rigorous accuracy to stand up to IRS scrutiny.</p></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
