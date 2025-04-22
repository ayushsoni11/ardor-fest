import React from 'react'
import './TrickorTreat.css';
const TrickorTreat = () => {
  return (
    <>
            {/* <!-- TRICK OR TREAT --> */}
      <section class="section trick" id="trick">
        <h2 class="section__title">Trick Or Treat</h2>
        <div class="trick__container container grid">
          <div class="trick__content">
            <img src="https://assets.codepen.io/7773162/trick-treat1-img.png" alt="" class="trick__img"/>
              <h3 class="trick__title">Toffee</h3>
              <span class="trick__subtitle">Candy</span>
              <span class="trick__price">$11.99</span>
              <button class="button trick__button">
                <i class='bx bx-cart-alt trick__icon'></i>
              </button>
          </div>
          <div class="trick__content">
            <img src="https://assets.codepen.io/7773162/trick-treat2-img.png" alt="" class="trick__img"/>
              <h3 class="trick__title">Bone</h3>
              <span class="trick__subtitle">Accessory</span>
              <span class="trick__price">$8.99</span>
              <button class="button trick__button">
                <i class='bx bx-cart-alt trick__icon'></i>
              </button>
          </div>
          <div class="trick__content">
            <img src="https://assets.codepen.io/7773162/trick-treat3-img.png" alt="" class="trick__img"/>
              <h3 class="trick__title">Scarecrow</h3>
              <span class="trick__subtitle">Accessory</span>
              <span class="trick__price">$15.99</span>
              <button class="button trick__button">
                <i class='bx bx-cart-alt trick__icon'></i>
              </button>
          </div>
          <div class="trick__content">
            <img src="https://assets.codepen.io/7773162/trick-treat4-img.png" alt="" class="trick__img"/>
              <h3 class="trick__title">Candy Cane</h3>
              <span class="trick__subtitle">Candy</span>
              <span class="trick__price">$7.99</span>
              <button class="button trick__button">
                <i class='bx bx-cart-alt trick__icon'></i>
              </button>
          </div>
          <div class="trick__content">
            <img src="https://assets.codepen.io/7773162/trick-treat5-img.png" alt="" class="trick__img"/>
              <h3 class="trick__title">Pumpkin</h3>
              <span class="trick__subtitle">Candy</span>
              <span class="trick__price">$19.99</span>
              <button class="button trick__button">
                <i class='bx bx-cart-alt trick__icon'></i>
              </button>
          </div>
          <div class="trick__content">
            <img src="https://assets.codepen.io/7773162/trick-treat6-img.png" alt="" class="trick__img"/>
              <h3 class="trick__title">Ghost</h3>
              <span class="trick__subtitle">Accessory</span>
              <span class="trick__price">$17.99</span>
              <button class="button trick__button">
                <i class='bx bx-cart-alt trick__icon'></i>
              </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default TrickorTreat
