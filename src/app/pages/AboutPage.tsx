import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { useSEO } from '../../hooks/useSEO';
import * as Flags from 'country-flag-icons/react/3x2';
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
    { name: 'United States', code: 'US' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'India', code: 'IN' },
    { name: 'Singapore', code: 'SG' },
    { name: 'UAE', code: 'AE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Canada', code: 'CA' },
    { name: 'China', code: 'CN' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'South Africa', code: 'ZA' },
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-teal-100 rounded-full mb-6">
                  <span className="text-teal-700">Our Mission</span>
                </div>
                <h2 className="text-4xl mb-6 text-slate-900">
                  US Tax Compliance for Foreign Founders and Cross-Border Businesses
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At TaxClaim, we specialize in US tax compliance for foreign founders, cross-border businesses, and anyone navigating the intersection of US and international tax law. Our advisor is dual-qualified as a US CPA and Indian Chartered Accountant - with clients across 11 countries including the UK, Singapore, UAE, India, Germany, Netherlands, Canada, China, New Zealand, and South Africa.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you have a foreign-owned US LLC, need to file Form 5471 for a foreign corporation, or are setting up your first US entity as a non-resident founder, we handle the full compliance picture so you can focus on building your business.
                </p>
                <Link to="/contact" className="cursor-pointer">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
                    Work With Us
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {credentials.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-200 transition-all"
                  >
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="mb-2 text-slate-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl mb-4 text-slate-900">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and every decision we make for our clients
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2 text-slate-900">{value.title}</h3>
                      <p className="text-gray-600">{value.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">

              {/* Left column */}
              <div>
                <h2 className="text-4xl mb-6 text-slate-900">Our Expertise</h2>
                <p className="text-lg text-gray-600 mb-8">
                  With 7+ years of experience serving clients across the US, UK, Netherlands, New Zealand, Germany, Singapore, Canada, UAE, India, China, and South Africa, we have developed deep expertise in international and domestic tax compliance.
                </p>

                {/* Dark card */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8">
                  <h3 className="text-2xl mb-4">Why Remote Services?</h3>
                  <p className="text-gray-300 mb-6">
                    In today's digital world, you do not need to be in the same city to receive exceptional service. Our remote-first approach means:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Work with us from anywhere in the world',
                      'Foreign founders do not need to be in the US to work with us - we handle your US compliance entirely remotely, across any time zone',
                      'Flexible scheduling around your availability',
                      'Secure document sharing and collaboration',
                      'Fast turnaround times',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries and Countries stacked full width */}
                <div className="mt-6 flex flex-col gap-4">

                  {/* Industries */}
                  <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                    <h4 className="text-base mb-2 text-slate-900">Industries We Serve</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {industries.map((industry, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-white border border-teal-200 rounded-full text-xs text-gray-700"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Countries */}
                  <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                    <h4 className="text-base mb-2 text-slate-900">Countries We Serve</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {countries.map((country) => {
                        const FlagComponent = Flags[country.code];
                        return (
                          <div
                            key={country.code}
                            className="flex items-center gap-1 px-2.5 py-1 bg-white border border-teal-200 rounded-full"
                          >
                            {FlagComponent && <FlagComponent className="w-4 h-auto shadow-sm" title={country.name} />}
                            <span className="text-xs text-gray-700">{country.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>

              {/* Right column */}
              <div>
                <h3 className="text-2xl mb-6 text-slate-900">Areas of Specialization</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {expertise.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-slate-900">Professional Credentials</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our qualifications ensure you receive the highest level of professional service
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 text-slate-900">Licensed US CPA</h3>
                  <p className="text-gray-600 text-sm">
                    Certified Public Accountant licensed in Washington State
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 text-slate-900">Indian CA (ICAI)</h3>
                  <p className="text-gray-600 text-sm">
                    Chartered Accountant qualified through the Institute of Chartered Accountants of India
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 text-slate-900">IRS PTIN and Specializations</h3>
                  <p className="text-gray-600 text-sm">
                    IRS PTIN holder with specialization in Form 5471, FBAR, FATCA, and cross-border compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl mb-6">Ready to Sort Your US Tax Compliance?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you have a foreign-owned US entity, need to file Form 5471, or are setting up your first US structure, book a free clarity call and we will tell you exactly what is required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="cursor-pointer">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 cursor-pointer">
                  Book a Free Clarity Call
                </Button>
              </Link>
              <Link to="/services" className="cursor-pointer">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:!bg-white/10 hover:!text-white hover:!border-white cursor-pointer">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
