import Navbar from '@/components/LandingPage/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';
import "./MyEventPanel.css";

const MyEventPanel = () => {
  return (
    <>

    <Navbar />
    <div className='my-event-panel-box'>
      <div className='my-event-panel'>
        <Link to={'/my-event-panel/generate-certificate'}>
        <h1>Generate Certificate</h1>
        </Link>
    </div>

    <div className='my-event-panel'>
        <Link to={'/my-event-panel/notification'}>
        <h1>Notification</h1>
        </Link>
    </div>

    <div className='my-event-panel'>
        <Link to={'/events/create-event'}>
        <h1>Create New Event</h1>
        </Link>
    </div>


    </div>
    
    </>
    
  )
}

export default MyEventPanel
