import React from 'react'
import './DomainSection.css';
import Domain from './Domain';
import { FaArrowCircleRight } from "react-icons/fa";

const DomainSection = () => {

    {

  const cardsContainer = document.querySelector(".domain-container");

  cardsContainer.addEventListener("click", (e) => {
    const target = e.target.closest(".card");

    if (!target) return;

    cardsContainer.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("active");
    });

    target.classList.add("active");
  });

    }

  return (
    <div className='domain-section'>

      <div className='domain-container'>

        <Domain img='/images/dance-domain.jpg' title='Dance' icon={<FaArrowCircleRight />} />
        <Domain img='/images/sports-domain.jpg.crdownload' title='Sports' icon={<FaArrowCircleRight />} />
        <Domain img='/images/singing-domain.jpg' title='Singing' icon={<FaArrowCircleRight />} />
        <Domain img='/images/fashion-show-domain.jpg' title='Fashion Show' icon={<FaArrowCircleRight />} />
        <Domain img='/images/drama-domain.jpg.crdownload' title='Drama' icon={<FaArrowCircleRight />} />
        <Domain img='/images/art-domain.jpeg' title='Art & Craft' icon={<FaArrowCircleRight />} />

        

        
      </div>

    </div>

  )
}

export default DomainSection
