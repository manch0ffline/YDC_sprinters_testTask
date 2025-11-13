import type React from 'react';
import cn from 'classnames';

type Props = {
  isDesktop?: boolean;
};

const AuthButtons: React.FC<Props> = ({ isDesktop = false }) => {
  return (
    <div className={cn('AuthButtons', {'AuthButtons__disabled':isDesktop})}>
      <button className="AuthButtons__button AuthButtons__button--create">
        Створити профіль
      </button>
      <div className="AuthButtons__line"></div>
      <button className="AuthButtons__button AuthButtons__button--log-in">
        Увійти
      </button>
    </div>
  );
};

export default AuthButtons;
