const CountriesServed = () => {
  return (
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
          Німеччина
        </div>

        <div className="d-flex gap-3 align-items-center">
          <div className="icon--country icon--country--netherlands"></div>
          Нідерланди
        </div>

        <div className="d-flex gap-3 align-items-center">
          <div className="icon--country icon--country--spain"></div>
          Іспанія
        </div>
      </div>

      <div className="Main__text--blue d-flex gap-3 align-items-center fw-medium">
        Усі країни
        <div className="icon icon--down-arrow"></div>
      </div>

      <div className="Main__line"></div>
    </div>
  );
};

export default CountriesServed;
