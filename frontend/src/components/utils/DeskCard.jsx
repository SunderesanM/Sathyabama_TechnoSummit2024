import React from 'react'
import Heading3 from './Heading3'
import LinkButton from './LinkButton'
import { Link } from 'react-router-dom'

function DeskCard({poster , title , desc , link}) {
  return (
    <Link to={link}>
      <div className='bg-base-200 h-80 rounded-md border-primary border event-card flex justify-center gap-3 py-3 px-3 mx-auto'>
        <div>
            <img src={poster} className='poster rounded-md' alt="Poster" />
        </div>

        <div className='px-3 md:block hidden'>
            <Heading3 text={title}></Heading3>

            <p className='h-2/3 my-2'>{desc}</p>

            <LinkButton text={"Explore more"} link={link}></LinkButton>
        </div>
    </div>
    </Link>
  )
}

export default DeskCard
