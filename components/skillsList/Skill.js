import PropTypes from 'prop-types';
import Meter from './Meter';
import { skill } from './styles';

const propTypes = {
  name: PropTypes.string.isRequired,
  topics: PropTypes.array,
  percent: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

const Skill = ({ name, topics = [], percent, color }) => (
  <div className="skill">
    <h2>{name}</h2>
    <ul>{topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
    <Meter percent={percent} color={color} />

    <style jsx>{skill}</style>
  </div>
);

Skill.propTypes = propTypes;

export default Skill;
