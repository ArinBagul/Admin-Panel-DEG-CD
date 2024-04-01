import React, { useEffect, useState } from "react";
import { getDatabase, ref, get } from "firebase/database";

import TabHead from "../components/TabHead";
import Button from "../components/Button";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const database = getDatabase();

  useEffect(() => {
    const teamsRef = ref(database, "team");

    try {
      get(teamsRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const teamsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setTeams(teamsArray);
        } else {
          console.log("No data available");
        }
      });
    } catch (error) {
      console.error("Error getting data:", error);
    }
  }, []);

  return (
    <div className="contentContainer">
      <TabHead tabHead="Manage Teams" />
      <br />
      <Button style="margin-top: 10px" />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              {/* <th>Team ID</th> */}
              <th>Priority</th>
              <th>Team Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.id}>
                {/* <td>{team.id}</td> */}
                <td>{team.priority}</td>
                <td>{team.team}</td>
                <td>
                  <button
                    className="deleteBtn"
                    onClick={() => handleDelete(item.district, item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M4.75004 15.0417C4.75004 15.4616 4.91686 15.8643 5.21379 16.1613C5.51072 16.4582 5.91345 16.625 6.33337 16.625H12.6667C13.0866 16.625 13.4894 16.4582 13.7863 16.1613C14.0832 15.8643 14.25 15.4616 14.25 15.0417V5.54167H4.75004V15.0417ZM6.33337 7.125H12.6667V15.0417H6.33337V7.125ZM12.2709 3.16667L11.4792 2.375H7.52087L6.72921 3.16667H3.95837V4.75H15.0417V3.16667H12.2709Z"
                        fill="#F0F0F0"
                      />
                    </svg>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;
