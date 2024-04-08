import React, { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";

import "./styles/form.css";
import Message from "../components/Message";

const AddPlace = () => {
  const [msg, setMsg] = useState(false);
  const [District, setDistrict] = useState("Agar Malwa");
  const [Place, setPlace] = useState("");
  const [AC, setAC] = useState("");
  const [PC, setPC] = useState("");

  function writeUserData(district, place, pc, ac) {
    const db = getDatabase();
    push(ref(db, "district/" + district), {
      place: place,
      pc: pc,
      ac: ac,
    });
  }

  function handleSubmit() {
    if (District === "" || Place === "" || AC === "" || PC === "") {
      window.alert("All field are mandatory");
      return;
    }
    writeUserData(District, Place, AC, PC);
    setMsg(true);
    setDistrict("");
    setPlace("");
    setAC("");
    setPC("");

    setTimeout(() => {
      setMsg(false);
    }, 5000);
    // console.log("Data Saved Successfully");
  }

  return (
    <div className="formContainer">
      {msg ? <Message item="AC" /> : null}
      <div className="inputFieldBox">
        <label htmlFor="district">District</label>
        <input
          id="district"
          type="text"
          required
          placeholder="Name of District"
          value="Agar Malwa"
          onChange={(data) => setDistrict(data.target.value)}
        />
      </div>
      <div className="inputFieldBox">
        <label htmlFor="place">AC Name</label>
        <input
          id="place"
          type="text"
          required
          placeholder="AC Name"
          value={Place}
          onChange={(data) => setPlace(data.target.value)}
        />
      </div>
      <div className="inputFieldBox">
        <label htmlFor="ac">AC Code</label>
        <input
          id="ac"
          type="number"
          required
          placeholder="Enter AC"
          value={AC}
          onChange={(data) => setAC(data.target.value)}
        />
      </div>
      <div className="inputFieldBox">
        <label htmlFor="pc">PC Code</label>
        <input
          id="pc"
          type="number"
          required
          placeholder="Enter PC"
          value={PC}
          onChange={(data) => setPC(data.target.value)}
        />
      </div>
      <button className="primaryAddBtn" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default AddPlace;
