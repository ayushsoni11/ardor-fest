import React from 'react'
import { useSelector } from 'react-redux'
import EventCard from './EventCard'

const FeaturedEvents = () => {
  const {allEvents , loading} = useSelector((state) => state.event )
  return (
    <div className='event-card-wrapper'>

      <h1>Hello</h1>
      {/* { 

      // backend 2
        allEvents.slice(0,8).map((element)=>{
          return(

            // <EventCard title={element.title} 
            // imgSrc={element.image?.url} 
            // desc={element.desc} 
            // date={element.date} 
            // venue={element.venue} 
            // id={element._id} 
            // key={element._id}  />

            <EventCard imgSrc="images/dogs.jpg" title="Beats to Feats" date="09-04-2026" venue="Central Auditorium" desc="Dance is fun , Dance is great, this dance that dance how dance why dance jai dance vehe dance" category="Dance" />
            
          )
        })
      } */}
      
    </div>
  )
}

export default FeaturedEvents
