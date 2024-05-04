import React from "react";
import Heading from "../components/Heading";
import styles from "./styles/Dashboard.module.css";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Heading />
      <div className={styles.cardsContainer}>
        <Card target="notification" displayName="Manage Notification" />
        <Card target="place" displayName="Manage AC" />
        <Card target="ps" displayName="Polling Station" />
        <Card target="team" displayName="Manage Team" />
        <Card target="contact" displayName="Manage Contact" />
      </div>
    </div>
  );
};

export default Dashboard;
