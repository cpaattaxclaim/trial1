import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { useSEO } from '../../hooks/useSEO';
import {
  Shield,
  Award,
  Users,
  TrendingUp,
  CheckCircle2,
  BarChart2,
  BadgeCheck,
  Lightbulb,
} from 'lucide-react';

export function AboutPage() {
  useSEO({
    title: 'About TaxClaim | Dual-Qualified US CPA and Indian CA',
    description:
      'TaxClaim is run by a dual-qualified US CPA and Indian Chartered Accountant specializing in international tax compliance for foreign founders and cross-border businesses across 11 countries.',
    canonical: 'https://taxclaim.co/about',
  });

  const credentials = [
    {
      icon: Award,
      title: 'Dual Qualified',
      desc: 'Licensed US CPA (Washington State) and Indian Chartered Accountant (ICAI)',
    },
    {
      icon: Shield,
      title: '7+ Years Experience',
      desc: 'Extensive professional tax and accounting expertise across US and international tax law',
    },
    {
      icon: Users,
      title: '150+ Clients',
      desc: 'Serving clients across the US, UK, Netherlands, Singapore, Canada, Germany, New Zealand, UAE, India, China, and South Africa',
    },
    {
      icon: TrendingUp,
      title: 'On-Time Filing',
      desc: '100% on-time filing record across all client engagements',
    },
  ];

  const values = [
    {
      icon: BarChart2,
      title: 'Precision and Accuracy',
      desc: 'We ensure every number is correct and every deduction is maximized, protecting you from audits and penalties.',
    },
    {
      icon: BadgeCheck,
      title: 'Client-Centered Service',
      desc: 'Your success is our success. We build long-term relationships based on trust and results.',
    },
    {
      icon: Lightbulb,
      title: 'Proactive Guidance',
      desc: 'We do not just react to tax season - we provide year-round strategic advice to optimize your financial position.',
    },
    {
      icon: Shield,
      title: 'Confidentiality and Trust',
      desc: 'Your financial information is handled with the utmost care and professionalism.',
    },
  ];

  const expertise = [
    'Foreign-owned US entity compliance (LLC and Corporation)',
    'Form 5471 - US persons with foreign corporations',
    'FBAR and FATCA reporting',
    'Cross-border tax planning and treaty analysis',
    'Form 1040-NR for non-resident aliens',
    'Individual and business tax preparation',
    'Multi-state tax compliance',
    'IRS and state audit representation',
    'Business formation and structure optimization',
    'Sales and use tax management',
    'Bookkeeping and financial reporting',
    'Tax planning and strategy',
  ];

  const industries = [
    'SaaS',
    'Technology',
    'Cross-border E-commerce',
    'Professional Services',
    'E-commerce',
    'Real Estate',
    'Healthcare',
    'Retail',
    'Manufacturing',
    'Consulting',
  ];

  const countries = [
    { name: 'United States', flag: '🇺🇸' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Netherlands', flag: '🇳🇱' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'New Zealand', flag: '🇳🇿' },
    { name: 'South Africa', flag: '🇿🇦' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl mb-6">About TaxClaim</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Dual-qualified US CPA and Indian CA specializing in international tax compliance for foreign founders and cross-border businesses worldwide.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl mb-6 text-slate-900">
                US Tax Compliance for Foreign Founders
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in cross-border tax compliance and planning.
              </p>
              <Link to="/contact">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Work With Us
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {credentials.map((item, idx) => (
                <div key={idx} className="border p-6 rounded-xl">
                  <item.icon className="w-6 h-6 text-teal-600 mb-2" />
                  <h3>{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Section (FIXED LAYOUT) */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

            {/* LEFT */}
            <div>

              {/* Expertise */}
              <h3 className="text-2xl mb-6 text-slate-900">
                Areas of Specialization
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {expertise.map((item, idx) => (
                  <div key={idx} className="flex gap-2 bg-slate-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Industries BELOW */}
              <div className="bg-teal-50 border rounded-xl p-5">
                <h4 className="mb-2 text-slate-900">Industries We Serve</h4>
                <div className="flex flex-wrap gap-2">
                  {industries.map((i, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border rounded-full text-xs">
                      {i}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT */}
            <div>

              {/* Why Remote */}
              <div className="bg-slate-900 text-white rounded-2xl p-8 mb-6">
                <h3 className="text-2xl mb-4">Why Remote Services?</h3>
                <ul className="space-y-3">
                  {[
                    'Work from anywhere',
                    'No US presence required',
                    'Flexible scheduling',
                    'Secure collaboration',
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle2 className="text-teal-400 w-5 h-5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Countries BELOW */}
              <div className="bg-teal-50 border rounded-xl p-5">
                <h4 className="mb-2 text-slate-900">Countries We Serve</h4>
                <div className="flex flex-wrap gap-2">
                  {countries.map((c) => (
                    <span key={c.name} className="px-3 py-1 bg-white border rounded-full text-xs">
                      {c.flag} {c.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
