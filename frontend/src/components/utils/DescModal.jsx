import React from "react";
import { useNavigate } from "react-router-dom";

function DescModal({ id, content, link, title }) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(link);
    };

    return (
        <dialog id={id} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-primary text-lg">{title}</h3>
                <p className="py-4 text-justify">{content}</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button type="button" onClick={handleNavigate} className="btn btn-primary">
                            Go to Event Page
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

export default DescModal;
