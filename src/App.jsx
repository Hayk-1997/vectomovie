import React from 'react';
import HeroSection from './components/Templates/HeroSection/index.jsx';
import SideBar from './components/Organisms/SideBar/index.jsx';

import './index.css';

export default function App() {
  return (
    <div className='flex text-white bg-black'>
      <SideBar />
      <HeroSection />
    </div>
  );
}
