import React from "react";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import DownloadBrochure from "../utils/DownloadBrochure";

function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100 navbar-fixed z-50 max-w-screen-2xl container md:px-20 px-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-2 shadow"
                        >
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/about"}>TechnoSummit</Link>
                            </li>
                            <li>
                                <Link to={"/guidelines"}>Guidelines</Link>
                            </li>
                            <li>
                                <Link to={"/patrons"}>Patrons</Link>
                            </li>
                            <li>
                                <Link to={"/technosummit/events/schedules"}>
                                    Event Schedule
                                </Link>
                            </li>
                            <li>
                                <Link to={"/depts"}>
                                    Department Coordinators
                                </Link>
                            </li>
                            <li>
                                <button onClick={DownloadBrochure}>Download Brochure</button>
                            </li>
                            <li className="md:block hidden">
                                <details>
                                    <summary>Events</summary>
                                    <ul className="p-2 bg-white text-base-100 font-semibold w-52">
                                        <li>
                                            <Link to={"/event/1"}>Coding Challenges</Link>
                                        </li>
                                        <li>
                                            <Link to={"/event/2"}>Design Challenges</Link>
                                        </li>
                                        <li>
                                            <Link to={"/event/3"}>Buildathon</Link>
                                        </li>
                                        <li>
                                            <Link to={"/event/4"}>Technical paper presentation</Link>
                                        </li>
                                        <li>
                                            <Link to={"/event/5"}>Technical quiz</Link>
                                        </li>
                                        <li>
                                            <Link to={"/event/6"}>App Arena</Link>
                                        </li>
                                        <li>
                                            <Link to={"/event/7"}>Technical debate</Link>
                                        </li>
                                        <li>
                                            <Link to={"/event/8"}>Project Exhibition</Link>
                                        </li>
                                        <li>
                                            <Link to={"/event/9"}>Next Gen Gamers</Link>
                                        </li>
                                        <li>
                                            <Link to={"/event/10"}>AR VR Contest</Link>
                                        </li>
                                        <li>
                                            <Link to={"/event/11"}>Hackathon</Link>
                                        </li>
                                        <li>
                                            <Link to={"/event/12"}>Youtube Challenges</Link>
                                        </li>
                                        <li>
                                            <Link to={"/event/13"}>Go Karting</Link>
                                        </li>
                                        <li>
                                            <Link to={"/event/14"}>
                                                Drones and Robotics Design challenge
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <Link to="/venues">Venue Information</Link>
                            </li>
                            <li>
                                <Link to={"/staff/login"}>
                                    <button className="btn btn-primary btn-sm">Faculty Login</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <a>
                        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>TechnoSummit</Link>
                        </li>
                        <li>
                            <Link to={"/guidelines"}>Guidelines</Link>
                        </li>
                        <li>
                            <Link to={"/patrons"}>Patrons</Link>
                        </li>
                        <li>
                            <Link to={"/technosummit/events/schedules"}>Event Schedule</Link>
                        </li>
                        <li>
                            <Link to={"/depts"}>
                                Department Coordinators
                            </Link>
                        </li>
                        <li>
                            <button onClick={DownloadBrochure}>Download Brochure</button>
                        </li>
                        <li>
                            <Link to="/venues">Venue Information</Link>
                        </li>
                        <li>
                            <details>
                                <summary>Events</summary>
                                <ul className="p-2 bg-white text-base-100 font-semibold w-52">
                                    <li>
                                        <Link to={"/event/1"}>Coding Challenges</Link>
                                    </li>
                                    <li>
                                        <Link to={"/event/2"}>Design Challenges</Link>
                                    </li>
                                    <li>
                                        <Link to={"/event/3"}>Buildathon</Link>
                                    </li>
                                    <li>
                                        <Link to={"/event/4"}>Technical paper presentation</Link>
                                    </li>
                                    <li>
                                        <Link to={"/event/5"}>Technical quiz</Link>
                                    </li>
                                    <li>
                                        <Link to={"/event/6"}>App Arena</Link>
                                    </li>
                                    <li>
                                        <Link to={"/event/7"}>Technical debate</Link>
                                    </li>
                                    <li>
                                        <Link to={"/event/8"}>Project Exhibition</Link>
                                    </li>
                                    <li>
                                        <Link to={"/event/9"}>Next Gen Gamers</Link>
                                    </li>
                                    <li>
                                        <Link to={"/event/10"}>AR VR Contest</Link>
                                    </li>
                                    <li>
                                        <Link to={"/event/11"}>Hackathon</Link>
                                    </li>
                                    <li>
                                        <Link to={"/event/12"}>Youtube Challenges</Link>
                                    </li>
                                    <li>
                                        <Link to={"/event/13"}>Go Karting</Link>
                                    </li>
                                    <li>
                                        <Link to={"/event/14"}>
                                            Drones and Robotics Design challenge
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"/staff/login"}>
                        <button className="btn btn-primary btn-sm md:block hidden">
                            Faculty Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
