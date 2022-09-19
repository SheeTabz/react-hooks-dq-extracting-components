import React from "react";
import { messages, contacts } from "../data";
import MainSection from "./MainSection";
import SideMenu from "./SideMenu";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
    <SideMenu/>
     <MainSection/>
      
     
    </div>
  );
}

export default App;
