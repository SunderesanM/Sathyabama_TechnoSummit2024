import React from 'react';

function VenueCard({ image, title, venue, id, map }) {
  return (
    <div className="card primary-shadow bg-base-200">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Venue"
          className="rounded-xl object-cover h-48 w-auto" 
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary text-lg">{title}</h2>
        <p>{venue}</p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={() => document.getElementById(id).showModal()}>Location</button>
        </div>
      </div>

      <dialog id={id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{venue}</h3>
          <figure className="px-10 pt-10">
            <img
              src={map}
              alt="Venue"
              className="rounded-xl object-cover w-full h-auto"
            />
          </figure>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
}

export default VenueCard;
