// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estatehub-e2ba2.firebaseapp.com",
  projectId: "estatehub-e2ba2",
  storageBucket: "estatehub-e2ba2.appspot.com",
  messagingSenderId: "930752859286",
  appId: "1:930752859286:web:4243fd90dee7a5d47b06b7",
  measurementId: "G-ZCZLMB9MBM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
