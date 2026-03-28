import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { useSEO } from '../../hooks/useSEO';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  FileText,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Loader2,
} from 'lucide-react';
import { client, urlFor } from '../../lib/sanityClient';
import { PortableText } from '@portabletext/react';

// --- Static constants ---

interface RelatedPost {
  _id: string;
  title: string;
  slug: { current: string };
  category?: { title: string };
  excerpt: string;
  publishedAt: string;
  readTime?: string;
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category?: { title: string };
  author?: { name: string };
  excerpt: string;
  publishedAt: string;
  _updatedAt?: string;
  readTime?: string;
  body?: unknown[];
  mainImage?: unknown;
  ctaText?: string;
  ctaButtonLabel?: string;
  seo?: {
    title?: string;
    description?: string;
    ogImage?: { asset?: { url?: string } };
  };
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'Foreign Owner Tax Guide': Globe2,
  'US Tax Filings & Requirements': FileText,
  'Cross-Border Reporting & Compliance': ShieldCheck,
  'Compliance & Operations': CheckCircle2,
  'US Entity Formation': Building2,
};

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category->{title},
  author->{name},
  excerpt,
  publishedAt,
  _updatedAt,
  readTime,
  body,
  mainImage,
  ctaText,
  ctaButtonLabel,
  seo {
    title,
    description,
    ogImage { asset->{ url } }
  }
}`;

const RELATED_QUERY = `*[_type == "post" && category->title == $categoryTitle && slug.current != $slug]
  | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  category->{title},
  excerpt,
  publishedAt,
  readTime
}`;

const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const portableTextComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 text-gray-700 leading-relaxed text-justify">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl text-slate-900 mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl text-slate-900 mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-600 my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-slate-900">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }: { value?: { href?: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href ?? ''}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-600 underline hover:text-teal-700"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value: any }) => (
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
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-justify">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-justify">{children}</li>
    ),
  },
};

// --- Component ---

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useSEO({
    title: post?.seo?.title ?? (post ? `${post.title} | TaxClaim CPA Blog` : 'TaxClaim CPA Blog'),
    description: post?.seo?.description ?? post?.excerpt ?? 'Expert tax insights from TaxClaim CPA.',
    canonical: `https://taxclaim.co/blog/${slug}`,
    ogImage: post?.seo?.ogImage?.asset?.url,
    ogType: 'article',
    schema: post ? {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.seo?.title ?? `${post.title} | TaxClaim CPA Blog`,
      description: post.seo?.description ?? post.excerpt,
      datePublished: post.publishedAt,
      dateModified: post._updatedAt ?? post.publishedAt,
      url: `https://taxclaim.co/blog/${slug}`,
      author: {
        '@type': 'Person',
        name: post.author?.name ?? 'TaxClaim CPA',
        url: 'https://taxclaim.co/about',
      },
      publisher: {
        '@type': 'Organization',
        name: 'TaxClaim',
        url: 'https://taxclaim.co',
        logo: {
          '@type': 'ImageObject',
          url: 'https://taxclaim.co/og-image.png',
        },
      },
      ...(post.seo?.ogImage?.asset?.url ? {
        image: {
          '@type': 'ImageObject',
          url: post.seo.ogImage.asset.url,
        },
      } : {}),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://taxclaim.co/blog/${slug}`,
      },
    } : undefined,
  });

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;

    setLoading(true);
    setFetchError(false);

    client
      .fetch(POST_QUERY, { slug })
      .then((data: Post | null) => {
        if (cancelled) return;
        setPost(data);
        setLoading(false);

        // Signal react-snap that async content is ready for snapshotting
        if (typeof window !== 'undefined' && (window as any).snapSaveState) {
          (window as any).snapSaveState();
        }

        if (data?.category?.title) {
          client
            .fetch(RELATED_QUERY, { categoryTitle: data.category.title, slug })
            .then((related: RelatedPost[]) => {
              if (!cancelled) setRelatedPosts(related);
            })
            .catch(() => {});
        }
      })
      .catch(() => {
        if (!cancelled) {
          setFetchError(true);
          setLoading(false);

          // Signal react-snap even on error so it doesn't hang
          if (typeof window !== 'undefined' && (window as any).snapSaveState) {
            (window as any).snapSaveState();
          }
        }
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  const mainImageSrc = post?.mainImage
    ? urlFor(post.mainImage).width(800).format('webp').quality(85).url()
    : null;

  const mainImageSrcSet = post?.mainImage
    ? `${urlFor(post.mainImage).width(400).format('webp').quality(85).url()} 400w,
       ${urlFor(post.mainImage).width(800).format('webp').quality(85).url()} 800w,
       ${urlFor(post.mainImage).width(1200).format('webp').quality(85).url()} 1200w`
    : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
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

  if (fetchError || !post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <div className="max-w-3xl mx-auto px-4 py-40 text-center">
            <h1 className="text-3xl text-slate-900 mb-4">
              {fetchError ? 'Failed to load article' : 'Article not found'}
            </h1>
            <p className="text-gray-500 mb-6">
              {fetchError
                ? 'Something went wrong. Please try again later.'
                : 'This article may have been moved or removed.'}
            </p>
            <Link to="/blog">
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <article itemScope itemType="https://schema.org/Article">

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
              {post.category?.title && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-teal-600 text-white rounded-full text-xs">
                    {post.category.title}
                  </span>
                </div>
              )}
              <h1 className="text-4xl md:text-5xl mb-6 leading-tight" itemProp="headline">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishedAt} itemProp="datePublished">
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime || '3 min read'}
                </div>
                {post.author?.name && (
                  <span className="text-gray-400" itemProp="author">{post.author.name}</span>
                )}
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              {mainImageSrc && (
                <img
                  src={mainImageSrc}
                  srcSet={mainImageSrcSet ?? undefined}
                  sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
                  alt={post.title}
                  className="w-full rounded-xl mb-10"
                  loading="eager"
                  itemProp="image"
                />
              )}
              <div className="blog-post-content text-lg" itemProp="articleBody">
                {post.body ? (
                  <PortableText value={post.body} components={portableTextComponents} />
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

          {/* CTA */}
          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl mb-4 text-slate-900">
                {post.ctaText || 'Let TaxClaim handle this for you.'}
              </h2>
              <p className="text-lg text-gray-600 mb-8">Flat fee. Fully remote. 100% on-time.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact#contact-form" className="cursor-pointer">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 py-3 cursor-pointer">
                    {post.ctaButtonLabel || 'Get Started'}
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

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="py-16 bg-slate-50">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl text-slate-900 mb-8">Related Articles</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((related) => {
                    const Icon = CATEGORY_ICONS[related.category?.title ?? ''] ?? FileText;
                    return (
                      <Link
                        key={related._id}
                        to={`/blog/${related.slug?.current}`}
                        aria-label={`Read article: ${related.title}`}
                        className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-200 transition-all group cursor-pointer"
                      >
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-teal-600 transition-colors">
                          <Icon className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-base font-medium text-slate-900 group-hover:text-teal-600 transition-colors mb-2 leading-snug">
                          {related.title}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{related.excerpt}</p>
                        <div className="flex items-center text-teal-600 text-sm">
                          <span>Read article</span>
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

        </article>
      </main>

      <Footer />
    </div>
  );
}
