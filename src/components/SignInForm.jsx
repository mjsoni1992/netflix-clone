import React from 'react'
import { Link } from "react-router-dom";
const SigninForm = () => {
    return (
        <section className="signInComponent">
            <div className="container">
                <div class="col-md-12">
                    <div className="formWrapper">
                        <form>
                            <input type="text" name="email" placeholder="Email Address" />
                            <input type="password" name="password" placeholder="Password" />
                            <input type="submit" value="Sign In" />
                            <div className="needhelp">
                                <div>
                                    <input type="checkbox" /> Remember Me
                                </div>
                                <div>
                                    <Link to="/needhelp">Need Help</Link>
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
