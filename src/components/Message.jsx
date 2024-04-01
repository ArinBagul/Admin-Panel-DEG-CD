import React from 'react'
import styles from "./Message.module.css"

const Message = (props) => {
  return (
    <div className={styles.msgContainer}>
        <p className={styles.msgTxt}>{props.item} is added successfully.<br/> Do you want to add more?</p>
    </div>
  )
}

export default Message