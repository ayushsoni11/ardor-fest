import Navbar from '@/components/LandingPage/Navbar';
import React from 'react';
import Main from '@/components/LandingPage/Main';
import './LandingPage.css';
import ScrollUp from '@/components/LandingPage/ScrollUp';
import EventCard from '@/components/EventPage/EventCard';

const LandingPage = () => {
  return (
    <div>
     <Navbar />
   
     <Main />
     <EventCard />
     
     <ScrollUp />
    </div>
  );
};

export default LandingPage;




