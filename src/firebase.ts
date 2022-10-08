import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAx6yN6LAzgT3SclCYvFPvVtVfi-w-NmUM",
    authDomain: "liffgitecvn.firebaseapp.com",
    projectId: "liffgitecvn",
    storageBucket: "liffgitecvn.appspot.com",
    messagingSenderId: "1028750384279",
    appId: "1:1028750384279:web:d433a56063d8aa27afddd2",
    measurementId: "G-GBSQHMK9RK"
  };

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}