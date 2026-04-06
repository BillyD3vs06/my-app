import React, { Component } from "react";

class TaskList extends Component {
    render() {
        return (
            <div className=" bg-white border border-slate-200 shadow-sm rounded-md">
                <h2 className="text-xl font-bold mb-4"></h2>

                {this.props.tasks.map((task, index) => (
                    <div
                        key={index}
                        className="border p-4 rounded mb-3 shadow"
                    >
                        <h3 className="font-bold">{task.taskTitle}</h3>
                        <p>{task.taskDescription}</p>
                        <p>Assigned by: {task.assignedBy} Status: {task.status}</p>
                        <p>Created at: {task.createdAt} Due sate: {task.dueDate}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default TaskList;