// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5no00iNnvjRPBxDMZfNBnUAJ0n8fVfFA",
  authDomain: "bbq-italian-food.firebaseapp.com",
  projectId: "bbq-italian-food",
  storageBucket: "bbq-italian-food.appspot.com",
  messagingSenderId: "1055263952936",
  appId: "1:1055263952936:web:1e9e28d1d023ef2d25251d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;