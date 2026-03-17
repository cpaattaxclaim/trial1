import { Helmet } from 'react-helmet-async';
import { createElement } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
}

export function useSEO({ title, description, canonical, noindex = false, ogImage }: SEOProps) {
  return createElement(Helmet, null,
    createElement('title', null, title),
    createElement('meta', { name: 'description', content: description }),
    createElement('meta', { name: 'robots', content: noindex ? 'noindex,nofollow' : 'index,follow' }),
    createElement('meta', { property: 'og:title', content: title }),
    createElement('meta', { property: 'og:description', content: description }),
    createElement('meta', { property: 'og:type', content: 'article' }),
    createElement('meta', { property: 'og:site_name', content: 'TaxClaim' }),
    ...(ogImage ? [createElement('meta', { property: 'og:image', content: ogImage })] : []),
    createElement('meta', { name: 'twitter:card', content: ogImage ? 'summary_large_image' : 'summary' }),
    createElement('meta', { name: 'twitter:site', content: '@cpaattaxclaim' }),
    createElement('meta', { name: 'twitter:creator', content: '@cpaattaxclaim' }),
    createElement('meta', { name: 'twitter:title', content: title }),
    createElement('meta', { name: 'twitter:description', content: description }),
    ...(ogImage ? [createElement('meta', { name: 'twitter:image', content: ogImage })] : []),
    ...(canonical ? [createElement('link', { rel: 'canonical', href: canonical })] : []),
  );
}
