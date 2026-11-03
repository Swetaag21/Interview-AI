// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configurationapiKeyapiKey


const firebaseConfig = {
  apiKey:"AIzaSyBsgHizGgsrcxmqRDq-fULuwjnxRh_m1mY",
  //:import.meta.env.VITE_FIREBASE_API_KEY,
   authDomain: "aiwebsite-402c9.firebaseapp.com",
  projectId: "aiwebsite-402c9",
  storageBucket: "aiwebsite-402c9.firebasestorage.app",
  messagingSenderId: "464670080924",
  appId: "1:464670080924:web:f66bc9d34cfe53c0105259"
};

///chat
console.log("Firebase API key loaded:", Boolean(import.meta.env.VITE_FIREBASE_API_KEY));
console.log("Firebase API key:", import.meta.env.VITE_FIREBASE_API_KEY?.slice(0, 8));

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
