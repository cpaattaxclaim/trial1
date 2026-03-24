import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { useSEO } from '../../hooks/useSEO';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { MessageSquare, ArrowRight, Globe2, FileText, BookOpen } from 'lucide-react';

export function FAQPage() {
  useSEO({
    title: 'FAQ | TaxClaim CPA - International Tax and Accounting Questions',
    description:
      'Got questions about Form 5471, FBAR, foreign-owned US entities, tax filing, bookkeeping, or company formation? Browse TaxClaim\'s frequently asked questions or contact us for a free consultation.',
    canonical: 'https://taxclaim.co/faq',
  });

  const faqCategories = [
    {
      category: 'International Tax and Foreign Founders',
      faqs: [
        {
          question: 'Do you file Form 5471 for US persons with foreign corporations?',
          answer: 'Yes. Form 5471 is required for US citizens, green card holders, and US residents who own or control a foreign corporation. We handle the full filing including Schedules E, J, and P where required.',
          link: { label: 'Learn more about our Form 5471 service', href: '/international-tax#form-5471' },
        },
        {
          question: 'What are the penalties for missing Form 5471?',
          answer: 'The base penalty is $10,000 per form per year. If the IRS sends a notice and the form is still not filed, the penalty increases by $10,000 per month up to $50,000 per form. Missing this filing also leaves your entire tax return permanently open to audit with no statute of limitations.',
          link: null,
        },
        {
          question: 'Can you help with FBAR and FATCA reporting?',
          answer: 'Yes. We file FinCEN 114 (FBAR) for US persons with foreign financial accounts exceeding $10,000, and Form 8938 (FATCA) for those with higher foreign asset thresholds. Both have significant penalties for non-compliance.',
          link: { label: 'Learn more about our FBAR and FATCA service', href: '/international-tax#fbar-fatca' },
        },
        {
          question: 'I am a non-US founder with a US LLC or Corporation - do I need to file US taxes?',
          answer: 'It depends on whether your entity has effectively connected income, US-source income, or transactions with related parties. Many foreign-owned US entities are required to file a pro forma 1120 and Form 5472 even if no US tax is owed. We assess your situation and handle all required filings.',
          link: { label: 'Learn more about foreign-owned US entity compliance', href: '/international-tax#form-5472' },
        },
        {
          question: 'Can you help with US-India or US-Singapore tax treaty positions?',
          answer: 'Yes. We work with the US-India and US-Singapore tax treaties and can help you determine treaty benefits, apply reduced withholding rates, and avoid double taxation on cross-border income.',
          link: { label: 'Learn more about our treaty analysis service', href: '/international-tax#treaty' },
        },
        {
          question: 'I have a US entity and a foreign parent company - what do I need to file?',
          answer: 'A foreign-owned US corporation or LLC with reportable transactions with its foreign owner or related parties is required to file Form 5472 with a pro forma 1120. Additional forms may apply depending on your structure. We handle the full compliance picture.',
          link: { label: 'Learn more about Form 5472 compliance', href: '/international-tax#form-5472' },
        },
        {
          question: 'How do I get an EIN without a US Social Security Number?',
          answer: 'Foreign nationals without an SSN or ITIN can obtain an EIN by calling the IRS international line directly. We handle this process for clients as part of our Foreign Founder Setup Package.',
          link: { label: 'Learn more about our Foreign Founder Setup Package', href: '/international-tax#foreign-founder' },
        },
        {
          question: 'What is effectively connected income and does it apply to me?',
          answer: 'Effectively connected income (ECI) is income from a US trade or business. If your foreign-owned US entity is engaged in business activity in the US, that income is subject to US tax at regular rates. We assess whether ECI applies and ensure correct reporting.',
          link: null,
        },
        {
          question: 'Do you work with clients outside the United States?',
          answer: 'Yes. We serve clients across 11 countries including the UK, Singapore, UAE, India, Germany, Netherlands, Canada, China, New Zealand, and South Africa. All services are fully remote. No US presence is required.',
          link: null,
        },
        {
          question: 'Can you help if I missed filing for prior years?',
          answer: 'Yes. We handle multi-year catch-up filings, voluntary disclosure situations, and penalty abatement requests. The sooner you address a missed filing, the better your options. Reach out and we will assess what is required.',
          link: { label: 'Contact us to discuss your situation', href: '/contact?service=International+Tax+%26+Compliance&message=I+have+missed+filings+for+prior+years+and+need+help+with+catch-up+and+penalty+abatement.' },
        },
      ],
    },
    {
      category: 'General Questions',
      faqs: [
        {
          question: 'Who can use your services?',
          answer: 'We work with individuals, self-employed professionals, and small to mid-sized businesses across all 50 states, as well as foreign founders and cross-border businesses in 11 countries. Whether you are a sole proprietor, LLC, partnership, S-Corp, C-Corp, or foreign-owned US entity, we have the expertise to help you.',
          link: null,
        },
        {
          question: 'Are you a licensed CPA?',
          answer: 'Yes. We are a licensed Certified Public Accountant (CPA) in Washington State and also a qualified Indian Chartered Accountant (ICAI). We maintain all required continuing education credits and stay current with federal, state, and international tax law changes.',
          link: null,
        },
        {
          question: 'Do you only serve clients in Washington State?',
          answer: 'No. While we are licensed in Washington State, we serve clients across all 50 states and in 11 countries. Our services are 100% remote, allowing us to work with businesses and founders worldwide.',
          link: null,
        },
      ],
    },
    {
      category: 'Services and Pricing',
      faqs: [
        {
          question: 'What does "starting from" mean in your pricing?',
          answer: 'Our "starting from" prices represent the minimum cost for straightforward cases. Final pricing depends on the complexity of your situation, number of forms needed, and time required. We always provide a quote before beginning work.',
          link: null,
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'Absolutely not. We believe in transparent pricing. Any additional costs such as state filing fees are disclosed upfront. You will never receive a surprise bill.',
          link: null,
        },
        {
          question: 'When do we pay?',
          answer: 'Payment is due after your tax return is fully prepared and you have had the opportunity to review and approve it. Once payment is received, we will proceed with filing your return with the relevant authorities.',
          link: null,
        },
        {
          question: 'What is included in the monthly bookkeeping service?',
          answer: 'Our monthly bookkeeping includes transaction categorization, bank reconciliation, monthly financial statements (P&L and Balance Sheet), accounts payable and receivable tracking, and QuickBooks Online support. Catch-up bookkeeping is quoted separately.',
          link: null,
        },
        {
          question: 'How does the consulting and advisory service work?',
          answer: 'Consulting is billed from $250/hour and can cover business strategy, tax planning, entity structure, financial analysis, or any business advisory needs. We can work on specific projects or provide ongoing advisory support.',
          link: null,
        },
      ],
    },
    {
      category: 'Process and Timeline',
      faqs: [
        {
          question: 'How quickly can you start working on my taxes?',
          answer: 'After our initial consultation and receiving all necessary documents, we typically begin work within 2-3 business days. During tax season (January to April), turnaround times may be slightly longer.',
          link: null,
        },
        {
          question: 'What documents do I need to provide?',
          answer: 'For individual taxes: W-2s, 1099s, receipts for deductions, and prior year returns. For business taxes: financial statements, receipts, payroll records, and previous returns. For international filings: details of foreign entities, account balances, and transaction records. We will provide a detailed checklist based on your specific situation.',
          link: null,
        },
        {
          question: 'How do we communicate and share documents?',
          answer: 'We use secure, encrypted methods for all document sharing and communication. You can reach us via email, phone, or WhatsApp. Documents are shared through secure portals to protect your sensitive information.',
          link: null,
        },
        {
          question: 'What if I get audited?',
          answer: 'We offer audit support and representation for tax returns we prepare. If you receive an IRS or state notice, we can help you respond and represent you throughout the audit process. Audit representation is a separate chargeable service - contact us for pricing based on your specific situation.',
          link: null,
        },
      ],
    },
    {
      category: 'Tax Filing Specific',
      faqs: [
        {
          question: 'Can you handle multi-state tax returns?',
          answer: 'Yes. We regularly handle multi-state returns for businesses operating in multiple states and individuals with income from different states.',
          link: null,
        },
        {
          question: 'Do you file taxes for non-resident aliens (NRAs)?',
          answer: 'Yes. We help non-resident aliens file their US tax returns using Form 1040-NR. This requires additional forms and documentation, so please mention this during your initial consultation.',
          link: { label: 'Learn more about Form 1040-NR filing', href: '/international-tax#1040nr' },
        },
        {
          question: 'What is the difference between Individual and Business tax filing?',
          answer: 'Individual tax filing (Form 1040) is for personal income, while business tax filing covers partnerships (1065), S-Corps (1120-S), and C-Corps (1120). Sole proprietors report business income on Schedule C of their individual return.',
          link: null,
        },
        {
          question: 'Can you help me maximize my tax deductions?',
          answer: 'Yes. We carefully review all potential deductions and credits you qualify for, ensuring you do not pay more tax than necessary while staying compliant with IRS rules.',
          link: null,
        },
      ],
    },
    {
      category: 'Business Services',
      faqs: [
        {
          question: 'Should I form an LLC or C-Corp?',
          answer: 'It depends on your business goals, revenue, growth plans, and tax situation. We provide entity structure consultation as part of our formation service to help you choose the right structure. For foreign founders, the choice between LLC and C-Corp has additional implications around investor readiness and tax treaty access.',
          link: null,
        },
        {
          question: 'What states can you form companies in?',
          answer: 'We can help form companies in any US state, though many clients choose Delaware, Wyoming, or their home state. We will advise on the best jurisdiction for your situation.',
          link: null,
        },
        {
          question: 'Do you handle sales tax for e-commerce businesses?',
          answer: 'Yes. E-commerce sales tax can be complex with nexus rules varying by state. We help you determine where you need to collect sales tax and handle the filing in those states.',
          link: null,
        },
        {
          question: 'What is included in IRS Resolution services?',
          answer: 'We handle IRS and state notices, audit representation, payment plan negotiations, penalty abatement requests, and tax dispute resolution. Pricing varies based on complexity - contact us for a custom quote.',
          link: null,
        },
      ],
    },
    {
      category: 'Getting Started',
      faqs: [
        {
          question: 'How do I get started?',
          answer: 'Simply fill out our contact form, email us, or reach out via WhatsApp. We will schedule a free consultation to discuss your needs and provide a quote. No commitment required.',
          link: null,
        },
        {
          question: 'Is the initial consultation really free?',
          answer: 'Yes. The initial consultation is completely free with no obligation. We want to understand your needs and ensure we are the right fit for your situation.',
          link: null,
        },
        {
          question: 'What happens after I contact you?',
          answer: 'We will respond within 24 hours to schedule a consultation. During the call, we will discuss your needs, answer questions, and provide pricing. If you decide to proceed, we will send an engagement letter and get started.',
          link: null,
        },
        {
          question: 'Do you work with new businesses just starting out?',
          answer: 'Yes. We love working with startups and new entrepreneurs, including foreign founders setting up their first US entity. We can help with formation, initial setup, tax planning, and ongoing support as you grow.',
          link: null,
        },
      ],
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
              <h1 className="text-5xl mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-gray-300">
                Find answers to common questions about international tax, services, pricing, and process. Can't find what you're looking for? Contact us directly.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqCategories.map((category, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-2xl mb-6 text-slate-900">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIdx) => (
                    <AccordionItem
                      key={faqIdx}
                      value={`${idx}-${faqIdx}`}
                      className="bg-white border border-gray-200 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow [&:last-child]:border-b"
                    >
                      <AccordionTrigger className="text-left hover:no-underline cursor-pointer">
                        <span className="text-slate-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pt-2 pb-4">
                        <p>{faq.answer}</p>
                        {faq.link && (
                          <Link
                            to={faq.link.href}
                            className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 text-sm mt-3"
                          >
                            {faq.link.label}
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-3xl mb-4 text-slate-900">Still Have Questions?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We are here to help. Reach out and we will get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="cursor-pointer">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
                    Contact Us
                  </Button>
                </Link>
                <a
                  href="https://wa.me/14153047262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Button size="lg" variant="outline" className="cursor-pointer">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Explore More */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl mb-4 text-slate-900">Explore More</h2>
              <p className="text-lg text-gray-600">Learn more about our services and how we can help</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe2,
                  label: 'INTERNATIONAL TAX',
                  title: 'International Tax',
                  desc: 'Form 5471, FBAR, FATCA, and foreign founder compliance',
                  href: '/international-tax',
                },
                {
                  icon: FileText,
                  label: 'SERVICES',    
                  title: 'View All Services',
                  desc: 'Explore our complete range of tax and business services',
                  href: '/services',
                },
                {
                  icon: BookOpen,
                  label: 'BLOG',
                  title: 'Blog',
                  desc: 'Read helpful articles and tax tips for foreign founders',
                  href: '/blog',
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-teal-200 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="text-sm font-semibold text-teal-600 mb-2">{item.label}</div>
                  <h3 className="text-xl mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
