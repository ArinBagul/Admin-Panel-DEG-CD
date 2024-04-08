import React from "react";
import TabHead from "../components/TabHead";
import Card from "../components/Card";

import styles from "../screens/styles/Dashboard.module.css";

const Contact = () => {
  return (
    <div className="contentContainer">
      <TabHead tabHead="Manage Contacts" />
      <div className={styles.cardsContainer}>
        <Card target="dlno" displayName="DLNO" />
        <Card target="ps" displayName="PSO" />
        <Card target="ac" displayName="AC" />
        <Card target="impo" displayName="IMP Officers" />
        {/* <Card target="dlno" displayName="DLNO" /> */}
      </div>
    </div>
  );
};

export default Contact;
