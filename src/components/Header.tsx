import { BREAKPOINTS, COLORS } from '../constants/styles';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="greeting">
        Hi. I&apos;m <h1>Boldkhuu Batbaatar</h1>.
      </div>
      <p>Principal Software Engineer at Microsoft.</p>

      <style jsx>{`
        header {
          margin-bottom: 72px;
        }

        .greeting {
          font-size: 4.8rem;
          font-weight: bold;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .greeting h1 {
          display: inline;
          font-size: 4.8rem;
          color: ${COLORS.THIRD};
        }

        p {
          font-size: 2.4rem;
        }

        @media only screen and (min-width: ${BREAKPOINTS.LAPTOP}) {
          header {
            margin-bottom: 148px;
          }
        }
      `}</style>
    </header>
  );
};
