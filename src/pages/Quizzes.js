import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Quizzes.css';

const Quizzes = () => {
  const { filename } = useParams();
  const [quizData, setQuizData] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadQuizData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/quizzes/${filename}`);
        if (!response.ok) throw new Error(`Failed to load quiz: ${filename}`);
        const data = await response.json();
        console.log('Loaded quiz data:', data);

        // Normalize array to object with title and questions
        const normalizedData = Array.isArray(data)
          ? { title: filename.replace('.json', ''), questions: data } // Use filename as title
          : data;

        console.log('Normalized quiz data:', normalizedData);
        setQuizData(normalizedData);
      } catch (error) {
        console.error('Error loading quiz data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadQuizData();
  }, [filename]);

  const handleAnswerSelect = (questionIndex, selectedOption) => {
    setUserAnswers((prev) => ({ ...prev, [questionIndex]: selectedOption }));
  };

  const handleSubmitQuiz = () => {
    if (!quizData?.questions) return;
    let newScore = 0;
    quizData.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    localStorage.setItem(filename, newScore);
  };

  console.log('Rendering with quizData:', quizData);

  if (loading) return <div>Loading quiz...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!quizData || !quizData.questions) return <div>No quiz data available</div>;

  return (
    <div className="quiz-container">
      <h1>{quizData.title}</h1>
      {quizData.questions.map((question, qIndex) => (
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
          <h2>
            Your Score: {score} / {quizData.questions.length}
          </h2>
          <button className="restart-btn" onClick={() => window.location.reload()}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quizzes;