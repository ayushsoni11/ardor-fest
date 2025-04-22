import React from 'react'
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <>
            {/* <!-- OUR NEWSLETTER --> */}
      <section class="section newsletter">
        <div class="newsletter__container container">
          <h2 class="section__title">Our Newsletter</h2>
          <p class="newsletter__description"> Promotion new products and sales. Directly to your inbox </p>
          <form action="" class="newsletter__form">
            <input type="text" placeholder="Enter your email" class="newsletter__input"/>
              <a href="#" class="book--now">
                <img src="https://assets.codepen.io/7773162/svgviewer-output+%281%29_3.svg" alt="" />
              </a>
          </form>
        </div>
      </section>
    </>
  )
}

export default NewsLetter
