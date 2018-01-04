import PropTypes from 'prop-types';
import Skill from './Skill';
import { skillsList } from './styles';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const SkillsList = ({ children }) => (
  <div className="skills">
    {children}

    <style jsx>{skillsList}</style>
  </div>
);

SkillsList.propTypes = propTypes;
SkillsList.Skill = Skill;

export default SkillsList;
