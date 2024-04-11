import React, { useState } from "react";
import Button from "../components/Button";

import styles from "./LoginScreen.module.css";
import Error from "../components/Error";

function LoginScreen({ onLogin, isError }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <div className={styles.screenContainer}>
      <div className={styles.card}>
      {isError?(< Error />) : null}
        <h2 style={styles.title}>
          <span>Admin</span> Portal
        </h2>

        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="text"
            spellcheck="false"
            placeholder="Username"
            className={styles.email}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.pass}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.login_btn}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
