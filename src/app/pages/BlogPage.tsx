import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Calendar, Clock, ArrowRight, FileText, Search, LayoutGrid } from 'lucide-react';

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      category: 'Tax Filing',
      title: '2026 Tax Season Checklist: Get Ready to File Your Personal Tax Return',
      excerpt: 'When filing the Individual Tax Returns for Tax Year 2025, this will be your Ultimate guide to the Checklist to simplify the filing process.',
      date: 'March 05, 2026',
      isoDate: '2026-03-05',
      readTime: '4 min read',
      icon: FileText,
      url: 'https://medium.com/@cpa_96374/2025-tax-season-checklist-get-ready-to-file-your-personal-tax-return-d928c70b8866'
    },
    {
      category: 'Tax Filing',
      title: '2025 Business Tax Checklist: Partnership & S-Corp Readiness',
      excerpt: 'Filing for a Partnership or S-Corp is a team hurdle. Since these are pass-through entities, the business return has to be finalized first.',
      date: 'March 06, 2026',
      isoDate: '2026-03-06',
      readTime: '3 min read',
      icon: FileText,
      url: 'https://medium.com/@cpa_96374/2025-business-tax-checklist-partnership-s-corp-readiness-e57965363c9c'
    }
  ];

  const categories = [
    'All Articles', 'Tax Planning', 'Business Formation', 'Compliance', 
    'Tax Filing', 'IRS', 'Business Growth', 'Startup', 'Bookkeeping'
  ];

  const filteredArticles = useMemo(() => {
    let result = [...articles].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    if (activeCategory !== 'All Articles') {
      result = result.filter(article => article.category === activeCategory);
    }

    if (searchQuery) {
      result = result.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Tax & Business Blog | Expert CPA Tax Guides 2026 | TaxClaim</title>
        <meta name="description" content="Stay updated with the latest tax strategies, IRS compliance guides, and business formation tips. Expert CPA insights for small businesses, startups, and personal tax filing in 2026." />
        <meta name="keywords" content="CPA blog, tax filing 2026, business tax checklist, IRS compliance, startup bookkeeping, tax planning strategies, S-Corp taxes, partnership tax returns" />
        
        {/* Open Graph / Social Media SEO */}
        <meta property="og:title" content="Tax & Business Blog | Expert CPA Tax Guides" />
        <meta property="og:description" content="Actionable tax strategies and compliance guides to protect your business." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical Link to prevent duplicate content issues */}
        <link rel="canonical" href="https://yourdomain.com/blog" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Tax & Business Blog</h1>
              <p className="text-xl text-gray-300">
                Actionable tax strategies and compliance guides to protect your business.
              </p>
            </div>
          </div>
        </header>

        <nav 
          aria-label="Blog categories" 
          className="sticky top-[90px] z-40 w-full bg-white/98 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
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

              {/* Search Box */}
              <div className="relative w-full lg:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Find a tax guide..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all outline-none"
                />
              </div>
            </div>
          </div>
        </nav>

        <section className="py-16 bg-white relative z-10 scroll-mt-[190px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'}
              </h2>
            </div>

            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <article
                    key={article.url}
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
                        <time dateTime={article.isoDate} className="flex items-center gap-1.5 uppercase tracking-tighter">
                          <Calendar className="w-3.5 h-3.5 text-teal-600"/> {article.date}
                        </time>
                        <span className="flex items-center gap-1.5 uppercase tracking-tighter">
                          <Clock className="w-3.5 h-3.5 text-teal-600"/> {article.readTime}
                        </span>
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
                <Search className="w-16 h-16 text-slate-200 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No matching tax guides</h3>
                <p className="text-slate-500 mb-8">We couldn't find anything for "{searchQuery}" in {activeCategory}.</p>
                <Button 
                  onClick={() => {setActiveCategory('All Articles'); setSearchQuery('');}}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
