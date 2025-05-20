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
      src: "https://cdn.pixabay.com/photo/2017/09/09/19/24/hiphop-2733138_1280.jpg",
      category: "Dance",
      caption: "Winning moment of Dance Fusion 2024",
      date : "16th March",
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2015/08/28/11/37/painting-911804_1280.jpg",
      category: "Art",
      caption: "Coding relay race during Tech Quest",
      date : "16th March",
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2022/07/22/18/22/women-7338731_1280.jpg",
      category: "Singing",
      caption: "Panel during NexGen Engineers",
      date : "18th March",
    },
    {
      id: 4,
      src: "https://media.istockphoto.com/id/502088147/photo/nothing-beats-live-music.jpg?s=2048x2048&w=is&k=20&c=1SamDCfeE8MeRUk5DRPH4t56tvvrSDqGyNLI1mKgsRg=",
      category: "Battle of Bands",
      caption: "Streets of India decor",
      date : "17th March",
    },
    {
      id: 5,
      src: "http://media.istockphoto.com/id/1457119120/photo/mid-adult-woman-dancing-reggaeton-at-skateboard-park.jpg?s=2048x2048&w=is&k=20&c=6eCr2VeGmgsUcwefLjrjo6hmao6TEQfYMxOtXdIFkGs=",
      category: "Dance",
      caption: "Winning moment of Dance Fusion 2024",
      date : "16th March",
    },
    {
      id: 6,
      src: "https://cdn.pixabay.com/photo/2017/03/01/11/15/paint-2108185_1280.jpg",
      category: "Art",
      caption: "Coding relay race during Tech Quest",
      date : "16th March",
    },
    {
      id: 7,
      src: "https://cdn.pixabay.com/photo/2014/10/09/18/27/microphone-482258_1280.jpg",
      category: "Singing",
      caption: "Panel during NexGen Engineers",
      date : "18th March",
    },
    {
      id: 8,
      src: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
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
