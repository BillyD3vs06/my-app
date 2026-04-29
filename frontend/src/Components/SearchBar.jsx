function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="w-full">
            <input 
                type="text" 
                placeholder="Search for a task by its title, description or delegator" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
                    w-full
                    border border-blue-500
                    rounded-2xl
                    px-4 py-2
                    mt-2
                    text-sm sm:text-base
                    hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2 focus:ring-blue-500
                "
            />
        </div>
    );
}

export default SearchBar;