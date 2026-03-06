import { Link } from 'react-router';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Advanced SEO handler
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { MessageSquare } from 'lucide-react';

export function FAQPage() {
  const faqCategories = [
    {
      category: 'General Questions',
      faqs: [
        {
          question: 'Who can use your services?',
          answer: 'We work with individuals, self-employed professionals, and small to mid-sized businesses across all 50 states. Whether you\'re a sole proprietor, LLC, partnership, S-Corp, or C-Corp, we have the expertise to help you.'
        },
        {
          question: 'Are you a licensed CPA?',
          answer: 'Yes, we are a licensed Certified Public Accountant (CPA) in Washington State. We maintain all required continuing education credits and stay current with federal and state tax law changes.'
        },
        {
          question: 'Do you only serve clients in Washington State?',
          answer: 'No! While we\'re licensed in Washington State, we serve clients across all 50 states. Our services are 100% remote, allowing us to work with businesses nationwide.'
        }
      ]
    },
    {
      category: 'Services & Pricing',
      faqs: [
        {
          question: 'What does "starting from" mean in your pricing?',
          answer: 'Our "starting from" prices represent the minimum cost for straightforward cases. Final pricing depends on the complexity of your situation, number of forms needed, and time required. We always provide a quote before beginning work.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'Absolutely not. We believe in transparent pricing. Any additional costs (like state filing fees) are disclosed upfront. You\'ll never receive a surprise bill.'
        },
        {
          question: 'When do we pay?',
          answer: 'Payment is due after your tax return is fully prepared and you\'ve had the opportunity to review and approve it. Once payment is received, we will proceed with filing your return with the relevant authorities.'
        }
      ]
    },
    {
        category: 'Business Services',
        faqs: [
          {
            question: 'Should I form an LLC or C-Corp?',
            answer: 'It depends on your business goals, revenue, growth plans, and tax situation. We provide entity structure consultation as part of our formation service to help you choose the right structure.'
          },
          {
            question: 'Do you handle sales tax for e-commerce businesses?',
            answer: 'Yes! E-commerce sales tax can be complex with nexus rules varying by state. We help you determine where you need to collect sales tax and handle the filing in those states.'
          }
        ]
      }
    // ... rest of your categories
  ];

  // --- ADVANCED SEO: Flatten FAQ list for Schema.org ---
  const allFaqs = faqCategories.flatMap(category => category.faqs);
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      {/* --- SEO METADATA --- */}
      <Helmet>
        <title>FAQ | US Tax Filing, LLC Formation & CPA Services | TaxClaim</title>
        <meta name="description" content="Find answers to common questions about US tax filing, LLC formation, IRS resolution, and pricing. Learn how our remote CPA services work for global business owners." />
        <meta name="keywords" content="US tax FAQ, CPA questions, LLC formation help, IRS audit support, e-commerce sales tax help" />
        <link rel="canonical" href="https://yourdomain.com/faq" />
        
        {/* Injecting Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Header />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6 font-bold tracking-tight">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our services, pricing, and process. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20" aria-label="Frequently Asked Questions">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-gray-100 pb-2">
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIdx) => (
                  <AccordionItem
                    key={faqIdx}
                    value={`${idx}-${faqIdx}`}
                    className="bg-white border border-gray-200 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow [&:last-child]:border-b-0"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="text-slate-900 font-semibold text-lg">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pt-2 pb-6 leading-relaxed">
                      {faq.answer}
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
          <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-teal-600" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're here to help! Reach out to us and we'll get back to you within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 py-6 font-bold">
                  Contact Us
                </Button>
              </Link>
              <a
                href="https://wa.me/14153047262"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="px-8 py-6 border-slate-200 text-slate-700 font-bold hover:bg-slate-50">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
