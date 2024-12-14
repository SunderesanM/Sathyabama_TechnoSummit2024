import React from 'react'

function Heading1({text, className}){
    return(
        <div className={`font-bold heading1 text-primary ${className}`}>
            {text}
        </div>
    );
}

export default Heading1;