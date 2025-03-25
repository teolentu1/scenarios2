import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const QuizReview = () => {
  const { filename } = useParams();
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Load quiz data
        const response = await fetch(`/quizzes/${filename}`);
        if (!response.ok) throw new Error(`Failed to load quiz: ${filename}`);
        const data = await response.json();
        const normalizedData = Array.isArray(data)
          ? { title: filename.replace('.json', ''), questions: data }
          : data;
        setQuizData(normalizedData);

        // Load result from localStorage
        const storedResult = JSON.parse(localStorage.getItem(`quizResult_${filename}`));
        if (!storedResult) throw new Error('No quiz result found');
        setResult(storedResult);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [filename]);

  if (loading) return <div>Loading review...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!quizData || !quizData.questions || !result) return <div>No review data available</div>;

  return (
    <div className="quiz-container">
      <h1>{quizData.title} - Review</h1>
      <h2>Your Score: {result.score} / {quizData.questions.length}</h2>
      {quizData.questions.map((question, qIndex) => (
        <div key={qIndex} className="question-block">
          <h3>{question.question}</h3>
          <p className={result.answers[qIndex] === question.correctAnswer ? 'correct' : 'incorrect'}>
            Your Answer: {result.answers[qIndex] || 'Not answered'}{' '}
            {result.answers[qIndex] === question.correctAnswer ? '✅' : '❌'}
          </p>
          {result.answers[qIndex] !== question.correctAnswer && (
            <p className="correct">Correct Answer: {question.correctAnswer}</p>
          )}
        </div>
      ))}
      <button onClick={() => navigate(`/quiz/${filename}`)}>Retake Quiz</button>
    </div>
  );
};

export default QuizReview;