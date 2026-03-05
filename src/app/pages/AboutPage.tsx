import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async'; // Added for SEO
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
  Lightbulb
} from 'lucide-react';

export function AboutPage() {
  // SEO Structured Data (JSON-LD)
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "TaxClaim",
    "description": "Professional tax and business advisory services including CPA licensed tax preparation and consulting.",
    "url": "https://taxclaim.com/about", // Replace with your actual domain
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "knowsAbout": [
      "Tax preparation",
      "IRS audit representation",
      "Business formation",
      "Tax planning"
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

  return (
    <div className="min-h-screen bg-white">
      {/* --- SEO HEADER START --- */}
      <Helmet>
        <title>About TaxClaim | CPA Licensed Tax & Business Advisory</title>
        <meta name="description" content="TaxClaim provides expert tax planning, IRS representation, and business formation services. Serving 150+ global clients with over 7 years of CPA expertise." />
        <meta name="keywords" content="CPA, Tax Planning, IRS Audit Representation, Business Formation, TaxClaim About" />
        <link rel="canonical" href="https://taxclaim.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Helmet>
      {/* --- SEO HEADER END --- */}

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

      {/* Rest of your existing JSX sections... */}
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
                At TaxClaim, we believe that every business deserves access to professional, affordable tax and accounting services. Our mission is to simplify the complex world of taxes and business compliance, allowing you to focus on what you do best – growing your business.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Whether you're a solopreneur, a growing startup, or an established mid-sized business, we provide the same level of expertise and personalized attention. We're not just number crunchers – we're strategic partners invested in your long-term success.
              </p>

              <Link to="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
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
                  <h3 className="mb-2 text-slate-900 font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values, Expertise, Credentials, and CTA sections continue as per your original code */}
      {/* ... (Keep your original JSX here) ... */}

      <Footer />
    </div>
  );
}
