import React from 'react'
import { useSelector } from 'react-redux'

const FeaturedEvents = () => {


  const {loading, allEvents} = useSelector((state) => state.event);
  return (
    <div>
      
    </div>
  )
}

export default FeaturedEvents
