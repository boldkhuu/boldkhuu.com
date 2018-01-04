import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';
import styles from './styles';

const menus = ['skills', 'experience', 'education', 'contact'];

const propTypes = {
  router: PropTypes.object.isRequired,
};

const Navigation = ({ router }) => {
  return (
    <div className="container">
      <Link href="/">
        <a className="logo">B</a>
      </Link>
      <ul>
        {menus.map(menu => (
          <li key={menu}>
            <Link href={`/${menu}`}>
              <a className={router.pathname.replace('/', '') === menu ? 'active' : ''}>{menu}</a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="year">&copy; {new Date().getFullYear()}</div>

      <style jsx>{styles}</style>
    </div>
  );
};

Navigation.propTypes = propTypes;

export default withRouter(Navigation);
