import { useState } from "react";

function TaskForm() {

    const [formData, setFormData] = useState({
        taskTitle: "",
        taskDescription: "",
        assignTo: "",
        assignedBy: "",
        createdAt: "",
        dueDate: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    const handleAbort = () => {
        setFormData({
            taskTitle: "",
            taskDescription: "",
            assignTo: "",
            assignedBy: "",
            createdAt: "",
            dueDate: ""
        });
    };


    return (
        <div className="w-full max-w-2xl mx-auto mt-10 p-6 border border-black rounded-lg shadow-md"> 
            <h2 className="text-2xl font-bold mb-6 text-center">
                Create New Task
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

             { /* "Task Title" box */ }

                <div className="flex flex-col">
                    <label className="font-semibold mb-1">Task Name</label>
                    <input 
                        type="text"
                        name="taskTitle"
                        value={formData.taskTitle}
                        onChange={handleChange}
                        className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />
                </div>

            {/* "Task Description" box */} 

            <div className="flex flex-col">
                <label className="font-semibold mb-1">Description</label>
                <textarea 
                    name="taskDescription" 
                    value={formData.taskDescription}
                    onChange={handleChange}
                    rows="4"
                    className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    required
                />
            </div>

            {/* "Assign To" box*/}

            <div className="flex flex-col">
                <label className="font-semibold mb-1">Assign To</label>
                <input 
                    type="text"
                    name="assignTo"
                    value={formData.assignTo}
                    onChange={handleChange}
                    className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
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
                    value={formData.assignedBy}
                    onChange={handleChange}
                    className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                />
            </div>

            {/* Dates box (createdAt, dueDate) */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col">
                <label className="font-semibold mb-1">Created Date</label>
                <input 
                    type="date"
                    name="createdAt"
                    value={formData.createdAt}
                    onChange={handleChange}
                    className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                />
            </div>
            
            <div className="flex flex-col">
                <label className="font-semibold mb-1">Due Date</label>
                <input 
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                />

            </div>
        </div>

        {/* Buttons (Submit, Abort) */}

        <div className="grid grid-cols-2 gap-4 mt-4">
            <button
                type="button"
                onClick={handleAbort}
                className="border border-black font-bold py-2 rounded-md transition-transform duration-200 hover:scale-105"
            >
                Abort
            </button>


            <button 
                type="submit"
                className="bg-black text-white font-bold py-2 rounded-md transition-transform duration-200 hover:scale-105"
            >
                Create Task
            </button>
        </div>

        </form>
    </div>
    );
}

export default TaskForm;