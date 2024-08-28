import React, { useState } from "react";
import { Button, Card, Col, Container, ListGroup, ProgressBar, Row } from "react-bootstrap";

const QuizzReact = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [answers, setAnswers] = useState([]);

    // Questions et réponses sur React
    const questions = [
        {
            questionText: "Quel est le but principal de React?",
            answerOptions: [
                { answerText: "Développement d'applications web dynamiques", isCorrect: true },
                { answerText: "Développement de jeux vidéo", isCorrect: false },
                { answerText: "Gestion de bases de données", isCorrect: false },
                { answerText: "Analyse de données", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle est la syntaxe correcte pour créer un composant fonctionnel en React ?",
            answerOptions: [
                { answerText: "function MyComponent() {}", isCorrect: true },
                { answerText: "component MyComponent() {}", isCorrect: false },
                { answerText: "class MyComponent extends Component {}", isCorrect: false },
                { answerText: "function:MyComponent() {}", isCorrect: false },
            ],
        },
        {
            questionText: "Que représente JSX en React?",
            answerOptions: [
                { answerText: "Une extension syntaxique de JavaScript", isCorrect: true },
                { answerText: "Un framework", isCorrect: false },
                { answerText: "Une bibliothèque pour la gestion d'état", isCorrect: false },
                { answerText: "Un langage de programmation", isCorrect: false },
            ],
        },
        {
            questionText: "Quel hook est utilisé pour gérer l'état dans un composant fonctionnel?",
            answerOptions: [
                { answerText: "useState", isCorrect: true },
                { answerText: "useEffect", isCorrect: false },
                { answerText: "useContext", isCorrect: false },
                { answerText: "useReducer", isCorrect: false },
            ],
        },
        {
            questionText: "Comment crée-t-on un routeur en React?",
            answerOptions: [
                { answerText: "<Router></Router>", isCorrect: false },
                { answerText: "<BrowserRouter></BrowserRouter>", isCorrect: true },
                { answerText: "<ReactRouter></ReactRouter>", isCorrect: false },
                { answerText: "<Routing></Routing>", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle méthode est utilisée pour mettre à jour l'état dans un composant de classe?",
            answerOptions: [
                { answerText: "this.setState()", isCorrect: true },
                { answerText: "this.useState()", isCorrect: false },
                { answerText: "this.state()", isCorrect: false },
                { answerText: "this.updateState()", isCorrect: false },
            ],
        },
        {
            questionText: "Quel hook est utilisé pour les effets de bord dans un composant fonctionnel?",
            answerOptions: [
                { answerText: "useEffect", isCorrect: true },
                { answerText: "useState", isCorrect: false },
                { answerText: "useReducer", isCorrect: false },
                { answerText: "useMemo", isCorrect: false },
            ],
        },
        {
            questionText: "Comment passe-t-on des données d'un parent à un enfant en React?",
            answerOptions: [
                { answerText: "Par les props", isCorrect: true },
                { answerText: "Par l'état", isCorrect: false },
                { answerText: "Par les hooks", isCorrect: false },
                { answerText: "Par les composants de classe", isCorrect: false },
            ],
        },
        {
            questionText: "Quel est l'objectif principal de Redux en React?",
            answerOptions: [
                { answerText: "Gérer l'état global de l'application", isCorrect: true },
                { answerText: "Créer des composants", isCorrect: false },
                { answerText: "Gérer le routage", isCorrect: false },
                { answerText: "Manipuler le DOM", isCorrect: false },
            ],
        },
        {
            questionText: "Que fait le hook useContext en React?",
            answerOptions: [
                { answerText: "Il permet d'accéder à un contexte partagé", isCorrect: true },
                { answerText: "Il crée un état local", isCorrect: false },
                { answerText: "Il effectue un rendu conditionnel", isCorrect: false },
                { answerText: "Il manipule directement le DOM", isCorrect: false },
            ],
        },
    ];

    const handleAnswerOptionClick = (isCorrect, answerText) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        setAnswers([
            ...answers,
            { question: questions[currentQuestion].questionText, answer: answerText, isCorrect: isCorrect },
        ]);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="qui" style={{ marginTop: "80px", paddingTop: "10px" }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="dashboarddemaandeabsences">
                            <p>Programme / Quizz React</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
                <Container className="mt-5">
                    {showScore ? (
                        <Card>
                            <Card.Body>
                                <Card.Title>Résultat</Card.Title>
                                <Card.Text>Vous avez marqué {score} sur {questions.length}</Card.Text>
                                <ListGroup>
                                    {answers.map((answer, index) => (
                                        <ListGroup.Item
                                            key={index}
                                            variant={answer.isCorrect ? "success" : "danger"}
                                        >
                                            {answer.question} - Votre réponse : {answer.answer} ({answer.isCorrect ? "Correcte" : "Incorrecte"})
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    ) : (
                        <Card>
                            <Card.Body>
                                <ProgressBar now={(currentQuestion + 1) / questions.length * 100} label={`${currentQuestion + 1}/${questions.length}`} className="mb-4" />
                                <Card.Title>Question {currentQuestion + 1}/{questions.length}</Card.Title>
                                <Card.Text>{questions[currentQuestion].questionText}</Card.Text>
                                <div>
                                    {questions[currentQuestion].answerOptions.map((option, index) => (
                                        <Button
                                            key={index}
                                            variant="primary"
                                            className="mb-2 w-100"
                                            onClick={() => handleAnswerOptionClick(option.isCorrect, option.answerText)}
                                        >
                                            {option.answerText}
                                        </Button>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    )}
                </Container>
            </div>
        </div>
    );
}

export default QuizzReact;
