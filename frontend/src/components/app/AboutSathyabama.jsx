import React from 'react'
import sist1 from '../../assets/sist-1.jpg'
import sist2 from '../../assets/sist-2.jpg'
import Heading2 from '../utils/Heading2'

function AboutSathyabama() {
	return (
		<div className="flex flex-col px-10 md:px-20 py-10">
            <Heading2 text="About Sathyabama Institute of Science and Technology"></Heading2>
            <div className="flex flex-col gap-5 py-7 md:grid md:grid-cols-2">
                <img src={sist1}></img>
                <img src={sist2} className="w-full h-auto"></img>
            </div>
            <div className="flex-flex-col gap-5 text-justify">
                <p className="mb-5">Sathyabama is a prestigious institution which excels in the fields of Engineering, Science and Technology for more than three successful decades. It offers multi-disciplinary academic programmes in various fields of Engineering, Science, Technology, law, Dental Science, Pharmacy, Nursing, Management, Arts and Science and Allied Health Sciences. It is established under Sec.3 of UGC Act, 1956 and is been Accredited with 'A++' Grade by the National Accreditation and Assessment council. The Institution persistently seeks and adopts innovative methods to improve the quality of higher education and is responsive to the changes taking place in the field of education on a global scale. The Institution has a team of dynamic and outstanding faculty, innovative pedagogical practices , state of the art infrastructure and world class Research Facilities. This glorious Institution is functioning under the dynamic leadership of Dr. Mariazeena Johnson, Chancellor, Dr. Marie Johnson, President, Mr. J. Arul Selvan Vice President, Ms. Maria Bernadette Tamilarasi, Vice President and Ms.Maria Catherin Johnson, Vice President.</p>
                <p>Sathyabama has a good presence in rankings and ratings at National and International level. The Institution has been ranked in 51st position by the National Institutional Ranking Framework (NIRF), Government of India among the Universities in India for the year 2023 and ranked one among the top 100 Universities for eight consecutive years. Sathyabama is ranked among the Top 5 Institutions in the Country for Innovation by ATAL ranking of Institution for Innovation Achievements, Govt. of India. Times Higher Education and QS has ranked Sathyabama among the top Institutions worldwide. Sathyabama Institute of Science & Technology has alliances with leading Universities and research establishments at National and International Level. It is a research intensive University with world class laboratories and research facilities and is involved in research in the emerging areas of Science and Technology. Sathyabama has undertaken various sponsored and collaborative R&D projects funded by National and International Organizations. Sathyabama has written a special page in the history of space research on 22nd June 2016 with the launch of "SATHYABAMASAT" in association with ISRO.</p>
            </div>
        </div>
	)
}

export default AboutSathyabama
