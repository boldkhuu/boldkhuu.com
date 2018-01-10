import { Layout, Timeline } from '../components';

const Experience = () => {
  return (
    <Layout>
      <div className="container">
        <Timeline>
          <Timeline.Item start="2010" end="2017" height="140px" color="#2980b9">
            <Timeline.Item.Title link="http://thenewmediagroup.co" target="_blank">
              The New Media Group
            </Timeline.Item.Title>
            <Timeline.Item.List
              caption="Projects:"
              items={[
                { value: 'Gerege', link: 'http://gerege.agency' },
                { value: 'Erxes', link: 'http://erxes.io' },
              ]}
            />
          </Timeline.Item>
          <Timeline.Item separator title="studying" height="40px" end="now">
            <Timeline.Item.Title link="/education">
              pursuing Master's degree in the US
            </Timeline.Item.Title>
          </Timeline.Item>
        </Timeline>
      </div>

      <style jsx>{`
        .container {
          background: #1a1a1a;
          position: relative;
          height: 100%;
        }
      `}</style>
    </Layout>
  );
};

export default Experience;
