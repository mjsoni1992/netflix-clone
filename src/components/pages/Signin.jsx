import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SigninForm from '../SignInForm'
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";


const Signin = () => {
    const { currentUser } = useAuth();
    console.log(currentUser);
    let history = useHistory();
    if (currentUser) {
        history.push("/browse");
    }

    return (
        <div>
            <Header />
            <SigninForm />
            <Footer />
        </div>
    )
}

export default Signin
