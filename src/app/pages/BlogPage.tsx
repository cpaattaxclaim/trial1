import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { useSEO } from '../../hooks/useSEO';
import {
  ArrowRight,
  FileText,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Loader2,
  Calendar,
  Clock,
} from 'lucide-react';
import { client } from '../../lib/sanityClient';

// --- Static constants outside component ---

interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  readTime?: string;
  category?: { title: string };
}

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  readTime,
  category->{title}
}`;

const CATEGORIES = [
  'All Articles',
  'Foreign Owner Tax Guide',
  'US Tax Filings & Requirements',
  'Cross-Border Reporting & Compliance',
  'Compliance & Operations',
  'US Entity Formation',
];

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'Foreign Owner Tax Guide': Globe2,
  'US Tax Filings & Requirements': FileText,
  'Cross-Border Reporting & Compliance': ShieldCheck,
  'Compliance & Operations': CheckCircle2,
  'US Entity Formation': Building2,
};

const formatDate = (date: string): string => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

// --- Component ---

export function BlogPage() {
  useSEO({
    title: 'Tax and Business Resources | TaxClaim CPA Blog',
    description:
      "Read TaxClaim's expert articles on international tax compliance, FBAR, and cross-border business strategy.",
    canonical: 'https://taxclaim.co/blog',
  });

  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    client
      .fetch(POSTS_QUERY)
      .then((data: Article[]) => {
        if (!cancelled) {
          setArticles(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setFetchError(true);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredArticles = useMemo(
    () =>
      activeCategory === 'All Articles'
        ? articles
        : articles.filter((a) => a.category?.title === activeCategory),
    [articles, activeCategory]
  );

  const handleSubscribe = useCallback(async () => {
    if (!email) return;
    setIsSubscribing(true);
    try {
      const response = await fetch('https://formspree.io/f/mreylenj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        const timer = setTimeout(() => setSubscribed(false), 5000);
        return () => clearTimeout(timer);
      } else {
        setFetchError(false); // reuse pattern — or add a subscribeError state
        alert('Subscription failed. Please try again.');
      }
    } catch {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  }, [email]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>

        {/* Page Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl mb-6">Tax & Business Blog</h1>
              <p className="text-xl text-gray-300">
                Expert insights on international tax compliance, cross-border strategy, and US
                entity formation for foreign owners and global businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 bg-slate-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog/compliance-101-keeping-your-business-in-good-standing"
              aria-label="Read featured article: Compliance 101: Keeping Your Business in Good Standing"
              className="block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="grid md:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm mb-4 w-fit">
                    Featured Article
                  </div>
                  <h2 className="text-3xl mb-4 text-slate-900 group-hover:text-teal-600 transition-colors">
                    Compliance 101: Keeping Your Business in Good Standing
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    State and federal agencies are increasingly focused on the compliance gap. If
                    your records don't account for Secretary of State renewals or multi-state
                    payroll, your business could be sitting on a liability heading into the next
                    filing season.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      March 15, 2026
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      5 min read
                    </div>
                  </div>
                  <div className="flex items-center text-teal-600 group-hover:text-teal-700 transition-colors w-fit">
                    <span>Read Article</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="overflow-hidden">
                  <img
                    src="https://cdn.sanity.io/images/95kssyaz/production/70a4de12e8ff1e0a2653bce56bf32755df8c410b-1321x768.png"
                    alt="Compliance 101: Keeping Your Business in Good Standing"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`px-4 py-2 rounded-lg border text-sm transition-colors cursor-pointer ${
                    activeCategory === category
                      ? 'bg-teal-600 text-white border-teal-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-teal-600 hover:text-teal-600'
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
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
              </div>
            ) : fetchError ? (
              <div className="text-center py-20">
                <p className="text-red-500 text-lg">
                  Failed to load articles. Please refresh the page.
                </p>
              </div>
            ) : filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => {
                  const Icon = CATEGORY_ICONS[article.category?.title ?? ''] ?? FileText;
                  return (
                    <Link
                      key={article._id}
                      to={`/blog/${article.slug?.current}`}
                      aria-label={`Read article: ${article.title}`}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all group cursor-pointer"
                    >
                      <div className="p-8">
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                          <Icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                        </div>

                        <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs mb-3">
                          {article.category?.title}
                        </div>

                        <h3 className="text-xl mb-3 text-slate-900 group-hover:text-teal-600 transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(article.publishedAt)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime || '3 min read'}
                          </div>
                        </div>

                        <div className="flex items-center text-teal-600 group-hover:text-teal-700 transition-colors">
                          <span className="text-sm font-semibold">Read article</span>
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">
                  No articles found in this category yet. Check back soon!
                </p>
                <button
                  onClick={() => setActiveCategory('All Articles')}
                  className="text-teal-600 mt-2 hover:underline cursor-pointer"
                >
                  View all articles
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl mb-4">Stay Updated with Tax Tips & Insights</h2>
              <p className="text-lg text-gray-300 mb-8">
                Get monthly tax tips for foreign owners, LLCs, and cross-border businesses.
                Straight from a licensed CPA.
              </p>

              {subscribed ? (
                <div className="py-4 text-center animate-in fade-in zoom-in">
                  <CheckCircle2 className="w-12 h-12 text-teal-400 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-white">You're subscribed!</h3>
                  <p className="text-gray-300 mt-1 text-sm">
                    Thanks for joining. We'll keep you updated.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); handleSubscribe(); }}
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg text-slate-900 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 h-10"
                  />
                  <Button
                    type="submit"
                    disabled={isSubscribing || !email}
                    className="bg-teal-600 hover:bg-teal-700 h-10 px-6 cursor-pointer"
                  >
                    {isSubscribing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Subscribing...
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl mb-6 text-slate-900">Ready to stop overpaying on taxes?</h2>
            <p className="text-xl text-gray-600 mb-8">
              TaxClaim handles tax filing and strategy for foreign owners, LLCs, and cross-border
              businesses. Flat fee, fully remote, 100% on-time filing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="cursor-pointer">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 py-3 cursor-pointer">
                  Get Started
                </Button>
              </Link>
              <Link to="/services" className="cursor-pointer">
                <Button size="lg" variant="outline" className="px-8 py-3 cursor-pointer">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
