import React from 'react'
import PatronCard from '../utils/PatronCard'
import chancellor from '../../assets/Patrons/chancellor.jpg';
import president from '../../assets/Patrons/president.jpg';
import vp1 from '../../assets/Patrons/vp-1.jpeg';
import vp2 from '../../assets/Patrons/VP-2.jpeg';
import vp from '../../assets/Patrons/vice-president.jpg';

function PatronsPage() {
	return (
		<div className='container justify-center max-w-screen-2xl md:px-20 px-5 my-32 grid gap-10 grid-cols-1'>
			<div className='flex flex-col md:flex-row gap-10 md:gap-0'>
				<PatronCard name={"Dr. Mariazeena Johnson"} designation={"Chancellor"} image={chancellor} alt={"Chancellor"} className={'md:mr-16'}></PatronCard>
				<PatronCard name={"Dr. Marie Johnson"} designation={"President"} image={president} alt={"President"} className={'md:ml-16'}></PatronCard>
			</div>
			<div className='flex flex-col md:flex-row gap-10 md:gap-0'>
				<PatronCard name={"Ms. Maria Bernadette Tamilarasi"} designation={"Vice President"} image={vp1} alt={"Vice-President"}></PatronCard>
				<PatronCard name={"Mr. J. Arul Selvan"} designation={"Vice President"} image={vp2} alt={"Vice-President"}></PatronCard>
				<PatronCard name={"Ms. Maria Catherine Johnson"} designation={"Vice-President"} image={vp} alt={"Vice-President"}></PatronCard>
			</div>
		</div>
	)
}

export default PatronsPage