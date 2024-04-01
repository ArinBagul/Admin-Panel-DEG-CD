import React, { useState } from "react";
import "./styles/form.css";

import { getDatabase, ref, push , set} from "firebase/database";
import Message from "../components/Message";

const AddPs = () => {
  const [msg, setMsg] = useState(false);
  const [acName, setAcName] = useState("");
  const [boothNo, setBoothNo] = useState("");
  const [boothName, setBoothName] = useState("");
  const [boothAd, setBoothAd] = useState("");

  function writeUserData(acName, boothNo, boothName, boothAd) {
    const db = getDatabase();
    set(ref(db, "ps/" + acName + "/" + boothNo), {
      // boothNo: boothNo,
      boothName: boothName,
      boothAd: boothAd,
    });
  }

  function handleSubmit() {
    if (acName === "" || boothNo === "" || boothName === "" || boothAd === "") {
      window.alert("All field are mandatory");
      return;
    }

    writeUserData(acName, boothNo, boothName, boothAd);
    setMsg(true);
    setAcName("");
    setBoothNo("");
    setBoothName("");
    setBoothAd("");

    setTimeout(() => {
      setMsg(false);
    }, 5000);
    // console.log("Data Saved Successfully");
  }

  function print(data) {
    console.log(data)
  }

  return (
    <div className="formContainer">
      {msg ? <Message item="Polling Station" /> : null}
      <div className="inputFieldBox inputFieldBoxXL">
        <label htmlFor="acName">AC Name</label>
        <select
          id="acName"
          type="text"
          required
          placeholder="AC Name"
          value={acName}
          onChange={(data) => setAcName(data.target.value)}
          // onChange={(data) => print(data)}
        >
          <option value="">Select an option</option>
          <option value="Agar">Agar 166-SC</option>
          <option value="Susner">Susner 165-SC</option>
        </select>

      </div>
      <div className="inputFieldBox inputFieldBoxXL">
        <label htmlFor="boothNo">Booth Number</label>
        <input
          id="boothNo"
          type="number"
          required
          placeholder="Booth Number"
          value={boothNo}
          onChange={(data) => setBoothNo(data.target.value)}
        />
      </div>
      <div className="inputFieldBox inputFieldBoxXL">
        <label htmlFor="boothName">Booth Name</label>
        <input
          id="boothName"
          type="text"
          required
          placeholder="Booth Name"
          value={boothName}
          onChange={(data) => setBoothName(data.target.value)}
        />
      </div>
      <div className="inputFieldBox inputFieldBoxXL">
        <label htmlFor="boothAd">Booth Address</label>
        <input
          id="boothAd"
          type="text"
          required
          placeholder="Booth Address"
          value={boothAd}
          onChange={(data) => setBoothAd(data.target.value)}
        />
      </div>
      <button className="primaryAddBtn" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default AddPs;
