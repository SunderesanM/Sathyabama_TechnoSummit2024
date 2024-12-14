import React from 'react'

function Button({text , classes}) {
  return (
    <div className='my-2'>
      <button className={`btn ${classes}`}>{text}</button>
    </div>
  )
}

export default Button
