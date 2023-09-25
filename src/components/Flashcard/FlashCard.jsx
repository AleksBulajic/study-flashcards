import React, { useState } from 'react';
import './FlashCard.css';

function FlashCard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    console.log('isFlipped:', isFlipped);
  };

  return (
    <div className={`flashcard-container ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
      <div className="flashcard">
        <div className={`card ${isFlipped ? 'flipped' : ''}`}>
          <div className="card-front">
            <h2>Question</h2>
            <p>{question}</p>
          </div>
          <div className="card-back">
            <h2>Answer</h2>
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
