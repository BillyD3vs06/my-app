function TaskNumber({tasks}) {
    return (
        <span className="
            inline-flex
            items-center
            whitespace-nowrap
            text-blue-700
            text-sm sm:text-base
        ">
            <span className="font-medium">
                Tasks to complete:
            </span>
            <span className="ml-2">
                {tasks}
            </span>
        </span>
    );
}

export default TaskNumber;