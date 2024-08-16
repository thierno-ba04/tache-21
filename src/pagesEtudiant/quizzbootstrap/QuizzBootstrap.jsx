import React, { useState } from "react";
import { Button, Card, Col, Container, ListGroup, ProgressBar, Row } from "react-bootstrap";

const QuizzBootstrap = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [answers, setAnswers] = useState([]);

    const questions = [
        {
            questionText: "Quelle classe Bootstrap est utilisée pour créer une grille ?",
            answerOptions: [
                { answerText: "container", isCorrect: true },
                { answerText: "row", isCorrect: false },
                { answerText: "col", isCorrect: false },
            ],
        },
        {
            questionText: "Quel composant Bootstrap est utilisé pour afficher des alertes ?",
            answerOptions: [
                { answerText: "Alert", isCorrect: true },
                { answerText: "Card", isCorrect: false },
                { answerText: "Modal", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle propriété CSS change la couleur de texte ?",
            answerOptions: [
                { answerText: "font-size", isCorrect: false },
                { answerText: "margin", isCorrect: false },
                { answerText: "color", isCorrect: true },

            ],
        },
        {
            questionText: "Comment créer un bouton primaire en Bootstrap ?",
            answerOptions: [
                { answerText: `<button class="btn btn-primary">`, isCorrect: true },
                { answerText: `<button class="btn btn-success">`, isCorrect: false },
                { answerText: `<button class="btn btn-secondary">`, isCorrect: false },
            ],
        },
        {
            questionText: "Quelle classe est utilisée pour ajouter un espacement supérieur ?",
            answerOptions: [
                { answerText: "mt-3", isCorrect: true },
                { answerText: "mb-3", isCorrect: false },
                { answerText: "mx-3", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle classe Bootstrap est utilisée pour les cartes ?",
            answerOptions: [
                { answerText: "modal", isCorrect: false },
                { answerText: "Box", isCorrect: false },
                { answerText: "Panel", isCorrect: false },
                { answerText: "Card", isCorrect: true },
            ],
        },
        {
            questionText: "Quel composant Bootstrap permet de créer des menus déroulants ?",
            answerOptions: [
                { answerText: "nav", isCorrect: false },
                { answerText: "Dropdown", isCorrect: true },
                { answerText: "Collapse", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle classe est utilisée pour rendre les images responsives ?",
            answerOptions: [
                { answerText: "img-fluid", isCorrect: true },
                { answerText: "img-rounded", isCorrect: false },
                { answerText: "img-responsive", isCorrect: false },
            ],
        },
        {
            questionText: "Quel composant Bootstrap est utilisé pour les barres de navigation ?",
            answerOptions: [
                { answerText: "Navbar", isCorrect: true },
                { answerText: "Nav", isCorrect: false },
                { answerText: "Dropdown", isCorrect: false },
                { answerText: "Breadcrumb", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle classe est utilisée pour ajouter une bordure à un élément ?",
            answerOptions: [
                { answerText: "border", isCorrect: true },
                { answerText: "bordered", isCorrect: false },
                { answerText: "outline", isCorrect: false },
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
                            <p>Programme / Quizz Bootstrap</p>
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

export default QuizzBootstrap;
