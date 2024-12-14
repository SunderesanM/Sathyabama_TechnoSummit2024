import React from "react";
import { Link } from "react-router-dom";

function AppButton({btnText, className, link}) {
    return(
        <div>
            <Link to={link}><button className={`btn w-52z md:btn-wide btn-primary ${className}`}>{btnText}</button></Link>
        </div>
    )
}

export default AppButton