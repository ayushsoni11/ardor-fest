import Navbar from '@/components/LandingPage/Navbar';
import SideDrawer from '@/components/GalleryPage/SideDrawer';
import React from 'react';
import { useState } from 'react';
import './GalleryPage.css';
import Filter from '@/components/GalleryPage/Filter';
import Image from '@/components/GalleryPage/Image';
import { useRef } from 'react';
import { useEffect } from 'react';

const GalleryPage = () => {
  const sampleImages = [
    {
      id: 1,
      src: "/images/dogs.jpg",
      category: "Dance",
      caption: "Winning moment of Dance Fusion 2024",
      date : "16th March",
    },
    {
      id: 2,
      src: "/images/dance-domain.jpg",
      category: "Art",
      caption: "Coding relay race during Tech Quest",
      date : "16th March",
    },
    {
      id: 3,
      src: "/images/fashion-show-domain.jpg",
      category: "Singing",
      caption: "Panel during NexGen Engineers",
      date : "18th March",
    },
    {
      id: 4,
      src: "/images/singing-domain.jpg",
      category: "Battle of Bands",
      caption: "Streets of India decor",
      date : "17th March",
    },
    {
      id: 5,
      src: "/images/dogs.jpg",
      category: "Dance",
      caption: "Winning moment of Dance Fusion 2024",
      date : "16th March",
    },
    {
      id: 6,
      src: "/images/dance-domain.jpg",
      category: "Art",
      caption: "Coding relay race during Tech Quest",
      date : "16th March",
    },
    {
      id: 7,
      src: "/images/fashion-show-domain.jpg",
      category: "Singing",
      caption: "Panel during NexGen Engineers",
      date : "18th March",
    },
    {
      id: 8,
      src: "/images/singing-domain.jpg",
      category: "Battle of Bands",
      caption: "Streets of India decor",
      date : "17th March",
    },
    // ...more images
  ];

  // Track all images
  const [images, setImages] = useState(sampleImages);

  // Track filtered images 
  const [filteredImages, setFilteredImages] = useState(sampleImages);

  // Track selected filters
  const [activeFilters, setActiveFilters] = useState({
    category: [],
    date : [],
  });

  const galleryRef = useRef(null); // <== create a ref
  const time = 10000; // 10 seconds

  useEffect(() => {
    const galleryBox = galleryRef.current;

    function animStart() {
      if (galleryBox && !galleryBox.classList.contains("active")) {
        galleryBox.classList.add("active");
        setTimeout(() => {
          animEnd();
        }, time);
      }
    }

    function animEnd() {
      if (galleryBox) {
        galleryBox.classList.remove("active");
        // This forces reflow
        galleryBox.offsetWidth;
      }
    }

    // Add event listeners
    document.addEventListener("scroll", animStart);
    window.addEventListener("resize", animStart);
    animStart(); // run once on mount

    // Cleanup on unmount
    return () => {
      document.removeEventListener("scroll", animStart);
      window.removeEventListener("resize", animStart);
    };
  }, []);

  
  return (
    <div>
      <Navbar />

      <div className='gallery row'>
        {/* Sidebar */}
        <aside className="sidebar col-2">
          <Filter
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
            images={images}
            setFilteredImages={setFilteredImages}
          />

        </aside>

        <section className='image-grid col-10'>
          <div className='gallery-box' ref={galleryRef}>
           
            {filteredImages.length > 0 ? (filteredImages.map((image) => (
               <figure key={image.id}>
            <Image  image={image} />
            </figure>
          ))) : (<figure><div className="no-image text-center">
            Oops !! No Memories Found 🥲
          </div></figure>)}
            
          
          </div>
          
        </section>

      </div>
    </div>
  )
}

export default GalleryPage
