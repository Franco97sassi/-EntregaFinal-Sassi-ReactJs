import React from 'react'
import { BsFillCartCheckFill } from "react-icons/bs"
import styles from "./cartwidget.module.css";

const Cartwidget = () => {
  return (
  <span className={styles.container}>   <BsFillCartCheckFill  /> 0</span> 

  )
}

export default Cartwidget