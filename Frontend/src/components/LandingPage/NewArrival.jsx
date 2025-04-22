import React from 'react';
import './NewArrival.css';

const NewArrival = () => {
  return (
    <>
            {/* <!-- NEW ARRIVALS --> */}
      <section class="section new" id="new">
        <h2 class="section__title">New Arrivals</h2>
        <div class="new__container container">
          <div class="swiper new-swiper">
            <div class="swiper-wrapper">
              <div class="new__content swiper-slide">
                <div class="new__tag">
                  <img src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg" alt="" />
                </div>
                <img src="https://assets.codepen.io/7773162/new1-img.png" alt="" class="new__img"/>
                  <h3 class="new__title">Haunted House</h3>
                  <span class="new__subtitle">Accessory</span>
                  <div class="new__prices">
                    <span class="new__price">$14.99</span>
                    <span class="new__discount">$29.99</span>
                  </div>
                  <button class="button new__button">
                    <i class='bx bx-cart-alt new__icon'></i>
                  </button>
              </div>
              <div class="new__content swiper-slide">
                <div class="new__tag">
                  <img src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg" alt="" />
                </div>
                <img src="https://assets.codepen.io/7773162/new2-img.png" alt="" class="new__img"/>
                  <h3 class="new__title">Halloween Candle</h3>
                  <span class="new__subtitle">Accessory</span>
                  <div class="new__prices">
                    <span class="new__price">$11.99</span>
                    <span class="new__discount">$21.99</span>
                  </div>
                  <button class="button new__button">
                    <i class='bx bx-cart-alt new__icon'></i>
                  </button>
              </div>
              <div class="new__content swiper-slide">
                <div class="new__tag">
                  <img src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg" alt="" />
                </div>
                <img src="https://assets.codepen.io/7773162/new3-img.png" alt="" class="new__img"/>
                  <h3 class="new__title">Witch Hat</h3>
                  <span class="new__subtitle">Accessory</span>
                  <div class="new__prices">
                    <span class="new__price">$4.99</span>
                    <span class="new__discount">$9.99</span>
                  </div>
                  <button class="button new__button">
                    <i class='bx bx-cart-alt new__icon'></i>
                  </button>
              </div>
              <div class="new__content swiper-slide">
                <div class="new__tag">
                  <img src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg" alt="" />
                </div>
                <img src="https://assets.codepen.io/7773162/new4-img.png" alt="" class="new__img"/>
                  <h3 class="new__title">Rip</h3>
                  <span class="new__subtitle">Accessory</span>
                  <div class="new__prices">
                    <span class="new__price">$24.99</span>
                    <span class="new__discount">$44.99</span>
                  </div>
                  <button class="button new__button">
                    <i class='bx bx-cart-alt new__icon'></i>
                  </button>
              </div>
              <div class="new__content swiper-slide">
                <div class="new__tag">
                  <img src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg" alt="" />
                </div>
                <img src="https://assets.codepen.io/7773162/new5-img.png" alt="" class="new__img"/>
                  <h3 class="new__title">Terrifying Crystal Ball</h3>
                  <span class="new__subtitle">Accessory</span>
                  <div class="new__prices">
                    <span class="new__price">$5.99</span>
                    <span class="new__discount">$12.99</span>
                  </div>
                  <button class="button new__button">
                    <i class='bx bx-cart-alt new__icon'></i>
                  </button>
              </div>
              <div class="new__content swiper-slide">
                <div class="new__tag">
                  <img src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg" alt="" />
                </div>
                <img src="https://assets.codepen.io/7773162/new6-img.png" alt="" class="new__img"/>
                  <h3 class="new__title">Witch Broom</h3>
                  <span class="new__subtitle">Accessory</span>
                  <div class="new__prices">
                    <span class="new__price">$7.99</span>
                    <span class="new__discount">$14.99</span>
                  </div>
                  <button class="button new__button">
                    <i class='bx bx-cart-alt new__icon'></i>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewArrival
