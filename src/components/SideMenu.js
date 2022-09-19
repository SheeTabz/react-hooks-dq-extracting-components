import React from 'react'
import SideItems from './SideItems'

function SideMenu() {
  return (
    <nav>
         <h2>Contacts</h2>
        <SideItems initial="A"  name="Angela"/>
        <SideItems initial="P" name="Pamela"/>
        <SideItems initial="s" name="Sandra"/>
        <SideItems initial="R" name="Rita"/>
    </nav>
  )
}
 export default SideMenu