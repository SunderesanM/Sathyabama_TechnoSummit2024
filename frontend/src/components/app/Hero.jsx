import React from 'react';
import heroImage from '../../assets/virtual.png';
import Heading1 from '../utils/Heading1';
import Heading3 from '../utils/Heading3'
import LinkButton from '../utils/LinkButton';

function Hero() {
	return (
		<div className='bg-base-200 w-100 shadow-lg border-primary container max-w-screen-2xl md:px-20 px-5 py-10 grid md:grid-cols-2 grid-cols-1' id='heroSection'>
			<div className='heroText'>
				<Heading1 text={"TechnoSummit 2024"}></Heading1>
				<p className='w-full md:text-lg mt-4 text-justify'>Technosummit 2024 an opportunity for the students to immerse themselves in the future of technology. This edition of technosummit 2024 promises an exhilarating journey in to the world of technology and innovation.The fest would pull out all the stops to bring a dynamic, engaging, and intellectually stimulating experience that the students don’t want to miss. The yearly extravagance is scheduled to be conducted on the 3<sup>rd</sup> and 4<sup>th</sup> of October 2024. </p>
				<LinkButton text={"Rules and Regulations"} link={"/guidelines"} classes={"my-5 md:mx-10 mx-auto w-48"} className={'w-full'}></LinkButton>
			</div>
			<img src={heroImage} className='md:w-96 w-56 mx-auto' alt="Hero Image" id='heroImage' />
		</div>
	)
}

export default Hero
