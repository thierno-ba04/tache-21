// Importez Firebase
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// Configuration Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE18AIjip3S6jJC3Hhsdla9hctkwz53MM",
  authDomain: "tache-21-a9241.firebaseapp.com",
  databaseURL: "https://tache-21-a9241-default-rtdb.firebaseio.com",
  projectId: "tache-21-a9241",
  storageBucket: "tache-21-a9241.appspot.com",
  messagingSenderId: "571795702707",
  appId: "1:571795702707:web:f62e57ab23a6ce393b81c6"
};


// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
// Initialisation de Firestore
const auth = getAuth(app);
const database = getFirestore(app);
const db = getFirestore(app);

export{database}
export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, };