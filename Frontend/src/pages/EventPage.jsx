import Navbar from '@/components/LandingPage/Navbar';
import React from 'react'

const EventPage = () => {

  const events = [
    {
      id: "dance1",
      name: "Group Dance Showdown",
      category: "Cultural",
      date: "April 20, 2025",
      venue: "Main Stage",
      image: "/images/dance.jpg",
      description: "A dance competition featuring groups of 4–8 students.",
    },
    {
      id: "coding1",
      name: "CodeSprint",
      category: "Technical",
      date: "April 21, 2025",
      venue: "Lab 2",
      image: "/images/coding.jpg",
      description: "Solve real-world problems in a 2-hour coding relay.",
    },
    {
      id: "cricket1",
      name: "Cricket Tournament",
      category: "Sports",
      date: "April 22–24, 2025",
      venue: "College Ground",
      image: "/images/cricket.jpg",
      description: "T20 format cricket tournament for departments.",
    },
    {
      id: "foodfest1",
      name: "Streets of India",
      category: "Fun Activities",
      date: "April 20–22, 2025",
      venue: "Canteen Lawn",
      image: "/images/foodfest.jpg",
      description: "A food carnival with stalls from different states.",
    },
    // ...more
  ];
  
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default EventPage
