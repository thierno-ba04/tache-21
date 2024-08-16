import React, { useState } from "react";
import { Button, Card, Col, Container, ListGroup, ProgressBar, Row } from "react-bootstrap";

const QuizzHtmlcss = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [answers, setAnswers] = useState([]);

    const questions = [
        {
            questionText: "Que signifie HTML ?",
            answerOptions: [
                { answerText: "Hyper Text Markup Language", isCorrect: true },
                { answerText: "Hyperlinks and Text Markup Language", isCorrect: false },
                { answerText: "Home Tool Markup Language", isCorrect: false },
                { answerText: "Hyper Tool Markup Language", isCorrect: false },
            ],
        },
        {
            questionText: "Quel est l'élément HTML correct pour insérer un saut de ligne ?",
            answerOptions: [
                { answerText: "<br>", isCorrect: true },
                { answerText: "<lb>", isCorrect: false },
                { answerText: "<break>", isCorrect: false },
                { answerText: "<ln>", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle propriété est utilisée pour changer la couleur de fond en CSS ?",
            answerOptions: [
                { answerText: "color", isCorrect: false },
                { answerText: "background-color", isCorrect: true },
                { answerText: "bgcolor", isCorrect: false },
                { answerText: "back-color", isCorrect: false },
            ],
        },
        {
            questionText: "Comment ajouter un commentaire en CSS ?",
            answerOptions: [
                { answerText: "// Ceci est un commentaire", isCorrect: false },
                { answerText: "<!-- Ceci est un commentaire -->", isCorrect: false },
                { answerText: "/* Ceci est un commentaire */", isCorrect: true },
                { answerText: "' Ceci est un commentaire", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle balise HTML est utilisée pour définir une feuille de style interne ?",
            answerOptions: [
                { answerText: "<style>", isCorrect: true },
                { answerText: "<css>", isCorrect: false },
                { answerText: "<script>", isCorrect: false },
                { answerText: "<link>", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle est la syntaxe CSS correcte ?",
            answerOptions: [
                { answerText: "body {color: black;}", isCorrect: true },
                { answerText: "{body:color=black;}", isCorrect: false },
                { answerText: "{body;color:black;}", isCorrect: false },
                { answerText: "body:color=black;", isCorrect: false },
            ],
        },
        {
            questionText: "Quel attribut est utilisé pour spécifier un identifiant unique pour un élément HTML ?",
            answerOptions: [
                { answerText: "class", isCorrect: false },
                { answerText: "id", isCorrect: true },
                { answerText: "style", isCorrect: false },
                { answerText: "href", isCorrect: false },
            ],
        },
        {
            questionText: "Comment créer un lien qui s'ouvre dans un nouvel onglet en HTML ?",
            answerOptions: [
                { answerText: '<a href="url" new>', isCorrect: false },
                { answerText: '<a href="url" target="_blank">', isCorrect: true },
                { answerText: '<a href="url" target="new">', isCorrect: false },
                { answerText: '<a href="url" target="new_tab">', isCorrect: false },
            ],
        },
        {
            questionText: "Quelle propriété CSS contrôle la taille du texte ?",
            answerOptions: [
                { answerText: "text-style", isCorrect: false },
                { answerText: "font-size", isCorrect: true },
                { answerText: "text-size", isCorrect: false },
                { answerText: "font-style", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle balise HTML est utilisée pour définir un tableau ?",
            answerOptions: [
                { answerText: "<table>", isCorrect: true },
                { answerText: "<tab>", isCorrect: false },
                { answerText: "<td>", isCorrect: false },
                { answerText: "<tr>", isCorrect: false },
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
              <p>Programme / Quizz Html & Css</p>
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
                        <ProgressBar now={(currentQuestion + 1) / questions.length * 100} label={`${currentQuestion + 1}/${questions.length}`} className="mb-4"/>
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

export default QuizzHtmlcss;
