import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db, imageDb } from "../../../../firebase/firebase"; // Assurez-vous d'importer Firebase Storage
import "./updateStudent.css";

const UpdateStudent = () => {
  const { id } = useParams(); // Récupère l'identifiant de l'URL
  const navigate = useNavigate(); // Utilisé pour rediriger après la mise à jour

  const [student, setStudent] = useState(null);
  const [img, setImg] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const studentDoc = await getDoc(doc(db, "students", id));
        if (studentDoc.exists()) {
          setStudent({ id: studentDoc.id, ...studentDoc.data() });
        } else {
          console.error("Student not found");
        }
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let updatedStudent = { ...student };

      if (img) {
        // Upload the image to Firebase Storage
        const imageRef = ref(imageDb, `images/${img.name}`);
        const snapshot = await uploadBytes(imageRef, img);
        const url = await getDownloadURL(snapshot.ref);
        updatedStudent.imgUrl = url; // Update the student object with the new image URL
      }

      await updateDoc(doc(db, "students", id), updatedStudent); // Met à jour les détails de l'utilisateur dans Firestore
      console.log("Student updated successfully");
      navigate("/dashboardadmin"); // Redirige vers la page d'accueil après la mise à jour
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImg(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  if (!student) {
    return <div>Loading...</div>; // Affiche une indication de chargement pendant le chargement des données de l'utilisateur
  }

  return (
    <div className="update-student-container">
      <h2 className="text-center">Update Student</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {preview ? (
              <img src={preview} height="100px" width="100px" alt="Selected" className="image-preview" />
            ) : student.imgUrl ? (
              <img
                src={student.imgUrl}
                height="100px"
                width="100px"
                alt="Current"
                className="image-preview"
              />
            ) : (
              <p>No Image</p>
            )}
            <label>Image:</label>

            <input
              type="file"
              onChange={handleImageChange}
              className="file-input"
            />
          </div>

          {['Nom', 'Prenom', 'Mail', 'Genre', 'Adress', 'Niveau_classe'].map((field) => (
            <div className="form-group" key={field}>
              <input
                type={field === 'Mail' ? 'email' : 'text'}
                value={student[field]}
                onChange={(e) => setStudent({ ...student, [field]: e.target.value })}
                className="form-input"
                placeholder={field}
              />
            </div>
          ))}

          <div className="button-group">
            <button type="submit" className="btn-update">
              Update
            </button>
            <button
              type="button"
              className="btn-back"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
