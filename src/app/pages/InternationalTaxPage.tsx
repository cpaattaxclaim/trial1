import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { useSEO } from '../../hooks/useSEO';
import {
  Globe2,
  FileText,
  ShieldCheck,
  Building2,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Users,
  MapPin,
} from 'lucide-react';

const WHO_WE_SERVE = [
  {
    icon: Building2,
    title: 'Foreign Founders with US Entities',
    desc: 'Non-US founders who have formed a Delaware LLC or C-Corp and need to stay compliant with IRS filing requirements.',
  },
  {
    icon: Globe2,
    title: 'US Persons with Foreign Corporations',
    desc: 'US citizens, green card holders, and residents who own or control a foreign corporation and are required to file Form 5471.',
  },
  {
    icon: Users,
    title: 'NRIs and Expats',
    desc: 'Non-resident Indians and expats with cross-border income, foreign bank accounts, or US entities requiring FBAR and FATCA reporting.',
  },
];

const SERVICES = [
  {
    id: 'form-5472',
    icon: FileText,
    title: 'Form 5472 and Pro Forma 1120',
    subtitle: 'Foreign-Owned US Entities',
    description:
      'Foreign-owned US LLCs and corporations with reportable transactions are required to file Form 5472 with a pro forma 1120. We handle the full filing so you stay compliant.',
    included: [
      'Form 5472 preparation and filing',
      'Pro forma 1120 preparation',
      'Reportable transaction analysis',
      'Multi-year catch-up filings',
      'Penalty abatement for prior missed filings',
    ],
    penalty: 'Missing Form 5472 carries a $25,000 penalty per form per year - with no cap if multiple years are missed.',
    service: 'International Tax & Compliance',
    message: 'I have a foreign-owned US entity and need help with Form 5472 and pro forma 1120 compliance.',
  },
  {
    id: 'form-5471',
    icon: FileText,
    title: 'Form 5471',
    subtitle: 'US Persons with Foreign Corporations',
    description:
      'US citizens, green card holders, and residents who own or control a foreign corporation must file Form 5471. This is one of the most penalized forms in the US tax code.',
    included: [
      'Form 5471 preparation (all categories)',
      'Schedules E, J, and P where required',
      'Controlled foreign corporation analysis',
      'Subpart F income determination',
      'Multi-year catch-up filings',
    ],
    penalty: 'Missing Form 5471 carries a $10,000 base penalty plus $10,000 per month after IRS notice - and leaves your entire return permanently open to audit with no statute of limitations.',
    service: 'Form 5471',
    message: 'I am a US person with a foreign corporation and need help with Form 5471 filing.',
  },
  {
    id: 'fbar-fatca',
    icon: ShieldCheck,
    title: 'FBAR and FATCA Reporting',
    subtitle: 'Foreign Financial Accounts and Assets',
    description:
      'US persons with foreign financial accounts exceeding $10,000 must file FinCEN 114 (FBAR). Those with higher foreign asset thresholds must also file Form 8938 (FATCA).',
    included: [
      'FinCEN 114 (FBAR) preparation and filing',
      'Form 8938 (FATCA) preparation',
      'Foreign account threshold analysis',
      'Multi-year catch-up filings',
      'Penalty abatement assistance',
    ],
    penalty: 'Willful failure to file FBAR carries penalties up to $100,000 or 50% of account balance per violation.',
    service: 'FBAR & FATCA Reporting',
    message: 'I need help with FBAR and FATCA reporting for my foreign financial accounts.',
  },
  {
    id: 'foreign-founder',
    icon: Building2,
    title: 'Foreign Founder Setup Package',
    subtitle: 'Formation + EIN + First-Year Compliance',
    description:
      'Everything a non-US founder needs to set up and stay compliant with a US entity from day one. Formation, EIN, and first-year filing handled end to end.',
    included: [
      'US entity formation (LLC or C-Corp)',
      'EIN application for foreign nationals without SSN',
      'First-year Form 5472 compliance',
      'Pro forma 1120 preparation',
      'Operating agreement or bylaws',
      'Registered agent coordination',
    ],
    penalty: null,
    service: 'Foreign Founder Setup (Formation + EIN + Compliance)',
    message: 'I am a non-US founder looking to set up a US entity and need help with formation, EIN, and first-year compliance.',
  },
  {
    id: 'cross-border',
    icon: Globe2,
    title: 'Cross-Border Tax Planning',
    subtitle: 'Structures, Treaties, and Strategy',
    description:
      'Strategic planning for businesses and individuals operating across borders. We analyze your structure, identify treaty benefits, and ensure you are not paying tax twice on the same income.',
    included: [
      'Cross-border structure analysis',
      'US-India tax treaty positions',
      'US-Singapore tax treaty positions',
      'Withholding tax optimization',
      'Transfer pricing guidance',
      'Repatriation planning',
    ],
    penalty: null,
    service: 'International Tax & Compliance',
    message: 'I need cross-border tax planning and treaty analysis for my business structure.',
  },
  {
    id: 'treaty',
    icon: Globe2,
    title: 'Tax Treaty Analysis',
    subtitle: 'US-India and US-Singapore Treaties',
    description:
      'We work with the US-India and US-Singapore tax treaties to help you determine treaty benefits, apply reduced withholding rates, and avoid double taxation on cross-border income.',
    included: [
      'Treaty benefit determination',
      'Reduced withholding rate applications',
      'Form W-8BEN and W-8BEN-E preparation',
      'Double taxation avoidance analysis',
      'Treaty position disclosure (Form 8833)',
    ],
    penalty: null,
    service: 'International Tax & Compliance',
    message: 'I need help with US-India or US-Singapore tax treaty analysis and treaty benefit claims.',
  },
  {
    id: '1040nr',
    icon: FileText,
    title: 'Form 1040-NR',
    subtitle: 'Non-Resident Alien Tax Returns',
    description:
      'Non-resident aliens with US-source income or effectively connected income are required to file Form 1040-NR. We handle the full return including treaty positions and withholding credits.',
    included: [
      'Form 1040-NR preparation and filing',
      'Effectively connected income analysis',
      'US-source income determination',
      'Treaty position claims',
      'ITIN application assistance',
    ],
    penalty: null,
    service: 'International Tax & Compliance',
    message: 'I am a non-resident alien with US-source income and need help filing Form 1040-NR.',
  },
];

