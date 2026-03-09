import { useState } from "react";

function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("User");
    const [error, setError] = useState("");

    const handleSigUp = (e) => {
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
        Send data to API, the sql database
        */

        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setRole("");

        return (
            <div>
                <h2>Skapa Konto</h2>
                <form onSubmit={handleSigUp}>

                </form>

            </div>
        )

    }



}