
import { useState } from "react";

function LogMessage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="
      fixed bottom-4 right-4 
      w-[90vw] sm:w-80 
      max-w-sm
      text-sm
      z-50
    ">
      
      {/* Toggle / Header */}
      <div
        onClick={() => setOpen(!open)}
        className="bg-blue-700 text-white px-4 py-2 rounded-t-xl shadow-lg cursor-pointer hover:bg-blue-800 transition"
      >
        <p className="font-semibold flex justify-between items-center text-sm sm:text-base">
          Change history
          <span
            className={`text-xs opacity-70 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </p>
      </div>

      {/* Log panel */}
      <div
        className={`bg-white border border-gray-200 rounded-b-xl shadow-xl overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="divide-y divide-gray-100">

          {Array(5).fill("Changes in the tasks").map((text, i) => (
            <li
              key={i}
              className="bg-teal-500 text-white px-2 py-2 text-xs sm:text-sm"
            >
              {text}
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}

export default LogMessage;