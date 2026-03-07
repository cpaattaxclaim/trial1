import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen, FileText } from 'lucide-react';

export function BlogPage() {
  // Real Data from Code 1
  const articles = [
    {
      category: 'Tax Filing',
      title: '2026 Tax Season Checklist: Get Ready to File Your Personal Tax Return',
      excerpt: 'When filing the Individual Tax Returns for Tax Year 2025, this will be your Ultimate guide to the Checklist to simplify the filing process.',
      date: 'March 05, 2026',
      readTime: '4 min read',
      icon: FileText,
      url: 'https://medium.com/@cpa_96374/2025-tax-season-checklist-get-ready-to-file-your-personal-tax-return-d928c70b8866'
    },
    {
      category: 'Tax Filing',
      title: '2025 Business Tax Checklist: Partnership & S-Corp Readiness',
      excerpt: 'Filing for a Partnership or S-Corp is a team hurdle. Since these are pass-through entities, the business return has to be finalized first.',
      date: 'March 06, 2026',
      readTime: '3 min read',
      icon: FileText,
      url: 'https://medium.com/@cpa_96374/2025-business-tax-checklist-partnership-s-corp-readiness-e57965363c9c'
    }
  ];

  const categories = [
    'All Articles', 'Tax Planning', 'Business Formation', 'Compliance', 
    'Tax Filing', 'IRS', 'Business Growth', 'Startup', 'Bookkeeping'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Tax & Business Blog</h1>
            <p className="text-xl text-gray-300">
              Actionable tax strategies and compliance guides to protect your business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article - Points to your most recent post */}
      <section className="py-12 bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href={articles[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm mb-4 w-fit uppercase font-bold tracking-wider">
                  Latest Business Guide
                </div>
                <h2 className="text-3xl mb-4 text-slate-900 group-hover:text-teal-600 transition-colors">
                  {articles[1].title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 line-clamp-2">
                  {articles[1].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    {articles[1].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-teal-600" />
                    {articles[1].readTime}
                  </div>
                </div>
                <div className="flex items-center text-teal-600 group-hover:text-teal-700 transition-colors w-fit font-bold">
                  <span>Read Article</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-12 flex items-center justify-center">
                <BookOpen className="w-32 h-32 text-white opacity-50" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-lg border text-sm font-bold transition-colors ${
                  category === 'All Articles'
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-teal-600 hover:text-teal-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <a
                key={idx}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all group flex flex-col"
              >
                <div className="p-8 flex-1">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                    <article.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
                    {article.category}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-teal-600 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-500 mb-4 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="px-8 pb-8 mt-auto">
                  <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 mb-6 border-t border-slate-50 pt-6">
                    <div className="flex items-center gap-1.5 uppercase">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" /> {article.date}
                    </div>
                    <div className="flex items-center gap-1.5 uppercase">
                      <Clock className="w-3.5 h-3.5 text-teal-600" /> {article.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-teal-600 group-hover:text-teal-700 transition-colors font-bold text-sm">
                    <span>Read Full Guide</span>
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl mb-4 font-bold">Stay Updated with Tax Tips</h2>
            <p className="text-lg text-gray-300 mb-8">
              Get the latest tax checklists and regulatory updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-slate-900 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 h-10"
              />
              <Button className="bg-teal-600 hover:bg-teal-700 h-10 px-8 font-bold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Need Professional Tax Help?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            While our blog articles are helpful, nothing beats personalized professional advice. Let's discuss your specific tax situation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 py-6 text-lg font-bold">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-bold border-2">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
