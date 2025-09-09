// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAydt6Se_Mu4F4EtU1jJDMdgbSJsLn4UXM",
  authDomain: "challenge-a75f6.firebaseapp.com",
  projectId: "challenge-a75f6",
  storageBucket: "challenge-a75f6.firebasestorage.app",
  messagingSenderId: "657858771200",
  appId: "1:657858771200:web:dad1e07e64c2d3c1a85be5",
  measurementId: "G-HZ3BRLMLJK"
};  

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);


export {db,auth}