import PropTypes from 'prop-types';
import Head from 'next/head';
import { Navigation } from '..';
import styles, { global } from './styles';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>Boldkhuu Batbaatar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
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
