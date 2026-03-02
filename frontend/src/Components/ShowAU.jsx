import { useState } from "react";

function ShowAU() {

    let [isAdmin, identifyRole] = useState(true);

    // isAdmin = false;
    
    

    return (
        <div className="w-65 mt-2">
            <p className="font-bold text-left">
                {isAdmin ? "Welcome Administrator" : "Welcome User"}
            </p>
        </div>
    );
}

export default ShowAU;