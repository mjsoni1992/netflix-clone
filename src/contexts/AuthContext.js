import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { useHistory } from 'react-router-dom';
const AuthContext = React.createContext();




export function useAuth() {

    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    let history = useHistory();
    const [currentUser, setCurrentUser] = useState();


    function signup(email, password, firstName, lastName) {
        return auth.createUserWithEmailAndPassword(email, password).then((result) => {
            return result.user.updateProfile({
                displayName: firstName.value
            })

        });
    }
    function signin(email, password) {
        return auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
            console.log("User Signed In");
            var user = userCredential.user;
            console.log(user);

        }).catch((error) => {
            alert("Something Went Wrong!");
        });
    }
    function signout() {

        return auth.signOut().then(() => {

            console.log("User Signed Out");
            history.push("/signin");
            console.log("history called");

        });
    }
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })
    }, []);



    const value = {
        currentUser,
        signup,
        signin,
        signout
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}