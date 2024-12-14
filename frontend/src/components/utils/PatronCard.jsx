import React from "react";

function PatronCard({ name, designation, image, alt, className }) {
    return (
        <div className={`card primary-shadow bg-base-200 w-full max-w-xs mx-auto ${className}`}>
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={alt}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{designation}</p>
            </div>
        </div>
    );
}

export default PatronCard;
