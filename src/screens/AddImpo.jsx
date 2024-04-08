import React, { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import Message from "../components/Message";
import "./styles/addPso.css";

function AddImpo() {

    const [msg, setMsg] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    mobileNumber: "",
    priority: "",
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
    const impoRef = ref(db, 'impo');

    try {
      await push(impoRef, {
        name: formData.name,
        designation: formData.designation,
        mobileNumber: formData.mobileNumber,
        priority: formData.priority,
      });
      setMsg(true);
      setFormData({
        name: "",
        designation: "",
        mobileNumber: "",
        priority: "",
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
          <label htmlFor="priority">Priority</label>
          <input
            id="priority"
            required
            type="text"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            placeholder="Priority"
          />
        </div>

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
  )
}

export default AddImpo