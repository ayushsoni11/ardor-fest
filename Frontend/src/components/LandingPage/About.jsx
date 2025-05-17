import React from 'react'
import './About.css';

const About = () => {

  const imageUrls = [
    // Replace with your 20–30 image URLs (local or online)
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1018/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1018/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1018/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1018/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1018/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1018/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1024/300/300",
    "https://picsum.photos/id/1025/300/300",
    // ...add more
  ];
  return (
    <>
            {/* <!-- ABOUT --> */}
      {/* <section class="section about" id="about">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">About Halloween <br/> Night </h2>
            <p class="about__description">Night of all the saints, or all the dead, is celebrated on October 31 and it is a very fun international celebration, this celebration comes from ancient origins, and is already celebrated by everyone. </p>
            <a href="#" class="book--now">
              <img src="https://assets.codepen.io/7773162/svgviewer-output+%281%29_3.svg" alt="" />
            </a>
          </div>
          <img src="https://assets.codepen.io/7773162/about-img.png" alt="" class="about__img"/>
        </div>
      </section> */}

<section className="about-section">
  <div className="about-container">
    <div className="about-content">
      <h1>About Ardor 2K26</h1>
      <p>
        Ardor is our flagship fest, a vibrant celebration of culture, talent, and togetherness.
        Here, memories are made, skills are showcased, and the spirit of youth thrives!
      </p>
      <p>
        Join us in celebrating the blend of art, creativity, and innovation with events,
        performances, and unforgettable moments.
      </p>
    </div>
    <div className="about-image">
      <img
        src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80"
        alt="Fest celebration"
      />
    </div>
  </div>
</section>

    </>
  )
}

export default About
