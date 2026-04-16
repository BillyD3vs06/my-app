function SearchBar() {
    return (

        <input 
            type="text" 
            placeholder="Search for a task by its title" 
            className="border border-blue-500 rounded-3xl px-4 py-2 m-2 w-287 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}

export default SearchBar;