import React, { Component } from "react";

class TaskList extends Component {
    render() {
        return (
            <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Tasks</h2>

                {this.props.tasks.map((task, index) => (
                    <div
                        key={index}
                        className="border p-4 rounded mb-3 shadow"
                    >
                        <h3 className="font-bold">{task.taskTitle}</h3>
                        <p>{task.taskDescription}</p>
                        <p>Assigned to: {task.assignTo}</p>
                        <p>Assigned by: {task.assignedBy}</p>
                        <p>Created at: {task.createdAt}</p>
                        <p>Due date: {task.dueDate}</p>
                        <p>Status: {task.status}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default TaskList;