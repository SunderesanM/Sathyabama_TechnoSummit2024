import React from 'react'

function Heading3({text, className}){
    return(
        <div className={`font-bold heading3 text-primary ${className}`}>
            {text}
        </div>
    );
}

export default Heading3;