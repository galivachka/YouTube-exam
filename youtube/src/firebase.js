// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAaRlGyAOLqPekkPEhMZ_2Ncp5olhb4OI",
  authDomain: "yotube-last.firebaseapp.com",
  projectId: "yotube-last",
  storageBucket: "yotube-last.appspot.com",
  messagingSenderId: "725543061978",
  appId: "1:725543061978:web:cb9548238063fcc74b18e3",
  measurementId: "G-66CZ4WGFTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);