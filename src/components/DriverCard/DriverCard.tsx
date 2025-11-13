import type React from "react";
import type { Driver } from "../../types/DriverType";

type Props = {
  user: Driver
}

const DriverCard: React.FC<Props> = ({user}) => {
  return <div className="DriverCard d-flex flex-column gap-3 align-items-center">
    <img src={user.avatar} alt="User avatar"  className="DriverCard__img"/>
    <div className="DriverCard__info">
      <h5 className="fs-5 m-0 text-center">{user.name}</h5>
      <span className="DriverCard__experience">Досвід роботи: {user.experience}</span>
    </div>
    <div className="DriverCard__links d-flex gap-2">
      <div className="icon icon--instagram"></div>
      <div className="icon icon--linkedIn"></div>
    </div>
  </div>;
};

export default DriverCard;
