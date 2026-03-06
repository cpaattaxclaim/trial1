import { Link } from 'react-router'; 
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  FileText, Building2, Calculator, ShieldCheck, 
  BookOpen, TrendingUp, CheckCircle2, ChevronRight, 
  ArrowRight, Sparkles, Shield
} from 'lucide-react';

export function ServicesPage() {
  const scrollToService = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
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
      title: 'Individual US Tax Filing',
      price: 'Starting from $200',
      description: 'CPA-grade Federal and State tax preparation for US expats and residents. We specialize in optimizing 2025 deductions to minimize your liability.',
      included: ['Federal + 1 State Return', 'W-2 & 1099 Income Reporting', 'Foreign Earned Income Exclusion', 'Secure IRS E-filing']
    },
    {
      id: 'business-tax',
      icon: Building2,
      title: 'Business Tax Preparation',
      price: 'Starting from $750',
      description: 'Comprehensive compliance for Partnerships (1065) and S-Corps (1120-S). We ensure clean Schedule K-1s and timely flow-through reporting.',
      included: ['Form 1065/1120-S Preparation', 'Partner/Shareholder K-1s', 'State Entity Filings', 'Year-end Trial Balance Review']
    },
    {
      id: 'sales-tax',
      icon: BookOpen,
      title: 'Sales & Use Tax',
      price: 'Starting from $300/month',
      description: 'End-to-end sales tax management. We monitor nexus thresholds across all US states and handle the complex monthly filings for you.',
      included: ['Economic Nexus Monitoring', 'Monthly Filing & Remittance', 'State Registration Support', 'Taxability Analysis']
    },
    {
      id: 'formation',
      icon: Building2,
      title: 'US Company Formation',
      price: 'Starting from $300',
      description: 'Start your US business with a solid foundation. We handle the paperwork so you can focus on building your brand.',
      included: ['Articles of Organization', 'Federal EIN Acquisition', 'Operating Agreement', 'Post-Formation Tax Checklist']
    },
    {
      id: 'resolution',
      icon: ShieldCheck,
      title: 'IRS Notice Resolution',
      price: 'Custom Pricing',
      description: 'Received a CP2000 or CP148A? We step in to handle all correspondence, audit defense, and penalty abatement requests.',
      included: ['Notice Audit & Analysis', 'IRS/State Representation', 'Penalty Abatement Requests', 'Installment Agreement Setup']
    },
    {
      id: 'bookkeeping',
      icon: Calculator,
      title: 'Monthly Bookkeeping',
      price: 'Starting from $300/month',
      description: 'Clean books are the heart of a healthy business. We provide reconciled, audit-ready financials every single month.',
      included: ['Bank & Card Reconciliation', 'Transaction Categorization', 'P&L & Balance Sheet Reporting', 'QuickBooks Ecosystem Management']
    },
    {
      id: 'consulting',
      icon: TrendingUp,
      title: 'Business Strategy',
      price: '$100/hour',
      description: 'High-level advisory on entity structure, tax optimization strategies, and US-India cross-border financial planning.',
      included: ['Tax Optimization Review', 'Entity Structure Analysis', 'Cash Flow Management', 'Cross-border Strategy']
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Helmet>
        <title>Professional US Tax & Business Services | TaxClaim</title>
        <meta name="description" content="Expert US Individual & Business Tax Filing starting at $200. LLC Formation, Bookkeeping, and IRS Resolution." />
      </Helmet>

      <Header />

      <main>
        {/* --- PREMIUM HERO SECTION --- */}
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-24 lg:py-32 overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold tracking-widest uppercase mb-6">
                <Sparkles className="w-3 h-3" /> CPA-Grade Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                Tax Services <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                  Built for Growth.
                </span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                Transparent, fixed-price US tax compliance and business infrastructure for global entrepreneurs.
              </p>
            </div>
          </div>
        </section>

        {/* --- MAIN LAYOUT --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* FIXED VERTICAL DIRECTORY (SIDEBAR) */}
            <aside className="lg:w-[300px] flex-shrink-0">
              <div className="sticky top-[110px] space-y-6">
                <div className="bg-white border border-slate-200 p-6 rounded-[2rem] shadow-sm">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-2">
                    Service Catalog
                  </h2>
                  <nav className="space-y-1">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => scrollToService(service.id)}
                        className="group w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-100"
                      >
                        <span className="text-sm font-bold text-slate-600 group-hover:text-teal-600 transition-colors">
                          {service.title}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Trust Badge Card */}
                <div className="bg-teal-600 p-8 rounded-[2rem] text-white shadow-xl shadow-teal-900/20 overflow-hidden relative group">
                    <Shield className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 group-hover:rotate-12 transition-transform duration-700" />
                    <h3 className="text-xl font-bold mb-3 relative z-10">Audit Ready.</h3>
                    <p className="text-teal-100 text-sm leading-relaxed mb-6 relative z-10">We stand behind every filing. Accuracy is our absolute baseline.</p>
                    <Link to="/contact">
                        <Button className="w-full bg-white text-teal-700 hover:bg-teal-50 font-bold border-none shadow-lg">Get in Touch</Button>
                    </Link>
                </div>
              </div>
            </aside>

            {/* SERVICE CARDS CONTENT */}
            <div className="flex-1 space-y-24">
              {services.map((service) => (
                <section
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-[130px] relative group"
                >
                  <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:border-teal-500/20">
                    <div className="flex flex-col xl:flex-row justify-between gap-12">
                      <div className="flex-1">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 text-teal-600 rounded-2xl mb-8 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500 shadow-inner">
                          <service.icon className="w-8 h-8" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                          {service.title}
                        </h2>
                        
                        <div className="inline-flex px-4 py-2 bg-teal-50 text-teal-700 text-sm font-black uppercase tracking-widest rounded-lg mb-8">
                          {service.price}
                        </div>
                        
                        <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-2xl">
                          {service.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 border-t border-slate-100 pt-10">
                          {service.included.map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center">
                                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                              </div>
                              <span className="text-slate-700 text-sm font-bold tracking-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="xl:w-[240px] flex flex-col justify-start">
                        <Link to="/contact">
                          <Button className="w-full bg-slate-900 hover:bg-teal-600 text-white font-black py-8 rounded-2xl text-md shadow-xl transition-all duration-300 group/btn">
                            Book Service <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <p className="mt-4 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">No hidden fees</p>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
