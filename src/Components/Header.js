import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav class='navbar bg-body'>
        <div class='container py-2'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h4 class='text-info'>MyForum</h4>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
