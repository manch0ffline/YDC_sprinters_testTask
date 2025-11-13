import MyCalendar from "../MyCalendar/MyCalendar";

const TripsCalendar = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <h3 className="m-0 fw-bold">Календар поїздок</h3>
      <MyCalendar />
    </div>
  );
};

export default TripsCalendar;
