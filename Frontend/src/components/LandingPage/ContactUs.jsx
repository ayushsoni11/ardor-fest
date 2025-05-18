import React from 'react'
import './ContactUs.css';

const NewsLetter = () => {
  return (
    <>
      <section id='contact-us' className="section-newsletter">
  <div className="newsletter-container">
    <h2 className="newsletter-title">Get In Touch With Ardor Team</h2>
    <p className="newsletter__description">
      Have questions, ideas, or want to volunteer? Drop us a message and we’ll get back to you!
    </p>
    <div >
    <form action="" className="newsletter__form">
      <input type="text" placeholder="Enter your message with your email" className="newsletter__input" />
      <button className="book--now">

            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="100" viewBox="0 0 144 71" fill="none">
              <path d="M9.41707 17.1153C10.3911 11.3838 15.1766 7.07327 20.9783 6.70143L115.325 0.654698C120.9 0.29739 126.039 3.67089 127.928 8.92814L138.448 38.1989C141.17 45.7728 136.155 53.9138 128.166 54.8886L17.0485 68.4481C8.71866 69.4646 1.76017 62.1718 3.16608 53.8988L9.41707 17.1153Z" fill="#FF5B79" />
              <text x="50" y="40" fill="white" fontSize="20">
                Send
              </text>
            </svg>
          </button>
    </form>
    </div>
    
  </div>
</section>

    </>
  )
}

export default NewsLetter
