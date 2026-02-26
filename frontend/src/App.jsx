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
  const [count, setCount] = useState(0)

  return (
    <>
    <Title/>
    <ShowAU/>
    <LDtheme/>
    <div>
      <SearchBar/>
      <TaskList></TaskList>
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
