import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
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

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);

export default app;
