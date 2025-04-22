import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import React from 'react'
import './PhotoCarousel.css';

const PhotoCarousel = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    loop={true}
    className="swiper"
  >
    <SwiperSlide>
      <img className='home-img' src="/images/dance-domain.jpg" alt="Fest 1" />
    </SwiperSlide>

    <SwiperSlide>
      <img className='home-img' src="/images/dogs.jpg" alt="Fest 2" />
    </SwiperSlide>
    <SwiperSlide>
      <img className='home-img' src="/images/singing-domain.jpg" alt="Fest 3"  />
    </SwiperSlide>

    <SwiperSlide>
      <img className='home-img' src="/images/singing-domain.jpg" alt="Fest 3"  />
    </SwiperSlide>

    <SwiperSlide>
      <img className='home-img' src="/images/singing-domain.jpg" alt="Fest 3"  />
    </SwiperSlide>
  </Swiper>
  )
}

export default PhotoCarousel
