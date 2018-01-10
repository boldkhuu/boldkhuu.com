import PropTypes from 'prop-types';
import Item from './Item';
import { timeline } from './styles';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Timeline = ({ children }) => (
  <div className="timeline">
    {children}

    <style jsx>{timeline}</style>
  </div>
);

Timeline.propTypes = propTypes;
Timeline.Item = Item;

export default Timeline;
