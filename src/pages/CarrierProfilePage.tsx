import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Menu from '../components/Menu/Menu';
import TopBar from '../components/TobBar/TopBar';
import { TopBarType } from '../types/TobBarType';

const CarrierProfilePage = () => {
  return (
    <>
      <Menu />
      <TopBar type={TopBarType.App} />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default CarrierProfilePage;
