import React from 'react'
import { BsFillCartCheckFill } from "react-icons/bs"
import styles from "./cartwidget.module.css";

const Cartwidget = (props) => {
  return (
    <div className={styles.container2}>
      <BsFillCartCheckFill /> <div className={styles.container}>{props.notifications}</div>
      </div>
      )
}

      export default Cartwidget