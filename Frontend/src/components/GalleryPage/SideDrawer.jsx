import React from 'react';
import './SideDrawer.css'
import Filter from './Filter';
import { useState } from 'react';

const SideDrawer = () => {
    

  return (
    <div className='side-drawer-container'>
      <div className='side-drawer'>

        <Filter activeFilters={activeFilters} 
         setActiveFilters={setActiveFilters}
         images = {images}
         setFilteredProducts={setFilteredImages} />
      </div>
    </div>
  )
}

export default SideDrawer
