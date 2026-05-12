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
function HomePage({tasks, prevNumTasks, setTasks, searchTerm, setSearchTerm, editTask}) {

  const filteredTasks = tasks.filter(task => 
    (task.taskTitle || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (task.taskDescription || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (task.assignedBy || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return(
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">

      <Title />
      <ShowAU />
      
      {/* Task container */}
      <div className="border border-blue-700 rounded-md px-3 sm:px-4 py-3 mt-5">
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        <TaskList tasks={filteredTasks} editTask={editTask}/>
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
        <LogMessage tasks={tasks.length} prevNumTasks={prevNumTasks}/>
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
  const [searchTerm, setSearchTerm] = useState("");
  
  const prevNumTasks = tasks.length;

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const editTask = (updatedTask) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.createdAt === updatedTask.createdAt
        ? updatedTask
        : task

      )
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={ <HomePage 
              tasks={tasks} 
              prevNumTasks={prevNumTasks}
              setTasks={setTasks} 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm}
              editTask={editTask}
            /> } 
          />

          <Route path='/TaskPage' element={<TaskPage onCreateTask={createTask} />} />
          <Route path='/SignInPage' element={<SignInPage />} />
          <Route path='/SignUpPage' element={<SignUpPage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;