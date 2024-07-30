// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlmXfxWK6J1UgeaCk8RKc9fjalmPElRiQ",
  authDomain: "aunthetictation.firebaseapp.com",
  projectId: "aunthetictation",
  storageBucket: "aunthetictation.appspot.com",
  messagingSenderId: "130464689418",
  appId: "1:130464689418:web:27474dd1d4d20edbc09ef3",
  measurementId: "G-QD4T4YXJ3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};
