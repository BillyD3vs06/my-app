import React, { Component } from "react";

class TaskList extends Component {

    state = {
        selectedTask: null,
        touchStartY: 0,
        touchEndY: 0
    };

    // Phone UX
    handleTouchStart = (e) => {
        this.setState({ touchStartY: e.touches[0].clientY });
    };

    handleTouchMove = (e) => {
        this.setState({ touchEndY: e.touches[0].clientY });
    };

    handleTouchEnd = () => {
        const { touchStartY, touchEndY } = this.state;

        const distance = touchEndY - touchStartY;

        // Swipe down 100 pixels or more closes task card
        if (distance > 100) {
            this.closeTask();
        }
    };

    // Locks scroll when task card is open
    componentDidUpdate(prevProps, prevState) {
        if (!prevState.selectedTask && this.state.selectedTask) {
            document.body.style.overflow = "hidden";
        }

        if (prevState.selectedTask && !this.state.selectedTask) {
            document.body.style.overflow = "auto";
        }
    }

    componentWillUnmount() {
        document.body.style.overflow = "auto";
    }

    // Open/Close task cards
    openTask = (task) => {
        this.setState({ selectedTask: task });
    };

    closeTask = () => {
        this.setState({ selectedTask: null });
    };

    render() {
    return (
        <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
            <h2 className="text-xl font-bold mb-4">Tasks</h2>

            <div className="space-y-4">
                {this.props.tasks.map((task, index) => (
                    <div
                        key={index}
                        onClick={() => this.openTask(task)}
                        className="border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer"
                    >
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">
                            {task.taskTitle}
                        </h3>

                        <div className="text-sm text-gray-600 flex justify-between mt-2">
                            <p>
                                <span className="font-medium">Status: {task.status}</span> 
                            </p>
                            <p>
                                <span className="font-medium">Due: {task.dueDate}</span>  
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            
            {this.state.selectedTask && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
                    onClick={this.closeTask}
                >
                    
                    <div 
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={this.handleTouchStart}
                        onTouchMove={this.handleTouchMove}
                        onTouchEnd={this.handleTouchEnd}
                        className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative"
                    >
                        
                        <button
                            onClick={this.closeTask}
                            className="absolute top-2 right-2 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        <h2 className="text-xl font-bold mb-3 text-blue-700">
                            {this.state.selectedTask.taskTitle}
                        </h2>

                        <p className="text-gray-700 mb-4">
                            {this.state.selectedTask.taskDescription}
                        </p>

                        <div className="text-sm text-gray-600 space-y-2">
                            <p><span className="font-medium">Status:</span> {this.state.selectedTask.status}</p>
                            <p><span className="font-medium">Due date:</span> {this.state.selectedTask.dueDate}</p>
                            <p><span className="font-medium">Created at:</span> {this.state.selectedTask.createdAt}</p>
                            <p><span className="font-medium">Assigned by:</span> {this.state.selectedTask.assignedBy}</p>
                            <p><span className="font-medium">Assigned to:</span> {this.state.selectedTask.assignTo}</p>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
}



export default TaskList;