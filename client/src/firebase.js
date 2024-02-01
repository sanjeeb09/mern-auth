// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-42607.firebaseapp.com",
  projectId: "mern-auth-42607",
  storageBucket: "mern-auth-42607.appspot.com",
  messagingSenderId: "830321289845",
  appId: "1:830321289845:web:7682b3fb4fe5ecb647e63c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);