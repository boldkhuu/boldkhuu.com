import { Layout } from '../components';

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <div className="description">
          {'My name is '} <strong>{'Boldkhuu Batbaatar'}</strong>
          {' - Software engineer & full-stack JS developer based in the United States.'}
          <br />
          {"I'm passionate about solving problems with semantically and syntactically clean code."}
          <br />
          {'Besides that, I really care about beauty of UI/UX design.'}
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
