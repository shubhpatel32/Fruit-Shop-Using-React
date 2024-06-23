import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Reset errors
        setEmailError('');
        setPasswordError('');

        // Validation
        let isValid = true;
        if (!email) {
            setEmailError('Email is required.');
            isValid = false;
        }
        if (!password) {
            setPasswordError('Password is required.');
            isValid = false;
        }

        // Submit if valid
        if (isValid) {
            // Perform login logic here (e.g., API call)
            console.log('Logging in with:', email, password);
        }
    };

    return (
        <div>
            <section className="login">
                <form onSubmit={handleLogin} className="login-form">
                    <h1>Login</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        className="box"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p className="error">{emailError}</p>}
                    <input
                        type="password"
                        placeholder="Password"
                        className="box"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <p className="error">{passwordError}</p>}
                    <div className="remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <input type="submit" value="Login" className="btn" />
                    <p>
                        Forgot your password? <Link to="#">Click here</Link>
                    </p>
                    <p>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </form>
            </section>
        </div>
    );
}

export default Login;
