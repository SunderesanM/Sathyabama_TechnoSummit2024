import React from 'react'
import logo from '../../assets/logo.png';
import web from '../../assets/icons/web.png'
import fb from '../../assets/icons/facebook.png'
import ig from '../../assets/icons/instagram.png'
import x from '../../assets/icons/twitter.png'
import yt from '../../assets/icons/yt.png'
import lin from '../../assets/icons/linkedin.png'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<div>
			<footer className="footer bg-base-200 text-base-content p-10">
				<aside>
					<img src={logo} className='h-[60px] w-auto' />
				</aside>
				<nav>
					<h6 className="footer-title">Information</h6>
					<a className="link link-hover"><Link to={'/guidelines'}>Guidelines</Link></a>
					<a className="link link-hover"><Link to={'/technosummit/events/schedules'}>Event Schedules</Link></a>
					<a className="link link-hover"><Link to={'/venues'}>Venues</Link></a>
				</nav>
				<nav>
					<h6 className="footer-title">About</h6>
					<a className="link link-hover"><Link to={'/about'}>TechnoSummit</Link></a>
					<a className="link link-hover"><Link to={'/patrons'}>Patrons</Link></a>
				</nav>
				<nav>
					<h6 className="footer-title">Socials</h6>
					<div className='flex flex-col gap-3 md:flex-row md:gap-10'>
						<div className='flex flex-col gap-3'>
							<a className="link link-hover" href='https://www.sathyabama.ac.in/' target='_blank'><div className='flex gap-2'><img src={web}></img><p>Website</p></div></a>
							<a className="link link-hover" href='https://www.facebook.com/SathyabamaOfficial/' target='_blank'><div className='flex gap-2'><img src={fb}></img><p>Facebook</p></div></a>
							<a className="link link-hover" href='https://www.instagram.com/technosummit2024/' target='_blank'><div className='flex gap-2'><img src={ig}></img><p>Instagram</p></div></a>
						</div>
						<div className='flex flex-col gap-3'>
							<a className="link link-hover" href='https://x.com/sathyabamaSIST' target='_blank'><div className='flex gap-2'><img src={x}></img><p>X(Twitter)</p></div></a>
							<a className="link link-hover" href='https://www.youtube.com/channel/UCkBMqT83pxjwPhh8mUpZ0hQ' target='_blank'><div className='flex gap-2'><img src={yt}></img><p>Youtube</p></div></a>
							<a className="link link-hover" href='https://www.linkedin.com/school/sathyabama-institute-of-science-&-technology-chennai/' target='_blank'><div className='flex gap-2'><img src={lin}></img><p>Linkedin</p></div></a>
						</div>
					</div>
				</nav>
			</footer>
		</div>
	)
}

export default Footer
