import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { useSEO } from '../../hooks/useSEO';
import {
  Calendar,
  Clock,
  ArrowRight,
  FileText,
  TrendingUp,
  Building2,
  ShieldCheck,
  Rocket,
  Calculator,
  Loader2,
  CheckCircle2,
  Globe2,
} from 'lucide-react';
import { client } from '../../lib/sanityClient';

const categoryIcons: Record<string, any> = {
  'International Tax & Compliance': Globe2,
  'Foreign-Owned US Entities': Building2,
  'FBAR & FATCA': ShieldCheck,
  'Cross-Border Structures': Globe2,
  'Foreign Founder Essentials': Rocket,
  'US Business Tax': TrendingUp,
  'US Individual Tax': FileText,
  'Compliance & Filings': ShieldCheck,
  'Business Formation': Building2,
  'Bookkeeping & Finance': Calculator,
};

export function BlogPage() {
  useSEO({
    title: 'Tax and Business Resources | TaxClaim CPA Blog',
    description:
      'Read TaxClaim\'s expert articles on international tax compliance, Form 5471, FBAR, foreign-owned US entities, and cross-border business strategy.',
    canonical: 'https://taxclaim.co/blog',
  });

  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    'All Articles',
    'International Tax & Compliance',
    'Foreign-Owned US Entities',
    'FBAR & FATCA',
    'Cross-Border Structures',
    'Foreign Founder Essentials',
    'US Business Tax',
    'US Individual Tax',
    'Compliance & Filings',
    'Business Formation',
    'Bookkeeping & Finance',
  ];

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          category,
          excerpt,
          publishedAt,
          readTime,
        }`
      )
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Sanity fetch error:', err);
        setLoading(false);
      });
  }, []);

  const filteredArticles =
    activeCategory === 'All Articles'
      ? articles
      : articles.filter((article: any) => article.category === activeCategory);

  const handleSubscribe = async () => {
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
        setTimeout(() => setSubscribed(false), 5000);
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>

        {/* Page Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl mb-6">Tax and Business Blog</h1>
              <p className="text-xl text-gray-300">
                Expert insights on international tax compliance, Form 5471, FBAR, foreign-owned US entities, and cross-border business strategy.
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
                    State and federal agencies are increasingly focused on the compliance gap. If your records do not account for Secretary of State renewals or multi-state payroll, your business could be sitting on a liability heading into the next filing season.
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

        {/* Foreign Founders Banner */}
        <section className="bg-teal-600 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-white text-sm">
                Foreign founder with a US entity? Start here: Form 5472 Complete Guide
              </p>
              <Link
                to="/international-tax#form-5472"
                className="text-teal-100 hover:text-white text-sm underline underline-offset-2 whitespace-nowrap cursor-pointer"
              >
                Read the guide
                <ArrowRight className="inline ml-1 w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
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
            ) : filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article: any) => {
                  const Icon = categoryIcons[article.category] || FileText;
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
                          {article.category}
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

        {/* Newsletter Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl mb-4">Stay Updated with Tax Tips and Insights</h2>
              <p className="text-lg text-gray-300 mb-8">
                Get monthly tax insights for foreign founders, cross-border businesses, and US entity owners worldwide. Straight from a licensed CPA.
              </p>
              {subscribed ? (
                <div className="py-4 text-center animate-in fade-in zoom-in">
                  <CheckCircle2 className="w-12 h-12 text-teal-400 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-white">You're subscribed!</h3>
                  <p className="text-gray-300 mt-1 text-sm">
                    Thanks for joining. We will keep you updated.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                    className="flex-1 px-4 py-2 rounded-lg text-slate-900 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 h-10"
                  />
                  <Button
                    onClick={handleSubscribe}
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
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl mb-6 text-slate-900">Foreign founder with a US entity? Let's sort your compliance.</h2>
            <p className="text-xl text-gray-600 mb-8">
              TaxClaim handles US tax compliance for foreign founders and cross-border businesses. Flat fee, fully remote, serving clients across 11 countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?service=International+Tax+%26+Compliance&message=I+need+help+with+US+tax+compliance+for+my+foreign-owned+entity." className="cursor-pointer">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 cursor-pointer">
                  Get Started
                </Button>
              </Link>
              <Link to="/services" className="cursor-pointer">
                <Button size="lg" variant="outline" className="px-8 cursor-pointer">
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
