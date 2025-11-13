import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row pb-5 row-gap-5">
          <div className="Footer__about-company col-lg-4 d-flex gap-3 flex-column">
            <img src={logo} alt="Logo" className="Footer__logo" />
            <div className="Footer__about-company">
              Платформа пошуку перевізників та бронювання поїздок
            </div>
          </div>
          <div className="for-clients col-lg-2 col">
            <h5 className="Footer__title">Клієнтам</h5>
            <ul className="Footer__list">
              <li>
                <a href="" className="text-decoration-none Footer__link">
                  Головна
                </a>
              </li>
              <li>
                <a href="" className="text-decoration-none Footer__link">
                  Про нас
                </a>
              </li>
              <li>
                <a href="" className="text-decoration-none Footer__link">
                  Ціни
                </a>
              </li>
              <li>
                <a href="" className="text-decoration-none Footer__link">
                  Маршрути
                </a>
              </li>
              <li>
                <a href="" className="text-decoration-none Footer__link">
                  Політика приватності
                </a>
              </li>
            </ul>
          </div>
          <div className="drivers-info col-lg-2 col">
            <h5 className="Footer__title">Перевізникам</h5>
            <ul className="Footer__list Footer__list--drivers">
              <li>
                <a href="" className="text-decoration-none Footer__link">
                  Help Docs
                </a>
              </li>
              <li>
                <a href="" className="text-decoration-none Footer__link">
                  Особистий кабінет
                </a>
              </li>
              <li>
                <a href="" className="text-decoration-none Footer__link">
                  Оновлення
                </a>
              </li>
              <li>
                <a href="" className="text-decoration-none Footer__link">
                  Контакти
                </a>
              </li>
            </ul>
          </div>
          <div className="feedback col-lg-4">
            <h5 className="Footer__title">Зворотній зв’язок</h5>
            <div>
              Маєш пропозиції щодо покращення <br /> сервісу - пиши нам!
            </div>
            <form className="Footer__form d-flex gap-2 justify-content-between">
              <input
                type="text"
                className="Footer__input"
                placeholder="Email Address"
              />
              <button className="Footer__button">Надіслати</button>
            </form>
            <div className="d-flex flex-column gap-2">
              <a
                href="tel:+38 (073) 555 55 55"
                className="d-flex text-decoration-none gap-2 Footer__link"
              >
                <div className="icon icon--phone-light"></div>+38 (073) 555 55
                55
              </a>
              <a
                href="mailto:gmail@gmail.com"
                className="d-flex text-decoration-none gap-2 Footer__link"
              >
                <div className="icon icon--email"></div>gmail@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="Footer__line"></div>
        <div className="Footer__bottom d-flex justify-content-between align-items-center flex-column gap-3 flex-sm-row">
          2024 @ Sprinters. All rights reserved.
          <div className="Footer__social-networks d-flex gap-3">
            <a href="" className='icon--soc-net icon--soc-net--facebook-light'></a>
            <a href="" className='icon--soc-net icon--soc-net--instagram-light'></a>
            <a href="" className='icon--soc-net icon--soc-net--dribble-light'></a>
            <a href="" className='icon--soc-net icon--soc-net--linkedIn-light'></a>
            <a href="" className='icon--soc-net icon--soc-net--twitter-light'></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
