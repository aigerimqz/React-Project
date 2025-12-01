// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp1-uRzYFQQhzwoMa48BcBOqXEK0ydoA0",
  authDomain: "saiahat-app.firebaseapp.com",
  projectId: "saiahat-app",
  storageBucket: "saiahat-app.firebasestorage.app",
  messagingSenderId: "186267635628",
  appId: "1:186267635628:web:63a1bcf33293628b69b409",
  measurementId: "G-ME50V8KPL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);