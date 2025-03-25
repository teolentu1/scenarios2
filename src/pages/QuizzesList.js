import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './QuizzesList.css';

const QuizzesList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState({});

  useEffect(() => {
    fetch('/quizzesList.json')
      .then((response) => response.json())
      .then((data) => setQuizzes(data))
      .catch((error) => console.error('Error loading quizzes:', error));

    const storedResults = {};
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('quizResult_')) {
        const filename = key.replace('quizResult_', '');
        storedResults[filename] = JSON.parse(localStorage.getItem(key));
      }
    });
    setCompletedQuizzes(storedResults);
  }, []);

  return (
    <div className="quiz-list-container">
      <h1>Available Quizzes</h1>
      <div className="quiz-list">
        {quizzes.map((quiz) => {
          const result = completedQuizzes[quiz.filename];
          return (
            <div key={quiz.id} className="quiz-item">
              <div>
                <h2>{quiz.title}</h2>
                <p>{quiz.description}</p>
              </div>
              {result ? (
                <div className="quiz-completed">
                  <p>
                    Score: {result.score} / {result.total} (
                    {((result.score / result.total) * 100).toFixed(1)}%)
                  </p>
                  <Link to={`/quiz/${quiz.filename}/review`} className="review-btn">
                    Review
                  </Link>
                  <Link to={`/quiz/${quiz.filename}`} className="retake-btn">
                    Retake
                  </Link>
                </div>
              ) : (
                <Link to={`/quiz/${quiz.filename}`} className="start-btn">
                  Start Quiz
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizzesList;