function LogMessage() {
    return (
        
    
            

<div className="fixed bottom-6 right-6 w-80 text-sm">
    {/* Toggle / Header */}
  <div className="bg-gray-900 text-white px-4 py-2 rounded-t-xl shadow-lg cursor-pointer hover:bg-gray-800 transition">
    <p className="font-semibold flex justify-between items-center">
      Change history
      <span className="text-xs opacity-70">▼</span>
    </p>
  </div>


  {/* Log panel */}
  <div className="bg-white border border-gray-200 rounded-b-xl shadow-xl max-h-60 overflow-y-auto transition-all duration-300">
    <ul className="divide-y divide-gray-100">
      <li className="px-4 py-3 hover:bg-gray-50 transition">
        Changes in the tasks
      </li>
      <li className="px-4 py-3 hover:bg-gray-50 transition">
        Changes in the tasks
      </li>
      <li className="px-4 py-3 hover:bg-gray-50 transition">
        Changes in the tasks
      </li>
      <li className="px-4 py-3 hover:bg-gray-50 transition">
        Changes in the tasks
      </li>
      <li className="px-4 py-3 hover:bg-gray-50 transition">
        Changes in the tasks
      </li>
    </ul>
  </div>

</div>
   
    );
}

export default LogMessage;