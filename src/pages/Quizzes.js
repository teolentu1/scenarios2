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
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state

  useEffect(() => {
    const loadQuizData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/quizzes/${filename}`);
        if (!response.ok) throw new Error(`Failed to load quiz: ${filename}`);
        const data = await response.json();
        console.log('Loaded quiz data:', data);

        const normalizedData = Array.isArray(data)
          ? { title: filename.replace('.json', ''), questions: data }
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
    if (!isSubmitted) { // Prevent changes after submission
      setUserAnswers((prev) => ({ ...prev, [questionIndex]: selectedOption }));
    }
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
    setIsSubmitted(true); // Switch to review mode

    // Store result in localStorage
    const result = {
      score: newScore,
      total: quizData.questions.length,
      answers: userAnswers,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(`quizResult_${filename}`, JSON.stringify(result));
  };

  console.log('Rendering with quizData:', quizData);

  if (loading) return <div>Loading quiz...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!quizData || !quizData.questions) return <div>No quiz data available</div>;

  // Review Page
  if (isSubmitted) {
    return (
      <div className="quiz-container">
        <h1>{quizData.title} - Review</h1>
        <h2>Your Score: {score} / {quizData.questions.length}</h2>
        {quizData.questions.map((question, qIndex) => (
          <div key={qIndex} className="question-block">
            <h3>{question.question}</h3>
            <p>
              Your Answer: {userAnswers[qIndex] || 'Not answered'}{' '}
              {userAnswers[qIndex] === question.correctAnswer ? '✅' : '❌'}
            </p>
            {userAnswers[qIndex] !== question.correctAnswer && (
              <p>Correct Answer: {question.correctAnswer}</p>
            )}
          </div>
        ))}
        <button className="restart-btn" onClick={() => window.location.reload()}>
          Restart Quiz
        </button>
      </div>
    );
  }

  // Quiz Page
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
    </div>
  );
};

export default Quizzes;