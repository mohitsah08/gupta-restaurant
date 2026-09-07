import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Gupta Restaurant | Good Food. Great Moments.',
  description = 'Discover comforting Indian flavours, signature Mutton Handi, aromatic Biryanis, and Indo-Chinese favourites at Gupta Restaurant, Thawe, Gopalganj.',
}) => {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    window.scrollTo(0, 0);
  }, [title, description]);

  return null;
};
