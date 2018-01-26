import PropTypes from 'prop-types';
import Head from 'next/head';
import { Navigation } from '..';
import styles, { global } from './styles';

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  fullUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Layout = ({
  title,
  description = 'Boldkhuu Batbaatar is a software engineer &amp; full-stack JS developer based in the United States.',
  fullUrl,
  children,
}) => {
  const fullTitle = `${title ? `${title} | ` : ''} Boldkhuu Batbaatar`;

  return (
    <div className="container">
      <Head>
        <title>{fullTitle}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={fullTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Boldkhuu Batbaatar" />

        <meta name="twitter:card" content={description} />
        <meta name="twitter:site" content="@bxbenny" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@bxbenny" />

        <link href="https://fonts.googleapis.com/css?family=Roboto:300,500,700" rel="stylesheet" />
      </Head>

      <Navigation />

      <div>{children}</div>

      <style jsx>{styles}</style>
      <style jsx global>
        {global}
      </style>
    </div>
  );
};

Layout.propTypes = propTypes;

export default Layout;
