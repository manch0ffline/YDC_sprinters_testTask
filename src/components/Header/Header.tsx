import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import image from '../../images/Company_Logo-car.png';

const Header = () => {
  return (
    <header
    
      className="Header py-3 py-md-5"
      style={{
        backgroundImage: 'url(../../images/bg-lines.png)',
        backgroundSize: 'cover',
      }}
    >
      <div className="container d-flex flex-column gap-3 gap-md-4">
        <Breadcrumbs />

        <div className="row align-items-center">
          <div className="col-12 col-xl-2 d-flex justify-content-center mb-3 mb-xl-0">
            <img
              src={image}
              alt="Logo company"
              className="img-fluid"
              style={{ maxHeight: '170px' }}
            />
          </div>

          <div className="col">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column justify-content-between align-items-sm-center align-items-md-start gap-2 gap-md-4 mb-3">
                <div className="d-flex align-items-center gap-2">
                  <h2 className="Header__title">Stripe</h2>
                  <div className="border border-primary text-primary px-2 py-1">
                    43 Поїздок
                  </div>
                </div>

                <div className="d-flex flex-column flex-md-row gap-2 gap-md-3 ">
                  <a
                    href="#"
                    className="d-flex align-items-center gap-1 text-decoration-none fw-bold Header__link"
                  >
                    <div className="icon icon--phone"></div>
                    +38 (073) 555 55 55X
                  </a>
                  <a
                    href="tel:+38(073)5555555"
                    className="d-flex align-items-center gap-1 text-decoration-none fw-bold Header__link"
                  >
                    <div className="icon icon--planet"></div>
                    https://stripe.com
                  </a>
                </div>
              </div>

              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-3">
                <div className="col d-flex align-items-center gap-2">
                  <div className="bg-white p-2 rounded-circle">
                    <div className="icon icon--fire"></div>
                  </div>
                  <div>
                    На ринку від:{' '}
                    <span className="fw-semibold">Травень 31, 2011</span>
                  </div>
                </div>

                <div className="col d-flex align-items-center gap-2">
                  <div className="bg-white p-2 rounded-circle">
                    <div className="icon icon--people"></div>
                  </div>
                  <div>
                    Перевезених пасажирів:{' '}
                    <span className="fw-semibold">4000+</span>
                  </div>
                </div>

                <div className="col d-flex align-items-center gap-2">
                  <div className="bg-white p-2 rounded-circle">
                    <div className="icon icon--train"></div>
                  </div>
                  <div>
                    Автопарк: <span className="fw-semibold">8 бусів</span>
                  </div>
                </div>

                <div className="col d-flex align-items-center gap-2">
                  <div className="bg-white p-2 rounded-circle">
                    <div className="icon icon--location"></div>
                  </div>
                  <div>
                    Обслуговуємо: <span className="fw-semibold">8 країн</span>
                  </div>
                </div>

                <div className="col d-flex align-items-center gap-2">
                  <div className="bg-white p-2 rounded-circle">
                    <div className="icon icon--city"></div>
                  </div>
                  <div>
                    Місто: <span className="fw-semibold">Львів</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
