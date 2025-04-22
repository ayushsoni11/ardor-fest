import Navbar from '@/components/LandingPage/Navbar';
import React from 'react';
import Main from '@/components/LandingPage/Main';
import './LandingPage.css';
import ScrollUp from '@/components/LandingPage/ScrollUp';

const LandingPage = () => {
  return (
    <div>
     <Navbar />
     <Main />
     <ScrollUp />
    </div>
  );
};

export default LandingPage;




