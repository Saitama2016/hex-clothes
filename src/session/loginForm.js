import React from 'react';
import { reduxForm, Field, focus, SubmissionError } from 'redux-form';
import { login } from '../actions/auth';
import { SideNav } from '../navigation/sideNav';
import { TopNav } from '../navigation/topNav';
import Input from '../input';
import { required, nonEmpty } from '../validators';
import './loginForm.css';

class Login extends React.Component {
    
    onSubmit(values) {
        return this.props
            .dispatch(login(values.loginUsername, values.loginPassword))
            .catch(err => {
                let { code, reason, message } = err;
                message = 
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
                if (reason === 'ValidationError' || code === 401) {
                    throw new SubmissionError({
                        _error: message
                    })
                }
                throw new SubmissionError({
                    _error: 'Error submitting Login Form'
                })
            });
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <li className='formRow message messageSuccess'>
                    Form successfully submmitted!                
                </li>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <li className='formRow message messageError'>
                    {this.props.error}
                </li>
            );
        }

        return (
            <div>
            <header>
                <i onClick={() => document.getElementById("mySidenav").style.width = "500px"} className="fas fa-bars"></i>
                <h1 className="App-logo">HexClothes</h1>
                <h2 className="App-title">Make outfits that complement you!</h2>
                <TopNav />
                <SideNav />
            </header>
            <fieldset className='loginFormContainer'>
                <legend><h3>Login</h3></legend>
                <form id='login'
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}
                >
                    <ul className='formWrapper'>
                        <li className='formRow'>
                            <Field 
                                type='text'
                                name='loginUsername'
                                component={Input}
                                label='Username'
                                validate={[required, nonEmpty]}
                            />
                        </li>
                        <li className='formRow'>
                            <Field 
                                type='password'
                                name='loginPassword'
                                component={Input}
                                label='Password'
                                validate={[required, nonEmpty]}
                            />
                        </li>
                        <li className='formRow hidden' id='loginErrorRow' hidden>
                            <p id='loginError'></p>
                        </li>
                        {successMessage}
                        {errorMessage}
                        <li className='formRow buttonRow'>
                            <button
                                type='submit'
                                id='loginButton'
                                disabled={this.props.pristine || this.props.submitting}
                            >
                            Login                                
                            </button>
                        </li>
                    </ul>
                </form>
            </fieldset>
            </div>
        )
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', Object.keys(errors)[0]))
})(Login);