import React from 'react';
import './EventCard.css';

const EventCard = ({imgSrc, title, desc, date, venue, category}) => {
  return (
    <div className="event-card">
        <div className="poster"><img src={imgSrc} alt="Location Unknown"/></div>
        <div className="details">
          <h1>{title}</h1>
          <h2>{date} • {venue}</h2>
          <div className="rating">
            <i className="fas fa-star"></i>
            <span>4.2/5</span>
          </div>
          <div className="tags">
            <span className="tag">{category}</span>
          </div>
          <p className="desc">
           {desc}
          </p>
          <div className="cast">
            <h3>Cast</h3>
            <ul>
              <li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews"/></li>
              <li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd"/></li>
              <li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg" alt="Antonio Herrera" title="Antonio Herrera"/></li>
            </ul>
          </div>
        </div>
      </div>
  ) 
}

export default EventCard
