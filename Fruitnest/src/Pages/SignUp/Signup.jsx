import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();


        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!firstName || !lastName || !email || !password) {
            setError('Please fill in all fields');
            return;
        }


        console.log('Signup details:', { firstName, lastName, email, password });
        setError('');
    };

    return (
        <div>
            <section className="signup">
                <form onSubmit={handleSignup} className="signup-form">
                    <h1>Sign Up</h1>
                    {error && <p className="error">{error}</p>}
                    <input
                        type="text"
                        placeholder="First Name"
                        className="box"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="box"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="box"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="box"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="box"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <input type="submit" value="Sign Up" className="btn" />
                    <p>Already have an account? <Link to="/login">Login </Link></p>
                </form>
            </section>
        </div>
    );
}

export default Signup;
