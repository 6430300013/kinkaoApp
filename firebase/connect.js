// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3rdh6pcFR3ZmtrTK52ytVcDVcnV0NO9Q",
    authDomain: "mobile-project-d426e.firebaseapp.com",
    projectId: "mobile-project-d426e",
    storageBucket: "mobile-project-d426e.appspot.com",
    messagingSenderId: "843901661015",
    appId: "1:843901661015:web:2da2ea724d3390e6ebd812",
    measurementId: "G-W0YD3RQJWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app