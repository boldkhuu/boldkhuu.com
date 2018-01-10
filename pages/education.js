import { Layout, Timeline } from '../components';

const Education = () => {
  return (
    <Layout>
      <div className="container">
        <Timeline>
          <Timeline.Item start="2006" end="2010" height="120px" color="#02459f">
            <Timeline.Item.Title link="http://must.edu.mn/eng" target="_blank">
              Mongolian University of Science and Technology (MGL)
            </Timeline.Item.Title>
            <Timeline.Item.List
              caption="Major:"
              items={[{ value: 'Bachelor in Software Engineering' }]}
            />
          </Timeline.Item>
          <Timeline.Item end="2012" height="60px" color="#e83c1b">
            <Timeline.Item.Title link="http://must.edu.mn/eng" target="_blank">
              Mongolian University of Science and Technology (MGL)
            </Timeline.Item.Title>
            <Timeline.Item.List
              caption="Major:"
              items={[{ value: 'Master in Software Engineering' }]}
            />
          </Timeline.Item>
          <Timeline.Item separator end="2017" height="150px">
            <Timeline.Item.Title link="/experience">
              worked and gained valuable experience
            </Timeline.Item.Title>
          </Timeline.Item>
          <Timeline.Item end="now" height="60px" color="#91ba5b">
            <Timeline.Item.Title link="http://mum.edu" target="_blank">
              Maharishi University of Management (USA)
            </Timeline.Item.Title>
            <Timeline.Item.List
              caption="Major:"
              items={[{ value: 'Master in Computer Science (Data Science)' }]}
            />
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

export default Education;
