import React, { useState } from "react";
import LinkButton from "../utils/LinkButton";

function SummaryContainer({ teams }) {
  const [activeTeam, setActiveTeam] = useState(null);
  const [members, setMembers] = useState([]);

  // Function to open modal and display team members
  const showModal = (teamIndex) => {
    setActiveTeam(teamIndex);
    setMembers(teams[teamIndex].members); // Access members from the clicked team
  };

  const closeModal = () => {
    setActiveTeam(null);
    setMembers([]); // Clear members when modal is closed
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table bg-base-200 text-center">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Team Name</th>
              <th>Team Leader's Contact No.</th>
              <th>No. of Members</th>
              <th>Amount Paid</th>
              <th>Member Details</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={team.TEAM_ID}>
                <th>{idx + 1}</th>
                <td>{team.TEAM_NAME}</td>
                <td>{team.TL_contact}</td>
                <td>{team.NO_OF_MEMBERS}</td>
                <td>{team.fee}</td>
                <td>
                  <LinkButton
                    text={"View Team Details"}
                    className={"md:btn-sm"}
                    onClick={() => showModal(idx)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DaisyUI Modal for Each Team */}
      {activeTeam !== null && (
        <>
          {/* Modal Toggle Input */}
          <input type="checkbox" id="team-modal" className="modal-toggle" checked readOnly />

          {/* Modal Structure */}
          <div className="modal modal-open">
            <div className="modal-box w-11/12 max-w-5xl bg-base-200 border border-primary">
              <h3 className="font-bold text-lg">
                Team: {teams[activeTeam].TEAM_NAME}
              </h3>
              <div className="overflow-x-auto mt-4">
                <table className="table bg-base-100">
                  <thead>
                    <tr>
                      <th>Serial No.</th>
                      <th>Name</th>
                      <th>Register no.</th>
                      <th>Year Of Study</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member, idx) => (
                      <tr key={idx}>
                        <th>{idx + 1}</th>
                        <td>{member.MEMBERS_NAME}</td>
                        <td>{member.REGISTER_NO}</td>
                        <td>{member.YEAR_OF_STUDY}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="modal-action">
                <label htmlFor="team-modal" className="btn" onClick={closeModal}>
                  Close
                </label>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SummaryContainer;
