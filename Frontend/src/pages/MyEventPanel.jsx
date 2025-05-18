import React from 'react';
import { Link } from 'react-router-dom';

const MyEventPanel = () => {
  return (
    <div>
        <Link to={'/my-event-panel/generate-certificate'}>
        <h1>Generate Certificate</h1>
        </Link>
        
    </div>
  )
}

export default MyEventPanel
