import React from 'react';

export default function signUp() {
    return (
        <div>
            <h3>Just 1 step away!</h3>
            <form className="signUpForm">
                <fieldset>
                    <label>Username: </label>
                    <input type="text" pattern=".{1,}" required title="1 characters minimum" required/>
                    <br />
                    <label>Password: </label>
                    <input type="password" pattern=".{10, 72}" required title="10 characters minimum" required/>
                    <br />
                    <label>First Name:</label>
                    <input type="text" required/>
                    <br />
                    <label>Last Name:</label>
                    <input type="text" required/>
                    <br />
                    <label>Email:</label>
                    <input type="email" required/>
                    <br />
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
            <br />
            <a href="login">Login</a>
        </div>
    );
}