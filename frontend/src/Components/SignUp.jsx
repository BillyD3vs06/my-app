import { useState } from "react";

function SignUp() {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [userName, setUsername] = useState("");
    const [workEmail, setWorkEmail] = useState("");
    const [employeeId, setEmployeeId] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [phoneNumber, setPhoneNumber] = useState(""); 
    const [role, setRole] = useState("User");

    const [acceptTerCon, setAcceptTerCon] = useState(false);

    const [error, setError] = useState("");

    
 

    const handleSignUp = (e) => {

        e.preventDefault();

        if (
            userName.trim() === "" ||
            password.trim() === "" ||
            workEmail.trim() === ""
        ) {
            setError("Required fields cannot be empty");
            return;
        }

        if (!acceptedTerCon) {
            setError("You must accept terms");
            return;
        }

        setError("");
        
        const userData = {
            firstName,
            lastName,
            employeeId,
            userName,
            workEmail,
            password,
            phoneNumber,
            role
        };

        console.log("userData");

        /*
        API -> Laravel backend, send it to the database
        */

        setFirstName("");
        setLastName("");
        setEmployeeId("");
        setUsername("");
        setWorkEmail("");
        setPassword("");
        setConfirmPassword("");
        setPhoneNumber("");
        setRole("User");
        setAcceptTerCon(false);

        };

        return (
            <div
                className="
                min-h-screen
                bg-gray-100
                flex
                items-center
                justify-center
                px-4
                py-8
                "
            >

                <div
                    className="
                    w-full
                    max-w-2xl
                    bg-white
                    shadow-lg
                    rounded-xl
                    p-6
                    md:p-8
                    "
                >

                    <h1
                        className="
                        text-3xl
                        font-bold
                        text-gray-800
                        mb-2
                        "
                    >
                        Create Account
                    </h1>

                    <p
                        className="
                        text-gray-500
                        mb-6
                        "
                    >
                        Create your employee account
                    </p>

                    <form 
                        onSubmit={handleSignUp}
                        className="space-y-5"
                    >
                        <div
                            className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-4
                            "
                        >
                            <input
                                label="First Name"
                                value={firstName}
                                setter={setFirstName}
                                placeHolder="Indiana"
                                className="
                                w-full
                                p-3
                                rounded-xl

                                bg-blue-50
                                text-slate-800
                                placeholder:text-slate-400

                                border
                                border-blue-200

                                shadow-sm

                                transition-all
                                duration-200

                                focus:outline-none
                                focus:border-blue-600
                                focus:ring-2
                                focus:ring-blue-300

                                hover:border-blue-400
                                hover:bg-blue-100

                                disabled:bg-slate-100
                                disabled:text-slate-400
                                "
                            />

                            <input
                                label="Last Name"
                                value={lastName}
                                setter={setLastName}
                                placeholder="Jones"
                                className="
                                w-full
                                p-3
                                rounded-xl

                                bg-blue-50
                                text-slate-800
                                placeholder:text-slate-400

                                border
                                border-blue-200

                                shadow-sm

                                transition-all
                                duration-200

                                focus:outline-none
                                focus:border-blue-600
                                focus:ring-2
                                focus:ring-blue-300

                                hover:border-blue-400
                                hover:bg-blue-100

                                disabled:bg-slate-100
                                disabled:text-slate-400
                                "
                            />

                            <input
                                label="Employee ID"
                                value={employeeId}
                                setter={setEmployeeId}
                                placeholder="EMP-102"
                                className="
                                w-full
                                p-3
                                rounded-xl

                                bg-blue-50
                                text-slate-800
                                placeholder:text-slate-400

                                border
                                border-blue-200

                                shadow-sm

                                transition-all
                                duration-200

                                focus:outline-none
                                focus:border-blue-600
                                focus:ring-2
                                focus:ring-blue-300

                                hover:border-blue-400
                                hover:bg-blue-100

                                disabled:bg-slate-100
                                disabled:text-slate-400
                                "
                            />

                            <input
                                label="Phone Number"
                                value={phoneNumber}
                                type="text"
                                setter={setPhoneNumber}
                                placeholder="+46 70 123 45 67"
                                className="
                                w-full
                                p-3
                                rounded-xl

                                bg-blue-50
                                text-slate-800
                                placeholder:text-slate-400

                                border
                                border-blue-200

                                shadow-sm

                                transition-all
                                duration-200

                                focus:outline-none
                                focus:border-blue-600
                                focus:ring-2
                                focus:ring-blue-300

                                hover:border-blue-400
                                hover:bg-blue-100

                                disabled:bg-slate-100
                                disabled:text-slate-400
                                "
                            />

                        </div>

                        <input
                            label="Work Email"
                            type="email"
                            value={workEmail}
                            setter={setWorkEmail}
                            placeholder="employee@company.com"
                            className="
                                w-full
                                p-3
                                rounded-xl

                                bg-blue-50
                                text-slate-800
                                placeholder:text-slate-400

                                border
                                border-blue-200

                                shadow-sm

                                transition-all
                                duration-200

                                focus:outline-none
                                focus:border-blue-600
                                focus:ring-2
                                focus:ring-blue-300

                                hover:border-blue-400
                                hover:bg-blue-100

                                disabled:bg-slate-100
                                disabled:text-slate-400
                                "
                        />

                        <input
                            label="Username"
                            value={userName}
                            type="text"
                            setter={setUsername}
                            placeholder="Choose a username"
                            required
                            className="
                                w-full
                                p-3
                                rounded-xl

                                bg-blue-50
                                text-slate-800
                                placeholder:text-slate-400

                                border
                                border-blue-200

                                shadow-sm

                                transition-all
                                duration-200

                                focus:outline-none
                                focus:border-blue-600
                                focus:ring-2
                                focus:ring-blue-300

                                hover:border-blue-400
                                hover:bg-blue-100

                                disabled:bg-slate-100
                                disabled:text-slate-400
                                "
                        />

                        <div
                            className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-4
                            "
                        >
                            <input
                                label="Password"
                                type="password"
                                value={password}
                                setter={setPassword}
                                placeholder="Password"
                                required
                                className="
                                w-full
                                p-3
                                rounded-xl

                                bg-blue-50
                                text-slate-800
                                placeholder:text-slate-400

                                border
                                border-blue-200

                                shadow-sm

                                transition-all
                                duration-200

                                focus:outline-none
                                focus:border-blue-600
                                focus:ring-2
                                focus:ring-blue-300

                                hover:border-blue-400
                                hover:bg-blue-100

                                disabled:bg-slate-100
                                disabled:text-slate-400
                                "
                            />

                            <input
                                label="Confirm Password"
                                type="password"
                                value={confirmPassword}
                                setter={setConfirmPassword}
                                placeholder="Confirm Password"
                                required
                                className="
                                w-full
                                p-3
                                rounded-xl

                                bg-blue-50
                                text-slate-800
                                placeholder:text-slate-400

                                border
                                border-blue-200

                                shadow-sm

                                transition-all
                                duration-200

                                focus:outline-none
                                focus:border-blue-600
                                focus:ring-2
                                focus:ring-blue-300

                                hover:border-blue-400
                                hover:bg-blue-100

                                disabled:bg-slate-100
                                disabled:text-slate-400
                                "
                            />

                        </div>

                        <div>

                            <label
                                className="
                                block
                                text-sm
                                font-semibold
                                text-slate-700
                                mb-2
                                tracking-wide
                                transition-colors
                                duration-200
                                "
                            >
                                Role
                            </label>

                            <select
                                value={role}
                                onChange={(e) => 
                                    setRole(e.target.value)
                                }
                                className="
                                w-full
                                p-3
                                rounded-xl
                                bg-blue-50
                                border
                                border-blue-200
                                text-slate-800

                                shadow-sm

                                transition-all
                                duration-200

                                hover:bg-blue-100
                                hover:border-blue-400

                                focus:outline-none
                                focus:ring-2
                                focus:ring-blue-300
                                focus:border-blue-600
                                "
                            >
                                <option>User</option>
                                <option>Admin</option>

                            </select>

                        </div>

                        <div
                            className="
                            flex
                            items-center
                            gap-3
                            "
                        >
                            <input
                                type="checkbox"
                                checked={acceptTerCon}
                                onChange={(e) => 
                                    setAcceptTerCon(
                                        e.target.checked
                                    )
                                }
                                className="
                                h-4
                                w-4
                                rounded
                                border-blue-300
                                text-blue-600
                                focus:ring-blue-300
                                cursor-pointer
                                "
                            />

                            <span
                                className="
                                text-sm
                                text-gray-600
                                "
                            >
                                Accept terms and conditions
                            </span>

                        </div>

                        {
                            error && (

                                <p
                                    className="
                                    text-red-500
                                    text-sm
                                    "
                                >
                                    {error}
                                </p>
                            )
                        }

                        <button
                            type="submit"
                            className="
                            w-full
                            bg-blue-600
                            hover:bg-blue-700
                            active:bg-blue-800
                            text-white
                            font-semibold
                            py-3
                            rounded-xl
                            shadow-md
                            hover:shadow-lg
                            transition-all
                            duration-200
                            cursor-pointer
                            "
                        >
                            Create Account

                        </button>
                    
                    </form>

                </div>

            </div>
        );
}

function Input({
    label,
    value,
    setter,
    placeholder,
    type = "text",
    required = false
}) {

    return (

        <div>

            <label
                className="
                block
                text-sm
                font-medium
                text-gray-700
                mb-2
                "
            >
                {label}
            </label>

            <input
                type={type}
                value={value}
                required={required}
                placeholder={placeholder}

                onChange={(e) => 
                    setter(e.target.value)
                }

                className="
                    w-full
                    p-3
                    border
                    border-gray-300
                    rounded-lg
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                "
            />

        </div>
    );
}

export default SignUp;