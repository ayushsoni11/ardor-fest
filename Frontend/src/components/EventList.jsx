import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events, category }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-center mb-5">{category} Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
            photoUrl={event.photoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
