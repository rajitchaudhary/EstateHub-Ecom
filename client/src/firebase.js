// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "piyush-estate.firebaseapp.com",
  projectId: "piyush-estate",
  storageBucket: "piyush-estate.appspot.com",
  messagingSenderId: "67999120134",
  appId: "1:67999120134:web:f1ab68aec302e1e0027c87"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);