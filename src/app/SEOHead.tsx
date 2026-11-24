import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  url?: string;
}

export function SEOHead({
  title = "CoreMind | AI Automation & Digital Transformation",
  description = "CoreMind ช่วยองค์กรก้าวสู่ยุคใหม่ด้วย AI Automation, ERP Solutions และ Digital Consulting",
  keywords = "AI Automation Thailand, Digital Transformation Consulting, AI Consulting, Team Building",
  ogTitle,
  ogDescription,
  ogImage = "/coremind_og.png",
  url = "https://coremind.cc"
}: SEOHeadProps) {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', 'CoreMind Co., Ltd.');
    setMetaTag('robots', 'index, follow');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph tags
    setMetaTag('og:title', ogTitle || title, true);
    setMetaTag('og:description', ogDescription || description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', 'CoreMind', true);
    setMetaTag('og:locale', 'th_TH', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', ogTitle || title);
    setMetaTag('twitter:description', ogDescription || description);
    setMetaTag('twitter:image', ogImage);

    // Additional SEO tags
    setMetaTag('theme-color', '#36A06F');
    setMetaTag('msapplication-TileColor', '#36A06F');

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Favicon and Apple Touch Icon
    const setLinkTag = (rel: string, href: string, sizes?: string, type?: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
      if (sizes) link.sizes = sizes;
      if (type) link.type = type;
    };

    // Set favicon and webclip
    setLinkTag('icon', '/coremind_favicon.ico', '32x32', 'image/x-icon');
    setLinkTag('apple-touch-icon', '/coremind_webclip.png', '256x256');
    setLinkTag('apple-touch-icon-precomposed', '/coremind_webclip.png', '256x256');

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CoreMind",
      "description": description,
      "url": url,
      "logo": ogImage,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+66-88-251-6388",
        "contactType": "customer service",
        "email": "nan@coremind.cc"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lamphun",
        "addressCountry": "TH"
      },
      "sameAs": [
        "https://www.linkedin.com/company/coremind",
        "https://www.facebook.com/coremind",
        "https://line.me/ti/p/@coremind"
      ],
      "offers": [
        {
          "@type": "Service",
          "name": "AI Training",
          "description": "หลักสูตร AI Agentic Architect"
        },
        {
          "@type": "Service", 
          "name": "Digital Consulting",
          "description": "Discovery Phase, Requirement Gathering, Transformation Advisory"
        },
        {
          "@type": "Service",
          "name": "Team Building", 
          "description": "จัดทีม PO, BA, SA, Dev, QA แบบ Agile"
        },
        {
          "@type": "Service",
          "name": "Data & AI Services",
          "description": "RAG Flow, Knowledge Base, AI Integration"
        }
      ]
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogTitle, ogDescription, ogImage, url]);

  return null;
}