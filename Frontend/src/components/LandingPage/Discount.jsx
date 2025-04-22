import React from 'react';
import './Discount.css';

const Discount = () => {
  return (
    <>
            {/* <!-- DISCOUNT --> */}
      <section class="section discount">
        <div class="discount__container container grid">
          <div class="discount__data">
            <h2 class="discount__title">50% Discount <br/> On New Products </h2>
            <a href="#" class="book--now">
              <img src="https://assets.codepen.io/7773162/svgviewer-output+%281%29_3.svg" alt="" />
            </a>
          </div>
          <img src="https://assets.codepen.io/7773162/discount-img.png" alt="" class="discount__img"/>
        </div>
      </section>
    </>
  )
}

export default Discount
