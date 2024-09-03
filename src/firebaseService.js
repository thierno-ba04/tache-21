// src/services/firebaseService.js
import { collection, getDocs } from 'firebase/firestore';
import { database } from './firebase'; // Assurez-vous que le chemin d'importation est correct

const getStudentData = async () => {
  try {
    const studentCollection = collection(database, 'eleves','posts','feedbacks'); // Nom de la collection Firestore
    const studentSnapshot = await getDocs(studentCollection);
    const studentList = studentSnapshot.docs.map(doc => doc.data());
    return studentList;
  } catch (error) {
    console.error('Error fetching student data:', error);
    return [];
  }
};

export { getStudentData };
