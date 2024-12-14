import React from 'react'
import eventsData from '../../../data/eventData'
import { useParams } from 'react-router-dom'
import Heading3 from '../utils/Heading3'
import Badge from '../utils/Badge'
import AppButton from '../utils/AppButton'
import Heading2 from '../utils/Heading2'

function Events() {
    const { eventId } = useParams();
    const eventData = eventsData.find(event => event.id === parseInt(eventId));

    if (!eventData) return <h1>Loading...</h1>;

    return (
        <>
            <div className='flex flex-col px-10 py-20 md:hidden'>
                <div>
                    <Heading3 text={`${eventData.details.name}`}></Heading3>
                    <span>
                        <div className="badge mt-2 badge-warning py-3 rounded-md">
                            {`${eventData.details.feeDetails}`}
                        </div>
                    </span>
                    <p className=' mt-2 mb-5 text-justify'>
                        {eventData.details.desc}
                    </p>
                </div>
                <div className='mb-10 w-full'>
                    <img src={eventData.details.poster} alt="Event Poster" className='rounded-md w-full h-full object-cover' />
                </div>
                <div>
                    <div className='flex flex-col w-full col-span-3 gap-5'>
                        <Badge text={`Date: ${eventData.details.date}`} className='p-5 md:p-10' />
                        <Badge text={`Time: ${eventData.details.time}`} className='py-10 px-5 md:py-12' />
                        <Badge text={`Venue: ${eventData.details.venue}`} className='py-12 px-5' />
                    </div>
                </div>
                <div className='flex flex-col gap-5 my-10'>
                    <img src={eventData.details.venueImg} alt="Venue"  />
                    <img src={eventData.details.mapSS} alt="Map" />
                </div>
                <div className='flex justify-center'>
                    <AppButton btnText={"Register"} link={`/event/registration/${eventData.id}`} />
                </div>
            </div>

            <div className='hidden md:block pt-20 pb-10 px-10'>
                <div className='grid grid-cols-10 gap-5'>
                    <div className='col-span-4'>
                        <img src={eventData.details.poster} alt="Event Poster" className='rounded-md sticky top-20' />
                    </div>
                    <div className='col-span-6'>
                        <div className='flex justify-between fixed bg-base-100 mt-[-10px] pb-5 w-[860px]'>
                            <div className='flex flex-col'>
                                <Heading2 text={`${eventData.details.name}`} />
                                <span>
                                    <div className="badge mt-2 badge-warning py-3 rounded-md">
                                        {`${eventData.details.feeDetails}`}
                                    </div>
                                </span>
                            </div>
                            <div className='flex justify-center items-center'>
                                <AppButton btnText={"Register"} link={`/event/registration/${eventData.id}`} />
                            </div>
                        </div>

                        <div className='px-4'>
                            <div className='mt-28'>
                                <p className=' mt-2 mb-5 text-justify text-lg'>
                                    {eventData.details.desc}
                                </p>
                            </div>
                            <div className=' flex flex-col gap-5 my-5'>
                                <div className='flex w-full col-span-3 gap-5'>
                                    <Badge text={`Date: ${eventData.details.date}`} className='py-8 px-5 h-full' />
                                    <Badge text={`Time: ${eventData.details.time}`} className='py-8 px-5 h-full' />
                                    <Badge text={`Venue: ${eventData.details.venue}`} className='py-8 px-5 h-full' />
                                </div>
                                <div className=''>
                                    <img src={eventData.details.venueImg} alt="Venue" className='h-auto w-auto'/>
                                </div>
                            </div>
                            <div>
                                <img src={eventData.details.mapSS} alt="Map" className='w-full h-auto'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Events