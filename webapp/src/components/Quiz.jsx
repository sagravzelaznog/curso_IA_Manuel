import { useState } from 'react';

const Quiz = ({ quizData, onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!quizData || quizData.length === 0) {
    return null;
  }

  const handleSelect = (questionId, optionIndex) => {
    if (submitted) return;
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < quizData.length) {
      alert('Por favor responde todas las preguntas.');
      return;
    }
    let newScore = 0;
    quizData.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
    if (onComplete) {
      onComplete(newScore);
    }
  };

  return (
    <div className="glass-card" style={{ marginTop: '48px' }}>
      <h2 style={{ marginBottom: '24px' }}>Cuestionario de la Sesión</h2>
      
      {quizData.map((q, i) => (
        <div key={q.id} style={{ marginBottom: '32px' }}>
          <h4 style={{ marginBottom: '16px' }}>{i + 1}. {q.question}</h4>
          <div>
            {q.options.map((opt, optIndex) => {
              const isSelected = answers[q.id] === optIndex;
              let className = 'quiz-option';
              if (isSelected) className += ' selected';
              if (submitted) {
                if (optIndex === q.correctAnswer) className += ' correct';
                else if (isSelected && optIndex !== q.correctAnswer) className += ' incorrect';
              }

              return (
                <div 
                  key={optIndex} 
                  className={className}
                  onClick={() => handleSelect(q.id, optIndex)}
                >
                  {opt}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button className="btn btn-primary" onClick={handleSubmit}>
          Enviar Respuestas
        </button>
      ) : (
        <div style={{ marginTop: '24px', padding: '16px', borderRadius: '8px', background: score >= 5 ? 'rgba(0, 255, 100, 0.1)' : 'rgba(255, 0, 0, 0.1)', color: score >= 5 ? 'var(--success)' : 'var(--error)' }}>
          <h3 style={{ margin: 0 }}>Tu puntuación: {score} / {quizData.length}</h3>
          <p>{score >= 5 ? '¡Excelente trabajo!' : 'Te sugerimos repasar la sesión e intentarlo de nuevo.'}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
