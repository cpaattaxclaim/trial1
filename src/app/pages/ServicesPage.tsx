import { Link } from 'react-router';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { useSEO } from '../../hooks/useSEO';
import {
  Globe,
  FileText,
  Building2,
  Calculator,
  ShieldCheck,
  BookOpen,
  TrendingUp,
  CheckCircle2,
  Phone,
  MessageCircle,
  FileCheck,
  CheckSquare,
  ShieldAlert,
} from 'lucide-react';

export function ServicesPage() {
  useSEO({
    title: 'Services & Pricing | TaxClaim - US Tax for Foreign Founders',
    description:
      'International tax compliance, business and individual tax filing, bookkeeping, company formation, and IRS resolution. Specialist CPA serving clients across 11 countries.',
    canonical: 'https://taxclaim.co/services',
  });

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const services = [
    {
      id: 'international-tax',
      icon: Globe,
      title: 'International Tax & Compliance',
      price: 'Custom Pricing - Book a Call',
      subtitle: 'Foreign Founders and Cross-Border Businesses',
      description:
        'Full-service international tax compliance for foreign-owned US entities, US persons with foreign corporations, and cross-border businesses worldwide.',
      penaltyNote:
        'Missing Form 5471 carries a base penalty of $10,000, plus $10,000 per month after IRS notice - and leaves your entire return permanently open to audit. We handle these filings so you do not find out about the penalty after the fact.',
      included: [
        'Foreign-owned US entity compliance (Form 5472 + pro forma 1120)',
        'US persons with foreign corporations (Form 5471)',
        'FBAR (FinCEN 114) filing',
        'FATCA (Form 8938) reporting',
        'Form 1040-NR for non-resident aliens',
        'Cross-border tax planning and treaty analysis',
        'EIN application for foreign nationals without SSN',
        'Foreign Founder Setup Package (Formation + EIN + first-year compliance)',
      ],
      notIncluded: [],
      contactService: 'International Tax & Compliance',
      contactMessage: 'I need help with international tax compliance for my US entity or cross-border business.',
    },
    {
      id: 'business-tax',
      icon: Building2,
      title: 'Business Tax Filing',
      price: 'Starting from $1,200',
      subtitle: 'Partnerships, S-Corps, C-Corps, Foreign-Owned Entities',
      description:
        'Comprehensive business tax preparation across all entity types, including domestic and foreign-owned corporations.',
      penaltyNote: null,
      tiers: [
        { label: 'Partnerships and S-Corps', price: '$1,200 - $2,000' },
        { label: 'C-Corps (domestic)', price: '$1,500 - $2,500' },
        { label: 'Foreign-Owned US Entity (LLC or Corporation)', price: 'Custom - Book a Call' },
      ],
      included: [
        'Form 1065, 1120-S, or 1120 preparation',
        'Schedule K-1 preparation for owners',
        'State business tax returns',
      ],
      notIncluded: [
        'Year-round support',
        'Quarterly estimated tax calculations',
        'Tax strategy consultation',
        'Multi-state filings',
        'Complex corporate structures',
        'Audit defence assistance',
      ],
      contactService: 'Business Tax Filing',
      contactMessage: 'I need help with business tax filing for my company.',
    },
    {
      id: 'tax-filing',
      icon: FileText,
      title: 'Individual Tax Filing',
      price: 'Starting from $400',
      subtitle: 'Simple, RSU and Stock Options, Foreign Income',
      description:
        'Professional tax preparation and filing for individuals - from straightforward W-2 returns to complex foreign income and FBAR situations.',
      penaltyNote: null,
      tiers: [
        { label: 'Simple (W-2, standard deductions)', price: '$400 - $500' },
        { label: 'RSU and Stock Options', price: '$700 - $1,000' },
        { label: 'Foreign Income, FBAR and FATCA', price: 'Custom - Book a Call' },
      ],
      included: [
        'Federal + 1 state tax return',
        'W-2, 1099, and other income forms',
        'Deduction optimization',
        'E-filing with confirmation',
      ],
      notIncluded: [
        'Tax planning recommendations',
        'Audit defence assistance',
        'Additional state returns',
        'Complex investment portfolios',
        'International income reporting',
      ],
      contactService: 'Individual Tax Filing',
      contactMessage: 'I need help with my individual tax filing.',
    },
    {
      id: 'formation',
      icon: Building2,
      title: 'Company Formation',
      price: 'Starting from $500',
      subtitle: 'Domestic LLC / C-Corp and Foreign Founder Setup',
      description:
        'Complete business formation services for domestic founders and foreign founders setting up their first US entity.',
      penaltyNote: null,
      tiers: [
        { label: 'Domestic Formation (LLC or C-Corp)', price: '$500 - $700' },
        { label: 'Foreign Founder Setup Package (Formation + EIN + first-year compliance)', price: 'Custom - Book a Call' },
      ],
      included: [
        'Entity selection consultation',
        'Articles of incorporation or organization',
        'EIN application',
        'Operating agreement or bylaws',
        'Initial state filings',
        'Business structure guidance',
      ],
      notIncluded: [
        'State filing fees (passed through)',
        'Ongoing registered agent services',
      ],
      contactService: 'Company Formation',
      contactMessage: 'I need help with company formation.',
    },
    {
      id: 'bookkeeping',
      icon: Calculator,
      title: 'Bookkeeping Services',
      price: 'Starting from $400/month',
      description:
        'Monthly bookkeeping to keep your financial records accurate, organized, and audit-ready.',
      penaltyNote: null,
      included: [
        'Transaction categorization',
        'Bank reconciliation',
        'Monthly financial statements',
        'Accounts payable and receivable',
        'Expense tracking',
        'QuickBooks Online support',
      ],
      notIncluded: ['Catch-up bookkeeping'],
      contactService: 'Bookkeeping',
      contactMessage: 'I need help with monthly bookkeeping for my business.',
    },
    {
      id: 'sales-tax',
      icon: BookOpen,
      title: 'Sales and Use Tax',
      price: 'Starting from $400/month',
      description:
        'Monthly sales tax compliance, calculation, and filing services to keep your business compliant across states.',
      penaltyNote: null,
      included: [
        'Monthly sales tax calculations',
        'Multi-state filing support',
        'Nexus analysis and guidance',
        'Rate updates and monitoring',
        'Exemption certificate management',
      ],
      notIncluded: ['Audit defence assistance'],
      contactService: 'Sales & Use Tax',
      contactMessage: 'I need help with sales and use tax compliance for my business.',
    },
    {
      id: 'resolution',
      icon: ShieldCheck,
      title: 'IRS and State Notice Resolution',
      price: 'Custom Pricing',
      description:
        'Expert handling of IRS and state tax notices, audits, and disputes to protect your interests.',
      penaltyNote: null,
      included: [
        'Notice review and analysis',
        'Direct IRS or state communication',
        'Documentation preparation',
        'Negotiation and representation',
        'Payment plan arrangements',
        'Penalty abatement requests',
      ],
      notIncluded: [],
      contactService: 'IRS / State Resolution',
      contactMessage: 'I received an IRS or state notice and need help resolving it.',
    },
    {
      id: 'consulting',
      icon: TrendingUp,
      title: 'Business Consulting and Advisory',
      price: 'From $250/hour',
      description:
        'Strategic business advisory to help you make informed financial decisions and position your business for growth.',
      penaltyNote: null,
      included: [
        'Financial planning and analysis',
        'Business strategy consultation',
        'Tax planning and optimization',
        'Cash flow management',
        'Entity structure recommendations',
        'Growth strategy guidance',
      ],
      notIncluded: [],
      contactService: 'Business Consulting',
      contactMessage: 'I need business consulting and advisory services.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>

        {/* Page Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl mb-6">Our Services</h1>
              <p className="text-xl text-gray-300">
                International tax compliance, business and individual tax filing, and advisory services - transparent pricing, no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  id={service.id}
                  className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="grid md:grid-cols-3">

                    {/* Left */}
                    <div className="md:col-span-1 bg-slate-50 p-8">
                      <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="text-2xl mb-2 text-slate-900">{service.title}</h3>
                      {service.subtitle && (
                        <p className="text-sm text-gray-600 mb-4">{service.subtitle}</p>
                      )}
                      <div className="text-2xl text-teal-600 mb-4">{service.price}</div>
                      <p className="text-gray-700 mb-6 text-sm">{service.description}</p>
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.contactService)}&message=${encodeURIComponent(service.contactMessage)}`}
                        className="cursor-pointer"
                      >
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 cursor-pointer">
                          Get Started
                        </Button>
                      </Link>
                    </div>

                    {/* Right */}
                    <div className="md:col-span-2 p-8">

                      {/* Penalty note - teal scheme */}
                      {service.penaltyNote && (
                        <div className="flex items-start gap-3 bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
                          <ShieldAlert className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-teal-900">{service.penaltyNote}</p>
                        </div>
                      )}

                      {/* Pricing Tiers */}
                      {service.tiers && (
                        <div className="mb-6">
                          <h4 className="text-lg mb-3 text-slate-900">Pricing 
