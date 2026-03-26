import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useSEO } from '../../hooks/useSEO';
import {
  FileText,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Globe2,
} from 'lucide-react';
import { client } from '../../lib/sanityClient';

const categoryIcons: Record<string, any> = {
  'Foreign Owner Tax Guide': Globe2,
  'US Tax Filings & Requirements': FileText,
  'Cross-Border Reporting & Compliance': ShieldCheck,
  'Compliance & Operations': CheckCircle2,
  'US Entity Formation': Building2,
};

export function BlogPage() {
  useSEO({
    title: 'Tax and Business Resources | TaxClaim CPA Blog',
    description:
      "Read TaxClaim's expert articles on international tax compliance, FBAR, and cross-border business strategy.",
    canonical: 'https://taxclaim.co/blog',
  });

  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    'All Articles',
    'Foreign Owner Tax Guide',
    'US Tax Filings & Requirements',
    'Cross-Border Reporting & Compliance',
    'Compliance & Operations',
    'US Entity Formation',
  ];

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        readTime,
        category->{title}
      }`)
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredArticles =
    activeCategory === 'All Articles'
      ? articles
      : articles.filter(
          (article: any) =>
            article.category?.title === activeCategory
        );

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Category Filters */}
        <section className="py-8 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg border text-sm ${
                    activeCategory === category
                      ? 'bg-teal-600 text-white'
                      : 'bg-white text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="animate-spin text-teal-600" />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article: any) => {
                  const Icon =
                    categoryIcons[article.category?.title] ||
                    FileText;

                  return (
                    <Link
                      key={article._id}
                      to={`/blog/${article.slug?.current}`}
                      className="border rounded-xl p-6 hover:shadow-lg transition"
                    >
                      <Icon className="mb-3 text-teal-600 w-5 h-5" />

                      <div className="text-xs text-gray-500 mb-2">
                        {article.category?.title}
                      </div>

                      <h3 className="text-lg font-semibold mb-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4">
                        {article.excerpt}
                      </p>

                      <div className="text-xs text-gray-500">
                        {formatDate(article.publishedAt)} •{' '}
                        {article.readTime || '3 min read'}
                      </div>

                      <div className="mt-3 text-teal-600 flex items-center text-sm">
                        Read article <ArrowRight className="ml-1 w-4 h-4" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
