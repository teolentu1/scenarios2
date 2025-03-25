import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuizzesList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState({});

  useEffect(() => {
    fetch('/quizzesList.json')
      .then((response) => response.json())
      .then((data) => setQuizzes(data))
      .catch((error) => console.error('Error loading quizzes:', error));

    const storedScores = JSON.parse(localStorage.getItem('completedQuizzes')) || {};
    setCompletedQuizzes(storedScores);
  }, []);

  return (
    <div className="quiz-list-container">
      <h1>Available Quizzes</h1>
      <div className="quiz-list">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="quiz-item">
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
            {completedQuizzes[quiz.filename] !== undefined ? (
              <div className="quiz-completed">
                <p>Score: {completedQuizzes[quiz.filename]} / {quiz.totalQuestions}</p>
                <Link to={`/quiz/${quiz.filename}`} className="review-btn">Review</Link>
              </div>
            ) : (
              <Link to={`/quiz/${quiz.filename}`} className="start-btn">Start Quiz</Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizzesList;
