import React from 'react'
import './Category.css';

const Category = () => {
  return (
    <>
      <section className="section-category">
        <h2 className="section__title">Explore the Magic of Our Fests</h2>
        <div className="category__container container grid">
          <div className="category__data">
            <img src="/images/dance-sticker.png" alt="" className="category__img" />
            <h3 className="category__title">Dance</h3>
            <p className="category__description">Feel the rhythm, own the spotlight.</p>
          </div>
          <div className="category__data">
            <img src="/images/singing-sticker.png" alt="" className="category__img" />
            <h3 className="category__title">Singing</h3>
            <p className="category__description">Let your voice echo with passion.</p>
          </div>
          <div className="category__data">
            <img src="/images/sports-sticker.png" alt="" className="category__img" />
            <h3 className="category__title">Sports</h3>
            <p className="category__description">Where champions rise and records fall.</p>
          </div>
          <div className="category__data">
            <img src="/images/bands-sticker.png" alt="" className="category__img" />
            <h3 className="category__title">Battle of Bands</h3>
            <p className="category__description">Clash of chords, rhythm, and rockstars.</p>
          </div>
          <div className="category__data">
            <img src="/images/art-sticker.png" alt="" className="category__img" />
            <h3 className="category__title">Art and Craft</h3>
            <p className="category__description">Unleash your imagination on canvas and beyond.</p>
          </div>
        </div>
      </section>

    </>
  )
}

export default Category
