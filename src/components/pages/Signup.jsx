import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SignupForm from '../SignupForm'
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";


const Signup = () => {
    const { currentUser } = useAuth();
    console.log(currentUser);
    let history = useHistory();
    if (currentUser) {
        history.push("/browse");
    }


    return (
        <div>
            <Header />
            <SignupForm />
            <Footer />
        </div>
    )
}

export default Signup
