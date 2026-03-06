import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Calendar, Clock, ArrowRight, FileText, Search } from 'lucide-react';

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All Articles');

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
    const newestFirst = [...articles].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return activeCategory === 'All Articles'
      ? newestFirst
      : newestFirst.filter(article => article.category === activeCategory);
  }, [activeCategory]);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://taxclaim.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://taxclaim.co/blog" }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Tax & Business Articles",
    "description": "Expert tax checklists and business growth guides.",
    "itemListElement": filteredArticles.map((article, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": article.url,
      "name": article.title
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Tax & Business Blog | Expert CPA Tax Guides 2026 | TaxClaim</title>
        <meta name="description" content="Stay ahead of the 2026 tax season with expert insights from a licensed CPA." />
        <link rel="canonical" href="https://taxclaim.co/blog" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
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

        {/* PROPERLY GLUED CATEGORY NAVIGATION */}
        {/* We use 'relative' and 'block' behavior so it moves with the scroll */}
        <nav 
          aria-label="Blog categories" 
          className="relative block w-full bg-white border-b border-gray-200 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-teal-600 text-white shadow-sm scale-105'
                      : 'bg-slate-50 text-slate-600 hover:bg-teal-50 hover:text-teal-600 border border-slate-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Articles Grid */}
        <section className="py-16 bg-white" aria-labelledby="blog-heading">
          <h2 id="blog-heading" className="sr-only">Latest Articles</h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <article
                    key={article.url}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group flex flex-col"
                  >
                    <div className="p-8 flex-1">
                      <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-teal-600 transition-colors">
                        <article.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs mb-3 font-bold tracking-tight">
                        {article.category.toUpperCase()}
                      </span>
                      <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-teal-600 transition-colors">
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                          {article.title}
                        </a>
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="px-8 pb-8">
                      <div className="flex items-center gap-4 text-[11px] font-medium text-gray-400 mb-5 border-t border-gray-50 pt-5">
                        <time dateTime={article.isoDate} className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5"/> {article.date}
                        </time>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5"/> {article.readTime}
                        </span>
                      </div>
                      <a 
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-teal-600 font-bold text-sm hover:gap-3 transition-all"
                      >
                        Read Article <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-slate-50 rounded-3xl border border-slate-200">
                <Search className="w-14 h-14 text-slate-300 mx-auto mb-6" aria-hidden="true" />
                <p className="text-2xl font-bold text-slate-900">No guides found for "{activeCategory}"</p>
                <p className="text-slate-500 mt-2 mb-8">Try selecting a different category or view all articles.</p>
                <Button 
                  onClick={() => setActiveCategory('All Articles')}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Show All Articles
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
