import React, { useEffect } from "react";
import SummaryContainer from "../app/SummaryContainer";
import Heading1 from "../utils/Heading1";
import Heading3 from "../utils/Heading3";
import { useNavigate } from "react-router-dom"; // useNavigate for routing
import axios from "axios";

function EventCoordinators() {
  const navigate = useNavigate();

  // LOGIN CHECK - useEffect to check if the user is logged in
  useEffect(() => {
    const storedTeams = localStorage.getItem("teams");
    const storedEventName = localStorage.getItem("eventName");

    if (!storedTeams || !storedEventName) {
      // Redirect to login page if teams or eventName is missing
      navigate("/staff/login");
    }
  }, [navigate]);

  const teams = JSON.parse(localStorage.getItem("teams"));
  const eventName = localStorage.getItem("eventName");

  const downLoadAttendance = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/eventCoordinator/download`,
        { event: eventName },
        { responseType: "blob" }
      )
      .then((response) => {
        // create the url
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // create an anchor element and embed the url
        const link = document.createElement("a");
        link.href = url;
        const fileName = `${eventName}.xlsx`;
        link.setAttribute("download", fileName);

        // trigger the link
        document.body.appendChild(link);
        link.click();

        // delete the link
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("teams"); // Clear teams from localStorage
    localStorage.removeItem("eventName"); // Clear eventName from localStorage
    navigate("/staff/login"); // Redirect to login page
  };

  // Check if teams is null or undefined
  if (!teams) {
    return (
      <div className="container justify-center my-20 px-10 md:px-40">
        <h1 className="text-3xl mb-10 text-primary text-center">
          No teams data found. Please log in again.
        </h1>
        <div className="flex justify-center mt-10">
          <button className="btn btn-primary" onClick={handleLogout}>
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container justify-center my-20 px-10 md:px-40">
      <div className="sticky top-16 z-40 bg-base-100 py-3 grid md:grid-cols-6 grid-cols-1 container max-w-screen-2xl md:px-20 px-5">
        <h1 className="text-3xl mb-10 text-primary text-left col-span-5">
          {eventName} - Student registrations
        </h1>
        <button
          className="btn btn-secondary btn-wide col-span-1"
          onClick={downLoadAttendance}
        >
          Download attendance sheet
        </button>
      </div>

      {/* Logout Button */}
      <div className="flex justify-end mb-4">
        <button className="btn btn-secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <SummaryContainer teams={teams}></SummaryContainer>
    </div>
  );
}

export default EventCoordinators;
