import React from 'react'
import './Navbar.css';
import Home from "./Home"
import Category from './Category';
import About from './About';
import TrickorTreat from './TrickorTreat';
import Discount from './Discount';
import NewsLetter from './ContactUs';
import Spinner from '../Spinner';
import FeaturedEvents from '../EventPage/FeaturedEvents';

const Main = () => {
  return (
    <>
      <main className='main'>

        <Home />
        <Category />
        {/* <FeaturedEvents /> */}
        {/* <TrickorTreat />
        <Discount />
        <NewArrival /> */}
        <About />
        <NewsLetter />

      </main>
    </>

  )
}

export default Main;
