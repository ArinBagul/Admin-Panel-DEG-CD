import React from "react";
import Heading from "../components/Heading";
import styles from "./styles/Dashboard.module.css"
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Heading />
      <div className={styles.cardsContainer}>
        <Card target="place" displayName="Place"/>
        <Card target="ps" displayName="Polling Station" />
        <Card target="team" displayName="Team"/>
        <Card target="contact" displayName="Contact"/>
      </div>
    </div>
  );
};

export default Dashboard;
