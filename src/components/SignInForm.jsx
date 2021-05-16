import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";

const SigninForm = () => {
    const { signin } = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        //console.log(data);
        signin(data.email, data.password)
    };



    return (
        <section className="signInComponent">
            <div className="container">
                <div className="col-md-12">
                    <div className="formWrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2>Sign In</h2>
                            <input required type="email" autoComplete="off" name="email" placeholder="Email Address" {...register("email")} />
                            <input required type="password" autoComplete="off" name="password" placeholder="Password" {...register("password")} />
                            <input type="submit" value="Sign In" />
                            <div className="needhelp">
                                <div>
                                    <input type="checkbox" /> Remember Me
                                </div>
                                <div>
                                    <Link to="/needhelp">Need Help ?</Link>
                                </div>
                            </div>
                            <div className="signupMeta">
                                <p>New to Netflix ? <Link to="/signup">Sign Up</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SigninForm
