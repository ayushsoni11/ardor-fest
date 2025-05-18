import React from 'react';
import './EventCard.css';
import { Link } from 'react-router-dom';

const EventCard = ({event}) => {
  return (
     <Link
      to={`/events/${event._id}`}
      className="event-card-link"
      state={{ event }} // <-- Send entire event object in location state
    >
      <div className="event-card">
        <div className="poster"><img src={event.image} alt="Location Unknown"/></div>
        <div className="details">
          <h1>{event.title}</h1>
          <h2>{event.date} • {event.venue}</h2>
          <div className="rating">
            <i className="fas fa-star"></i>
          </div>
          <div className="tags">
            <span className="tag">{event.category}</span>
          </div>
          <p className="desc">
           {event.desc}
          </p>
          <div className="cast">
            <h3>Organisers</h3>
            <ul>
              <li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews"/></li>
              <li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd"/></li>
              <li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg" alt="Antonio Herrera" title="Antonio Herrera"/></li>
            </ul>
          </div>
        </div>
      </div>
      </Link>
    
  ) 
}

export default EventCard
