import { Layout } from '../components';

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <div className="description">
          <strong>Boldkhuu Batbaatar</strong> is a passionate developer based in the United States.
          He considers himself more than just a developer, but a passionate creator as well, always
          giving life to the projects he works on and constantly pushing his boundaries.
        </div>
      </div>

      <style jsx>{`
        .container {
          background: #1a1a1a;
          position: relative;
          height: 100%;
        }

        .description {
          position: absolute;
          top: calc(30vh - 4px);
          color: #fff;
          line-height: 40px;
          font-size: 24px;
          margin: 0 0 0 80px;
          width: 60vw;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
