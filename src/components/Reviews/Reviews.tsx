import benAvatar from '../../images/ben-avatar.jpg';
import craigAvatar from '../../images/craig-avatar.png';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
  return (
    <div className="Reviews">
      <div className="row row-gap-5">
        <div className="Reviews__info-block col-12 col-lg-3 col-xl-5 gap">
          <div className="d-flex flex-column gap-4">
            <div className="d-flex gap-3 flex-column">
              <h2 className="fw-bold fs-2 m-0">
                Що <span className="Reviews__span fw-bold">кажуть люди?</span>
              </h2>
              <p className="Reviews__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <a
              href="#"
              className="Reviews__button text-decoration-none fw-medium"
            >
              Залишити відгук
            </a>
          </div>
        </div>
        <div className=" col-12 col-lg-9 col-xl-7">
          <div className="d-flex flex-column Reviews__cards-block">
            <div
              className="Reviews__cards d-flex justify-content-between flex-column align-items-center 
              flex-md-row gap-2
          "
            >
              <ReviewCard
                user={{
                  id: 1,
                  name: 'Ben Yardley',
                  city: 'Київ - Кишинів',
                  date: '1 May 2023',
                  review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.`,
                  avatar: benAvatar,
                  starCount: 5,
                }}
              />
              <ReviewCard
                user={{
                  id: 1,
                  name: 'Craig Martin',
                  city: 'Львів - Париж',
                  date: '1 May 2023',
                  review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`,
                  avatar: craigAvatar,
                  starCount: 5,
                }}
              />
            </div>
            <div className="Reviews__pagination m-auto">
              <div className="Reviews__circle Reviews__circle--active"></div>
              <div className="Reviews__circle"></div>
              <div className="Reviews__circle"></div>
              <div className="Reviews__circle"></div>
              <div className="Reviews__circle"></div>
              <div className="Reviews__circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
