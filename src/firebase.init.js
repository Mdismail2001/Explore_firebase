// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtRsWiHXVBiW_ZjK6pRy4BMd_QGk4DfYU",
  authDomain: "explore-firebase-a3faf.firebaseapp.com",
  projectId: "explore-firebase-a3faf",
  storageBucket: "explore-firebase-a3faf.firebasestorage.app",
  messagingSenderId: "879038260960",
  appId: "1:879038260960:web:41750116e419f46e5b5285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);