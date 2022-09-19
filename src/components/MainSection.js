import React from 'react'
import FullMessage from './FullMessage'
import InputSection from './InputSection'


function MainSection() {
  return (
    <main>
        <h2>Messages</h2>
      <FullMessage/>
        <InputSection/>
    </main>
  )
}

export default MainSection