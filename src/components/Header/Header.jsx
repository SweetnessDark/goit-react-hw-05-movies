import { NavLink } from 'react-router-dom';

import sass from './Header.module.scss';

const navItem = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const Header = () => {
  return (
    <header className={sass.header}>
      <div className="container">
        <nav>
          <ul className={sass.pageItem}>
            {navItem.map(({ href, text }) => {
              return (
                <li key={href}>
                  <NavLink className={sass.linkPage} to={href}>
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
