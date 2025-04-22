import React from 'react';
import './Back.css';

const Back = () => {
  return (
    <div className='back'>
      <a href="#" class="btn-back">
          <div>
            <svg width="16px" height="14px" viewBox="0 0 16 14">
              <path d="M1,7 L15,7"></path>
              <polyline points="7 1 1 7 7 13"></polyline>
            </svg>
          </div>
          <span>Back</span>
        </a>

        <div class="menu-back">
          <ul class="nav-history">
            <li><a href="/">Home</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/team">Team</a></li>
            <li class="active"><a href="/sign-up">Sign up</a></li>

          </ul>
          <ul class="nav-links">
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Back
