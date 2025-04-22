import React from 'react';

const EventCard = ({ title, description, date, photoUrl }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <img src={photoUrl} alt="Event" className="w-full h-[200px] object-cover rounded-xl" />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-gray-500 mt-2">Date: {date}</p>
      <div className="mt-4 flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">Participate</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300">View</button>
      </div>
    </div>
  );
};

export default EventCard;
