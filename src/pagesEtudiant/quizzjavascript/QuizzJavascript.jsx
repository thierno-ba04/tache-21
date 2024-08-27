import React, { useState } from "react";
import { Button, Card, Col, Container, ListGroup, ProgressBar, Row } from "react-bootstrap";

const QuizzJavascript = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [answers, setAnswers] = useState([]);

    const questions = [
        {
            questionText: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?",
            answerOptions: [
                { answerText: "var", isCorrect: true },
                { answerText: "let", isCorrect: true },
                { answerText: "const", isCorrect: true },
                { answerText: "all of the above", isCorrect: true },
            ],
        },
        {
            questionText: "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau ?",
            answerOptions: [
                { answerText: "push()", isCorrect: true },
                { answerText: "pop()", isCorrect: false },
                { answerText: "shift()", isCorrect: false },
                { answerText: "unshift()", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle est la sortie de 'typeof NaN' ?",
            answerOptions: [
                { answerText: "number", isCorrect: true },
                { answerText: "NaN", isCorrect: false },
                { answerText: "object", isCorrect: false },
                { answerText: "undefined", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle est la portée d'une variable déclarée avec 'let' ?",
            answerOptions: [
                { answerText: "Portée globale", isCorrect: false },
                { answerText: "Portée de fonction", isCorrect: false },
                { answerText: "Portée de bloc", isCorrect: true },
                { answerText: "Portée de script", isCorrect: false },
            ],
        },
        {
            questionText: "Comment écrivez-vous une fonction en JavaScript ?",
            answerOptions: [
                { answerText: "function myFunction()", isCorrect: true },
                { answerText: "function = myFunction()", isCorrect: false },
                { answerText: "myFunction(): function", isCorrect: false },
                { answerText: "myFunction function()", isCorrect: false },
            ],
        },
        {
            questionText: "Comment appelle-t-on une fonction nommée 'myFunction' en JavaScript ?",
            answerOptions: [
                { answerText: "call function myFunction()", isCorrect: false },
                { answerText: "myFunction()", isCorrect: true },
                { answerText: "function myFunction()", isCorrect: false },
                { answerText: "execute myFunction()", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle méthode permet de convertir une chaîne en un entier ?",
            answerOptions: [
                { answerText: "parseInt()", isCorrect: true },
                { answerText: "parseFloat()", isCorrect: false },
                { answerText: "toString()", isCorrect: false },
                { answerText: "Number()", isCorrect: false },
            ],
        },
        {
            questionText: "Comment vérifiez-vous si une variable 'x' est égale à '5' et de type nombre en JavaScript ?",
            answerOptions: [
                { answerText: "x == 5", isCorrect: false },
                { answerText: "x === 5", isCorrect: true },
                { answerText: "x = 5", isCorrect: false },
                { answerText: "x !== 5", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle méthode permet de supprimer le premier élément d'un tableau en JavaScript ?",
            answerOptions: [
                { answerText: "shift()", isCorrect: true },
                { answerText: "unshift()", isCorrect: false },
                { answerText: "pop()", isCorrect: false },
                { answerText: "push()", isCorrect: false },
            ],
        },
        {
            questionText: "Quelle est la valeur par défaut de 'this' dans une fonction en mode strict ?",
            answerOptions: [
                { answerText: "undefined", isCorrect: true },
                { answerText: "window", isCorrect: false },
                { answerText: "null", isCorrect: false },
                { answerText: "function", isCorrect: false },
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
              <p>Programme / Quizz JavaScript</p>
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

export default QuizzJavascript;
