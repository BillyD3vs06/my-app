function LogOut() {
    return (
        <div className="w-full flex justify-start mt-12">
            <button className="flex items-center gap-2 border bg-blue-700 text-white border-black rounded-md px-4 py-2 cursor-pointer font-bold transition-transform duration-200 hover:scale-105 hover:bg-blue-800">
                &#x2190; Log Out
            </button>
        </div>
    );
}

export default LogOut;