import logo from '../../images/logo.png';
import { TopBarType } from '../../types/TobBarType';
import AuthButtons from '../AuthButtons/AuthButtons';
import Navigation from '../Navigation/Navigation';

type Props = {
  type: TopBarType;
};

const TopBar: React.FC<Props> = ({ type }) => {
  return (
    <div className="top-bar container">
      <a href="#" className="top-bar__logo-link">
        <img className="top-bar__logo" src={logo} alt="company-logo" />
      </a>

      {type === TopBarType.menu ? (
        <a href="#" className="icon icon--close"></a>
      ) : (
        <a href="#menu" className="icon icon--menu"></a>
      )}

      <Navigation isDesktop={true}/>
      <AuthButtons isDesktop={true}/>
    </div>
  );
};

export default TopBar;
