import React from 'react'
import Hero from '../app/Hero'
import EventsContainer from '../app/EventsContainer'
import AboutSathyabama from '../app/AboutSathyabama'
import Sathyabama from '../app/Sathyabama'

function LandingPage() {
	return (
		<div>
			<Sathyabama></Sathyabama>
			<Hero></Hero>
			<EventsContainer></EventsContainer>
			<AboutSathyabama></AboutSathyabama>
		</div>
	)
}

export default LandingPage
