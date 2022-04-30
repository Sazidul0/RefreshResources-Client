// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwXH81zeZ5wRSjd026U7a2RG4LWgMYlZI",
    authDomain: "refresh-resources.firebaseapp.com",
    projectId: "refresh-resources",
    storageBucket: "refresh-resources.appspot.com",
    messagingSenderId: "72306979385",
    appId: "1:72306979385:web:4cb5ac64545bbbff1813e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;