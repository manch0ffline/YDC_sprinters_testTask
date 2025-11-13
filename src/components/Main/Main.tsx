import CarrierDescription from '../CarrierDescription/CarrierDescription';
import car1 from '../../images/car-1.png';
import car2 from '../../images/car-2.png';
import car3 from '../../images/car-3.png';
import Drivers from '../Drivers/Drivers';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import SocialLinks from '../SocialLinks/SocialLinks';
import CarsGallery from '../CarsGallery/CarsGallery';
import CountriesServed from '../CountriesServed/CountriesServed';
import TripsCalendar from '../TripsCalendar/TripsCalendar';

const Main = () => {
  return (
    <div className="Main">
      <div className="container">
        {/* <div className="row row-gap-5">
          <section className="col-sm-12 col-xl-8  d-flex flex-column gap-4">
            <article className="d-flex flex-column gap-3">
              <h2 className="title">Опис перевізника</h2>
              <p className="m-0 Main__text--grey">
                Stripe is a software platform for starting and running internet
                businesses. Millions of businesses rely on Stripe’s software
                tools to accept payments, expand globally, and manage their
                businesses online. Stripe has been at the forefront of expanding
                internet commerce, powering new business models, and supporting
                the latest platforms, from marketplaces to mobile commerce
                sites. We believe that growing the GDP of the internet is a
                problem rooted in code and design, not finance. Stripe is built
                for developers, makers, and creators. We work on solving the
                hard technical problems necessary to build global economic
                infrastructure—from designing highly reliable systems to
                developing advanced machine learning algorithms to prevent
                fraud.
              </p>
            </article>
            <article className="d-flex flex-column gap-4">
              <div className="d-flex flex-column gap-3">
                <h2 className="title">Ми у соц. мережах</h2>
                <div className="d-flex gap-3 flex-column flex-md-row">
                  <a
                    href="twitter.com/stripe"
                    className="d-flex gap-3 p-2 text-decoration-none fw-medium Main__link"
                  >
                    <div className="icon icon--twiter"></div>
                    twitter.com/stripe
                  </a>
                  <a
                    href="facebook.com/StripeHQ"
                    className="d-flex gap-3 p-2 text-decoration-none fw-medium Main__link"
                  >
                    <div className="icon icon--facebook"></div>
                    facebook.com/StripeHQ
                  </a>
                </div>
              </div>
              <div className="d-flex flex-column gap-3">
                <img src={car1} alt="car 1" />
                <img src={car2} alt="car 1" />
                <img src={car3} alt="car 1" />
              </div>
            </article>
          </section>
          <section
            className="
            col-sm-12 col-xl-4 d-flex flex-column 
            flex-md-row gap-5 flex-xl-column 
            justify-content-lg-between justify-content-xl-start
          "
          >
            <div className="d-flex flex-column gap-4">
              <h3 className="m-0 fw-bold">Обслуговуємо країни</h3>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-center">
                  <div className="icon--country icon--country--france"></div>
                  Франція
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div className="icon--country icon--country--italy"></div>
                  Італія
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div className="icon--country icon--country--germany"></div>
                  Франція
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div className="icon--country icon--country--netherlands"></div>
                  Франція
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div className="icon--country icon--country--spain"></div>
                  Франція
                </div>
              </div>
              <div className="Main__text--blue d-flex gap-3 align-items-center fw-medium">
                Усі країни
                <div className="icon icon--down-arrow"></div>
              </div>
              <div className="Main__line"></div>
            </div>
            <div className="d-flex flex-column gap-4">
              <h3 className="m-0 fw-bold">Календар поїздок</h3>
              <MyCalendar />
            </div>
          </section>
        </div> */}
        <div className="row row-gap-5">
          <section className="col-sm-12 col-xl-8 d-flex flex-column gap-4">
            <CarrierDescription />
            <article className="d-flex flex-column gap-4">
              <SocialLinks />
              <CarsGallery car1={car1} car2={car2} car3={car3} />
            </article>
          </section>

          {/* Right section */}
          <section
            className="
          col-sm-12 col-xl-4 d-flex flex-column 
          flex-md-row gap-5 flex-xl-column 
          justify-content-lg-between justify-content-xl-start
        "
          >
            <CountriesServed />
            <TripsCalendar />
          </section>
        </div>
      </div>
      <div className="container">
        <Drivers />
      </div>
      <div className="container">
        <div className="Main__line"></div>
      </div>
      <div className="container">
        <Service />
      </div>
      <div className=" Main__bg-reviews">
        <div className="container">
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default Main;
