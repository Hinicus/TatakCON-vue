// src/firebase-client.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALyPvVWLz257qpTjo5RdogAX3UnGlvN-M",
  authDomain: "constay-8841b.firebaseapp.com",
  projectId: "constay-8841b",
  storageBucket: "constay-8841b.firebasestorage.app",
  messagingSenderId: "201864426923",
  appId: "1:201864426923:web:81165a5c3f26875b270eee",
  measurementId: "G-BS546Q9BWX",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
