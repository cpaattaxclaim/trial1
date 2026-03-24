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

// SVG flags
import USFlag from '../../public/flags/us.svg';
import UKFlag from '../../public/flags/uk.svg';
import IndiaFlag from '../../public/flags/india.svg';
import SingaporeFlag from '../../public/flags/singapore.svg';
import UAEFlag from '../../public/flags/uae.svg';
import GermanyFlag from '../../public/flags/germany.svg';
import NetherlandsFlag from '../../public/flags/netherlands.svg';
import CanadaFlag from '../../public/flags/canada.svg';
import ChinaFlag from '../../public/flags/china.svg';
import NZFlag from '../../public/flags/newzealand.svg';
import SouthAfricaFlag from '../../public/flags/southafrica.svg';

export function AboutPage() {
  useSEO({
    title: 'About TaxClaim | Dual-Qualified US CPA and Indian CA',
    description:
      'TaxClaim is run by a dual-qualified US CPA and Indian Chartered Accountant specializing in international tax compliance for foreign founders and cross-border businesses across 11 countries.',
    canonical: 'https://taxclaim.co/about',
  });

  const credentials = [
    { icon: Award, title: 'Dual Qualified', desc: 'Licensed US CPA (Washington State) and Indian Chartered Accountant (ICAI)' },
    { icon: Shield, title: '7+ Years Experience', desc: 'Extensive professional tax and accounting expertise across US and international tax law' },
    { icon: Users, title: '150+ Clients', desc: 'Serving clients across 11 countries worldwide' },
    { icon: TrendingUp, title: 'On-Time Filing', desc: '100% on-time filing record across all client engagements' },
  ];

  const values = [
    { icon: BarChart2, title: 'Precision and Accuracy', desc: 'We ensure every number is correct and every deduction is maximized, protecting you from audits and penalties.' },
    { icon: BadgeCheck, title: 'Client-Centered Service', desc: 'Your success is our success. We build long-term relationships based on trust and results.' },
    { icon: Lightbulb, title: 'Proactive Guidance', desc: 'We provide year-round strategic advice to optimize your financial position.' },
    { icon: Shield, title: 'Confidentiality and Trust', desc: 'Your financial information is handled with utmost care and professionalism.' },
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
    'SaaS', 'Technology', 'Cross-border E-commerce', 'Professional Services', 
    'E-commerce', 'Real Estate', 'Healthcare', 'Retail', 'Manufacturing', 'Consulting',
  ];

  const countries = [
    { name: 'United States', svg: USFlag },
    { name: 'United Kingdom', svg: UKFlag },
    { name: 'India', svg: IndiaFlag },
    { name: 'Singapore', svg: SingaporeFlag },
    { name: 'UAE', svg: UAEFlag },
    { name: 'Germany', svg: GermanyFlag },
    { name: 'Netherlands', svg: NetherlandsFlag },
    { name: 'Canada', svg: CanadaFlag },
    { name: 'China', svg: ChinaFlag },
    { name: 'New Zealand', svg: NZFlag },
    { name: 'South Africa', svg: SouthAfricaFlag },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>

        {/* Page Hero */}
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

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 rounded-full mb-6">
                <span className="text-teal-700">Our Mission</span>
              </div>
              <h2 className="text-4xl mb-6 text-slate-900">
                US Tax Compliance for Foreign Founders and Cross-Border Businesses
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At TaxClaim, we specialize in US tax compliance for foreign founders, cross-border businesses, and anyone navigating the intersection of US and international tax law.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Work With Us
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {credentials.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-4xl mb-4 text-slate-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make for our clients
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {values.map((value, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8 flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-slate-900">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">

          {/* Left Column */}
          <div>
            <h2 className="text-4xl mb-6 text-slate-900">Our Expertise</h2>
            <p className="text-lg text-gray-600 mb-8">
              With 7+ years of experience serving clients worldwide, we have developed deep expertise in international and domestic tax compliance.
            </p>

            {/* Remote Services Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 mb-6">
              <h3 className="text-2xl mb-4">Why Remote Services?</h3>
              <ul className="space-y-3">
                {[
                  'Work with us from anywhere in the world',
                  'Foreign founders do not need to be in the US to work with us',
                  'Flexible scheduling around your availability',
                  'Secure document sharing and collaboration',
                  'Fast turnaround times',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 mt-0.5" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-2xl mb-6 text-slate-900">Areas of Specialization</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {expertise.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Industries & Countries Full-Width Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mt-6">

            {/* Countries */}
            <div className="flex-1 bg-teal-50 border border-teal-200 rounded-xl p-5">
              <h4 className="text-base mb-2 text-slate-900">Countries We Serve</h4>
              <div className="flex flex-wrap gap-1.5">
                {countries.map((country) => (
                  <div key={country.name} className="flex items-center gap-1 px-2.5 py-1 bg-white border border-teal-200 rounded-full">
                    <img src={country.svg} alt={country.name} className="w-4 h-4 rounded-sm" />
                    <span className="text-xs text-gray-700">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div className="flex-1 bg-teal-50 border border-teal-200 rounded-xl p-5">
              <h4 className="text-base mb-2 text-slate-900">Industries We Serve</h4>
              <div className="flex flex-wrap gap-1.5">
                {industries.map((industry, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-white border border-teal-200 rounded-full text-xs text-gray-700">{industry}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
