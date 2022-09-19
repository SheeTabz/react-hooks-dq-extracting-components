import React from 'react'

function SideItems(props) {
  return (
    <div>
   
        <ul className="contacts">
          <li className="contact">
            <div className="icon">{props.initial}</div>
            {props.name}
          </li>
          </ul>
          </div>
  )
}

export default SideItems