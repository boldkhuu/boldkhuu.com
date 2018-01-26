import PropTypes from 'prop-types';
import { Layout } from '../components';
import { getFullUrl } from '../utils';

const propTypes = {
  fullUrl: PropTypes.string.isRequired,
};

const Contact = ({ fullUrl }) => {
  return (
    <Layout title="Contact" fullUrl={fullUrl}>
      <div className="container">
        <div className="content">
          {'I will be always happy to work with you.'}
          <ul className="social-links">
            <li>
              <a href="mailto:&#104;&#105;&#064;&#098;&#111;&#108;&#100;&#107;&#104;&#117;&#117;&#046;&#099;&#111;&#109;">
                Email
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/boldkhuu" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/boldkhuu" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href="https://twitter.com/bxbenny" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .container {
          background: #1a1a1a;
          position: relative;
          height: 100%;
        }

        .content {
          position: absolute;
          top: calc(30vh - 4px);
          margin: 0 0 0 80px;
          width: 60vw;
          color: #fff;
          line-height: 40px;
          font-size: 24px;
        }

        .social-links {
          list-style: none;
          overflow: hidden;
        }

        .social-links li {
          float: left;
          margin-right: 10px;
        }

        .social-links li + li:before {
          content: '-';
          margin-right: 10px;
          font-size: 15px;
        }

        .social-links li a {
          color: #aaa;
          font-size: 15px;
          font-weight: 500;
        }
      `}</style>
    </Layout>
  );
};

Contact.propTypes = propTypes;
Contact.getInitialProps = async ({ req }) => {
  return { fullUrl: getFullUrl(req) };
};

export default Contact;
