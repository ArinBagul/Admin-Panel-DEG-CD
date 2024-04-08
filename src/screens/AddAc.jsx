import React, { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import Message from "../components/Message";
import "./styles/addPso.css";

function AddAc() {
  const [msg, setMsg] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    mobileNumber: "",
    acName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase();
    const acRef = ref(db, `ac/${formData.acName}`);

    try {
      await push(acRef, {
        name: formData.name,
        designation: formData.designation,
        mobileNumber: formData.mobileNumber,
        acName: formData.acName,
      });
      setMsg(true);
      setFormData({
        name: "",
        designation: "",
        mobileNumber: "",
        acName: "",
      });
      setTimeout(() => {
        setMsg(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
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
          <label htmlFor="designation">Designation</label>
          <input
            id="designation"
            required
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Designation"
          />
        </div>

        <div className="inputFieldBox inputFieldBoxXL">
        <label htmlFor="acName">AC Name</label>
        <select
        id="acName"
        required
        name="acName"
        value={formData.acName}
        onChange={handleChange}
        >
        <option value="">Select an option</option>
        <option value="Agar">Agar 166-SC</option>
        <option value="Susner">Susner 165-SC</option>
        </select> </div>


        <div className="inputFieldBox inputFieldBoxXL">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            id="mobileNumber"
            required
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
          />
        </div>

        <button type="submit" className="primaryAddBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddAc;
