import React, { useEffect, createContext, useContext, useState } from 'react';
import { db, collection, addDoc } from '../firebase/firebase'; // Assurez-vous que le chemin est correct

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyContextProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, Nom: 'Niang', Prenom: 'Faty', Mail: 'fatyniang4@gmail.com', Lieu_de_naissance: 'Louga', Niveau_de_classe: "Terminale", Numero: 777778899, Adresse: 'Thiés', Statut: 'prof anglais' },
    { id: 2, Nom: 'Ba', Prenom: 'Thiérno', Mail: 'thiérnoba56@gmail.com', Lieu_de_naissance: 'Louga', Niveau_de_classe: "Terminale", Numero: 771001897, Adresse: 'zone Thiés', Statut: 'prof anglais' },
    { id: 3, Nom: 'Lannister', Prenom: 'Gervais', Mail: 'akoinenzegervais7@gmail.com', Lieu_de_naissance:'Louga', Niveau_de_classe: "Terminale", Numero: 771001897, Adresse: 'zone captage', Statut: 'prof anglais' },
    { id: 4, Nom: 'Stark', Prenom: 'Moriss', Mail: 'maorrissstark27@gmail.com', Lieu_de_naissance:'Louga', Niveau_de_classe: "Terminale", Numero: 771001897, Adresse: 'zone captage', Statut: 'prof anglais' },
    { id: 5, Nom: 'Diop', Prenom: 'Marie', Mail: 'diopmarie457@gmail.com', Lieu_de_naissance:'Louga', Niveau_de_classe: "Terminale", Numero: 771001897, Adresse: 'zone mbour2', Statut: 'prof anglais' },
    { id: 6, Nom: 'Morin', Prenom: 'Viral', Mail: 'viralmorrin7@gmail.com', Lieu_de_naissance:'Louga', Niveau_de_classe: "Terminale", Numero: 771001897, Adresse: 'Konakry', Statut: 'prof anglais' },
    { id: 7, Nom: 'Clifford', Prenom: 'Clédore', Mail: 'cledore227@gmail.com', Lieu_de_naissance:'Louga', Niveau_de_classe: "Terminale", Numero: 771001897, Adresse: 'Hlmgrand yoof', Statut: 'prof anglais' },
    { id: 8, Nom: 'Françoi', Prenom: 'Leader', Mail: 'franchoislearder7@gmail.com', Lieu_de_naissance:'Louga', Niveau_de_classe: "Terminale", Numero: 771001897, Adresse: 'ThiésRsant', Statut: 'prof anglais' },
    { id: 9, Nom: 'Nze', Prenom: 'Gervais', Mail: 'akoinenzegervais7@gmail.com', Lieu_de_naissance:'Louga', Niveau_de_classe: "Terminale", Numero: 771001897, Adresse: 'zone captage', Statut: 'prof anglais' },
    // ... autres étudiants ...
  ]);

  const [cours, setCours] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [coursprfs, setCoursprfs] = useState([]);

  // Fonction pour mettre à jour un étudiant
  const updateStudent = (updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  // Fonction pour ajouter un étudiant
  const addStudent = async (student) => {
    try {
      // Ajout de l'étudiant dans Firestore
      const docRef = await addDoc(collection(db, 'students'), student);
      // Mise à jour de l'état local avec l'étudiant ajouté
      setStudents((prevStudents) => [...prevStudents, { ...student, id: docRef.id }]);
    } catch (error) {
      // console.error('Erreur lors de l\'ajout d\'un étudiant:', error);
    }
  };

  // Fonction pour ajouter un cours
  const addCours = (cours) => {
    setCours((prevCours) => [...prevCours, cours]);
  };

  // Fonction pour ajouter un enseignant
  const addTeacher = (teacher) => {
    setTeachers((prevTeachers) => [...prevTeachers, teacher]);
  };

  // Fonction pour ajouter une classe
  const addClasse = (classItem) => {
    setClasses((prevClasses) => [...prevClasses, classItem]);
  };

  // Fonction pour mettre à jour une classe
  const updateClasse = (updatedClasse) => {
    setClasses((prevClasses) =>
      prevClasses.map((classe) =>
        classe.id === updatedClasse.id ? updatedClasse : classe
      )
    );
  };

  // Fonction pour supprimer une classe
  const removeClasse = (id) => {
    setClasses((prevClasses) => prevClasses.filter((classItem) => classItem.id !== id));
  };

  // Fonction pour supprimer un étudiant
  const removeStudent = (id) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  // Fonction pour ajouter un cours de profs
  const addCoursprfs = (coursprf) => {
    setCoursprfs((prevCoursprfs) => [...prevCoursprfs, coursprf]);
  };

  // Fonction pour désarchiver un étudiant
  const unarchiveStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, archived: false } : student
      )
    );
  };

  const value = {
    students,
    addStudent,
    cours,
    addCours,
    teachers,
    addTeacher,
    classes,
    addClasse,
    removeClasse,
    updateClasse,
    updateStudent,
    removeStudent,
    coursprfs,
    addCoursprfs,
    unarchiveStudent,
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
