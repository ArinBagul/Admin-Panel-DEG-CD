import React, { useState, useEffect } from "react";
import { getDatabase, ref, get, push } from "firebase/database";
import Message from "../components/Message";
import "./styles/dlno.css";

const AddDlno = () => {
  const [msg, setMsg] = useState(false);
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
    setMsg(true);
    setFormData({
      name: "",
      position: "",
      office: "",
      mobileNumber: "",
      role: "",
      team: [],
    });
    setTimeout(() => {
      setMsg(false);
    }, 5000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formContainer">
        {msg ? <Message item="Contact" /> : null}
        <div className="inputFieldBox inputFieldBoxXL">
          <label htmlFor="name">Name</label>
          <input
            required
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>

        <div className="inputFieldBox inputFieldBoxXL">
          <label htmlFor="position">Position</label>
          <input
            required
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position"
          />
        </div>

        <div className="inputFieldBox inputFieldBoxXL">
          <label htmlFor="office">Office</label>
          <input
            required
            type="text"
            name="office"
            value={formData.office}
            onChange={handleChange}
            placeholder="Office"
          />
        </div>

        <div className="inputFieldBox inputFieldBoxXL">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            required
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
          />{" "}
        </div>

        <div className="inputFieldBox inputFieldBoxXL">
          <label htmlFor="role">Role</label>
          <input
            required
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
          />
        </div>

        <select
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
          className="addTeamBtn"
          onClick={handleAddTeam}
        >
          Add Team
        </button>
        <div className="selected-teams-container">
          {formData.team.map((teamName, index) => (
            <span key={index}>{teamName}</span>
          ))}
        </div>
        <button type="submit" className="primaryAddBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDlno;
