// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp6IH5_6t53t_T33KjDfkVlSqcjvKx1EY",
  authDomain: "blog-3f535.firebaseapp.com",
  projectId: "blog-3f535",
  storageBucket: "blog-3f535.appspot.com",
  messagingSenderId: "1016320684531",
  appId: "1:1016320684531:web:ced30703abe37735806286",
  measurementId: "G-3321LVVG6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);  // Correct way to initialize Firestore
const auth = getAuth(app);     // Correct way to initialize Auth

export { db, auth };
