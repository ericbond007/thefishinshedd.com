import React from 'react';
import Helmet from 'react-helmet';

const seoImageURL = `https://thefishinshedd.com/sheddLogo-min.png`;

const getMetaTags = ({
  title, description, url,  published, updated, category, tags 
}) => {
  const metaTags = [
    { itemprop: 'name', content: title },
    { name: 'title', content: title },
    { itemprop: 'description', content: description },
    { itemprop: 'image', content: seoImageURL },
    { name: 'description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:url', content: url },
    { name: 'og:description', content: description },
    { name: 'og:site_name', content: 'The Fishin Shedd' },
  ];

  if (published) metaTags.push({ name: 'article:published_time', content: published });
  if (updated) metaTags.push({ name: 'article:modified_time', content: updated });
  if (category) metaTags.push({ name: 'article:section', content: category });
  if (tags) metaTags.push({ name: 'article:tag', content: tags });
  if (!description) metaTags.push ({ name: 'description', content: 'Featuring ethanol-free gasoline, The Fishin Shedd is your choice for fresh deli items, live bait, and outdoor supplies. The Shedd is open year round.' });

    return metaTags;
};

const SEO = ({
  title, description, path,  published, updated, category, tags
}) => (
  <Helmet
    htmlAttributes= {{
      lang: `en`,
      itemscope: undefined,
      itemtype: `http://schema.org/GasStation`,
    }}
    title={ title }
    link={[
      { rel: 'canonical', href: `https://thefishinshedd.com${path}` },
    ]}
    meta={getMetaTags({
      title,
      description,
      url: `https://thefishinshedd.com${path}`,
      published,
      updated,
      category,
      tags
    })}
  />
);

export default SEO;

