import React from 'react'

function SentSection(props) {
  return (
    <li className="message sent">
    <div className="icon">{props.initial}</div>
    <span className="content">{props.content}</span>
  </li>
  )
}

export default SentSection