// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgHfAviMtTyaB716WshSGHlrtDDfmDufE",
  authDomain: "track-haul.firebaseapp.com",
  projectId: "track-haul",
  storageBucket: "track-haul.firebasestorage.app",
  messagingSenderId: "548848588445",
  appId: "1:548848588445:web:3aa326c9adcbe77f8a6674",
  measurementId: "G-KEGWKT3T39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
