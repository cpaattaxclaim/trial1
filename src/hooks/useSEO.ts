import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
}

export function useSEO({ title, description, canonical, noindex = false }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr.split('=')[0], attr.split('=')[1]?.replace(/"/g, '') ?? attr);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // Standard meta
    setMeta('meta[name="description"]', 'name=description', description);
    setMeta('meta[name="robots"]', 'name=robots', noindex ? 'noindex,nofollow' : 'index,follow');

    // Open Graph
    setMeta('meta[property="og:title"]', 'property=og:title', title);
    setMeta('meta[property="og:description"]', 'property=og:description', description);
    setMeta('meta[property="og:type"]', 'property=og:type', 'website');
    setMeta('meta[property="og:site_name"]', 'property=og:site_name', 'TaxClaim');

    // Twitter / X
    setMeta('meta[name="twitter:card"]', 'name=twitter:card', 'summary');
    setMeta('meta[name="twitter:site"]', 'name=twitter:site', '@cpaattaxclaim');
    setMeta('meta[name="twitter:creator"]', 'name=twitter:creator', '@cpaattaxclaim');
    setMeta('meta[name="twitter:title"]', 'name=twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', description);

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute('href', canonical);
    }

    // JSON-LD: sameAs links for brand entity disambiguation
    const existingJsonLd = document.querySelector('script[data-taxclaim-sameas]');
    if (!existingJsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-taxclaim-sameas', 'true');
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "TaxClaim",
        "url": "https://taxclaim.co",
        "sameAs": [
          "https://x.com/cpaattaxclaim",
          "https://www.facebook.com/TaxClaim.co",
          "https://www.linkedin.com/in/taxclaim/",
          "https://medium.com/@cpa_96374",
          "https://substack.com/@taxclaim",
          "https://www.threads.com/@cpaattaxclaim"
        ]
      });
      document.head.appendChild(script);
    }
  }, [title, description, canonical, noindex]);
}
