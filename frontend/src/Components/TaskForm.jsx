import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);

        let today = new Date();
        const day = String(today.getDate()).padStart(2, "0");
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const year = String(today.getFullYear());

        today = `${year}-${month}-${day}`;

        this.today = today;

        this.state = {
            formData: {
                taskTitle: "",
                taskDescription: "",
                assignTo: "", 
                assignedBy: "",
                createdAt: today,
                dueDate: "",
                status: "Start whenever" 
            }
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreateTask(this.state.formData);
        this.props.navigate("/");
    };


    handleChange = (e) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        });
    };


    handleAbort = () => {
        this.setState({
            formData: {
                taskTitle: "",
                taskDescription: "",
                assignTo: "",
                assignedBy: "",
                createdAt: this.today,
                dueDate: "",
                status: "Start whenever"
            }
        });
        this.props.navigate("/");
    };


    render() {
        return (
            <div className="w-full max-w-2xl mx-auto mt-10 p-6 border border-black rounded-lg shadow-md"> 
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Create New Task
                </h2>

                <form onSubmit={this.handleSubmit} className="flex flex-col gap-4">

                { /* "Task Title" box */ }

                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Task Name</label>
                        <input 
                            type="text"
                            name="taskTitle"
                            value={this.state.formData.taskTitle}
                            onChange={this.handleChange}
                            className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Create a task"
                            required
                        />
                    </div>

                    {/* "Task Description" box */} 

                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Description</label>
                        <textarea 
                            name="taskDescription" 
                            value={this.state.formData.taskDescription}
                            onChange={this.handleChange}
                            rows="4"
                            className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                            placeholder="Essential details that will makes task clearer"
                            required
                        />
                    </div>

                {/* "Assign To" box*/}

                <div className="flex flex-col">
                    <label className="font-semibold mb-1">Assign To</label>
                    <input 
                        type="text"
                        name="assignTo"
                        value={this.state.formData.assignTo}
                        onChange={this.handleChange}
                        className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="John Carpenter"
                        required
                    />
                </div>

                {/* "Assigned By" box 
            
                Change this box so the administrators name gets filled in automatically */}

                <div className="flex flex-col">
                    <label className="font-semibold mb-1">Assigned By</label>
                    <input 
                        type="text"
                        name="assignedBy"
                        value={this.state.formData.assignedBy}
                        onChange={this.handleChange}
                        className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="R.J. MacReady"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mb-1">Status</label>
                    <input  
                        type="text"
                        name="status"
                        value={this.state.formData.status}
                        onChange={this.handleChange}
                        className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        required

                    />
                </div>

            {/* Dates box (createdAt, dueDate) */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="flex flex-col">
                    <label className="font-semibold mb-1">Created At</label>
                    <div 
                        name="createdAt"
                        className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    >
                        {this.today}
                    </div>
                </div>
            
                <div className="flex flex-col">
                    <label className="font-semibold mb-1">Due Date</label>
                    <input 
                        type="date"
                        name="dueDate"
                        value={this.state.formData.dueDate}
                        onChange={this.handleChange}
                        className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />

                </div>
            </div>

            {/* Buttons (Submit, Abort) */}

            <div className="grid grid-cols-2 gap-4 mt-4">
                
                    <button
                        type="button"
                        onClick={this.handleAbort}
                        className="cursor-pointer w-full border border-black font-bold py-2 rounded-md transition-transform duration-200 hover:scale-105"
                    >
                        Abort
                    </button>
                

                
                <button 
                    type="button"
                    className="cursor-pointer w-full border bg-black text-white font-bold py-2 rounded-md transition-transform duration-200 hover:scale-105"
                    onClick={this.handleSubmit}
                >
                    Create Task
                </button>
                
            </div>

            </form>
        </div>
        );
    }
}



function CreateTaskWithNavigation(props) {
  const navigate = useNavigate();
  return <TaskForm {...props} navigate={navigate} />;
}

export default CreateTaskWithNavigation;