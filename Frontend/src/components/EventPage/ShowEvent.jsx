import React from 'react';
import './ShowEvent.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from "../LandingPage/Navbar.jsx"
import Back from "../Back";
import axios from "axios";
import { toast } from 'react-toastify';

const ShowEvent = () => {

   const storedUser = localStorage.getItem("loginuser");
  const loggedInUser = storedUser ? JSON.parse(storedUser) : null;

  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;

  if (!event) {
    // if state is missing (e.g., user manually visited the URL), redirect or show error
    return (
      <div className="fallback">
        <h2>Event not found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/events/${event._id}`, {
            withCredentials : true,
      });
      console.log(response);
      if(response.data.success) {
            toast.success(response.data.message);
            navigate('/events');
        } else {
          toast.error(response.data.message);
            alert(response.message || 'error in creating event');
        }

    } catch(error) {

      toast.error(error?.response?.data?.message || error.message || "Something went wrong");

    }
  }

  return (
    <>
    <Navbar />
    <Back />
     <div className="show-event-container">
      <div className="show-event-banner">
        <img src={event.image} alt={event.title} />
        <div className="show-event-overlay">
          <p className='title-heading-event'>{event.title}</p>
          <p>{event.date} • {event.venue}</p>
          <span className="show-event-category">{event.category}</span>
        </div>
      </div>

      <div className="show-event-content">
        <h2>Description</h2>
        <p>{event.desc}</p>

        <div className="show-event-organizers">
          <h3>Organizers</h3>
          <div className="organizer-list">
            <div className="organizer-card">
              <img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" />
              <span>Marco Andrews</span>
            </div>
            <div className="organizer-card">
              <img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" />
              <span>Rebecca Floyd</span>
            </div>
            <div className="organizer-card">
              <img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg" alt="Antonio Herrera" />
              <span>Antonio Herrera</span>
            </div>
          </div>
        </div>
      </div>

      <div className='btn-center'> 
      { loggedInUser && loggedInUser.role == "event-head" && (
         <button className='btn' onClick={handleDelete}>Delete Event</button>
      )}
      </div>
      
     
    </div>
    </>
   
  );
};

export default ShowEvent;
