import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <fragment>
      <div
        className='navbar'
        onClick={toggleNavbar}>
        <input
          id='menu-toggle'
          type='checkbox'
          checked={isNavbarOpen}
        />
        <div
          className='menu-button-container'
          htmlFor='menu-toggle'>
          <div className='menu-button'></div>
        </div>
      </div>
      <div   className={
                isNavbarOpen ? 'side-bar is-active' : 'side-bar'
              }>
        <ul>
          <Link onClick={toggleNavbar} className="links" to="/">Home</Link>
          <Link onClick={toggleNavbar} className="links" to="/login">Login</Link>
          <Link onClick={toggleNavbar} className="links" to="/recipes">Recipes</Link>
          <Link onClick={toggleNavbar} className="links" to="/about">About</Link>
        </ul>
    </div>
    </fragment>
  );
};

export default Navbar;
