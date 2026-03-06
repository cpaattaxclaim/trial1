import { useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Calendar, Clock, ArrowRight, FileText } from 'lucide-react';

export function BlogPage() {
  const articles = [
    {
      category: 'Tax Planning',
      title: '2026 Tax Season Checklist: Get Ready to File Your Personal Tax Return',
      excerpt: 'When filing the Individual Tax Returns for Tax Year 2025, this will be your Ultimate guide to the Checklist to simplify the filing process.',
      date: 'March 05, 2026',
      readTime: '4 min read',
      icon: FileText,
      url: 'https://medium.com/@cpa_96374/2025-tax-season-checklist-get-ready-to-file-your-personal-tax-return-d928c70b8866'
    },
    {
      category: 'Tax Planning',
      title: '2025 Business Tax Checklist: Partnership & S-Corp Readiness',
      excerpt: 'Filing for a Partnership or S-Corp is a team hurdle. Since these are pass-through entities, the business return has to be finalized first.',
      date: 'March 06, 2026',
      readTime: '3 min read',
      icon: FileText,
      url: 'https://medium.com/@cpa_96374/2025-business-tax-checklist-partnership-s-corp-readiness-e57965363c9c'
    }
  ];

  // Logic: Sort by Date (Latest First)
  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [articles]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Tax & Business Blog</h1>
            <p className="text-xl text-gray-300">
              Latest insights and compliance updates for the 2025-2026 tax season.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedArticles.map((article) => (
              <a
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group flex flex-col"
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
