import { useState } from 'react'
import './App.css'
import Title from "./Title"
import ShowAU from "./ShowAU"
import SearchBar from "./SearchBar"
import TaskList from "./TaskList"
import LDtheme from "./LDtheme"
import LogMessage from "./LogMessage"
import TaskNumber from "./TaskNumber"
import Sort from "./Sort"
import Add from "./Add"
import LogOut from "./LogOut"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Title/>
    <ShowAU/>
    <LDtheme/>
    <div>
      <SearchBar/>
      <TaskList/>
    </div>
    <Add/>
    <Sort/>
    <TaskNumber/>
    <LogMessage/>
    <LogOut/>
    
    
    </>
    
  );
}

export default App;
