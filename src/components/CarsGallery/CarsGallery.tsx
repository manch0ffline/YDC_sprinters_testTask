const CarsGallery = ({ car1, car2, car3 }) => {
  return (
    <div className="d-flex flex-column gap-3">
      <img src={car1} alt="car 1" />
      <img src={car2} alt="car 2" />
      <img src={car3} alt="car 3" />
    </div>
  );
};

export default CarsGallery;
