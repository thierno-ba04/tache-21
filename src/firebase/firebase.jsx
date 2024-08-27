// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE18AIjip3S6jJC3Hhsdla9hctkwz53MM",
  authDomain: "tache-21-a9241.firebaseapp.com",
  projectId: "tache-21-a9241",
  storageBucket: "tache-21-a9241.appspot.com",
  messagingSenderId: "571795702707",
  appId: "1:571795702707:web:f62e57ab23a6ce393b81c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Storage
const storage = getStorage(app);
const db = getFirestore(app);


export { db, storage };
