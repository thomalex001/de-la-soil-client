import React from 'react';
import { useState } from 'react';
import DeLaSoilLogo from '../media/de-la-soil-logo1.png';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';


const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navigate = useNavigate()
  const handleOnClick = () => {
    setIsNavbarOpen(false);
    navigate('/')
 }
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <nav
        className='navbar'
>
          <input
            id='menu-toggle'
            type='checkbox'
            checked={isNavbarOpen}
            onChange={(e) => setIsNavbarOpen(e.target.checked)}

          />
          <div
            onClick={toggleNavbar}
            className='menu-button-container'
            >
            <div className='menu-button'></div>
          </div>
        {/* <Title>Recipes From <span>Earth</span></Title> */}
          <Logo
            onClick={() => handleOnClick()}
            src={DeLaSoilLogo.src}
            alt='de-la-soil-logo'
            style={{ width: '80px' }}></Logo>
      </nav>
      <aside className={isNavbarOpen ? 'side-bar is-active' : 'side-bar'}>
        <ul>
          <Link
            onClick={toggleNavbar}
            className='links'
            to='/'>
            Home
          </Link>
          <Link
            onClick={toggleNavbar}
            className='links'
            to='/login'>
            Login
          </Link>
          <Link
            onClick={toggleNavbar}
            className='links'
            to='/recipes'>
            Recipes
          </Link>
          <Link
            onClick={toggleNavbar}
            className='links'
            to='/about'>
            About
          </Link>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;


const Logo = styled.img`
  position: absolute;
  transition: 0.6s ease-in;
  right: 0.3em;
  top: 0.6em;
  cursor: pointer;
  
`;

