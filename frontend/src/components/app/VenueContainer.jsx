import React from 'react'
import VenueCard from '../utils/VenueCard'
import venueDetails from '../../data/VenuesData'

function VenueContainer() {
  return (
    <div className='container max-w-screen-2xl md:px-20 px-10 my-32 md:grid-cols-4 gap-10 grid-cols-1 grid'>
    {venueDetails.map((event) => (
      <VenueCard key={event.id} id={`venue-${event.id}`} image={event.image} title={event.title} venue={event.venue} map={event.mapSS} />
    ))}
    </div>
  )
}

export default VenueContainer
