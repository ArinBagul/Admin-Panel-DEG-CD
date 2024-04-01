import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.navbarContainer} >
      <h1 className={styles.navTitle}>Admin Portal</h1>
      <ul className={styles.linkContainer} id="sidebar">
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/place">Place</NavLink>
        </li>
        <li>
          <NavLink to="/ps">Polling Station</NavLink>
        </li>
        <li>
          <NavLink to="/team">Team</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
