import React from 'react'
import './ContactUs.css';

const NewsLetter = () => {
  return (
    <>
            {/* <!-- OUR NEWSLETTER --> */}
      <section className="section newsletter">
  <div className="newsletter__container container">
    <h2 className="section__title">Get In Touch With Ardor Team</h2>
    <p className="newsletter__description">
      Have questions, ideas, or want to volunteer? Drop us a message and we’ll get back to you!
    </p>
    <form action="" className="newsletter__form">
      <input type="text" placeholder="Enter your message with your email" className="newsletter__input" />
      <a href="#" className="book--now">
        <img src="https://assets.codepen.io/7773162/svgviewer-output+%281%29_3.svg" alt="Send message" />
      </a>
    </form>
  </div>
</section>

    </>
  )
}

export default NewsLetter
