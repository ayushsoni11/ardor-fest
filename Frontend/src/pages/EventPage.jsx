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

  //const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem('loginuser'));

  useEffect(() => {
    fetch(`http://localhost:5000/api/events/all-events`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events : ", err));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Welcome to Event Section</h1>
      <div className='event-block'>
       
        {events.length > 0 ? (
          events.map((event) => (

            <EventCard event={event} key={event._id} />
          ))
        ) : (
          <div className='event-block'>
            <h2> No Events Available </h2>
          </div>
        )}

        

      </div>

        <div className='btn-center'>
        {loggedInUser && loggedInUser.role === "event-head" && (
          <>
            <Link to="/events/create-event">
              <button className='btn '>Create New Event</button>
            </Link>
          </>
        )}
        </div>
      

    </div>

  )
}

export default EventPage
