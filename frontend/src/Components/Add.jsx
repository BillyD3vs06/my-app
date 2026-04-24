function Add({ onOpenForm }) {
    return (
        <div className="w-full sm:w-auto">
            <button 
                onClick={onOpenForm} 
                className="
                    w-full sm:w-auto
                    font-bold
                    border
                    rounded-md
                    px-4 py-2
                    cursor-pointer
                    transition-all duration-200
                    hover:scale-105
                    bg-blue-700
                    text-white
                    hover:bg-blue-800
                    text-sm sm:text-base
                "
            >
                Add Task +
            </button>
        </div>
    );
}

export default Add;