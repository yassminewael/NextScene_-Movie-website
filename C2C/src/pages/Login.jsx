import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("All fields are required");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Enter a valid email");
            return;
        }
        setError(""); // لو كله صح
        alert("Login successful!"); // هنا هتحطي الكود الحقيقي للـ login
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
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
                    <button className="auth-btn" type="submit">Sign In</button>
                    {error && <p className="error-message">{error}</p>}
                </form>
                <p>
                    New here? <Link to="/signup">Sign up now</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;