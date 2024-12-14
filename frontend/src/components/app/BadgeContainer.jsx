import React from "react";

function BadgeContainer() {
    return (
        <div className='flex flex-col md:flex-row w-full gap-3 md:gap-4 md:col-span-3 md:justify-between'>
            <div>
                <Badge text={eventData.details.date} className='p-5 md:p-10'></Badge>
            </div>
            <div>
                <Badge text={eventData.details.time} className='p-5 md:p-10'></Badge>
            </div>
            <div>
                <Badge text={eventData.details.venue} className='p-10'></Badge>
            </div>
        </div>
    )
}

export default BadgeContainer