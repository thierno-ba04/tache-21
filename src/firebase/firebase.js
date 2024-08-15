import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAE18AIjip3S6jJC3Hhsdla9hctkwz53MM",
  authDomain: "tache-21-a9241.firebaseapp.com",
  projectId: "tache-21-a9241",
  storageBucket: "tache-21-a9241.appspot.com",
  messagingSenderId: "571795702707",
  appId: "1:571795702707:web:f62e57ab23a6ce393b81c6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db, createUserWithEmailAndPassword, collection, addDoc, firebaseConfig };
