import PropTypes from 'prop-types';
import { meter } from './styles';

const propTypes = {
  percent: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

const Meter = ({ percent, color }) => (
  <div className="meter">
    <div style={{ backgroundColor: color, width: `${percent}%` }} />

    <style jsx>{meter}</style>
  </div>
);

Meter.propTypes = propTypes;

export default Meter;
