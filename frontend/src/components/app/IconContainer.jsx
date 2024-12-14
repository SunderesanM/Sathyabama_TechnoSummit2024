import React from "react";
import IconCard from "../utils/IconCard";
import DescModal from "../utils/DescModal";
import iconData from "../../data/iconData";

function IconContainer() {
    const handleCardClick = (id) => {
        const modal = document.getElementById(id);
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <div>
            <div className='container max-w-screen-2xl md:px-20 px-5 mb-32 mt-16 md:grid-cols-3 gap-10 grid-cols-1 grid'>
                {iconData.map((icon) => (
                    <IconCard
                        key={icon.id}
                        image={icon.image}
                        title={icon.title}
                        onClick={() => handleCardClick(`modal-${icon.id}`)}
                    />
                ))}
            </div>
            {iconData.map((icon) => (
                <DescModal
                    key={icon.id}
                    id={`modal-${icon.id}`}
                    title={icon.title}
                    content={icon.desc}
                    link={`/event/${icon.id}`}
                />
            ))}
        </div>
    );
}

export default IconContainer;
