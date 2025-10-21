import { NextPage } from 'next';

import { Layout, Header, Box, Footer } from '../components';
import { getFullUrl } from '../utils';
import { COLORS, BREAKPOINTS } from '../constants/styles';

interface HomeProps {
  fullUrl: string;
}

const Home: NextPage<HomeProps> = ({ fullUrl }) => {
  return (
    <Layout fullUrl={fullUrl}>
      <div className="container">
        <Header />
        <div className="boxes">
          <Box
            title="Experience"
            items={[
              {
                text: 'Microsoft',
                link: 'https://www.microsoft.com',
              },
              {
                text: 'Best Buy',
                link: 'https://www.bestbuy.com',
              },
              {
                text: 'Erxes',
                link: 'https://www.erxes.io',
              },
            ]}
          />
          <Box
            title="Education"
            items={[
              {
                text: 'Maharishi International University',
              },
              {
                text: 'Mongolian University of Science and Technology',
              },
            ]}
          />
        </div>
        <Footer />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          min-height: 100vh;
          padding: 10vw;
          background: ${COLORS.FIRST};
        }

        .boxes {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          grid-gap: 0.3rem;
        }

        @media only screen and (min-width: ${BREAKPOINTS.TABLET}) {
          .boxes {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          }
        }
      `}</style>
    </Layout>
  );
};

Home.getInitialProps = async ({ req }) => {
  return { fullUrl: getFullUrl(req) };
};

export default Home;
