import type React from 'react';

type User = {
  id: number;
  name: string;
  city: string;
  date: string;
  review: string;
  avatar: string;
  starCount: number;
};

type Props = {
  user: User;
};

const ReviewCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="ReviewCard d-flex justify-content-between flex-column">
      <div className="ReviewCard__top d-flex flex-column gap-3">
        <div className="ReviewCard__user-info d-flex column-gap-3">
          <img src={user.avatar} alt="avatar" className="ReviewCard__avatar rounded-circle" />
          <div className="ReviewCard__info d-flex flex-column">
            <h4 className="ReviewCard__name">{user.name}</h4>
            <span className="ReviewCard__city">{user.city}</span>
            <span className="ReviewCard__date">{user.date}</span>
          </div>
        </div>
        <div className="ReviewCard__review">{user.review}</div>
      </div>
      <div className="ReviewCard__start d-flex gap-1">
        {Array.from({ length: user.starCount }).map((_, i) => (
          <div key={i} className='icon--star'></div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
