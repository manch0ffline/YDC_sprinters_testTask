import { TopBarType } from '../../types/TobBarType';
import AuthButtons from '../AuthButtons/AuthButtons';
import Navigation from '../Navigation/Navigation';
import TopBar from '../TobBar/TopBar';

const Menu = () => {
  return (
    <aside className="menu app__menu" id="menu">
      <TopBar type={TopBarType.menu} />
      <div className="menu__content container">
        <Navigation />
        <AuthButtons />
      </div>
    </aside>
  );
};

export default Menu;
