import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

function setMetaTag(property: string, content: string, isOg = false) {
  const attr = isOg ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export default function PageMeta({ title, description, canonical, type = 'website' }: PageMetaProps) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Open Graph
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', type, true);
    if (canonical) {
      setMetaTag('og:url', canonical, true);
      setCanonical(canonical);
    }

    // Twitter
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);

    return () => {
      document.title = prevTitle;
      if (metaDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, [title, description, canonical, type]);

  return null;
}
