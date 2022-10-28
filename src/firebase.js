import { initializeApp } from "firebase/app";
const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "reactauth-2f976.firebaseapp.com",
    projectId: "reactauth-2f976",
    storageBucket: "reactauth-2f976.appspot.com",
    messagingSenderId: "549669293910",
    appId: "1:549669293910:web:d7b1aee19e78238d0f50f7"
};

const app = initializeApp(firebaseConfig);