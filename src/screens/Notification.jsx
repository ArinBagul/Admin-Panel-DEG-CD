import React, { useEffect, useState } from "react";
import "./styles/switch.css";
import TabHead from "../components/TabHead";
import style from "./styles/Notification.module.css";
import { getDatabase, onValue, ref, set, update } from "firebase/database";

function Notification() {
  const [isEnabled, setIsEnabled] = useState();
  const [formData, setFormData] = useState({
    heading: "",
    notifyBody: "",
    isActionBtnNeeded: false,
    actionText: "",
    actionLink: "",
  });

  const [notify, setNotify] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const notifyRef = ref(db, "notification");
    onValue(notifyRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setIsEnabled(data.isEnabled || false);
        setNotify({
          heading: data.heading,
          notifyBody: data.notifyBody,
          isActionBtnNeeded: data.isActionBtnNeeded,
          actionText: data.actionText,
          actionLink: data.actionLink,
        });
      }
    });
  }, []);

  const handleToggle = async () => {
    const db = getDatabase();
    const notifyRef = ref(db, "notification");

    try {
      await update(notifyRef, { isEnabled: !isEnabled });
      setIsEnabled(!isEnabled);
    } catch (error) {
      console.error("Error toggling notification:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase();
    const notifyRef = ref(db, "notification");
    const newData = { ...formData, isEnabled };
    try {
      await set(notifyRef, newData);
      console.log("Form submitted with data:", newData);
      setFormData({
        heading: "",
        notifyBody: "",
        isActionBtnNeeded: false,
        actionText: "",
        actionLink: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <TabHead tabHead="Manage Notifications" />
      <div className={style.notifyStatus}>
        <p>Notification Enable Status </p>
        <label className="switch">
          <input type="checkbox" checked={isEnabled} onChange={handleToggle} />
          <div className="slider">
            <div className="circle">
              <svg
                className="cross"
                viewBox="0 0 365.696 365.696"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  data-original="#000000"
                  fill="currentColor"
                  d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
                ></path>
              </svg>
              <svg
                className="checkmark"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class=""
                  data-original="#000000"
                  fill="currentColor"
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                ></path>
              </svg>
            </div>
          </div>
        </label>
      </div>
      <div className={style.notification}>
        <p style={{fontWeight: "bold", color: "#002D47"}}>Notification Preview</p>
        <div className={style.msgConatiner} >
          <p style={{fontSize:"16px" ,fontWeight: "bold", color: "#002D47"}} >{notify.heading}</p>
          <p style={{fontSize:"14px" , color: "#005788"}} >{notify.notifyBody}</p>
          <div className={style.btnContainer} >
            {notify.isActionBtnNeeded && <a className={style.actionBtn} href={notify.actionLink}>{notify.actionText}</a>}
            <a className={style.dismissBtn} href="#" >Dismiss</a>
          </div>
        </div>
      </div>
      <div className="notificationForm">
        <form onSubmit={handleSubmit} className="formContainer">
          <div className="inputFieldBox inputFieldBoxXL">
            <label htmlFor="heading">Notify Heading</label>
            <input
              required
              id="heading"
              type="text"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
              placeholder="Notify Heading"
            />
          </div>
          <div className="inputFieldBox inputFieldBoxXL">
            <label htmlFor="notification">Notification</label>
            <input
              id="notification"
              required
              type="text"
              name="notifyBody"
              value={formData.notifyBody}
              onChange={handleChange}
              placeholder="Notification"
            />
          </div>

          <div className="inputFieldBox inputFieldBoxXL">
            <label htmlFor="isActionBtnNeeded">Action Required</label>
            <input
              type="checkbox"
              name="isActionBtnNeeded"
              checked={formData.isActionBtnNeeded}
              onChange={handleChange}
            />
          </div>

          {formData.isActionBtnNeeded && (
            <div className={style.link} >
              <div className="inputFieldBox inputFieldBoxXL">
                <label htmlFor="actionText">Action Text</label>
                <input
                  id="actionText"
                  required
                  type="text"
                  name="actionText"
                  value={formData.actionText}
                  onChange={handleChange}
                  placeholder="Action Text"
                />
              </div>
              <div className="inputFieldBox inputFieldBoxXL">
                <label htmlFor="actionLink">Link</label>
                <input
                  id="actionLink"
                  required
                  type="text"
                  name="actionLink"
                  value={formData.actionLink}
                  onChange={handleChange}
                  placeholder="URL"
                />
              </div>
            </div>
          )}

          <button type="submit" className="primaryAddBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Notification;
