// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjO33faHHSE-H0R9qEt-Y_aeFWcX1EMXQ",
  authDomain: "sample-auth-c4d89.firebaseapp.com",
  projectId: "sample-auth-c4d89",
  storageBucket: "sample-auth-c4d89.appspot.com",
  messagingSenderId: "1045917940474",
  appId: "1:1045917940474:web:c624d2815071421ec5a743",
  measurementId: "G-1Y6KCEZ8TP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
