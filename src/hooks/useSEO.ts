import { Helmet } from 'react-helmet-async';
import { createElement } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  schema?: object;
}

export function useSEO({ title, description, canonical, noindex = false, ogImage, ogType = 'website', ogTitle, ogDescription, ogUrl, schema }: SEOProps) {
  return createElement(Helmet, null,
    createElement('title', null, title),
    createElement('meta', { name: 'description', content: description }),
    createElement('meta', { name: 'robots', content: noindex ? 'noindex,nofollow' : 'index,follow' }),
    createElement('meta', { property: 'og:title', content: ogTitle ?? title }),
    createElement('meta', { property: 'og:description', content: ogDescription ?? description }),
    createElement('meta', { property: 'og:type', content: ogType }),
    createElement('meta', { property: 'og:site_name', content: 'TaxClaim' }),
    ...(ogUrl ? [createElement('meta', { property: 'og:url', content: ogUrl })] : canonical ? [createElement('meta', { property: 'og:url', content: canonical })] : []),
    ...(ogImage ? [createElement('meta', { property: 'og:image', content: ogImage })] : []),
    createElement('meta', { name: 'twitter:card', content: ogImage ? 'summary_large_image' : 'summary' }),
    createElement('meta', { name: 'twitter:site', content: '@cpaattaxclaim' }),
    createElement('meta', { name: 'twitter:creator', content: '@cpaattaxclaim' }),
    createElement('meta', { name: 'twitter:title', content: ogTitle ?? title }),
    createElement('meta', { name: 'twitter:description', content: ogDescription ?? description }),
    ...(ogImage ? [createElement('meta', { name: 'twitter:image', content: ogImage })] : []),
    ...(canonical ? [createElement('link', { rel: 'canonical', href: canonical })] : []),
    ...(schema ? [createElement('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: JSON.stringify(schema) } })] : []),
  );
}
