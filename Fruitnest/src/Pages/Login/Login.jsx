import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <div className="heading">
                <h1>Login/SignUp</h1>
            </div>
            <section>
                <form action="" className="login-form">
                    <h1>login</h1>
                    <input type="email" placeholder="email" className="box" />
                    <input type="password" placeholder="password" className="box" />
                    <div className="remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">remember me</label>
                    </div>
                    <input type="submit" value="login now" className="btn" />
                    <p>forget password? <Link to="#">click here</Link></p>
                    <p>Do not have an account? <Link to="#">create</Link></p>
                </form>
            </section>
        </div>
    )
}

export default Login
