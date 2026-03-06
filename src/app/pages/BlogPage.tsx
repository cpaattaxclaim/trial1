import { useState } from 'react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen, FileText, Shield, Zap, Search } from 'lucide-react';

export function BlogPage() {
  // 1. State for active category
  const [activeCategory, setActiveCategory] = useState('All Articles');

  const articles = [
    {
      category: 'Tax Planning',
      title: '2026 Tax Season Checklist: Get Ready to File Your Personal Tax Return',
      excerpt: 'When filing the Individual Tax Returns for Tax Year 2025, this will be your Ultimate guide to the Checklist to simplify the filing process.',
      date: 'March 03, 2026',
      readTime: '4 min read',
      icon: FileText,
      url: 'https://medium.com/@cpa_96374/2025-tax-season-checklist-get-ready-to-file-your-personal-tax-return-d928c70b8866'
    },
      {
      category: 'Tax Planning',
      title: '2025 Business Tax Checklist: Partnership & S-Corp Readiness',
      excerpt: 'Filing for a Partnership or S-Corp is a team hurdle. Since these are pass-through entities, the business return has to be finalized first so the Schedules K-1 can flow to the partners. If the business return is late, everyone’s personal return is stuck.',
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

  // 2. Logic to filter articles based on state
  const filteredArticles = activeCategory === 'All Articles'
    ? articles
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Tax & Business Blog</h1>
            <p className="text-xl text-gray-300">
              Expert insights and guides to help you navigate taxes and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter - Sticky for easy access */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-slate-50 text-slate-600 hover:bg-teal-50 hover:text-teal-600 border border-transparent hover:border-teal-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300">
              {filteredArticles.map((article, idx) => (
                <a
                  key={`${activeCategory}-${idx}`} // Key changes on filter to trigger re-animation
                  href={article.url}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group flex flex-col"
                >
                  <div className="p-8 flex-1">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                      <article.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs mb-3">
                      {article.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-teal-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="px-8 pb-8">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {article.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {article.readTime}</span>
                    </div>
                    <div className="flex items-center text-teal-600 font-semibold text-sm">
                      Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            // Empty State
            <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-slate-900">No articles found</h3>
              <p className="text-slate-500 mt-2">We haven't published anything in "{activeCategory}" yet. Check back soon!</p>
              <Button 
                variant="link" 
                className="mt-4 text-teal-600"
                onClick={() => setActiveCategory('All Articles')}
              >
                View all articles
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
