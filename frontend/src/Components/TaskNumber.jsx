function TaskNumber({tasks}) {
    return (
        <span className="inline-flex items-center whitespace-nowrap text-blue-700 mb-2">
            Number of tasks to complete: {tasks}
        </span>
    );
}

export default TaskNumber;