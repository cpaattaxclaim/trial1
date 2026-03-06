import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function BlogPage() {
  const posts = [
    {
      title: "2025 Business Tax Checklist: Partnership & S-Corp Readiness",
      excerpt: "The business return must be finalized first for Schedules K-1 to flow to partners. Here is your roadmap for the March 16th deadline.",
      date: "March 2026",
      readTime: "6 min read",
      category: "Tax Compliance",
      slug: "2025-business-tax-checklist"
    }
  ];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "TaxClaim Insights",
    "publisher": { "@type": "Organization", "name": "TaxClaim" },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": "2026-03-01",
      "author": { "@type": "Person", "name": "TaxClaim CPA" }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>US Business Tax Insights | 2025 Tax Checklists | TaxClaim</title>
        <meta name="description" content="Stay compliant with the latest US tax laws. Expert guides on 2025/2026 tax deadlines and S-Corp requirements from a licensed CPA." />
        <meta name="keywords" content="US tax blog, S-Corp tax tips, 2025 tax checklist, IRS deadline 2026, small business CPA blog" />
        <link rel="canonical" href="https://www.taxclaim.co/resources" />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>

      <Header />
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Resources & Insights</h1>
          <p className="text-xl text-slate-600 leading-relaxed">Expert guides on Federal compliance, S-Corps, and strategic bookkeeping.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          {posts.map((post, idx) => (
            <article key={idx} className="flex flex-col space-y-4 border-b pb-12">
              <div className="flex items-center space-x-4 text-sm text-slate-500">
                <span className="text-teal-600 font-bold uppercase">{post.category}</span>
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{post.date}</div>
                <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />{post.readTime}</div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 hover:text-teal-600 transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-lg text-slate-600">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-teal-600 font-bold">Read Full Story <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
