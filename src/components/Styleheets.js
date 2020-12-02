import React from 'react'
import './myStyle.css'
import styles from '../appStyles.module.css'
function Styleheets(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h2 className={ `${className} + font`}>Style</h2>
      <p className={styles.success}>I am sleepy</p>
    </div>
  )
}
export default Styleheets;

