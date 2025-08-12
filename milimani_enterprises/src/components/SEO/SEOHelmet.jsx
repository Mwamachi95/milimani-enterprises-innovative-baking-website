import { useLocation } from 'react-router-dom';

const SEOHelmet = ({
  title,
  description,
  keywords = '',
  ogImage = '/og-image.jpg',
  type = 'website'
}) => {
  const location = useLocation();
  
  // Get the current URL
  const currentUrl = `${window.location.origin}${location.pathname}`;
  
  // Default fallback values
  const defaultKeywords = 'baking ingredients, Rwanda, commercial bakery, cake mix, vanilla extract, baking equipment, East Africa';
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  
  // Ensure title is not too long for social media
  const socialTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
  
  // Ensure description is optimal length for social media
  const socialDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;

  return (
    <>
      {/* Basic SEO Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="Milimani Enterprises" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph Meta Tags (Facebook, LinkedIn, WhatsApp, Instagram, Discord, Slack, Telegram) */}
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:image" content={`${window.location.origin}${ogImage}`} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Milimani Enterprises" />
      <meta property="og:locale" content="en_US" />
      
      {/* Additional Open Graph properties for better sharing */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${socialTitle} - Milimani Enterprises`} />

      {/* Twitter Card Meta Tags (Twitter/X) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image" content={`${window.location.origin}/twitter-image.jpg`} />
      <meta name="twitter:site" content="@milimanienterprises" />
      <meta name="twitter:creator" content="@milimanienterprises" />
      <meta name="twitter:image:alt" content={`${socialTitle} - Milimani Enterprises`} />

      {/* Pinterest Meta Tags (Optional for food/baking content) */}
      <meta name="pinterest:title" content={socialTitle} />
      <meta name="pinterest:description" content={socialDescription} />
      <meta name="pinterest:image" content={`${window.location.origin}${ogImage}`} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#143e45" />
      <meta name="msapplication-TileColor" content="#143e45" />
      <meta name="application-name" content="Milimani Enterprises" />
      
      {/* Geo Meta Tags for Local Business */}
      <meta name="geo.region" content="RW" />
      <meta name="geo.placename" content="Kigali" />
      <meta name="geo.position" content="-1.9441;30.0619" />
      <meta name="ICBM" content="-1.9441, 30.0619" />
    </>
  );
};

export default SEOHelmet;