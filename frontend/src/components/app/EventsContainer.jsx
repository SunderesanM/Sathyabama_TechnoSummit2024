import React from 'react'
import DeskCard from '../utils/DeskCard'
import Heading2 from '../utils/Heading2'
import eventData from '../../../data/eventData';

function EventsContainer() {
  return (
    <div className='container max-w-screen-2xl md:px-20 px-5 my-14'>
        <Heading2 text={"TechnoSummit Events"}></Heading2>

        <div className='container text-justify max-w-screen-2xl md:px-20 px-5 my-5 grid grid-cols-1 gap-10'>
        {
                eventData.map((event) => (
                    <DeskCard
                        key={event.id}
                        title={event.details.name}
                        desc={event.details.desc}
                        poster={event.details.poster}
                        link={`/event/${event.id}`} 
                    />
                ))
            }
        </div>
    </div>
  )
}

export default EventsContainer
