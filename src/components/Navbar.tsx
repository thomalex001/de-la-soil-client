'use client';

import React from 'react';
import { useState } from 'react';
import DeLaSoilLogo from '../media/de-la-soil-logo1.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const router = useRouter();

  const handleOnClick = () => {
    setIsNavbarOpen(false);
    router.push('/');
  };
  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  return (
    <>
      <nav className='navbar'>
        <input
          id='menu-toggle'
          type='checkbox'
          checked={isNavbarOpen}
          onChange={(e) => setIsNavbarOpen(e.target.checked)}
        />
        <div
          onClick={toggleNavbar}
          className='menu-button-container'>
          <div className='menu-button'></div>
        </div>
        {/* <Title>Recipes From <span>Earth</span></Title> */}
        <Logo
          onClick={() => handleOnClick()}
          src={DeLaSoilLogo.src}
          alt='de-la-soil-logo'
          style={{ width: '80px', cursor: 'pointer' }}></Logo>
      </nav>
      <aside className={isNavbarOpen ? 'side-bar is-active' : 'side-bar'}>
        <ul>
          <li>
            {' '}
            <Link
              onClick={toggleNavbar}
              className='links'
              href='/'>
              Home
            </Link>
          </li>
          <li>
            {' '}
            <Link
              onClick={toggleNavbar}
              className='links'
              href='/login'>
              Login
            </Link>
          </li>
          <li>
            {' '}
            <Link
              onClick={toggleNavbar}
              className='links'
              href='/recipes'>
              Recipes
            </Link>
          </li>
          <li>
            {' '}
            <Link
              onClick={toggleNavbar}
              className='links'
              href='/about'>
              About
            </Link>
          </li>
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
