import React from "react";
import Heading2 from "../utils/Heading2";
import IconContainer from "../app/IconContainer";
import logo from '../../assets/logo.jpeg'

function AboutPage() {
    return (
        <div className="px-10 py-20">
            <div className="hero min-h-44">
                <img src={logo}></img>
            </div>
            <div className="flex flex-col gap-1 md:px-28">
                <Heading2 text={"About TechnoSummit"}></Heading2>
                <p className="text-justify md:text-lg">
                    Technosummit 2024 an opportunity for the students to immerse themselves in the future of technology. This edition of technosummit 2024 promises an exhilarating journey in to the world of technology and innovation.The fest would pull out all the stops to bring a dynamic, engaging, and intellectually stimulating experience that the students don’t want to miss. The yearly extravagance is scheduled to be conducted on the 3<sup>rd</sup> and 4<sup>th</sup> of October 2024.
                </p>
                <p className="text-justify md:text-lg">
                    The two days fest will have cutting edge workshops, exciting competitions, interactive technical sessions, networking opportunities, gaming, engaging paper presentations and all. This event would be a perfect platform for the students to showcase their skills, expand knowledge, engage in constructive development, and explore various opportunities for growth.
                </p>
                <p className="text-justify md:text-lg">
                    Hackathon - Code Create and Conquer, convert your ideas to reality in 24 hours by creating code for problems listed
                </p>
                <p className="text-justify md:text-lg">
                    Design Challenges - Reinvent the engineer, designer, developer and maker in you. Design and develop creative solutions for identified problems
                </p>
                <p className="text-justify md:text-lg">
                    Youtube challenges – Film yourself completing one of the given challenges
                </p>
                <p className="text-justify md:text-lg">
                    Makeathon -We are looking for ideas that make life better for our citizens. The idea could result in a business, but it could also simply improve lives in our community or the world.
                </p>
            </div>
            <div>
                <IconContainer></IconContainer>
            </div>
        </div>
    )
}

export default AboutPage