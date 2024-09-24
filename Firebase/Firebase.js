// Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp6IH5_6t53t_T33KjDfkVlSqcjvKx1EY",
  authDomain: "blog-3f535.firebaseapp.com",
  projectId: "blog-3f535",
  storageBucket: "blog-3f535.appspot.com",
  messagingSenderId: "1016320684531",
  appId: "1:1016320684531:web:ced30703abe37735806286",
  measurementId: "G-3321LVVG6Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider ,db};
