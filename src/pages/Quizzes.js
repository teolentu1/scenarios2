import React, { useState, useEffect } from 'react';
import './Quizzes.css';

const Quizzes = () => {
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  // Fetch quiz data from the public folder
  useEffect(() => {
    fetch('/passwordSecurity.json')
      .then((response) => response.json())
      .then((data) => setQuizData(data))
      .catch((error) => console.error('Error loading quiz data:', error));
  }, []);

  // Handle selecting an answer
  const handleAnswerSelect = (questionIndex, selectedOption) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: selectedOption });
  };

  // Handle submitting the quiz
  const handleSubmitQuiz = () => {
    let newScore = 0;

    quizData.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        newScore++;
      }
    });

    setScore(newScore); // Set the final score
  };

  // Show loading if quiz data isn't loaded yet
  if (quizData.length === 0) {
    return <div>Loading quiz...</div>;
  }

  return (
    <div className="quiz-container">
      <h1>Password Security Quiz</h1>

      {quizData.map((question, qIndex) => (
        <div key={qIndex} className="question-block">
          <h2>{question.question}</h2>
          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${userAnswers[qIndex] === option ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(qIndex, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button className="submit-btn" onClick={handleSubmitQuiz}>
        Submit Quiz
      </button>

      {score !== null && (
        <div className="quiz-result">
          <h2>Your Score: {score} / {quizData.length}</h2>
          <button className="restart-btn" onClick={() => window.location.reload()}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quizzes;
