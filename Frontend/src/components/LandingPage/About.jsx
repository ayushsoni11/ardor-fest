import React from 'react'
import './About.css';

const About = () => {

  const imageUrls = [
    // Replace with your 20–30 image URLs (local or online)
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1018/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1018/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1018/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1018/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1018/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1018/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    // ...add more
  ];
  return (
    <>

<section id='about-us' className="about-section">
  <div className="about-container">
    <div className="about-content">
      <h1>About Utsavya</h1>
      <p>
        Ardor is our flagship fest, a vibrant celebration of culture, talent, and togetherness.
        Here, memories are made, skills are showcased, and the spirit of youth thrives!
      </p>
      <p>
        Join us in celebrating the blend of art, creativity, and innovation with events,
        performances, and unforgettable moments.
      </p>
    </div>
    <div className="about-image">
      <img
        src="https://cdn.pixabay.com/photo/2019/10/06/10/03/team-4529717_1280.jpg"
        alt="Fest celebration"
      />
    </div>
  </div>
</section>

    </>
  )
}

export default About
