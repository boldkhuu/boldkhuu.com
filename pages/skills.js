import { Layout, SkillsList } from '../components';

const Skills = () => {
  return (
    <Layout>
      <div className="container">
        <SkillsList>
          <SkillsList.Skill
            name="React"
            topics={['Redux', 'StyledComponents']}
            percent={90}
            color="#61DAFB"
          />
          <SkillsList.Skill
            name="Node JS"
            topics={['Express', 'Meteor']}
            percent={85}
            color="#43853D"
          />
          <SkillsList.Skill name="HTML 5" percent={95} color="#E75017" />
          <SkillsList.Skill name="CSS 3" topics={['SASS']} percent={85} color="#0073B9" />
        </SkillsList>
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

export default Skills;
