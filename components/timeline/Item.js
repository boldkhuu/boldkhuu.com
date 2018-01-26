import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';
import { item } from './styles';

const propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  separator: PropTypes.bool,
  children: PropTypes.node,
};

const Item = ({ start, end, height, color, separator, children }) => (
  <div className={classNames('item', { separator })}>
    <div className="time" style={{ height }}>
      <div className="start">{start}</div>
      <div className="end">{end}</div>
    </div>
    <div className="content">{children}</div>

    <style jsx>{item}</style>
    <style jsx>{`
      .item .time {
        border-color: ${color};
      }
    `}</style>
  </div>
);

Item.propTypes = propTypes;

Item.Title = function Title({ link, target = '_self', children }) {
  return (
    <h2>
      <Link href={link}>
        <a target={target}>{children}</a>
      </Link>
      <style jsx>{item}</style>
    </h2>
  );
};
Item.Title.propTypes = {
  link: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Item.List = function List({ caption, items }) {
  return (
    <div className="list">
      <h3>{caption}</h3>
      <ul>
        {items.map(({ value, link = '#' }) => (
          <li key={value}>
            <Link href={link}>
              <a target="_blank">{value}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{item}</style>
    </div>
  );
};
Item.List.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.array.isRequired,
};

export default Item;
