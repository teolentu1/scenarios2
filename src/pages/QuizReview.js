import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './QuizReview.css';
import { motion } from 'framer-motion';

const QuizReview = () => {
  const { filename } = useParams();
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEncouragement, setShowEncouragement] = useState(false);
  const bottomRef = useRef(null); // Reference to the bottom of the page
  const hasShownEncouragement = useRef(false); // Track if pop-up has been shown

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

  useEffect(() => {
    if (!quizData || !result) return;

    const percentage = (result.score / quizData.questions.length) * 100;
    if (percentage >= 30) return; // No need to set up observer if score ≥ 30%

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasShownEncouragement.current) {
          setShowEncouragement(true);
          hasShownEncouragement.current = true; // Mark as shown
          observer.disconnect(); // Prevent re-triggering
        }
      },
      { threshold: 0.9 } // Trigger when 90% of the bottom element is visible
    );

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, [quizData, result]);

  const handleDismiss = () => {
    setShowEncouragement(false);
  };

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
      <div ref={bottomRef} style={{ height: '1px' }} /> {/* Invisible trigger at bottom */}

      {showEncouragement && (
        <motion.div
          className="encouragement-popup"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p>Keep going! Every attempt helps you grow stronger in cybersecurity!</p>
          <button className="dismiss-btn" onClick={handleDismiss}>
            Got it!
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default QuizReview;