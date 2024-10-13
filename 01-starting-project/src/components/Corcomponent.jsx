import React from 'react'

function Corcomponent(props) {
  return (
    <div>
     <li>
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
     </li>
      
    </div>
  )
}

export default Corcomponent
