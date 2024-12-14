import React, { useState, useEffect } from "react";
import RegisteredList_dept from "../app/RegisteredList_dept";
import { useLocation, useNavigate } from "react-router-dom"; // Add useNavigate hook
import axios from "axios";

function RegisteredPageForDeptCoords() {
  const location = useLocation();
  const teams = location.state;
  const navigate = useNavigate(); // Add useNavigate hook

  // Get unique event names from teams
  const events = ["All", ...new Set(teams.map((team) => team.EVENT_NAME))]; // Add "All" option

  // State to manage selected event and filtered teams
  const [selectedEvent, setSelectedEvent] = useState("All"); // Default to "All"
  const [filteredTeams, setFilteredTeams] = useState(teams); // Default to all teams

  const [updatedTeams, setUpdatedTeams] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleOnUpdate = (team_id, isChecked) => {
    if (isChecked) {
      setUpdatedTeams((prevTeams) => [...prevTeams, team_id]);
    } else {
      setUpdatedTeams((prevTeams) => prevTeams.filter((t) => t !== team_id));
    }
  };

  // Prevent accidental page reload
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("teams"); // Clear teams from localStorage
    navigate("/staff/login"); // Redirect to login page
  };

  // LOGIN CHECK - useEffect for checking if the user is logged in
  useEffect(() => {
    const storedTeams = localStorage.getItem("teams");
    if (!storedTeams) {
      // If teams are not found in localStorage, redirect to login page
      navigate("/staff/login");
    }
  }, [navigate]); // Dependency on navigate to avoid warning

  const handleSaveAndCommit = () => {
    setSuccessMessage("");
    console.log(updatedTeams);

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/departmentIncharge/update`, { teamIds: updatedTeams })
      .then((response) => {
        setSuccessMessage("Changes have been saved successfully!");
      })
      .catch((err) => {
        setSuccessMessage("An error occurred while saving changes.");
        console.log(err);
      });
  };

  // Filter teams based on selected event, showing all teams if "All" is selected
  const handleEventFilter = (event) => {
    setSelectedEvent(event);
    if (event === "All") {
      setFilteredTeams(teams); // Show all teams
    } else {
      const filtered = teams.filter((team) => team.EVENT_NAME === event);
      setFilteredTeams(filtered);
    }
  };

  return (
    <div className="container max-w-screen-2xl md:px-20 px-0 my-24">
      <div className="sticky top-16 z-40 bg-base-100 py-3 grid md:grid-cols-6 grid-cols-1 container max-w-screen-2xl md:px-20 px-5">
        <h1 className="text-3xl mb-10 text-primary col-span-4">
          {selectedEvent === "All" ? "All Events" : selectedEvent} - Student registrations
        </h1>
        <select
          className="select select-secondary mx-5 col-span-1"
          value={selectedEvent}
          onChange={(e) => handleEventFilter(e.target.value)}
        >
          {events.map((event) => (
            <option key={event} value={event}>
              {event}
            </option>
          ))}
        </select>
        <button className="btn btn-primary col-span-1" onClick={() => document.getElementById("confirmation").showModal()}>
          Save Changes
        </button>
      </div>

      {/* Logout Button */}
      <div className="flex justify-end mb-4">
        <button className="btn btn-secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <RegisteredList_dept teams={filteredTeams} handleOnUpdate={handleOnUpdate}></RegisteredList_dept>

      {/* Confirmation Modal */}
      <dialog id="confirmation" className="modal bg-base-200">
        <div className="modal-box text-center">
          <h3 className="font-bold text-lg">Are you sure you want to save the changes?</h3>
          <p className="py-4 text-primary">Note: The saved changes cannot be reset.</p>
          <button className="btn btn-primary" onClick={handleSaveAndCommit}>Save and commit</button>

          {successMessage && (
            <div className="mt-4 text-green-600 text-xl text-center">
              {successMessage}
            </div>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default RegisteredPageForDeptCoords;
