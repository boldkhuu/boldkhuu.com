import PropTypes from 'prop-types';
import { Layout, SkillsList } from '../components';
import { getFullUrl } from '../utils';

const propTypes = {
  fullUrl: PropTypes.string.isRequired,
};

const Skills = ({ fullUrl }) => {
  return (
    <Layout title="Skills" fullUrl={fullUrl}>
      <div className="container">
        <SkillsList>
          <SkillsList.Skill
            name="Javascript"
            topics={['ES6', 'ES7', 'Npm', 'Yarn', 'Jest', 'Eslint', 'Prettier']}
            percent={90}
            color="#f7df1e"
          />
          <SkillsList.Skill
            name="Node JS"
            topics={['Express', 'Meteor', 'NextJS', 'MongoDB as database']}
            percent={85}
            color="#43853D"
          />
          <SkillsList.Skill
            name="React"
            topics={['Redux', 'React Native', 'StyledComponents']}
            percent={90}
            color="#61DAFB"
          />
          <SkillsList.Skill
            name="HTML & CSS"
            topics={['SASS', 'Flexbox', 'Grid']}
            percent={85}
            color="#0073B9"
          />
          <SkillsList.Skill
            name="Tools"
            topics={['Mac OS', 'Linux', 'Shell', 'Git', 'VS Code', 'Sketch', 'Photoshop']}
            percent={95}
            color="#E75017"
          />
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

Skills.propTypes = propTypes;
Skills.getInitialProps = async ({ req }) => {
  return { fullUrl: getFullUrl(req) };
};

export default Skills;
