const Service = () => {
  return (
    <div className="Service d-flex flex-column gap-4">
      <div className="Service__info d-flex flex-column gap-2">
        <h3 className="title Service__title fs-2">Сервіс</h3>
        <p className="Service__description m-0 fs-6">
          Найкращі умови для вашого комфорту
        </p>
      </div>
      <div className="Service__items d-flex flex-column flex-md-row flex-md-wrap justify-content-md-center justify-content-lg-around flex-xl-nowrap">
        <div className="Service__item">
          <div className=" icon--fan icon__large"></div>
          <h4 className="fs-4 m-0 Service__text">Кондиціонер</h4>
        </div>
        <div className="Service__item">
          <div className=" icon--wifi icon__large"></div>
          <h4 className="fs-4 m-0 Service__text">Wi-Fi</h4>
        </div>
        <div className="Service__item">
          <div className=" icon--monitor icon__large"></div>
          <h4 className="fs-4 m-0 Service__text">TV</h4>
        </div>
        <div className="Service__item">
          <div className=" icon--wc icon__large"></div>
          <h4 className="fs-4 m-0 Service__text">Туалет</h4>
        </div>
        <div className="Service__item">
          <div className=" icon--sofa icon__large"></div>
          <h4 className="fs-4 m-0 Service__text">
            Зручні <br /> сидіння
          </h4>
        </div>
        <div className="Service__item">
          <div className=" icon--hands icon__large"></div>
          <h4 className="fs-4 m-0 Service__text">
            Перевозимо <br /> тварин
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Service;
