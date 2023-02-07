// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsNqjw4oDIM_Zi-RQuvuQOy5w4hMFI1xU",
  authDomain: "fir-hosting-demo-3103e.firebaseapp.com",
  projectId: "fir-hosting-demo-3103e",
  storageBucket: "fir-hosting-demo-3103e.appspot.com",
  messagingSenderId: "422980129883",
  appId: "1:422980129883:web:be277e762f971dbe4a5b7e",
  measurementId: "G-FDD0JTD70K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
