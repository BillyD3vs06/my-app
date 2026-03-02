import { useState } from 'react'
import './App.css'
import Title from "./Components/Title"
import ShowAU from "./Components/ShowAU"
import SearchBar from "./Components/SearchBar"
import TaskList from "./Components/TaskList"
import LDtheme from "./Components/LDtheme"
import LogMessage from "./Components/LogMessage"
import TaskNumber from "./Components/TaskNumber"
import Sort from "./Components/Sort"
import Add from "./Components/Add"
import LogOut from "./Components/LogOut"

function App() {
  

  return (
    <>
    <Title/>
    <ShowAU/>
    <LDtheme/>
    <div className="border border-black rounded-md px-4 py-2 mt-5" >
      <div>
      <SearchBar/>
      <TaskList/>
    </div>
    </div>
    
    <Add/>
    <TaskNumber/>
    <Sort/>
    <LogMessage/>
    <LogOut/>
    
    
    </>
    
  );
}

export default App;
