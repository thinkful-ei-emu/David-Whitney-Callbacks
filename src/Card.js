import React from 'react';
import './Card.css';


export default function Card(props) {
  console.log("Next is props!")
  console.log(props.present)

  return (
    <div className='Card'>
      <button
        type='button' onClick = {props.present} 
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
