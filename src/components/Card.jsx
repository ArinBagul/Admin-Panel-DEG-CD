import React from 'react'
import { Link } from 'react-router-dom';

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
        <div className={styles.cardTitle}>{props.displayName}</div>
        <div className={styles.btnContainer}>
            <Link className={styles.primaryBtn} to={`${props.target}/add`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 19 19" fill="none">
                    <path d="M5.54721 9.5C5.54721 9.34253 5.60977 9.19151 5.72112 9.08016C5.83247 8.96881 5.98349 8.90625 6.14096 8.90625H8.90625V6.14096C8.90625 5.98349 8.96881 5.83247 9.08016 5.72112C9.19151 5.60977 9.34253 5.54721 9.5 5.54721C9.65747 5.54721 9.8085 5.60977 9.91985 5.72112C10.0312 5.83247 10.0938 5.98349 10.0938 6.14096V8.90625H12.859C13.0165 8.90625 13.1675 8.96881 13.2789 9.08016C13.3902 9.19151 13.4528 9.34253 13.4528 9.5C13.4528 9.65747 13.3902 9.8085 13.2789 9.91985C13.1675 10.0312 13.0165 10.0938 12.859 10.0938H10.0938V12.859C10.0938 13.0165 10.0312 13.1675 9.91985 13.2789C9.8085 13.3902 9.65747 13.4528 9.5 13.4528C9.34253 13.4528 9.19151 13.3902 9.08016 13.2789C8.96881 13.1675 8.90625 13.0165 8.90625 12.859V10.0938H6.14096C5.98349 10.0938 5.83247 10.0312 5.72112 9.91985C5.60977 9.8085 5.54721 9.65747 5.54721 9.5Z" fill="#002D47"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.79261 2.98379C8.25665 2.71063 10.7433 2.71063 13.2074 2.98379C14.6537 3.14529 15.8214 4.2845 15.9909 5.73879C16.2838 8.23808 16.2838 10.7627 15.9909 13.262C15.8207 14.7163 14.6529 15.8547 13.2074 16.017C10.7433 16.2902 8.25665 16.2902 5.79261 16.017C4.34624 15.8547 3.17853 14.7163 3.00911 13.262C2.71681 10.7628 2.71681 8.23801 3.00911 5.73879C3.17853 4.2845 4.34703 3.14529 5.79261 2.98379ZM13.0759 4.16337C10.6993 3.89994 8.30072 3.89994 5.92403 4.16337C5.48405 4.21219 5.07338 4.4079 4.75836 4.7189C4.44334 5.0299 4.24236 5.43802 4.1879 5.87733C3.90635 8.28477 3.90635 10.7168 4.1879 13.1243C4.24253 13.5634 4.44358 13.9714 4.75859 14.2822C5.07359 14.593 5.48417 14.7886 5.92403 14.8374C8.28082 15.1003 10.7192 15.1003 13.0759 14.8374C13.5157 14.7885 13.9261 14.5928 14.2409 14.282C14.5558 13.9711 14.7567 13.5633 14.8113 13.1243C15.0928 10.7168 15.0928 8.28477 14.8113 5.87733C14.7565 5.43843 14.5555 5.03076 14.2407 4.72009C13.9258 4.40942 13.5155 4.21386 13.0759 4.16496" fill="#002D47"/>
                </svg>
                <span className={styles.primaryBtnTxt}>Add</span>
            </Link>
            
            <Link className={styles.secondaryBtn} to={`${props.target}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 19 19" fill="none">
                    <path d="M5.54167 5.54166H4.75001C4.33008 5.54166 3.92735 5.70848 3.63042 6.00541C3.33349 6.30234 3.16667 6.70507 3.16667 7.125V14.25C3.16667 14.6699 3.33349 15.0726 3.63042 15.3696C3.92735 15.6665 4.33008 15.8333 4.75001 15.8333H11.875C12.2949 15.8333 12.6977 15.6665 12.9946 15.3696C13.2915 15.0726 13.4583 14.6699 13.4583 14.25V13.4583" stroke="#F0F0F0" strokeLinecap="round" />
                    <path d="M12.6667 3.95833L15.0417 6.33333M16.1381 5.21313C16.4499 4.90133 16.6251 4.47845 16.6251 4.0375C16.6251 3.59656 16.4499 3.17367 16.1381 2.86188C15.8263 2.55008 15.4034 2.37492 14.9625 2.37492C14.5216 2.37492 14.0987 2.55008 13.7869 2.86188L7.125 9.5V11.875H9.5L16.1381 5.21313Z" stroke="#F0F0F0" strokeLinecap="round"/>
                </svg>
                <span className={styles.secondaryBtnTxt}>More Options</span>
            </Link>
        </div>
    </div>
  )
}

export default Card