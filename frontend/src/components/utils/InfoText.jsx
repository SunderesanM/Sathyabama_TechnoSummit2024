import React from "react"

function InfoText({label,value}) {
    return(
        <div className="py-2">
            <p>{label}</p>
            <p className="md:text-lg">{value}</p>
        </div>
    )
}

export default InfoText