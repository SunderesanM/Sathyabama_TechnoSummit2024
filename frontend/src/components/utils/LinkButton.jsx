import React from 'react'
import {Link} from 'react-router-dom'

function LinkButton({text , link , classes, className, onClick}) {
  return (
    <div className={classes}>
      <Link to={link}><button className={`btn w-36 btn-primary ${className}`} onClick={onClick}>{text}</button></Link>
    </div>
  )
}

export default LinkButton
