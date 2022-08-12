// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbaYzvq_B-7Jzw1LJoZWO--4y3g_oJC3Q",
  authDomain: "carwarehouse-a72b1.firebaseapp.com",
  projectId: "carwarehouse-a72b1",
  storageBucket: "carwarehouse-a72b1.appspot.com",
  messagingSenderId: "370885806057",
  appId: "1:370885806057:web:ce3c31f93da47732bbed78"
  /* ----------------------------------------- */
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)


export default auth;