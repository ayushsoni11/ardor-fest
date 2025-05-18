import React from 'react'
import './Home.css';
import PhotoCarousel from './PhotoCarousel';



const Home = () => {
  return (
    <div className='home-box'>
      <div className='home-box-in'>

        <h1>Utsavya 2k26</h1>
        <h2>✨ The Cultural Splash – Where Talent Meets Celebration</h2>
        <h4>📅 March 15-17, 2026</h4>
        <h4>📍Acropolis Institute of Technology & Research, Indore</h4>
        <div className='home__buttons'>
          <a href="/events" className="book--now">

            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100" viewBox="0 0 144 71" fill="none">
              <path d="M9.41707 17.1153C10.3911 11.3838 15.1766 7.07327 20.9783 6.70143L115.325 0.654698C120.9 0.29739 126.039 3.67089 127.928 8.92814L138.448 38.1989C141.17 45.7728 136.155 53.9138 128.166 54.8886L17.0485 68.4481C8.71866 69.4646 1.76017 62.1718 3.16608 53.8988L9.41707 17.1153Z" fill="#FF5B79" />
              <text x="16" y="40" fill="white" fontSize="15">
                Browse Events
              </text>
            </svg>
          </a>
        </div>
      </div>
      <PhotoCarousel />
    </div>

  )
}

export default Home
