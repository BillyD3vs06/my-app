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
import SignUp from './Components/SignUp'
import CreateTaskWithNavigation from './Components/TaskForm';

import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";




function HomePage( {tasks} ) {

  

  return(
    <>

      <Title />
      <ShowAU />
      <LDtheme />

      <div className="border border-black rounded-md px-4 py-2 mt-5">
        <div>
          <SearchBar />
          <TaskList tasks={tasks} />
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex gap-4">
          <div>
            <Link to="/TaskPage"><Add/> </Link>
          </div>
        </div>
        <TaskNumber/>
      </div>

      <Sort/>
      <LogMessage/>
      <Link to="/SignInPage"> {<LogOut/>} </Link>

    </>
  );
}

function TaskPage({ onCreateTask }) {
  return(
     <CreateTaskWithNavigation onCreateTask={onCreateTask} />
  );
}

function SignInPage() {
  return(

    <SignIn/>

  );
  

}

function SignUpPage() {
  return(

    <SignUp/>

  );
}



function App() {

  const [tasks, setTasks] = useState([]);
  

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<HomePage tasks={tasks} />} />
        <Route path='/TaskPage' element={<TaskPage onCreateTask={createTask} />} />
        <Route path='/SignInPage' element={<SignInPage />} />
        <Route path='/SignUpPage' element={<SignUpPage/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;