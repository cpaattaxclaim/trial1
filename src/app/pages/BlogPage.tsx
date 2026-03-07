import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Calendar, Clock, ArrowRight, FileText, LayoutGrid } from 'lucide-react';

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All Articles');

  const articles = [
    {
      category: 'Tax Filing',
      title: '2026 Tax Season Checklist: Get Ready to File Your Personal Tax Return',
      excerpt: 'When filing the Individual Tax Returns for Tax Year 2025, this will be your Ultimate guide to the Checklist to simplify the filing process.',
      date: 'March 05, 2026',
      isoDate: '2026-03-05', // Added for accurate sorting
      readTime: '4 min read',
      icon: FileText,
      url: 'https://medium.com/@cpa_96374/2025-tax-season-checklist-get-ready-to-file-your-personal-tax-return-d928c70b8866'
    },
    {
      category: 'Tax Filing',
      title: '2025 Business Tax Checklist: Partnership & S-Corp Readiness',
      excerpt: 'Filing for a Partnership or S-Corp is a team hurdle. Since these are pass-through entities, the business return has to be finalized first.',
      date: 'March 06, 2026',
      isoDate: '2026-03-06', // Added for accurate sorting
      readTime: '3 min read',
      icon: FileText,
      url: 'https://medium.com/@cpa_96374/2025-business-tax-checklist-partnership-s-corp-readiness-e57965363c9c'
    }
  ];

  const categories = [
    'All Articles', 'Tax Planning', 'Business Formation', 'Compliance', 
    'Tax Filing', 'IRS', 'Business Growth', 'Startup', 'Bookkeeping'
  ];

  // Logic to SORT by latest date first, then FILTER by category
  const filteredArticles = useMemo(() => {
    // First, sort by isoDate descending
    let sorted = [...articles].sort((a, b) => 
      new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
    );

    // Then, filter by category if one is selected
    if (activeCategory === 'All Articles') return sorted;
    return sorted.filter(article => article.category === activeCategory);
  }, [activeCategory, articles]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6 font-bold">Tax & Business Blog</h1>
            <p className="text-xl text-gray-300">
              Actionable tax strategies and compliance guides to protect your business.
            </p>
          </div>
        </div>
      </section>

      <nav 
        aria-label="Blog categories" 
        className="sticky top-0 z-40 w-full bg-white/98 backdrop-blur-md border-b border-gray-200 py-6 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-2 mr-2 text-slate-400">
              <LayoutGrid className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white shadow-md scale-105'
                    : 'bg-slate-50 text-slate-600 hover:bg-teal-50 border border-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'}
            </h2>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, idx) => (
                <article
                  key={idx}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  <div className="p-8 flex-1">
                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                      <article.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                    </div>
                    
                    <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-lg text-[10px] mb-4 font-black uppercase tracking-widest">
                      {article.category}
                    </span>
                    
                    <h3 className="text-xl font-bold mb-3 text-slate-900 leading-tight group-hover:text-teal-600 transition-colors">
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        {article.title}
                      </a>
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
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
                    
                    <a 
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full px-4 py-2 bg-slate-50 text-teal-700 font-bold text-xs rounded-lg group-hover:bg-teal-600 group-hover:text-white transition-all"
                    >
                      READ FULL GUIDE <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Coming Soon</h3>
              <p className="text-slate-500 mb-8">We are preparing new tax guides for {activeCategory}.</p>
              <Button 
                onClick={() => setActiveCategory('All Articles')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8"
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl mb-4 font-bold">Stay Updated with Tax Tips</h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to get the latest 2026 tax checklists delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-slate-900 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 h-10"
              />
              <Button className="bg-teal-600 hover:bg-teal-700 h-10 px-8 font-bold text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
