import React, { useState } from "react";

function RegisteredList_dept({ teams, handleOnUpdate }) {
  // Initialize a state to store checkbox status for each team
  const [checkedTeams, setCheckedTeams] = useState(
    teams.reduce((acc, team) => {
      acc[team.TEAM_ID] = team.PAYMENT_STATUS === 1;
      return acc;
    }, {})
  );

  const handleOnCheck = (team_id, isChecked) => {
    // Update local state for checkboxes
    setCheckedTeams((prev) => ({
      ...prev,
      [team_id]: isChecked,
    }));

    // Trigger parent callback to notify changes
    handleOnUpdate(team_id, isChecked);
  };

  return (
    <div>
      <div className="overflow-x-auto container max-w-screen-2xl md:px-20 px-0">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Event</th>
              <th>Team</th>
              <th>Leader's Contact</th>
              <th>No. of members</th>
              <th>Fee amount</th>
              <th>Payment status</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr
                className={`${
                  team.PAYMENT_STATUS === 1 ? "text-primary font-bold team" : ""
                }`}
                key={team.TEAM_ID}
              >
                <td>{index + 1}</td>
                <td>{team.EVENT_NAME}</td>
                <td>{team.TEAM_NAME}</td>
                <td>{team.TL_contact}</td>
                <td>{team.NO_OF_MEMBERS}</td>
                <td>{team.fee}</td>
                <td>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    // Bind checkbox status to the state
                    checked={checkedTeams[team.TEAM_ID]}
                    disabled={team.PAYMENT_STATUS === 1}
                    onChange={(e) =>
                      handleOnCheck(team.TEAM_ID, e.target.checked)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegisteredList_dept;
