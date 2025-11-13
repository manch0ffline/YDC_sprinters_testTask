import avatar from '../../images/avatar.png';
import juliaAvatar from '../../images/julia-avatar.png';
import type { Driver } from '../../types/DriverType';
import DriverCard from '../DriverCard/DriverCard';

const drivers: Driver[] = [
  {
    id: 1,
    name: 'Олександр',
    experience: 5,
    linkedIn: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    avatar: avatar,
  },
  {
    id: 2,
    name: 'Володимир',
    experience: 7,
    linkedIn: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    avatar: avatar,
  },
  {
    id: 3,
    name: 'Ірина',
    experience: 1,
    linkedIn: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    avatar: avatar,
  },
  {
    id: 4,
    name: 'Михайло',
    experience: 1,
    linkedIn: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    avatar: avatar,
  },
  {
    id: 5,
    name: 'Юлія',
    experience: 2,
    linkedIn: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    avatar: juliaAvatar,
  },
];

const Drivers = () => {
  return (
    <div className="Drivers d-flex flex-column gap-3">
      <div className="Drivers__info d-flex justify-content-between align-items-center">
        <h3 className="title">Наші водії</h3>
        <div className="Drivers__all-drivers">Усі водії (7)</div>
      </div>
      <div className="Drivers__cards d-flex justify-content-lg-between row row-gap-3">
        {drivers.map((user: Driver) => {
          return (
            <div className='col-12 col-md-4 col-sm-6 col-lg'>
              <DriverCard key={user.id} user={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Drivers;
