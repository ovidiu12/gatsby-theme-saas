import React from "react";
import Helmet from "react-helmet";
import getMetaData from "../components/utils/get-meta-data";

const defaultProps = {
  title: ``,
  description: false,
  pathname: false,
  children: null
};

const SEO = ({ title, description, pathname, children }) => {
  const site = getMetaData();

  const { siteTitle, siteUrl, siteDescription, author } = site;

  const seo = {
    title: title,
    description: description || siteDescription,
    url: `${siteUrl}${pathname || ``}`
  };
  return (
    <Helmet
      title={title}
      defaultTitle={title}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={author} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      {children}
    </Helmet>
  );
};

export default SEO;

SEO.defaultProps = defaultProps;
