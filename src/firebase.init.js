// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp3bCN7sZvlJ4K5aZXObCpdXgCTvv5GSQ",
  authDomain: "assignment12-a1569.firebaseapp.com",
  projectId: "assignment12-a1569",
  storageBucket: "assignment12-a1569.appspot.com",
  messagingSenderId: "1002802553088",
  appId: "1:1002802553088:web:8ed7f40b4fd120e5cb53e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;