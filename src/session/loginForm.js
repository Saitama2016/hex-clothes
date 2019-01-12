import React from 'react';
import './loginForm.css';

export default function Login() {
    return (
        <div>
            <h3>Welcome Back!</h3>
            <form>
                <fieldset>
                <label>Username: </label>
                <input className="loginUsername" type="text" required />
                <label>Password: </label>
                <input className="loginPassword" type="password" required />
                <br />
                <button className="loginButton" type="submit">Submit!</button>
                </fieldset>
            </form>
            <a href="signup" className="switchToSignUp"><p>Sign Up!</p></a>
        </div>
    );
}