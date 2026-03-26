import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useSEO } from '../../hooks/useSEO';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { client, urlFor } from '../../lib/sanityClient';
import { PortableText } from '@portabletext/react';

export function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          body,
          excerpt,
          publishedAt,
          readTime,
          mainImage,
          category->{title},
          author->{name},
          seo{
            title,
            description
          },
          ctaText,
          ctaButtonLabel
        }`,
        { slug }
      )
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [slug]);

  useSEO({
    title: post?.seo?.title || post?.title,
    description: post?.seo?.description || post?.excerpt,
  });

  if (loading)
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="animate-spin" />
      </div>
    );

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/blog" className="flex items-center mb-6 text-sm">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to blog
        </Link>

        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

        <div className="text-sm text-gray-500 mb-4">
          {post.category?.title} • {post.author?.name}
        </div>

        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).url()}
            className="rounded-lg mb-6"
            alt={post.title}
          />
        )}

        <PortableText value={post.body} />

        {/* CTA */}
        {(post.ctaText || post.ctaButtonLabel) && (
          <div className="mt-12 p-6 bg-teal-50 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-3">
              {post.ctaText || 'Need help with taxes?'}
            </h3>

            <a
              href="https://taxclaim.co"
              className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg mt-2"
            >
              {post.ctaButtonLabel || 'Get Started'}
            </a>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
