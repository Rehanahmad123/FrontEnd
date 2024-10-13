import React from 'react'

function TabButton(props) {
    function handleClick(){
        console.log('Hello World');


    }

  return (
    <>
    <li >
      <button onClick={handleClick} >{props.children}</button>
    </li>
    </>
  )
}

export default TabButton
