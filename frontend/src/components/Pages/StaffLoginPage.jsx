import React from 'react'
import StaffLoginForm from '../app/StaffLoginForm'
import Heading1 from '../utils/Heading1'

function StaffLoginPage() {
  return (
    <div className='container md:px-20 px-4 max-w-screen-2xl my-32'>
        <Heading1 text={"Staff Login"} className={"text-center my-7"}></Heading1>
      <StaffLoginForm></StaffLoginForm>
    </div>
  )
}

export default StaffLoginPage
