import { COLORS } from '../constants/styles';

export const Footer: React.FC = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="mailto:hi@boldkhuu.com">Email</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/boldkhuu/" target="_blank">
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/boldkhuu" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://twitter.com/bxbenny" target="_blank">
            Twitter
          </a>
        </li>
      </ul>

      <style jsx>{`
        footer {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 150px;
        }

        ul {
          list-style: none;
        }

        ul li {
          display: inline-block;
          margin-right: 3rem;
        }

        ul li a {
          font-size: 1.6rem;
          color: ${COLORS.SECOND};

          transition: color 0.3s ease;
        }

        ul li a:hover {
          color: ${COLORS.THIRD};
        }
      `}</style>
    </footer>
  );
};
