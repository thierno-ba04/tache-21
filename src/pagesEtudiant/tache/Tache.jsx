import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./tache.css";

const Tache = () => {
  // State to manage each task's status, countdown time, and completion status
  const [tasks, setTasks] = useState([
    { id: 1, name: "Tache N:1", duration: 120, started: false, countdown: 0, completed: false },
    { id: 2, name: "Tache N:2", duration: 120, started: false, countdown: 0, completed: false },
    { id: 3, name: "Tache N:3", duration: 120, started: false, countdown: 0, completed: false },
  ]);

  const startTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              started: true,
              countdown: task.duration, // Initialize the countdown with the task's duration
              completed: false, // Ensure the task is not marked as completed
            }
          : task
      )
    );

    toast.info(`Tâche ${taskId} a démarré!`);

    // Start the countdown timer
    const timer = setInterval(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId && task.started && task.countdown > 0
            ? { ...task, countdown: task.countdown - 1 }
            : task
        )
      );
    }, 60000); // 60000ms = 1 minute

    // Clear interval when countdown reaches zero
    setTimeout(
      () => clearInterval(timer),
      tasks.find((task) => task.id === taskId).duration * 60000
    );
  };

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, started: false, countdown: 0, completed: true } // Mark the task as completed
          : task
      )
    );

    toast.success(`Tâche ${taskId} est terminée!`);
  };

  return (
    <div className="mere-tache" style={{ marginTop: "80px", paddingTop: "10px" }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container>
        <Row className="mt-3 ">
          <Col lg={2} md={4}>
            <div className="liste-des-taches">
              <h4>Listes des Taches</h4>
            </div>
          </Col>
          <Col md={6} className=" Tache-Validés">
            <div className="button-des-tache-valides">
              <Link to="/tachevalide">
                <Button className="btn btn-success">Tache Validés</Button>
              </Link>
            </div>
          </Col>
        </Row>

        {tasks.map((task) => (
          <Row key={task.id} className="d-flex justify-content-center">
            <Col lg={8} md={12} className="col-bottom">
              <div className="bg-tache d-md-flex">
                <div className="borderReight ms-4 mt-3">
                  {task.name}
                  <p>durée: {task.duration} min</p>
                  <h6>Syllabus</h6>
                  <p>HTML/CSS_2024</p>
                  <br />
                  <br />
                  <p>démarée il y a un an</p>
                </div>
                <div className="ms-3 mt-3">
                  <h5 className="h5tache">Tache:00</h5>
                  <p>
                    1. Vous créez un dossier sur Google Drive nommé Prénom Nom.
                    Vous créez à l’intérieur un dossier pour chaque projet. Vous
                    y mettrez vos captures d’écran et vos réalisations par la
                    suite. Vous partagez le dossier avec le mail
                    contact.elearnign@gmail.com.
                  </p>
                  <br />
                  <br />
                  <div className="lienutiles">
                    <p className="p-lien">
                      Liens utiles : <br />
                    </p>
                    <a href="https://drive.google.com/drive/my-drive">
                      https://drive.google.com/drive/my-drive
                    </a>
                  </div>
                  <div className="demarétermi d-flex gap-5 me-5 mt-3">
                    {!task.started && !task.completed ? (
                      <div>
                        <button
                          className="btn btn-primary"
                          onClick={() => startTask(task.id)}
                        >
                          Démarrer
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p>Tache demarrer: {task.countdown} min</p>
                      </div>
                    )}
                    <div>
                      <button
                        className="btn btn-success"
                        onClick={() => completeTask(task.id)}
                        disabled={!task.started || task.completed}
                      >
                        Terminer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Tache;
