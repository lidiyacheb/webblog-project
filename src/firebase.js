import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5RuzBR3Ws6P274pgNr-NR1tasDcAy7Yw",
    authDomain: "event-blog-f40bd.firebaseapp.com",
    projectId: "event-blog-f40bd",
    storageBucket: "event-blog-f40bd.firebasestorage.app",
    messagingSenderId: "910490401364",
    appId: "1:910490401364:web:0a5fcc56e7e59110768bc1",
    measurementId: "G-BLL6NFKXE6"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);