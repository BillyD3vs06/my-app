function Add({ onOpenForm }) {
    return (
        <button onClick={onOpenForm} className="w-30 flex ml-auto font-bold border rounded-md px-4 py-2 cursor-pointer transition-all duration-200 hover:scale-105 bg-blue-700 text-white hover:bg-blue-800">
            Add Task +
            </button>
    );
}

export default Add;