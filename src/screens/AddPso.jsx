import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import Message from "../components/Message";
import "./styles/addPso.css"

function AddPso() {
    const [msg, setMsg] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        designation: "",
        psName: "",
        mobileNumber: "",
        psAddress: "",
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const db = getDatabase();
        const psoRef = ref(db, `pso/${formData.psName}, ${formData.psAddress}`);
        
        try {
          await push(psoRef, formData);
          // console.log("Data successfully submitted");
          setMsg(true);
          setFormData({
            name: "",
            designation: "",
            psName: "",
            mobileNumber: "",
            psAddress: "",
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
            <label htmlFor="psName">PS Name</label>
              <input
              id="psName"
                required
                type="text"
                name="psName"
                value={formData.psName}
                onChange={handleChange}
                placeholder="PS Name"
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
            <div className="inputFieldBox inputFieldBoxXL">
            <label htmlFor="psAddress">PS Address</label>
              <input
              id="psAddress"
                required
                type="text"
                name="psAddress"
                value={formData.psAddress}
                onChange={handleChange}
                placeholder="PS Address"
              />
            </div>
            
            <button type="submit" className="primaryAddBtn">
              Submit
            </button>
          </form>
        </div>
      );
}

export default AddPso