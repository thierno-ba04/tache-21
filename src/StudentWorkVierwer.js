import React from "react";

 import './StudentWorkVierwer.css'
 import Img from'./gervais.JPG'


 const WorkItem = ({ title, description, image, date, student }) => {
    return (


  
        <div className="work-item" style={{height:400,borderRadius:"12px"}}>
            <img className="work-image" src={image} alt={title} />
            <div className="work-content">
                <h3 className="work-title mt-3">{title}</h3>
                <p className="work-description mt-3">{description}</p>
                <div className="work-meta">
                    <span>{student}</span>
                    <span>{date}</span>
                </div>
                <button className="work-button mt-5 me-2">Accpeter</button>
                <button className="work-buttons  " >Rejeter</button>

            </div>

        </div>
        
    );
};


const StudentWorkViewer = () => {


    
    const [works, setWorks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [selectedStudent, setSelectedStudent] = React.useState('all');

    React.useEffect(() => {
        // Simuler un chargement de données depuis une API
        setTimeout(() => {
            const loadedWorks = [
                {
                    id: 1,
                    title: "Application React",
                    description: "Une application de gestion de tâches créée avec React et Redux.",
                    image: "https://via.placeholder.com/300x150?text=React+App",
                    date: "2023-06-10",
                    student: "Alice Dupont"
                },
                {
                    id: 2,
                    title: "Site Web Responsive",
                    description: "Un site web responsive utilisant HTML5, CSS3 et JavaScript.",
                    image: "https://via.placeholder.com/300x150?text=Responsive+Website",
                    date: "2023-06-05",
                    student: "Bob Martin"
                },
                {
                    id: 3,
                    title: "API REST Node.js",
                    description: "Une API RESTful construite avec Node.js et Express.",
                    image: "https://via.placeholder.com/300x150?text=Node.js+API",
                    date: "2023-05-28",
                    student: "Charlie Garcia"
                },
                {
                    id: 4,
                    title: "Application Vue.js",
                    description: "Une application de chat en temps réel utilisant Vue.js et Firebase.",
                    image: "https://via.placeholder.com/300x150?text=Vue.js+App",
                    date: "2023-05-20",
                    student: "Diana Kim"
                },
            ];
            setWorks(loadedWorks);
            setLoading(false);
        }, 1500);
    }, []);

    const filteredWorks = selectedStudent === 'all' 
        ? works 
        : works.filter(work => work.student === selectedStudent);

    if (loading) {
        return <div className="loading">Chargement des travaux...</div>;
    }

    return (
        <div class=" mt-5" >
            <h1 div className=" mt-2"></h1>

            <div className="student-filter mt-5">
                <select 
                    value={selectedStudent} 
                    onChange={(e) => setSelectedStudent(e.target.value)}
                >
                    <option value="all">Tous les étudiants</option>
                    {[...new Set(works.map(work => work.student))].map(student => (
                        <option key={student} value={student}>{student}</option>
                    ))}
                </select>
            </div>



            <div className="work-grid ">
                {filteredWorks.map(work => (
                    <WorkItem key={work.id} {...work} />
                ))}
                
            </div>



        </div>
    );
}  
export default StudentWorkViewer ;
;


