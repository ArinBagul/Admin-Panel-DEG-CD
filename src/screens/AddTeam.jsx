import React, { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";

import "./styles/form.css";
import Message from "../components/Message";

export const AddTeam = () => {
  const [msg, setMsg] = useState(false);
  const [team, setTeam] = useState("");
  const [priority, setPriority] = useState("");

  function writeUserData(team, priority) {
    const db = getDatabase();
    push(ref(db, "team/"), {
      team: team,
      priority: priority,
    });
  }

  function handleSubmit() {
    if (team === "" || priority === "") {
      window.alert("All field are mandatory");
      return;
    }
    writeUserData(team, priority);
    setMsg(true);
    setTeam("");
    setPriority("");

    setTimeout(() => {
      setMsg(false);
    }, 5000);
    // console.log("Data Saved Successfully");
  }

  return (
    <div className="formContainer">
      {msg ? <Message item="Team" /> : null}
      <div className="inputFieldBox">
        <label htmlFor="team">Team</label>
        <input
          id="team"
          type="text"
          required
          placeholder="Enter the Team"
          value={team}
          onChange={(data) => setTeam(data.target.value)}
        />
      </div>
      <div className="inputFieldBox">
        <label htmlFor="priority">Priority</label>
        <input
          id="priority"
          type="number"
          required
          placeholder="Enter priority (1-10)"
          value={priority}
          onChange={(data) => setPriority(data.target.value)}
        />
      </div>

      <button className="primaryAddBtn" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};
