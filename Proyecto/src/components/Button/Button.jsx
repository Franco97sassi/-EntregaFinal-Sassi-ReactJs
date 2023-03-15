// const Button=({txtBtn,handleClick})=>{
//   return <button onClick={handleClick}>  {txtBtn}</button>
// }
// export default Button
import styles from './button.module.css'
 
const Button = ({ text, setBtnText, setShowAlert }) => {
    return <button className={styles.btn} onClick={() => { setBtnText("Has clickeado en " + text); setShowAlert(true) }}>{text}</button>
}
export default Button;