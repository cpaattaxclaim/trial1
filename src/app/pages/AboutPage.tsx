import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  Shield, 
  Award, 
  Users, 
  TrendingUp,
  CheckCircle2,
  Target,
  Heart,
  Lightbulb,
  Search
} from 'lucide-react';

export function AboutPage() {
  // SEO Structured Data (JSON-LD)
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "TaxClaim",
    "description": "Professional CPA services and tax advisory for startups and small businesses. Get licensed support for your tax claims.",
    "url": "https://taxclaim.co/about",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "knowsAbout": [
      "Tax preparation",
      "IRS audit representation",
      "Business formation",
      "Tax planning",
      "Multi-state tax compliance"
    ]
  };

  const credentials = [
    {
      icon: Award,
      title: 'CPA Licensed',
      desc: 'Licensed Certified Public Accountant in Washington State'
    },
    {
      icon: Shield,
      title: '7+ Years Experience',
      desc: 'Extensive professional tax and accounting expertise'
    },
    {
      icon: Users,
      title: '150+ Clients',
      desc: 'Serving individuals and businesses in US, UK, Netherlands, Singapore, Canada, Germany, New Zealand, UAE, India, China and South Africa'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      desc: '99% client satisfaction with measurable tax savings'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision & Accuracy',
      desc: 'We ensure every number is correct and every deduction is maximized, protecting you from audits and penalties.'
    },
    {
      icon: Heart,
      title: 'Client-Centered Service',
      desc: 'Your success is our success. We build long-term relationships based on trust and results.'
    },
    {
      icon: Lightbulb,
      title: 'Proactive Guidance',
      desc: "We don't just react to tax season - we provide year-round strategic advice to optimize your financial position."
    },
    {
      icon: Shield,
      title: 'Confidentiality & Trust',
      desc: 'Your financial information is handled with the utmost care and professionalism.'
    }
  ];

  const expertise = [
    'Individual and business tax preparation',
    'Multi-state tax compliance',
    'IRS and state audit representation',
    'Business formation and structure optimization',
    'Sales and use tax management',
    'Bookkeeping and financial reporting',
    'Tax planning and strategy'
  ];

  const industries = [
    'E-commerce', 'Professional Services', 'Real Estate', 'Healthcare',
    'Technology', 'SaaS', 'Retail', 'Construction', 'Hospitality',
    'Manufacturing', 'Consulting'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About TaxClaim | CPA Licensed Tax & Business Advisory</title>
        <meta name="description" content="TaxClaim provides expert tax planning, IRS representation, and business formation services. Serving 150+ global clients with over 7 years of CPA expertise." />
        <meta name="keywords" content="CPA, Tax Planning, IRS Audit Representation, Business Formation, TaxClaim About" />
        <link rel="canonical" href="https://taxclaim.co/about" />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Helmet>

      <Header />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6 font-bold">About TaxClaim</h1>
            <p className="text-xl text-gray-300">
              Professional tax and business advisory services built on expertise, integrity, and a commitment to your success.
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
                <span className="text-teal-700 font-semibold">Our Mission</span>
              </div>
              <h2 className="text-4xl mb-6 text-slate-900 font-bold">
                Empowering Businesses Through Expert Financial Guidance
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At TaxClaim, we believe that every business deserves access to professional, affordable tax and accounting services. Our mission is to simplify the complex world of taxes and business compliance, allowing you to focus on what you do best.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We're not just number crunchers – we're strategic partners invested in your long-term success, whether you're a startup or an established business.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Work With Us
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {credentials.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-200 transition-all">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="mb-2 text-slate-900 font-bold">{item.title}</h3>
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
            <h2 className="text-4xl mb-4 text-slate-900 font-bold">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make for our clients.
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
                    <h3 className="text-xl mb-2 text-slate-900 font-bold">{value.title}</h3>
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
            <div>
              <h2 className="text-4xl mb-6 text-slate-900 font-bold">Our Expertise</h2>
              <p className="text-lg text-gray-600 mb-8">
                Serving individuals and businesses across the US, Europe, Asia, and Africa. We've developed deep expertise in a wide range of tax and accounting services.
              </p>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8">
                <h3 className="text-2xl mb-4">Why Remote Services?</h3>
                <ul className="space-y-3">
                  {[
                    'Work with us from anywhere in the world',
                    'Flexible scheduling around your availability',
                    'Secure document sharing and collaboration',
                    'Lower overhead = better pricing for you',
                    'Fast turnaround times'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6 text-slate-900 font-bold">Areas of Specialization</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {expertise.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-teal-50 border border-teal-200 rounded-xl p-6">
                <h4 className="text-lg mb-2 text-slate-900 font-bold">Industries We Serve</h4>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border border-teal-200 rounded-full text-sm text-gray-700">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Final Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-slate-900 font-bold">Professional Credentials</h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-slate-900 font-bold">CPA License</h3>
              <p className="text-gray-600">Licensed Certified Public Accountant in Washington State</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-slate-900 font-bold">Continuing Education</h3>
              <p className="text-gray-600">Regular training on the latest tax laws and regulations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6 font-bold">Ready to Experience the Difference?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help your business thrive with expert tax and financial guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
