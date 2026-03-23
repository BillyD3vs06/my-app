import { useState } from "react";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("User");
    const [error, setError] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("The passwords do not match!");
            return;
        }

        if (username.trim() === "" || password.trim() === "") {
            setError("Username or password can not be empty");
            return;
        }

        setError("");

        /*
        Send data to the API, sql database
        */

        // Resets the forum after no error is detected
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setRole("");

        };

        return (
            <div>
                <h2>Create account</h2>
                <form onSubmit={handleSignUp()} className="flex flex-col">

                    <label>Username</label>
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Choose a unique username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="p-2 my-2 text-base border border-gray-300 rounded"
                        required
                    />

                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Choose a strong password"
                        className="p-2 my-2 text-base border border-gray-300 rounded"
                        required
                    />

                    <label>Confirm password</label>
                    <input 
                        type="password"
                        value={confirmPassword}
                        name="confirmedPassword"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        className="p-2 my-2 text-base border border-gray-300 rounded"
                        required
                    />

                    <select 
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="p-2 my-2 text-base border border-gray-300 rounded"
                    >
                        <option value="User">User</option>
                        <option value="Admin">Administrator</option>
                    </select>

                    {error && (
                        <p className="text-red-500 text-sm mt-1">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="mt-4 p-2 text-base cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        );
}

export default SignUp;