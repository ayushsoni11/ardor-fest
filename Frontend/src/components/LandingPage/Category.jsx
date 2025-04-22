import React from 'react'
import './Category.css';

const Category = () => {
  return (
    <>
          {/* <!-- CATEGORY --> */}
          <section class="section category">
        <h2 class="section__title">Favorite Scare <br/> Category </h2>
        <div class="category__container container grid">
          <div class="category__data">
            <img src="https://assets.codepen.io/7773162/category1-img.png" alt="" class="category__img"/>
              <h3 class="category__title">Ghosts</h3>
              <p class="category__description">Choose the ghosts, the scariest there are.</p>
          </div>
          <div class="category__data">
            <img src="https://assets.codepen.io/7773162/category2-img.png" alt="" class="category__img"/>
              <h3 class="category__title">Pumpkins</h3>
              <p class="category__description">You look at the scariest pumpkins there is.</p>
          </div>
          <div class="category__data">
            <img src="https://assets.codepen.io/7773162/category3-img.png" alt="" class="category__img"/>
              <h3 class="category__title">Witch Hat</h3>
              <p class="category__description">Pick the most stylish witch hats out there.</p>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Category
