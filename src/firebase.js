// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCexg9TziKBYx_jNGtISyk9VWTASI3H5_8",
    authDomain: "ecomerce-react-coderhouse.firebaseapp.com",
    projectId: "ecomerce-react-coderhouse",
    storageBucket: "ecomerce-react-coderhouse.appspot.com",
    messagingSenderId: "661527999444",
    appId: "1:661527999444:web:a9620deda7c82dca741c41",
    measurementId: "G-S1M5679V87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);