const COUNTRIES = [
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

const WHY_TAXCLAIM = [
  {
    title: 'Dual Qualified',
    desc: 'Licensed US CPA (Washington State) and Indian Chartered Accountant (ICAI) - expertise on both sides of the border.',
  },
  {
    title: 'Form 5471 and 5472 Specialists',
    desc: 'These are forms most general CPAs avoid. We handle them routinely across multiple industries and countries.',
  },
  {
    title: 'Clients in 11 Countries',
    desc: 'We have served clients across the US, UK, India, Singapore, UAE, Germany, Netherlands, Canada, China, New Zealand, and South Africa.',
  },
  {
    title: 'Fully Remote, Any Time Zone',
    desc: 'No US presence required. We work across US, Asia, and European time zones and respond within 24 hours.',
  },
  {
    title: 'Penalty Abatement Experience',
    desc: 'Missed a prior year filing? We handle multi-year catch-ups and penalty abatement requests alongside current-year compliance.',
  },
];

export function InternationalTaxPage() {
  useSEO({
    title: 'International Tax & Compliance | TaxClaim - Foreign Founders and Cross-Border Businesses',
    description:
      'Form 5472, Form 5471, FBAR, FATCA, and cross-border tax planning handled by a dual-qualified US CPA and Indian CA. Serving foreign founders and businesses across 11 countries.',
    canonical: 'https://taxclaim.co/international-tax',
    ogTitle: 'International Tax & Compliance for Foreign Founders | TaxClaim',
    ogDescription:
      'Form 5471, FBAR, FATCA, pro forma 1120 - handled by a dual-qualified US CPA and Indian CA serving clients in 11 countries.',
    ogUrl: 'https://taxclaim.co/international-tax',
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMTEtMS43ODkgNC00IDRzLTQtMS43ODkgNC00IDEuNzg5LTQgNC00IDQgMS43ODkgNCA0em0tNiAyNGMwIDIuMjExLTEuNzg5IDQtNCA0cy00LTEuNzg5LTQtNCAxLjc4OS00IDQtNCA0IDEuNzg5IDQgNHptMTggMGMwIDIuMjExLTEuNzg5IDQtNCA0cy00LTEuNzg5LTQtNCAxLjc4OS00IDQtNCA0IDEuNzg5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-teal-600/20 rounded-full border border-teal-500/30 mb-6">
                <span className="text-teal-300 text-sm">US CPA + Indian CA - Dual Qualified - Clients in 11 Countries</span>
              </div>
              <h1 className="text-4xl md:text-6xl mb-6">
                International Tax and Compliance for Foreign Founders
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Form 5471, FBAR, FATCA, and cross-border structures handled by a dual-qualified US CPA and Indian CA serving clients across 11 countries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact?service=International+Tax+%26+Compliance&message=I+need+help+with+international+tax+compliance+for+my+US+entity." className="cursor-pointer">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 cursor-pointer">
                    Book a Free Clarity Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a
                  href="https://wa.me/14153047262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 bg-transparent border-white text-white hover:!bg-white/10 hover:!text-white hover:!border-white cursor-pointer"
                  >
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-slate-900">Who This Is For</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                If any of these describe your situation, you are in the right place.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {WHO_WE_SERVE.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-teal-200 transition-all">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Penalty Stakes Banner */}
        <section className="py-12 bg-amber-50 border-y border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 max-w-4xl mx-auto">
              <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg text-amber-900 mb-3">The Penalty Stakes</h3>
                <div className="grid sm:grid-cols-3 gap-6 text-sm text-amber-800">
                  <div>
                    <div className="text-2xl text-amber-700 mb-1">$25,000</div>
                    <div>per form per year for missing Form 5472</div>
                  </div>
                  <div>
                    <div className="text-2xl text-amber-700 mb-1">$10,000+</div>
                    <div>base penalty for missing Form 5471, plus $10,000 per month after IRS notice</div>
                  </div>
                  <div>
                    <div className="text-2xl text-amber-700 mb-1">No limit</div>
                    <div>on statute of limitations for a return with a missing Form 5471 - your entire return stays open to audit indefinitely</div>
                  </div>
                </div>
                <p className="mt-4 text-amber-800 text-sm">
                  These penalties are avoidable - but only if you act before the deadline. Most foreign founders do not find out about them until after the fact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl mb-4 text-slate-900">Our International Tax Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                All services are custom priced. Book a free clarity call to get an exact quote for your situation.
              </p>
            </div>
            <div className="space-y-12">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="grid md:grid-cols-3">
                    {/* Left */}
                    <div className="md:col-span-1 bg-slate-50 p-8">
                      <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="text-2xl mb-1 text-slate-900">{service.title}</h3>
                      {service.subtitle && (
                        <p className="text-sm text-gray-500 mb-4">{service.subtitle}</p>
                      )}
                      <div className="text-lg text-teal-600 mb-4">Custom Pricing - Book a Call</div>
                      <p className="text-gray-700 text-sm mb-6">{service.description}</p>
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.service)}&message=${encodeURIComponent(service.message)}`}
                        className="cursor-pointer"
                      >
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 cursor-pointer">
                          Get Started
                        </Button>
                      </Link>
                    </div>

                    {/* Right */}
                    <div className="md:col-span-2 p-8">
                      {service.penalty && (
                        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-amber-800">{service.penalty}</p>
                        </div>
                      )}
                      <h4 className="text-lg mb-4 text-slate-900">What is Included</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.included.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Act Now */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl mb-8 text-center">Why Act Before the Deadline</h2>
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { step: '01', text: 'Tax year ends December 31' },
                { step: '02', text: 'Form 5472 is due with your entity return' },
                { step: '03', text: 'Missing it triggers a $25,000 penalty per form' },
                { step: '04', text: 'Extensions do not waive the penalty' },
              ].map((item) => (
                <div key={item.step} className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-teal-400 text-sm mb-2">STEP {item.step}</div>
                  <p className="text-gray-200 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-8">
              The sooner you address a missed or upcoming filing, the better your options. Reach out today.
            </p>
          </div>
        </section>

        {/* Why TaxClaim */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl mb-6 text-slate-900">Why TaxClaim</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Most general CPAs avoid international forms. We specialize in them. Your dual-qualification, penalty knowledge, and global client base are exactly what a foreign founder needs.
                </p>
                <div className="space-y-4">
                  {WHY_TAXCLAIM.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-slate-900 mb-1">{item.title}</div>
                        <div className="text-gray-600 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl mb-2 text-teal-600">7+</div>
                  <div className="text-sm text-gray-600">Years of Experience</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl mb-2 text-teal-600">11</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl mb-2 text-teal-600">150+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl mb-2 text-teal-600">100%</div>
                  <div className="text-sm text-gray-600">On-Time Filing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Countries We Serve */}
        <section className="py-16 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl mb-3 text-slate-900">Countries We Serve</h2>
              <p className="text-gray-600">
                Our clients are based across 11 countries. If you have a US entity or US tax obligation, we can help you regardless of where you are.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {COUNTRIES.map((country) => (
                <div
                  key={country.name}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-gray-200 rounded-full hover:border-teal-300 hover:bg-teal-50 transition-colors"
                >
                  <span className="text-xl">{country.flag}</span>
                  <span className="text-sm text-gray-700">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Anonymized Case Study */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl mb-10 text-center text-slate-900">How We Have Helped</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  scenario: 'Singapore founder, Delaware LLC, 3 missed years',
                  detail: 'A Singapore-based founder came to us with 3 years of missed Form 5472 filings. We handled the multi-year catch-up, filed penalty abatement requests, and brought the entity fully into compliance.',
                  outcome: 'Penalties avoided: up to $75,000',
                },
                {
                  scenario: 'US person with UK subsidiary, Form 5471 never filed',
                  detail: 'A US citizen with a UK subsidiary had never been told about Form 5471. We filed 2 years of catch-up returns, resolved the open audit risk, and set up an ongoing compliance calendar.',
                  outcome: 'Statute of limitations closed on both years',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8">
                  <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs mb-4">
                    Anonymized Case Study
                  </div>
                  <h3 className="text-lg text-slate-900 mb-3">{item.scenario}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.detail}</p>
                  <div className="flex items-center gap-2 text-teal-700 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    {item.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl mb-8 text-center text-slate-900">Common Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Do I need to file US taxes if I have a foreign-owned Delaware LLC?',
                  a: 'It depends on whether your entity has effectively connected income or transactions with related parties. Many foreign-owned LLCs are required to file a pro forma 1120 and Form 5472 even if no US tax is owed.',
                },
                {
                  q: 'What is the difference between Form 5472 and Form 5471?',
                  a: 'Form 5472 applies to foreign-owned US entities with reportable transactions. Form 5471 applies to US persons who own or control a foreign corporation. Both carry significant penalties for non-filing.',
                },
                {
                  q: 'Can you help if I missed filings for prior years?',
                  a: 'Yes. We handle multi-year catch-up filings, voluntary disclosure situations, and penalty abatement requests. The sooner you address a missed filing, the better your options.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/faq" className="cursor-pointer">
                <Button variant="outline" className="cursor-pointer">
                  View All FAQs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl mb-6">Ready to Sort Your US Tax Compliance?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you have a foreign-owned US entity, need to file Form 5471, or are setting up your first US structure, book a free clarity call and we will tell you exactly what is required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?service=International+Tax+%26+Compliance&message=I+need+help+with+international+tax+compliance+for+my+US+entity." className="cursor-pointer">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 cursor-pointer">
                  Book a Free Clarity Call
                </Button>
              </Link>
              <a href="https://wa.me/14153047262" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:!bg-white/10 hover:!text-white hover:!border-white cursor-pointer">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
            <p className="mt-6 text-gray-400 text-sm">
              No commitment required - Free initial consultation - Response within 24 hours
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
