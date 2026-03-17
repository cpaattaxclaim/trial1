import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { useSEO } from '../../hooks/useSEO';
import { Calendar, Clock, ArrowLeft, Loader2 } from 'lucide-react';
import { client, urlFor } from '../../lib/sanityClient';
import { PortableText } from '@portabletext/react';

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl text-slate-900 mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl text-slate-900 mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-600 my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }) => {
      const href = value && value.href ? value.href : '';
      return React.createElement(
        'a',
        {
          href: href,
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'text-teal-600 underline hover:text-teal-700',
        },
        children
      );
    },
  },
  types: {
    image: ({ value }) => (
      <figure className="my-8">
        <img
          src={urlFor(value).width(800).format('webp').quality(85).url()}
          srcSet={`
            ${urlFor(value).width(400).format('webp').quality(85).url()} 400w,
            ${urlFor(value).width(800).format('webp').quality(85).url()} 800w
          `}
          sizes="(max-width: 640px) 400px, 800px"
          alt={value.alt || ''}
          className="w-full rounded-xl"
          loading="lazy"
        />
        {value.caption && (
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};

export function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const seoTitle =
    post && post.seo && post.seo.title
      ? post.seo.title
      : post
      ? post.title + ' | TaxClaim CPA Blog'
      : 'TaxClaim CPA Blog';

  const seoDescription =
    post && post.seo && post.seo.description
      ? post.seo.description
      : post && post.excerpt
      ? post.excerpt
      : 'Expert tax and business insights from TaxClaim CPA.';

  const seoOgImage =
    post && post.seo && post.seo.ogImage && post.seo.ogImage.asset
      ? post.seo.ogImage.asset.url
      : undefined;

  const seoTags = useSEO({
    title: seoTitle,
    description: seoDescription,
    canonical: 'https://taxclaim.co/blog/' + slug,
    ogImage: seoOgImage,
    ogType: 'article',
  });

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          category,
          excerpt,
          publishedAt,
          readTime,
          body,
          mainImage,
          seo {
            title,
            description,
            ogImage { asset-> { url } }
          }
        }`,
        { slug }
      )
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Sanity fetch error:', err);
        setLoading(false);
      });
  }, [slug]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        {seoTags}
        <Header />
        <main>
          <div className="flex justify-center items-center py-40">
            <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        {seoTags}
        <Header />
        <main>
          <div className="max-w-3xl mx-auto px-4 py-40 text-center">
            <h1 className="text-3xl text-slate-900 mb-4">Article not found</h1>
            <Link to="/blog" className="cursor-pointer">
              <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const mainImageSrc = post.mainImage
    ? urlFor(post.mainImage).width(800).format('webp').quality(85).url()
    : null;

  const mainImageSrcSet = post.mainImage
    ? `${urlFor(post.mainImage).width(400).format('webp').quality(85).url()} 400w,
       ${urlFor(post.mainImage).width(800).format('webp').quality(85).url()} 800w,
       ${urlFor(post.mainImage).width(1200).format('webp').quality(85).url()} 1200w`
    : null;

  return (
    <div className="min-h-screen bg-white">
      {seoTags}
      <Header />
      <main>

        {/* Article Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-6 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Blog
            </Link>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-teal-600 text-white rounded-full text-xs">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime || '3 min read'}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {mainImageSrc && (
              <img
                src={mainImageSrc}
                srcSet={mainImageSrcSet}
                sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
                alt={post.title}
                className="w-full rounded-xl mb-10"
                loading="lazy"
              />
            )}
            <div className="text-lg">
              {post.body ? (
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              ) : (
                <p className="text-gray-500">No content available.</p>
              )}
            </div>
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/blog" className="cursor-pointer">
                <Button
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to all articles
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl mb-4 text-slate-900">
              Need Professional Tax Help?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your specific situation with a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="cursor-pointer">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 px-8 py-3 cursor-pointer"
                >
                  Schedule Consultation
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
