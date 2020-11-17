import React from 'react';

const Greet = (props) =>{
  return(
    <div>
        <h1>Hello {props.name} I am a {props.adj}</h1>
        {props.children}
    </div>
  )
} 


export default Greet;