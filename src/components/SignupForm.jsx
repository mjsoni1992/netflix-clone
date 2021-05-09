import React, { useRef } from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Redirect, Route } from "react-router-dom";
const SignupForm = () => {


    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup, currentUser } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(emailRef.current.value, passwordRef.current.value, firstNameRef.current.value, lastNameRef.current.value);
        <Route>
            <Redirect to="/signin" />
        </Route>


    }
    console.log(currentUser);
    return (
        <section className="signInComponent">
            <div className="container">
                <div className="col-md-12">
                    <div className="formWrapper">
                        <form onSubmit={handleSubmit}>
                            <h2>Sign Up</h2>
                            <input ref={firstNameRef} type="text" name="first_name" placeholder="First Name" />
                            <input ref={lastNameRef} type="text" name="last_name" placeholder="Last Name" />
                            <input ref={emailRef} type="email" name="email" placeholder="Email Address" />
                            <input ref={passwordRef} type="password" name="password" placeholder="Password" />
                            <input type="submit" value="Sign Up" />
                            <div className="signupMeta">
                                <p className="text-left">Already have an account?  Please <Link to="/signin">Sign In</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignupForm
