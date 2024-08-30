// firebase.js
import { initializeApp, getApp, getApps } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAE18AIjip3S6jJC3Hhsdla9hctkwz53MM",
  authDomain: "tache-21-a9241.firebaseapp.com",
  projectId: "tache-21-a9241",
  storageBucket: "tache-21-a9241.appspot.com",
  messagingSenderId: "571795702707",
  appId: "1:571795702707:web:f62e57ab23a6ce393b81c6",
};

// Vérifiez si Firebase a déjà été initialisé avant d'appeler initializeApp
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export const imageDb = getStorage();

export {
  addDoc,
  auth,
  db,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  collection,
  getDocs,
  onSnapshot,
  storage,
};
