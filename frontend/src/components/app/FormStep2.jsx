import React from 'react'
import MemberForm from './MemberForm'
import Button from '../utils/Button'

function FormStep2() {
  return (
    <div className="container max-w-screen-2xl md:px-20 px-5 my-32">
      <div className="md:w-2/4 mx-auto md:px-10 px-2 py-5">
        <MemberForm></MemberForm>
        <MemberForm></MemberForm>
        <MemberForm></MemberForm>

        <Button
          text={"Proceed to Pay"}
          classes={"btn-primary my-5 block mx-auto w-1/4"}
        ></Button>
      </div>
    </div>
  )
}

export default FormStep2
