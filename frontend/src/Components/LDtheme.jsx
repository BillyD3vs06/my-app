import { useState } from "react";

function LDtheme() {
    const [dark, setDark] = useState(false);

    return (
        <div className="w-50 mt-2">
            <button
                onClick={() => setDark(!dark)}
                className={`font-bold text-right border border-black rounded-md px-4 py-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    dark ? "bg-black text-white" : "bg-white text-black"
                }`}
            >
                Black/White theme
            </button>
        </div>
    );
}

export default LDtheme;