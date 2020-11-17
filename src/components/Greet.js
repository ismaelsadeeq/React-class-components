import React from 'react';

const Greet = ({name,adj}) =>{
  //Or
  // const Greet = (props) =>{
  //   const {name,adj} = props;
  return(
    <div>
        <h1>Hello {name} I am a {adj}</h1>
        {/* {props.children} */}
    </div>
  )
} 


export default Greet;