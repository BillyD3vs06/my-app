import { useState } from "react";

function ShowAU() {

    let [isAdmin, identifyRole] = useState(true);

    // isAdmin = false;
    
    

    return (
        <div className="w-full mt-2">
            <p className="font-bold text-left">
                Welcome [name], { isAdmin ? "Administrator" : "User" }
            </p>
        </div>
    );
}

export default ShowAU;