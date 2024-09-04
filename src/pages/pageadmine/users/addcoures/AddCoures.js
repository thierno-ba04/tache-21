import { db, collection, addDoc } from '../../../../firebase/firebase';

const AddCourses = async () => {
  const coursesCollection = collection(db, 'courses');
  
  const courses = [
    { name: 'Html/CSS', img: 'path-to-imgcour' },
    { name: 'Bootstrap', img: 'path-to-imgboots' },
    { name: 'JavaScript', img: 'path-to-imgbjs' },
    { name: 'React-JS', img: 'path-to-imgreact' },
    { name: 'Node-JS', img: 'path-to-imgnodejs' },
    { name: 'PHP', img: 'path-to-imgphp' }
  ];
  
  try {
    for (const course of courses) {
      await addDoc(coursesCollection, course);
    }
    console.log("Courses added successfully.");
  } catch (error) {
    console.error("Error adding courses: ", error);
  }
};

export default AddCourses;
