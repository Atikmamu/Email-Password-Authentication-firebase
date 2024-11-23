// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5-as6Vb35TlW1IxQqk8voRa-uOLhU81Q",
  authDomain: "email-password-authentic-faa23.firebaseapp.com",
  projectId: "email-password-authentic-faa23",
  storageBucket: "email-password-authentic-faa23.firebasestorage.app",
  messagingSenderId: "1064226517333",
  appId: "1:1064226517333:web:00b6b08597002fb8e43fdc",
  measurementId: "G-7ZGQGV6STG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);