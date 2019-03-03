import React from 'react';
import { reduxForm, Field, focus, SubmissionError } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth'
import { required, nonEmpty, length, isTrimmed, matches, email } from '../validators';
import  Input from '../input';
import './registerForm.css';

const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches('password')

export class signUp extends React.Component {

    // Create onSubmit value to fetch username, password, and email
    // If successful, redirect user to wardrobe page
    onSubmit(values) {
        //First return props
        return this.props
        //dispatch registerUser to get username, password, and email
        .dispatch(registerUser(values))
        .then(() => this.props.dispatch(login(values.username, values.password)))
        //Catch errors
        .catch(err => {
            const {reason, message} = err;
            
            if (reason === 'ValidationError') {
                throw new SubmissionError({
                    _error: message
                })
            }
            throw new SubmissionError({
                _error: 'Error submitting Signup Form.'
            })
        });
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <li className='formRow message messageSuccess'>
                    Form submitted successfully!
                </li>
            );
        }
        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <li className='message messageError'>
                    {this.props.error}
                </li>
            );
        }
        return (
            <fieldset className='signUpFormContainer'>
                <legend><h3>Sign Up</h3></legend>
                <form id='signUpForm'
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    <ul className='formWrapper'>
                        <li className='formRow'>
                            <Field 
                                type='text'
                                id='firstName'
                                name='firstName'
                                component={Input}
                                label='First Name'
                                validate={[required, nonEmpty]}/>
                        </li>
                        <li className='formRow'>
                            <Field 
                                type='text'
                                id='lastName'
                                name='lastName'
                                component={Input}
                                label='Last Name'
                                validate={[required, nonEmpty]} />
                        </li>
                        <li className='formRow'>
                            <Field 
                                type='text'
                                id='username'
                                name='username'
                                component={Input}
                                label='Username'
                                validate={[required, nonEmpty, isTrimmed]} />
                        </li>
                        <li className='formRow'>
                            <Field 
                                type='email'
                                name='email'
                                component={Input}
                                label='Email'
                                validate={[required, nonEmpty, email]} />
                        </li>
                        <li>
                            <p>Password must be 8 to 72 characters, <br />1 uppercase &amp; lowercase letters, &amp; 1 number</p>
                        </li>
                        <li className='formRow'>
                            <Field 
                                type='password'
                                name='password'
                                component={Input}
                                label='Password'
                                validate={[required, nonEmpty, passwordLength]} />
                        </li>
                        <li className='formRow buttonRow'>
                            <Field 
                                type='password'
                                name='passwordConfirm'
                                component={Input}
                                label='Confirm'
                                validate={[required, nonEmpty, matchesPassword]} />
                        </li>
                        {successMessage}
                        {errorMessage}
                        <li className='formRow'>
                            <button type='submit' id='signUpButton' aria-live='assertive'>Sign Up</button>
                        </li>
                    </ul>
                </form>
            </fieldset>
        )
    }
}

export default reduxForm({
    form: 'signup',
    onSubmitFail: (errors, dispatch) => {
        console.log(errors)
        return dispatch(focus('signup', Object.keys(errors)[0]))
    }
})(signUp);
// export default function signUp() {
//     return (
//         <div className="signUpPage">
//             <h3>Just 1 step away!</h3>
//             <form className="signUpForm">
//                 <fieldset>
//                     <label>Username: </label>
//                     <input type="text" pattern=".{1,}" title="1 characters minimum" required/>
//                     <br />
//                     <label>Password: </label>
//                     <input type="password" pattern=".{10, 72}" title="10 characters minimum" required/>
//                     <br />
//                     <label>First Name:</label>
//                     <input type="text" required/>
//                     <br />
//                     <label>Last Name:</label>
//                     <input type="text" required/>
//                     <br />
//                     <label>Email:</label>
//                     <input type="email" required/>
//                     <br />
//                     <button type="submit">Submit</button>
//                 </fieldset>
//             </form>
//             <br />
//             <a href="login" className="switchToLogin"><p>Login</p></a>
//         </div>
//     );
// }