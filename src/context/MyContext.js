// src/context/MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  const addCourse = (course) => {
    setCourses((prevCourses) => [...prevCourses, course]);
  };

  const value = {
    students,
    addStudent,
    courses,   // Ajoutez courses ici
    addCourse  // Ajoutez addCourse ici
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
