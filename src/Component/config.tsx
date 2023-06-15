
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDWdoA36jzrZ8vEMiUC7d3_CMufzVUC7ss",
  authDomain: "first-auth-b9f49.firebaseapp.com",
  projectId: "first-auth-b9f49",
  storageBucket: "first-auth-b9f49.appspot.com",
  messagingSenderId: "608998533826",
  appId: "1:608998533826:web:d14e401fbac7906710695b",
  measurementId: "G-DD7Y5X64NL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider =  new GoogleAuthProvider()
export const db = getFirestore(app)

