import React from 'react'
import Heading3 from '../utils/Heading3'

function Guidelines() {
	return (
		<div className='flex flex-col gap-3 px-10 md:px-32 my-20'>
			<div>
				<Heading3 text={"General Guidelines:"}></Heading3>
				<ol className='list-decimal px-5 md:px-10'>
					<li><p className='text-justify text-sm md:text-lg'>Students are requested to maintain general decorum.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>Student ID card is mandatory.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>Registrations with payment is mandatory.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>Changes will not be made once the registration form is submitted.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>Payment should be made only through department coordinator.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>Registration amount is Rs.100 per student per event(except Technical Paper Presentation).</p></li>
					<li><p className='text-justify text-sm md:text-lg'>Students participating in hackathon are requested to get parent consent.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>On Duty(OD) must be submitted only through the Department Coordinators.</p></li>
				</ol>
			</div>
			<div>
				<Heading3 text={"Registration Instructions:"}></Heading3>
				<ol className='list-decimal px-5 md:px-10'>
					<li><p className='text-justify text-sm md:text-lg'>The registration process consists of two pages.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>The first page of registration is for the essential details for the Team and its leader.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>The Second page of registration is for entering the team members' details</p></li>
					<li><p className='text-justify text-sm md:text-lg'>In case of individual registration, the team name is 'Individual'.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>Please do check and verify all the details entered in the form before submitting.</p></li>
				</ol>
			</div>
		</div>
	)
}

export default Guidelines