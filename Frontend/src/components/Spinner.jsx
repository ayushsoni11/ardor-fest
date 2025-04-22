import React from 'react';
import { ClipLoader } from 'react-spinners';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className='spinner-box'>
      <ClipLoader size={120} color='var(--sub)' />
    </div>
  )
}

export default Spinner
