import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyApKEMK0BDR4C8bkj3stBoG_tr8C42SmxE",
    authDomain: "netflix-clone-5bb22.firebaseapp.com",
    projectId: "netflix-clone-5bb22",
    storageBucket: "netflix-clone-5bb22.appspot.com",
    messagingSenderId: "320435727702",
    appId: "1:320435727702:web:6f15d3de0c97e3cd7a3af7",
    measurementId: "G-RLQ02194NJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();