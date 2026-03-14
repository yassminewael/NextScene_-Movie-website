import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError("All fields are required");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Enter a valid email");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        setError("");
        alert("Sign Up successful!"); // هنا هتحطي كود تسجيل حقيقي
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="auth-btn" type="submit">Sign Up</button>
                    {error && <p className="error-message">{error}</p>}
                </form>
                <p>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;