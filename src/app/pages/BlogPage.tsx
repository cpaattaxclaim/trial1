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
      "Read TaxClaim's expert articles on international tax compliance, Form 5471, FBAR, foreign-owned US entities, and cross-border business strategy.",
    canonical: 'https://taxclaim.co/blog',
  });

  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [articles, setArticles] = useState<any[]>([]);
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
      .fetch(`*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        category,
        excerpt,
        publishedAt,
        readTime,
      }`)
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
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 5000);
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch {
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
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl mb-6">Tax and Business Blog</h1>
              <p className="text-xl text-gray-300">
                Expert insights on international tax compliance, Form 5471,
                FBAR, foreign-owned US entities, and cross-border business
                strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="py-12 bg-slate-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog/compliance-101-keeping-your-business-in-good-standing"
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
                    State and federal agencies are increasingly focused on the
                    compliance gap...
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

                  <div className="flex items-center text-teal-600 group-hover:text-teal-700 transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="overflow-hidden">
                  <img
                    src="https://cdn.sanity.io/images/95kssyaz/production/70a4de12e8ff1e0a2653bce56bf32755df8c410b-1321x768.png"
                    alt="Featured article"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg border cursor-pointer transition-colors ${
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

        {/* Articles */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
              </div>
            ) : filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article: any) => {
                  const Icon =
                    categoryIcons[article.category] || FileText;

                  return (
                    <Link
                      key={article._id}
                      to={`/blog/${article.slug?.current}`}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all group cursor-pointer"
                    >
                      <div className="p-8">
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                          <Icon className="w-6 h-6 text-teal-600 group-hover:text-white" />
                        </div>

                        <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs mb-3">
                          {article.category}
                        </div>

                        <h3 className="text-xl mb-3 text-slate-900 group-hover:text-teal-600">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
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

                        <div className="flex items-center text-teal-600">
                          <span className="text-sm font-semibold">
                            Read article
                          </span>
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">
                  No articles found.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-12">
              <h2 className="text-3xl mb-4">
                Stay Updated with Tax Tips
              </h2>

              {subscribed ? (
                <CheckCircle2 className="w-10 h-10 mx-auto text-teal-400" />
              ) : (
                <div className="flex gap-4 max-w-md mx-auto">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg text-black"
                    placeholder="Enter your email"
                  />
                  <Button onClick={handleSubscribe}>
                    {isSubscribing ? '...' : 'Subscribe'}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
