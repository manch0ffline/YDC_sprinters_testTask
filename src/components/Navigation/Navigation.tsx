import type React from 'react';
import cn from 'classnames';

type Props = {
  isDesktop?: boolean;
};

const Navigation: React.FC<Props> = ({ isDesktop = false }) => {
  return (
    <nav className={cn('nav', {'nav__disabled':isDesktop})}>
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#main">
            Головна
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#Carriers">
            Перевізниками
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#about-us">
            Про нас
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link nav__link--active" href="#profile">
            Профіль перевізника
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
