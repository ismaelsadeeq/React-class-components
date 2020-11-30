import React from 'react'
import './myStyle.css'
function Styleheets(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h2 className={className}>Style</h2>
    </div>
  )
}
export default Styleheets;

