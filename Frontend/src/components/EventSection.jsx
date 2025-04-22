import React from 'react';
import EventList from './EventList';

const EventSection = () => {
  // Sample data for events
  const pastEvents = [
    {
      title: 'Tech Talk 2024',
      description: 'A deep dive into the latest tech trends and innovations.',
      date: '2024-03-15',
      photoUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'AI Conference',
      description: 'The future of AI and its impact on various industries.',
      date: '2024-01-10',
      photoUrl: 'https://via.placeholder.com/300x200',
    },
  ];

  const presentEvents = [
    {
      title: 'Hackathon 2k26',
      description: 'A coding competition for developers of all levels.',
      date: '2025-04-20',
      photoUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Web Dev Workshop',
      description: 'Learn modern web development techniques and tools.',
      date: '2025-04-10',
      photoUrl: 'https://via.placeholder.com/300x200',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Cultural Fest 2026',
      description: 'A celebration of culture and art.',
      date: '2026-02-15',
      photoUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'AI & ML Summit',
      description: 'Exploring the next frontier of Artificial Intelligence and Machine Learning.',
      date: '2026-03-25',
      photoUrl: 'images/dogs.jpg',
    },
  ];

  return (
    <div className="h-auto py-10 mt-20">
      <EventList events={pastEvents} category="Past" />
      <EventList events={presentEvents} category="Events of the day" />
      <EventList events={upcomingEvents} category="Upcoming" />
    </div>
  );
};

export default EventSection;

