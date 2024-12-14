import React from "react";

function PosterContainer() {
    return (
        <div>
            <img src={eventData.details.poster} />
            <div className='flex justify-center'>
                <LinkButton text={"Register"} link={`/event/registration/${eventData.id}`}></LinkButton>
            </div>
        </div>
    )
}

export default PosterContainer