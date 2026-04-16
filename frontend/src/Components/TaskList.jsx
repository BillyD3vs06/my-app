import React, { Component } from "react";

class TaskList extends Component {
    render() {
        return (
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
                <h2 className="text-xl font-bold mb-4">Tasks</h2>

                <div className="space-y-4">
                    {this.props.tasks.map((task, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                        >
                            {/* Titel */}
                            <h3 className="text-lg font-semibold text-blue-700 mb-2">
                                {task.taskTitle}
                            </h3>

                            {/* Beskrivning */}
                            <p className="text-gray-700 mb-3">
                                {task.taskDescription}
                            </p>

                            {/* Metadata */}
                            <div className="text-sm text-gray-600 space-y-1">
                                <p>
                                    <span className="font-medium">Assigned to:</span> {task.assignTo}
                                </p>
                                
                                <p>
                                    <span className="font-medium">Assigned by:</span> {task.assignedBy}
                                </p>

                                <p>
                                    <span className="font-medium">Status:</span> {task.status}
                                </p>

                                <p>
                                    <span className="font-medium">Created:</span> {task.createdAt}
                                </p>

                                <p>
                                    <span className="font-medium">Due:</span> {task.dueDate}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}



export default TaskList;