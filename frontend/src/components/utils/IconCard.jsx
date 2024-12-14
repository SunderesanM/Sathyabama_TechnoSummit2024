import React from "react";

function IconCard({ image, alt, title, onClick }) {
    return (
        <div className="card primary-shadow bg-base-200 cursor-pointer" onClick={onClick}>
            <figure className="px-10 pt-10">
                <img src={image} alt={alt} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">{title}</h2>
            </div>
        </div>
    );
}

export default IconCard;
