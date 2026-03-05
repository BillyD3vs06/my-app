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
import SignIn from './Components/SignIn'
import TaskForm from './Components/TaskForm'

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";



function App() {
  

  return (
    
    
  <BrowserRouter>
  
    <Title/>
    <ShowAU/>
    <LDtheme/>
    <div className="border border-black rounded-md px-4 py-2 mt-5" >
      <div>
      <SearchBar/>
      <TaskList/>
    </div>
    </div>

    <div className="flex items-center justify-between mt-2">
      <div className="flex gap-4">
        <Link to="/TaskForm"> <Add/> </Link>
      </div>
      <TaskNumber/>
    </div>
    <Sort/>
    <LogMessage/>

    <Link to="/SignIn"> <LogOut/> </Link>  {" "}
      

    <Routes>

      <Route path='/SignIn' element={<SignIn/>}/> 
      <Route path='/TaskForm' element={<TaskForm/>} />

      </Routes>    
      
    
    
  </BrowserRouter>

  );
}

export default App;
