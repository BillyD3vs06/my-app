function TaskNumber({tasks}) {
    return (
        <span className="inline-flex items-center whitespace-nowrap">
            Number of tasks to complete: {tasks}
        </span>
    );
}

export default TaskNumber;