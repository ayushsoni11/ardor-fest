import React from "react";
import "./Notification.css";

// Dummy notifications — replace with props or API data
const notifications = [
  {
    id: 1,
    image: "/images/admin1.jpg",
    name: "Riya Sharma",
    post: "Super Admin",
    message: "The tech talk has been rescheduled to 5 PM in Hall B.",
  },
  {
    id: 2,
    image: "/images/head2.jpg",
    name: "Amit Joshi",
    post: "Event Head - Dance",
    message: "Dance auditions will begin at 10 AM tomorrow.",
  },
  {
    id: 3,
    image: "/images/head3.jpg",
    name: "Sneha Verma",
    post: "Event Head - Music",
    message: "Bring your own instruments for the jamming session.",
  },
];

const Notification = () => {
  return (
    <div className="notification-wrapper">
      <h2 className="notification-title">📢 Announcements</h2>
      <div className="notification-list">
        {notifications.map((note) => (
          <div key={note.id} className="notification-card">
            <img src={note.image} alt={note.name} className="profile-img" />
            <div className="notification-content">
              <div className="user-info">
                <span className="user-name">{note.name}</span>
                <span className="user-post">{note.post}</span>
              </div>
              <p className="user-message">{note.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
