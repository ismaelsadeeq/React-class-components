import React from 'react'
import Person from './Person'

function NameList() {
  const names = ["sadeeq","Abubakr","ismail","sadeeq"]
  // const names = [{
  //   id:1,
  //   name:'Sadeeq',
  //   age:19,
  //   skill:'React'
  // },{
  //   id:2,
  //   name:'Mubarak',
  //   age:19,
  //   skill:'Cooking'
  // },{
  //   id:3,
  //   name:'Ahmed',
  //   age:19,
  //   skill:'Cryptocurrency'
  // }]
  // const nameList = names.map(person => <Person key = {person.name} person={person} />
  // )
const nameList = names.map((name,index) => <h2  key={index} >{index} {name}</h2>)
  return (
    <div>
     {nameList}
    </div>
  )
}

export default NameList
