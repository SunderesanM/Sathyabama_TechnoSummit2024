import React from "react";

function EventDataContainer() {
    return (
        <div className='flex flex-col'>
            <Heading2 text={`${eventData.details.name}`}></Heading2> <span><div className="badge mt-2 badge-warning text-lg py-3">{`Rs.${eventData.details.fee} per member`}</div></span>
            <p className='text lg mt-2 mb-5 text-justify'>
                {eventData.details.desc}
            </p>
        </div>
    )
}

export default EventDataContainer