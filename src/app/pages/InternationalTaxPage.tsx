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
  ShieldAlert,
  Users,
} from 'lucide-react';

const WHO_WE_SERVE = [
  {
    icon: Building2,
    step: '01',
    title: 'Foreign Founders with US Entities',
    desc: 'Non-US founders who have formed a Delaware LLC or C-Corp and need to stay compliant with IRS filing requirements.',
  },
  {
    icon: Globe2,
    step: '02',
    title: 'US Persons with Foreign Corporations',
    desc: 'US citizens, green card holders, and residents who own or control a foreign corporation and are required to file Form 5471.',
  },
  {
    icon: Users,
    step: '03',
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
    ogImage: 'https://taxclaim.co/og-image.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'International Tax Services by TaxClaim',
      description:
        'International tax and compliance services for foreign founders and cross-border businesses, including Form 5472, Form 5471, FBAR, FATCA, and cross-border tax planning.',
      url: 'https://taxclaim.co/international-tax',
      itemListElement: SERVICES.map((s, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Service',
          '@id': `https://taxclaim.co/international-tax#${s.id}`,
          name: s.title,
          description: s.description,
          url: `https://taxclaim.co/international-tax#${s.id}`,
          provider: {
            '@type': 'AccountingService',
            name: 'TaxClaim',
            url: 'https://taxclaim.co',
          },
          areaServed: 'Worldwide',
          serviceType: 'International Tax Compliance',
        },
      })),
    },
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
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-teal-200 transition-all text-center">
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-7 h-7 text-teal-600" />
                  </div>
                  <div className="text-teal-600 text-xs tracking-widest mb-2">TYPE {item.step}</div>
                  <h3 className="text-lg mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Penalty Stakes */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-slate-900">The Penalty Stakes</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These penalties are avoidable - but only if you act before the deadline.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-teal-200 transition-all text-center">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <ShieldAlert className="w-7 h-7 text-teal-600" />
                </div>
                <div className="text-teal-600 text-xs tracking-widest mb-2">FORM 5472</div>
                <h3 className="text-3xl text-slate-900 mb-2">$25,000</h3>
                <p className="text-gray-600 text-sm">per form per year - with no cap if multiple years are missed</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-teal-200 transition-all text-center">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <ShieldAlert className="w-7 h-7 text-teal-600" />
                </div>
                <div className="text-teal-600 text-xs tracking-widest mb-2">FORM 5471</div>
                <h3 className="text-3xl text-slate-900 mb-2">$10,000+</h3>
                <p className="text-gray-600 text-sm">base penalty plus $10,000 per month after IRS notice</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-teal-200 transition-all text-center">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <ShieldAlert className="w-7 h-7 text-teal-600" />
                </div>
                <div className="text-teal-600 text-xs tracking-widest mb-2">AUDIT RISK</div>
                <h3 className="text-3xl text-slate-900 mb-2">No Limit</h3>
                <p className="text-gray-600 text-sm">on statute of limitations - your entire return stays open to audit indefinitely</p>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-8">
              Most foreign founders do not find out about these penalties until after the fact.
            </p>
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
                    <div className="md:col-span-2 p-8">
                      {service.penalty && (
                        <div className="flex items-start gap-3 bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
                          <ShieldAlert className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-teal-900">{service.penalty}</p>
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

        {/* Why Act Before Deadline */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-slate-900">Why Act Before the Deadline</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Deadlines are fixed. Penalties are not waived for extensions.
              </p>
            </div>
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-teal-200 z-0"></div>
              {[
                {
                  step: '01',
                  icon: ShieldAlert,
                  title: 'Tax Year Ends',
                  text: 'Tax year ends December 31 - your filing obligations are locked in',
                },
                {
                  step: '02',
                  icon: FileText,
                  title: 'Return Due Date',
                  text: 'Form 5472 is due with your entity return - typically April 15 or June 15',
                },
                {
                  step: '03',
                  icon: ShieldCheck,
                  title: '$25,000 Penalty',
                  text: 'Missing it triggers a $25,000 penalty per form - no exceptions, no cap',
                },
                {
                  step: '04',
                  icon: CheckCircle2,
                  title: 'Extensions Do Not Help',
                  text: 'Filing an extension does not waive the penalty for a missing Form 5472',
                },
              ].map((item) => (
                <div key={item.step} className="relative z-10 bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-teal-200 transition-all">
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-7 h-7 text-teal-600" />
                  </div>
                  <div className="text-teal-600 text-xs tracking-widest mb-2">STEP {item.step}</div>
                  <div className="text-slate-900 mb-2">{item.title}</div>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-8">
              The sooner you address a missed or upcoming filing, the better your options. Reach out today.
            </p>
          </div>
        </section>

        {/* Why TaxClaim */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl mb-6 text-slate-900">Why TaxClaim</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Most general CPAs avoid international forms. We specialize in them. Our dual-qualification, penalty knowledge, and global client base are exactly what a foreign founder needs.
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
