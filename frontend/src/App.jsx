import './App.css'
import Title from "./Components/Title"
import ShowAU from "./Components/ShowAU"
import SearchBar from "./Components/SearchBar"
import TaskList from "./Components/TaskList"
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



// Child
function HomePage( {tasks, setTasks } ) {
  return(
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">

      <Title />
      <ShowAU />
      
      {/* Task container */}
      <div className="border border-blue-700 rounded-md px-3 sm:px-4 py-3 mt-5">
        <SearchBar/>
        <TaskList tasks={tasks} />
      </div>

      {/* Actions and Task count */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-3">

        <div className="flex gap-4">
          <Link to="/TaskPage">
            <Add/> 
          </Link>
        </div>

        <TaskNumber tasks={tasks.length} />
      </div>

      <div className="mt-4">
        <Sort tasks={tasks} setTasks={setTasks}/>
      </div>

      <div className="mt-2">
        <LogMessage/>
      </div>

      <div className="mt-4">
        <LogOut/>
      </div>
      

    </div>
  );
}

// Child
function TaskPage({ onCreateTask }) {
  return <CreateTaskWithNavigation onCreateTask={onCreateTask} />;
}

// Child
function SignInPage() {
  return <SignIn/>;
}

// Child
function SignUpPage() {
  return <SignUp/>;
}


//Parent
function App() {

  const [tasks, setTasks] = useState([]);
  

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage tasks={tasks} setTasks={setTasks} />} />
          <Route path='/TaskPage' element={<TaskPage onCreateTask={createTask} />} />
          <Route path='/SignInPage' element={<SignInPage />} />
          <Route path='/SignUpPage' element={<SignUpPage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;