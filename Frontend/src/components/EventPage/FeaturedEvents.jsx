import React from 'react'
import { useSelector } from 'react-redux'
import EventCard from './EventCard'

const FeaturedEvents = () => {
  const {allEvents , loading} = useSelector((state) => state.event )
  return (
    <div className='event-card-wrapper'>
      { 

      // backend 2
        allEvents.slice(0,8).map((element)=>{
          return(
            <EventCard imgSrc="images/dogs.jpg" title="Beats to Feats" date="09-04-2026" venue="Central Auditorium" desc="Dance is fun , Dance is great, this dance that dance how dance why dance jai dance vehe dance" category="Dance" />
            
          )
        })
      }
      
    </div>
  )
}

export default FeaturedEvents
