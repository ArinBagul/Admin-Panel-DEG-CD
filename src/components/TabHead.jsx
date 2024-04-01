import React from 'react'
import styles from "./TabHead.module.css"

const TabHead = (props) => {
  return (
    <div className={styles.tabHeadingTxt} >
        {props.tabHead}
    </div>
  )
}

export default TabHead