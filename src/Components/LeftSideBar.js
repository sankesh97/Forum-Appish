import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ForumContext } from '../Context/forumContext';

const LeftSideBar = () => {
  const { forumState } = useContext(ForumContext);

  return (
    <div className=' d-flex flex-column justify-content-between h-100'>
      <ul className='nav flex-column'>
        <li className='nav-item'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <i class='bi bi-house'></i> Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            to='/explore'
          >
            <i class='bi bi-rocket'></i> Explore
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            to='/bookmarks'
          >
            <i class='bi bi-bookmark'></i> Bookmarks
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            to='/profile'
          >
            <i class='bi bi-person-circle'></i> Profile
          </NavLink>
        </li>
      </ul>
      <div className='d-flex'>
        <img
          src={forumState.picUrl}
          className='rounded-circle profile-pic'
          alt='Profile Img'
        />
        <div>
          <h6>{forumState.name}</h6>
          <p>@{forumState.username}</p>
        </div>
      </div>
    </div>
  );
};
export default LeftSideBar;
