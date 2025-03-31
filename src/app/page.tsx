'use client'

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import '../styles/main.scss'; // Import any global styles

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default HomePage;
