import Head from 'next/head';

import { COLORS } from '../constants/styles';

interface LayoutProps {
  fullUrl: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  title,
  description = 'Boldkhuu Batbaatar is a software engineer &amp; full-stack JS developer based in the United States.',
  fullUrl,
  children,
}) => {
  const fullTitle = `${title ? `${title} | ` : ''} Boldkhuu Batbaatar`;

  return (
    <>
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
      </Head>

      <div>{children}</div>

      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
          }

          html {
            font: 300 62.5%/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
              'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            color: ${COLORS.SECOND};
            -webkit-text-size-adjust: 62.5%;
            font-variant-ligatures: none;
            -webkit-font-variant-ligatures: none;
            text-rendering: optimizeLegibility;
            -moz-osx-font-smoothing: grayscale;
            font-smoothing: antialiased;
            -webkit-font-smoothing: antialiased;
          }

          a {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};
