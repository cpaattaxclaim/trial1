import { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Calendar, Clock, ArrowRight, FileText, Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const categories = ['All', 'Individual Taxes', 'Business Taxes', 'Tax Planning'];

  const articles = [
    {
      title: '2026 Tax Season Checklist: Get Ready to File Your Personal Tax Return',
      excerpt: 'Don’t leave your refund to chance. This comprehensive checklist covers everything you need for your 2025 personal tax filing, from W-2s to the new SALT deduction limits.',
      date: '2026-02-12',
      displayDate: 'Feb 12, 2026',
      readTime: '6 min read',
      category: 'Individual Taxes',
      slug: 'personal-tax-checklist-2026',
    },
    {
      title: '2025 Business Tax Checklist: Partnership & S-Corp Readiness',
      excerpt: 'Filing for a Partnership or S-Corp is a team hurdle. Since these are pass-through entities, the business return has to be finalized first so the Schedules K-1 can flow to the partners.',
      date: '2026-03-01',
      displayDate: 'Mar 1, 2026',
      readTime: '8 min read',
      category: 'Business Taxes',
      slug: 'business-tax-checklist-2025',
    },
  ];

  const filteredAndSortedArticles = useMemo(() => {
    let result = articles.filter((article) => {
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    return result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [activeCategory, searchQuery, sortOrder]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6 italic">Resources & Insights.</h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Expert guidance on navigating the 2025-2026 tax season. Stay compliant, save time, and maximize your returns.
              </p>
            </div>
          </div>
        </section>

        {/* Controls Bar */}
        <section className="sticky top-[72px] z-30 bg-white border-b border-slate-200 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <nav className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-full sm:w-auto">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="appearance-none w-full sm:w-44 pl-4 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredAndSortedArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-12">
                {filteredAndSortedArticles.map((article, idx) => (
                  <article key={idx} className="group flex flex-col h-full border border-slate-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                      <span className="text-teal-600 font-bold uppercase tracking-wider">{article.category}</span>
                      <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{article.displayDate}</div>
                      <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />{article.readTime}</div>
                    </div>
                    <Link to={`/blog/${article.slug}`} className="flex-grow">
                      <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {article.excerpt}
                      </p>
                    </Link>
                    <Link to={`/blog/${article.slug}`} className="inline-flex items-center text-teal-600 font-bold group-hover:gap-3 transition-all">
                      Read Full Checklist <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <FileText className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900">No articles found</h3>
                <p className="text-slate-500">Try adjusting your filters, sorting, or search terms.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
