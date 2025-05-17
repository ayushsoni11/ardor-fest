import Navbar from '@/components/LandingPage/Navbar';
import React from 'react';
import EventCard from '@/components/EventPage/EventCard';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FeaturedEvents from '@/components/EventPage/FeaturedEvents';
import "./EventPage.css";
const EventPage = () => {

  const [events, setEvents] = useState([]);

  const navigate = useNavigate();
  
  const loggedInUser = JSON.parse(localStorage.getItem('loginuser'));

  useEffect(()=>{
    fetch(`http://localhost:5000/api/events/all-events`)
    .then((res)=>res.json())
    .then((data)=> setEvents(data))
    .catch((err)=>console.error("Error fetching events : ", err));
  }, []);
  
  return (
    <div>
      <Navbar />

      <div className='event-block'>

      {events.length > 0 ? (
        events.map((event)=> (
          <EventCard imgSrc={event.image} title={event.title} venue={event.venue} 
          date= {event.date} desc={event.desc} category= {event.category} key={event._id}/>
        ))
      ) : (
        <div className='event-block'>
          <h2> No Events Available </h2> 
        </div>
      )}

    <Link to="/events/create-event">
      <button>Create New Event</button>
    </Link>


     
        </div>

    </div>
      
  )
}

export default EventPage
