// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5pCFgV4TNqSSAbIQVVGpKPRMx0NTSkkU",
  authDomain: "doctors-97d4a.firebaseapp.com",
  projectId: "doctors-97d4a",
  storageBucket: "doctors-97d4a.appspot.com",
  messagingSenderId: "474614884743",
  appId: "1:474614884743:web:973befd8a6ab1564c98b22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;