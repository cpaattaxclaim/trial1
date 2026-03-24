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
    { name: 'United States', code: 'us' },
    { name: 'United Kingdom', code: 'gb' },
    { name: 'India', code: 'in' },
    { name: 'Singapore', code: 'sg' },
    { name: 'UAE', code: 'ae' },
    { name: 'Germany', code: 'de' },
    { name: 'Netherlands', code: 'nl' },
    { name: 'Canada', code: 'ca' },
    { name: 'China', code: 'cn' },
    { name: 'New Zealand', code: 'nz' },
    { name: 'South Africa', code: 'za' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl mb-6">About TaxClaim</h1>
              <p className="text-xl text-gray-300">
                Dual-qualified US CPA and Indian CA specializing in international tax compliance for foreign founders and cross-border businesses worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl mb-6 text-slate-900">
                  US Tax Compliance for Foreign Founders
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We specialize in US tax compliance for foreign founders and cross-border businesses.
                </p>
                <Link to="/contact">
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    Work With Us
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {credentials.map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
                    <item.icon className="w-6 h-6 text-teal-600 mb-3" />
                    <h3>{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8">
                  <value.icon className="w-6 h-6 text-teal-600 mb-3" />
                  <h3>{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-12">

              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-6">

                {/* Why Remote */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8">
                  <h3 className="text-2xl mb-4">Why Remote Services?</h3>
                  <ul className="space-y-3">
                    {[
                      'Work from anywhere',
                      'No US presence required',
                      'Flexible scheduling',
                      'Secure document sharing',
                      'Fast turnaround times',
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-teal-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Countries */}
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                  <h4 className="mb-2">Countries We Serve</h4>
                  <div className="flex flex-wrap gap-2">
                    {countries.map((c) => (
                      <div key={c.name} className="flex items-center gap-1 px-2 py-1 bg-white border rounded-full text-sm">
                        <img
                          src={`https://flagcdn.com/w20/${c.code}.png`}
                          alt={c.name}
                          className="w-4 h-3"
                        />
                        <span>{c.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-6">

                {/* Expertise */}
                <div>
                  <h3 className="text-2xl mb-4">Areas of Specialization</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {expertise.map((item, idx) => (
                      <div key={idx} className="bg-slate-50 p-4 rounded-lg flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-teal-600" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                  <h4 className="mb-2">Industries We Serve</h4>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((i, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white border rounded-full text-sm">
                        {i}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900 text-white text-center">
          <h2 className="text-4xl mb-6">Ready to Start?</h2>
          <Link to="/contact">
            <Button className="bg-teal-600 hover:bg-teal-700">
              Book a Call
            </Button>
          </Link>
        </section>

      </main>
      <Footer />
    </div>
  );
}
