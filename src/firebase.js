// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "roazhongoalacademy-37173.firebaseapp.com",
  projectId: "roazhongoalacademy-37173",
  storageBucket: "roazhongoalacademy-37173.appspot.com",
  messagingSenderId: "507663141692",
  appId: "1:507663141692:web:924cb9bb8e65c89cf8ec39",
  measurementId: "G-WVEJ669XS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth()
export const db = getFirestore(app);

