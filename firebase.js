import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCjO33faHHSE-H0R9qEt-Y_aeFWcX1EMXQ",
  authDomain: "sample-auth-c4d89.firebaseapp.com",
  projectId: "sample-auth-c4d89",
  storageBucket: "sample-auth-c4d89.appspot.com",
  messagingSenderId: "1045917940474",
  appId: "1:1045917940474:web:ba8fc900e2ad94a8c5a743",
  measurementId: "G-SXT8170976"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db
