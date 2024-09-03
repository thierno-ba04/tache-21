// Import des fonctions nécessaires depuis les SDK Firebase
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs, onSnapshot, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';



// Configuration de votre application Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAE18AIjip3S6jJC3Hhsdla9hctkwz53MM",
  authDomain: "tache-21-a9241.firebaseapp.com",
  projectId: "tache-21-a9241",
  storageBucket: "tache-21-a9241.appspot.com",
  messagingSenderId: "571795702707",
  appId: "1:571795702707:web:f62e57ab23a6ce393b81c6",
};

// Initialiser Firebase seulement si aucune instance n'existe déjà
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialiser les services Firebase
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export const imageDb = getStorage();

// Exporter les services et les fonctions nécessaires
export { auth, db, storage, signInWithEmailAndPassword, createUserWithEmailAndPassword, collection, getDocs, onSnapshot, addDoc, ref, uploadBytes, getDownloadURL };

