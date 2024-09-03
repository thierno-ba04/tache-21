import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db, imageDb } from "../firebase/firebase";
import "./updateprsnl.css";

const UpdatePrsnl = () => {
  const { id } = useParams(); // Récupère l'identifiant de l'URL
  const navigate = useNavigate(); // Utilisé pour rediriger après la mise à jour

  const [personnel, setPersonnel] = useState(null);
  const [img, setImg] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPersonnel = async () => {
      try {
        const personnelDoc = await getDoc(doc(db, "personnels", id)); // Assurez-vous que le nom de la collection est correct
        if (personnelDoc.exists()) {
          setPersonnel({ id: personnelDoc.id, ...personnelDoc.data() });
        } else {
          setError("Personnel not found");
        }
      } catch (error) {
        setError("Error fetching personnel: " + error.message);
      }
    };

    fetchPersonnel();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let updatePrsnl = { ...personnel };

      if (img) {
        // Upload the image to Firebase Storage
        const imageRef = ref(imageDb, `images/${img.name}`);
        const snapshot = await uploadBytes(imageRef, img);
        const url = await getDownloadURL(snapshot.ref);
        updatePrsnl.imgUrl = url; // Update the personnel object with the new image URL
      }

      await updateDoc(doc(db, "personnels", id), updatePrsnl); // Met à jour les détails de l'utilisateur dans Firestore
      navigate("/personnels"); // Redirige vers la page d'accueil après la mise à jour
    } catch (error) {
      setError("Error updating personnel: " + error.message);
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

  if (!personnel) {
    return <div>Loading...</div>; // Affiche une indication de chargement pendant le chargement des données de l'utilisateur
  }

  return (
    <div className="update-student-container">
      <h2 className="text-center">Update Personnel</h2>
      <div className="form-container">
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group p-0">
            {preview ? (
              <img src={preview} height="100px" width="100px" alt="Selected" className="image-preview" />
            ) : personnel.imgUrl ? (
              <img
                src={personnel.imgUrl}
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

          {['Nom', 'Prenom', 'Mail', 'Number', 'Genre', 'Adress', 'Domaine'].map((field) => (
            <div className="form-group" key={field}>
              <input
                type={field === 'Mail' ? 'email' : 'text'}
                value={personnel[field] || ""}
                onChange={(e) => setPersonnel({ ...personnel, [field]: e.target.value })}
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

export default UpdatePrsnl;
