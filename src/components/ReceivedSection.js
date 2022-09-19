import React from 'react'

function ReceivedSection(props) {
  return (
    <li className="message received">
              <div className="icon">{props.initial}</div>
              <span className="content">{props.content}</span>
            </li>
  )
}

export default ReceivedSection