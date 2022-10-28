import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
    apiKey: "AIzaSyA1zt7Tz7Dpc2JZ06Z2lLD2Zy7z3gklvR8",
    authDomain: "reactauth-2f976.firebaseapp.com",
    projectId: "reactauth-2f976",
    storageBucket: "reactauth-2f976.appspot.com",
    messagingSenderId: "549669293910",
    appId: "1:549669293910:web:d7b1aee19e78238d0f50f7"
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();