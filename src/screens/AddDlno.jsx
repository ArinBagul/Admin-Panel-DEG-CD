import React, { useState, useEffect } from "react";
import { getDatabase, ref, get, push } from "firebase/database";
import "./styles/dlno.css";

const AddDlno = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    office: "",
    mobileNumber: "",
    role: "",
    team: [],
  });
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const teamsRef = ref(db, "team");

    get(teamsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const teamsData = snapshot.val();
          const teamsList = Object.keys(teamsData).map((key) => ({
            id: key,
            name: teamsData[key].team,
          }));
          setTeams(teamsList);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
  };

  const handleAddTeam = () => {
    if (selectedTeam && !formData.team.includes(selectedTeam)) {
      setFormData({
        ...formData,
        team: [...formData.team, selectedTeam],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // firebase.database().ref('users').push(formData);
    const db = getDatabase();
    push(ref(db, "dlno"), formData);
    setFormData({
      name: "",
      position: "",
      office: "",
      mobileNumber: "",
      role: "",
      team: [],
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          required
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Position"
        />
        <input
          required
          type="text"
          name="office"
          value={formData.office}
          onChange={handleChange}
          placeholder="Office"
        />
        <input
          required
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Mobile Number"
        />
        <input
          required
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Role"
        />
        <select
          className="team-dropdown"
          value={selectedTeam}
          onChange={handleTeamChange}
        >
          <option value="">Select Team</option>
          {teams.map((team) => (
            <option key={team.id} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="add-team-button"
          onClick={handleAddTeam}
        >
          Add Team
        </button>
        <div className="selected-teams-container">
            {formData.team.map((teamName, index) => (
            <span key={index}>{teamName}</span>
            ))}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDlno;
