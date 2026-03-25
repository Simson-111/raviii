import React from 'react'
import App from '../App';
function Navbar() {
  const navigate = useNavigate();

  const handleClick = (e, path) => {
    e.preventDefault();      
    navigate(path);          
  };

  return (
    <nav className='nav'>
      <div className='logo'>MyApp</div>
        <ul className='links'>
        <li><a href="#" className='link' onClick={(e) => handleClick(e,)}>
          Home
        </a></li>
        <li><a href="#" className='link' onClick={(e) => handleClick(e, '/App')}>
          About
        </a></li>
        <li><a href="#" className='link' onClick={(e) => handleClick(e, '/Search')}>
          Contact
        </a></li>
        </ul>
    </nav>
  );
}
export default Navbar;
