// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Your Firebase config (already filled in)
const firebaseConfig = {
    apiKey: "AIzaSyDiJ1yx4q4LMRV9YDGxRz2hCnRdz-Y5MsU",
    authDomain: "miranda-896a1.firebaseapp.com",
    projectId: "miranda-896a1",
    storageBucket: "miranda-896a1.appspot.com",
    messagingSenderId: "748560068626",
    appId: "1:748560068626:web:eb997e66f5ba314eb428cb",
    measurementId: "G-C5J7MBLCR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth
export const auth = getAuth(app);
