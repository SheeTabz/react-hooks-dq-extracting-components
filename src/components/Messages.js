import React from 'react'
import ReceivedSection from './ReceivedSection'
import SentSection from './SentSection'

function Messages() {
  return (
    
    <ul>
     <SentSection initial="E" content="One"/>
    <ReceivedSection initial="P" content="Two"/>
     <SentSection initial="E" content="Three Four Five"/>
     <ReceivedSection initial="P" content="YEEE"/>
    </ul>
  )
}

export default Messages