import { Link } from 'react-router'; 
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  FileText, Building2, Calculator, ShieldCheck, 
  BookOpen, TrendingUp, CheckCircle2, ChevronRight, List
} from 'lucide-react';

export function ServicesPage() {
  const scrollToService = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset calculation for the sticky header
      const headerOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      id: 'tax-filing',
      icon: FileText,
      title: 'Individual Tax Filing',
      price: 'Starting from $200',
      description: 'Professional Federal and State tax preparation for individuals, ensuring accuracy and maximum deductions.',
      included: ['Federal + 1 state tax return', 'W-2, 1099, and income forms', 'Deduction optimization', 'Secure E-filing']
    },
    {
      id: 'business-tax',
      icon: Building2,
      title: 'Business Tax Filing',
      price: 'Starting from $750',
      description: 'Comprehensive business tax preparation for Partnerships (1065), S-Corps (1120-S), and C-Corps.',
      included: ['Form 1065 or 1120-S preparation', 'Schedule K-1 for all owners', 'State business tax filings']
    },
    {
      id: 'sales-tax',
      icon: BookOpen,
      title: 'Sales & Use Tax',
      price: 'Starting from $300/month',
      description: 'Monthly sales tax compliance and nexus monitoring to keep your business compliant across US states.',
      included: ['Monthly tax calculations', 'Multi-state filing support', 'Nexus analysis']
    },
    {
      id: 'formation',
      icon: Building2,
      title: 'Company Formation',
      price: 'Starting from $300',
      description: 'Complete US business formation services including EIN and Operating Agreements.',
      included: ['Articles of Organization', 'EIN Application', 'Operating Agreement']
    },
    {
      id: 'resolution',
      icon: ShieldCheck,
      title: 'IRS Notice Resolution',
      price: 'Custom Pricing',
      description: 'Expert handling of IRS and state tax notices, audits, and penalty abatement requests.',
      included: ['Notice analysis', 'IRS communication', 'Penalty abatement']
    },
    {
      id: 'bookkeeping',
      icon: Calculator,
      title: 'Bookkeeping Services',
      price: 'Starting from $300/month',
      description: 'Accurate financial records and monthly reconciliations to keep your business audit-ready.',
      included: ['Transaction coding', 'Bank reconciliation', 'Monthly financials']
    },
    {
      id: 'consulting',
      icon: TrendingUp,
      title: 'Business Consulting',
      price: '$100/hour',
      description: 'Strategic advisory on tax optimization, entity structure, and cash flow management.',
      included: ['Tax strategy', 'Financial planning', 'Growth advisory']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>US Tax Services & Pricing | TaxClaim</title>
        <meta name="description" content="Explore our fixed-price US tax filing, bookkeeping, and business formation services. Starting at $200." />
      </Helmet>

      <Header />

      <main className="relative">
        {/* Page Hero */}
        <section className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-slate-400">Jump directly to a service to see what's included and our pricing.</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* FIXED VERTICAL LIST (SIDEBAR) */}
            <aside className="lg:w-1/4">
              <div className="sticky top-[110px] bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-4">
                  <List className="w-4 h-4 text-teal-600" />
                  <h2 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Service Directory</h2>
                </div>
                
                <nav className="flex flex-col gap-1">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToService(service.id)}
                      className="group flex items-center justify-between p-3 text-left hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200 border border-transparent hover:border-slate-200"
                    >
                      <span className="text-sm font-bold text-slate-600 group-hover:text-teal-700">{service.title}</span>
                      <ChevronRight className="w-3 h-3 text-slate-300 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* SERVICES CARDS */}
            <div className="lg:w-3/4 space-y-10">
              {services.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-teal-500/30 transition-colors"
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                      <div className="flex-1">
                        <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                          <service.icon className="w-5 h-5 text-teal-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-1">{service.title}</h2>
                        <div className="text-xl font-bold text-teal-600 mb-4">{service.price}</div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                        
                        <div className="grid sm:grid-cols-2 gap-3 bg-slate-50 p-6 rounded-2xl">
                          {service.included.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                              <span className="text-slate-700 text-xs font-semibold">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link to="/contact">
                        <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-6 rounded-xl shadow-lg">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
