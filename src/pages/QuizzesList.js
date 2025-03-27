import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './QuizzesList.css';

const QuizzesList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState({});
  const [quizDetails, setQuizDetails] = useState({}); 

  useEffect(() => {
    // Load quiz list
    fetch('/quizzesList.json')
      .then((response) => response.json())
      .then((data) => {
        setQuizzes(data);
        // Fetch details for each quiz
        data.forEach((quiz) => {
          fetch(`/quizzes/${quiz.filename}`)
            .then((res) => res.json())
            .then((quizData) => {
              setQuizDetails((prev) => ({
                ...prev,
                [quiz.filename]: quizData,
              }));
            })
            .catch((error) => console.error(`Error fetching ${quiz.filename}:`, error));
        });
      })
      .catch((error) => console.error('Error loading quizzes:', error));

    // Load completed quizzes
    const storedResults = {};
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('quizResult_')) {
        const filename = key.replace('quizResult_', '');
        storedResults[filename] = JSON.parse(localStorage.getItem(key));
      }
    });
    setCompletedQuizzes(storedResults);
  }, []);

  const areDependenciesMet = (dependencies) => {
    if (!dependencies || dependencies.length === 0) return true;
    return dependencies.every((dep) => completedQuizzes[dep]); 
  };

  const getDependencyTitles = (dependencies) => {
    if (!dependencies || dependencies.length === 0) return '';
    return dependencies
      .map((dep) => {
        const depQuiz = quizzes.find((q) => q.filename === dep);
        return depQuiz ? depQuiz.title : dep; 
      })
      .join(', ');
  };

  return (
    <div className="quiz-list-container">
      <h1>Available Quizzes</h1>
      <div className="quiz-list">
        {quizzes.map((quiz) => {
          const result = completedQuizzes[quiz.filename];
          const quizData = quizDetails[quiz.filename];
          const isUnlocked = quizData ? areDependenciesMet(quizData.dependencies) : false;

          return (
            <div key={quiz.id} className="quiz-item">
              <div>
                <h2>{quiz.title}</h2>
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
              ) : quizData ? (
                isUnlocked ? (
                  <Link to={`/quiz/${quiz.filename}`} className="start-btn">
                    Start Quiz
                  </Link>
                ) : (
                  <span className="locked-text">
                    Locked: Complete {getDependencyTitles(quizData.dependencies)} first
                  </span>
                )
              ) : (
                <span>Loading...</span> 
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizzesList;