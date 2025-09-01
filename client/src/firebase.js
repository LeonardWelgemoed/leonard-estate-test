// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "leonard-estate.firebaseapp.com",
  projectId: "leonard-estate",
  storageBucket: "leonard-estate.firebasestorage.app",
  messagingSenderId: "427062732016",
  appId: "1:427062732016:web:fece7f2a8295d31a63ce35"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);