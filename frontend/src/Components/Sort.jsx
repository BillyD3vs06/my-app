import { useState } from "react";

function Sort({setTasks, tasks}) {

    const [times, setTimes] = useState(0);

    function sortTasks(tasks) {

        
        const newTimes = times + 1;
        setTimes(newTimes);

        let remainder = newTimes % 4;

        const sortMsg = [

            "Tasks sorted by the most urgent task first", 
            "Tasks sorted alphabetically by its titles",
            "Tasks sorted alphabetically by its delegator's name",
            "Tasks sorted by the oldest first"
        ];

        let sortedTasks = [...tasks];

        switch(remainder) {

            // Sorting alphabetically by title
            case 1:
                console.log(sortMsg[1]);
                sortedTasks.sort((a, b) => 
                    (a.taskTitle || "").localeCompare(b.taskTitle || "")
                );
                break;

            // Sorting alphabetically by admin
            case 2:
                console.log(sortMsg[2]);
                sortedTasks.sort((a, b) =>
                    (a.assignedBy || "").localeCompare(b.assignedBy || "")
                );
                break;

            // Sorting by oldest task at the top
            case 3:
                console.log(sortMsg[3]);
                sortedTasks.sort((a, b) => 
                    new Date(a.createdAt) - new Date(b.createdAt)
                );
                break;
        
            // Sorting by the most urgent tasks
            case 0:
                console.log(sortMsg[0]);
                sortedTasks.sort((a, b) =>
                    new Date(a.dueDate) - new Date(b.dueDate)
                );
                break;
        }
        setTasks(sortedTasks);
    }

    return (
        <div className="flex justify-end w-full mt-2">
            <button onClick={() => sortTasks(tasks)} className="
                font-bold
                border
                bg-blue-700
                border-black
                rounded-md
                px-4 py-2
                cursor-pointer
                transition-transform duration-200
                hover:scale-105
                text-white
                hover:bg-blue-800
                text-sm sm:text-base
                w-full sm:w-auto
            ">
                Sort Tasks
            </button>
        </div>
    );
}

export default Sort;