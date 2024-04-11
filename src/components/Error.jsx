import React from 'react'
import styles from "./Error.module.css"

const Error = () => {
  return (
    <div className={styles.msgContainer}>
        <p className={styles.msgTxt}>Incorrect Username or Password</p>
    </div>
  )
}

export default Error