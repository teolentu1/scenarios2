import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Quizzes.css';

const Quizzes = () => {
  const { filename } = useParams();
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
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
        
        setQuizData({
          title: data.title || filename.replace('.json', ''),
          questions: data.questions || [],
        });
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
    if (!quizData?.questions?.length) return;
    let newScore = 0;
    quizData.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        newScore++;
      }
    });

    const result = {
      score: newScore,
      total: quizData.questions.length,
      answers: userAnswers,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(`quizResult_${filename}`, JSON.stringify(result));
    navigate(`/quiz/${filename}/review`);
  };

  if (loading) return <div>Loading quiz...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!quizData?.questions?.length) return <div>No quiz data available</div>;

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
      <button className="submit-btn" onClick={handleSubmitQuiz}>Submit Quiz</button>
    </div>
  );
};

export default Quizzes;
